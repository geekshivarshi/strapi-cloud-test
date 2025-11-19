#!/usr/bin/env node

/**
 * Script: Import one New Collection Page into Category using Strapi GraphQL
 *
 * - Reads a single entry from `new-collection-page`
 * - Creates a `category` entry with mapped fields
 * - Reuses existing media (no uploads) by referencing asset IDs
 * - Uses endpoint and token copied from import-products-script.js
 *
 * Usage examples:
 *   node import-new-collection-to-category.js --slug=my-collection
 *   node import-new-collection-to-category.js --id=13
 */

/* eslint-disable no-console */

// Config copied from import-products-script.js
const STRAPI_ENDPOINT = 'http://localhost:1337/graphql';
const STRAPI_API_BASE = 'http://localhost:1337';
// TODO: fill this with actual value
const STRAPI_API_TOKEN = '';

// No CLI args required in bulk mode

async function gql(query, variables = {}) {
  const res = await fetch(STRAPI_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`GraphQL HTTP ${res.status}: ${text}`);
  }
  const json = await res.json();
  if (json.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`);
  }
  return json.data;
}

function getSingleMediaId(node) {
  // Expects shape: { data: { id } } or null
  return node && node.data ? Number(node.data.id) : null;
}

function mapSeo(sourceSeo) {
  if (!sourceSeo) return null;
  const metaImageId = getSingleMediaId(sourceSeo.metaImage);
  const metaSocial = Array.isArray(sourceSeo.metaSocial?.data)
    ? sourceSeo.metaSocial.data.map((ms) => {
        const attrs = ms?.attributes || {};
        return {
          socialNetwork: attrs.socialNetwork || null,
          title: attrs.title || null,
          description: attrs.description || null,
          image: getSingleMediaId(attrs.image),
        };
      })
    : [];
  return {
    metaTitle: sourceSeo.metaTitle || null,
    metaDescription: sourceSeo.metaDescription || null,
    metaImage: metaImageId,
    metaSocial: metaSocial.filter(Boolean),
    keywords: sourceSeo.keywords || null,
    metaRobots: sourceSeo.metaRobots || null,
    structuredData: sourceSeo.structuredData || null,
    metaViewport: sourceSeo.metaViewport || null,
    canonicalURL: sourceSeo.canonicalURL || null,
  };
}

function mapPageCover(source) {
  if (!source) return null;
  return {
    heading: source.heading || '',
    desktopImage: getSingleMediaId(source.desktopImage),
    mobileImage: getSingleMediaId(source.mobileImage),
  };
}

function mapPageHeading(source) {
  if (!source) return null;
  return {
    heading: source.heading || '',
    subHeading: source.subHeading || null,
    image: getSingleMediaId(source.image),
  };
}


async function fetchAllNewCollectionPages() {
  const QUERY = `
    query ($pageSize: Int) {
      newCollectionPages(pagination: { page: 1, pageSize: $pageSize }, publicationState: PREVIEW) {
        data {
          id
          attributes {
            Name
            urlSlug
            pageCover { heading desktopImage { data { id } } mobileImage { data { id } } }
            pageHeading { heading subHeading image { data { id } } }
            exploreOurRange {
              exploreRangeCards {
                cardImg {
                  data {
                    id
                  }
                }
                title
                buttonLink {
                  url
                  name
                }
                badge {
                  data {
                    id
                  }
                }
                features {
                  image {
                    data {
                      id
                    }
                  }
                  subHeading
                  heading
                }
              }
            }
            seo {
              metaTitle
              metaDescription
              keywords
              metaRobots
              structuredData
              metaViewport
              canonicalURL
            }
          }
        }
      }
    }
  `;

  // Fetch all in a single call using a large pageSize
  // TODO: update this to fetch all the new collection pages
  const data = await gql(QUERY, { pageSize: 50 });
  return data.newCollectionPages?.data || [];
}

async function checkExistingCategory({ url, name }) {
  const CHECK = `
    query ($filters: CategoryFiltersInput) {
      categories(filters: $filters, publicationState: PREVIEW) {
        data { id attributes { url name } }
      }
    }
  `;
  const filters = url ? { url: { eq: url } } : { name: { eq: name } };
  const data = await gql(CHECK, { filters });
  return (data.categories?.data?.length || 0) > 0;
}

function normalizePath(url) {
  if (!url) return '';
  return String(url).trim().replace(/^\/+/, '');
}

async function findProductByCustomerUrl(url) {
  if (!url) return null;
  const normalized = `/${normalizePath(url)}`;
  const QUERY = `
    query ($filters: ProductFiltersInput, $pageSize: Int) {
      products(filters: $filters, pagination: { page: 1, pageSize: $pageSize }) {
        data { id attributes { name } }
      }
    }
  `;
  const filters = { customerUrl: { eq: normalized } };
  const data = await gql(QUERY, { filters, pageSize: 1 });
  const row = data.products?.data?.[0];
  if (!row) return null;
  return { id: Number(row.id), name: row.attributes?.name || null };
}

async function buildProductsAndOverridesFromExplore(explore) {
  const cards = explore?.exploreRangeCards || [];
  const productIds = [];
  const overrides = [];

  for (const card of cards) {
    const linkUrl = card?.buttonLink?.url || null;
    const linkText = card?.buttonLink?.name || null;
    const badgeId = getSingleMediaId(card?.badge);
    const cardImgId = getSingleMediaId(card?.cardImg);

    const pointers = Array.isArray(card?.features)
      ? card.features.map((f) => ({
          img: getSingleMediaId(f?.image),
          point: f?.subHeading || f?.heading || null,
        }))
      : [];

    const foundProduct = await findProductByCustomerUrl(linkUrl);
    if (foundProduct?.id) {
      productIds.push(foundProduct.id);
      overrides.push({
        product: foundProduct.id,
        name: foundProduct.name || null,
        linkText,
        rightIcon: badgeId,
        coverImage: cardImgId,
        pointers,
      });
    } else {
      overrides.push({
        url: linkUrl,
        name: card?.title || null,
        linkText,
        rightIcon: badgeId,
        coverImage: cardImgId,
        pointers,
      });
    }
  }

  // de-duplicate product IDs while preserving order
  const seen = new Set();
  const uniqueProductIds = productIds.filter((id) => (seen.has(id) ? false : (seen.add(id), true)));

  return { productIds: uniqueProductIds, overrides };
}

async function createCategory(mapped) {
  const MUTATION = `
    mutation ($data: CategoryInput!) {
      createCategory(data: $data) {
        data { id }
      }
    }
  `;
  const res = await gql(MUTATION, { data: mapped });
  return res.createCategory?.data?.id;
}

async function mapToCategoryInput(sourceNode) {
  const a = sourceNode.attributes || {};

  const name = a.Name || '';
  const url = a.urlSlug || '';
  const pageCover = mapPageCover(a.pageCover);
  const pageHeading = mapPageHeading(a.pageHeading);
  const seo = mapSeo(a.seo);

  const { productIds, overrides } = await buildProductsAndOverridesFromExplore(a.exploreOurRange);

  return {
    name,
    url,
    pageCover,
    pageHeading,
    products: productIds,
    productOverrides: overrides,
    seo,
    withGetAQuoteBanner: true,
  };
}

async function main() {
  console.log('➡️  Import ALL new-collection-page → category');
  console.log(`📍 Strapi: ${STRAPI_API_BASE}`);

  const sources = await fetchAllNewCollectionPages();
  if (!sources || sources.length === 0) {
    console.log('No new-collection-page rows found.');
    return;
  }

  console.log(`Found ${sources.length} new-collection-page rows`);

  let created = 0;
  let skipped = 0;
  let failed = 0;


  for (const node of sources) {
    const a = node.attributes || {};
    const label = `${a.Name || ''} (${a.urlSlug || ''})`;
    try {
      const input = await mapToCategoryInput(node);
      const exists = await checkExistingCategory({ url: input.url, name: input.name });
      if (exists) {
        console.log(`↩️  Skip existing: ${label}`);
        skipped += 1;
        continue;
      }
      const newId = await createCategory(input);
      console.log(`✅ Created category id=${newId} from ${label}`);
      created += 1;
    } catch (e) {
      console.error(`❌ Failed for ${label}: ${e.message}`);
      failed += 1;
    }
  }

  console.log(`\nSummary: created=${created}, skipped=${skipped}, failed=${failed}`);
}

if (require.main === module) {
  main().catch((err) => {
    console.error('❌ Failed:', err.message);
    process.exit(1);
  });
}

module.exports = {
  checkExistingCategory,
  createCategory,
  mapToCategoryInput,
  mapPageCover,
  mapPageHeading,
  mapSeo,
};


