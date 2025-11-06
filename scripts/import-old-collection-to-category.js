#!/usr/bin/env node

/* eslint-disable no-console */

// Config copied from import-products-script.js
const STRAPI_ENDPOINT = 'http://localhost:1337/graphql';
const STRAPI_API_BASE = 'http://localhost:1337';
// TODO: fill this with actual value
const STRAPI_API_TOKEN = '';

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

function toSlug(value) {
  if (!value) return '';
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

async function fetchAllBusinessCards() {
  //TODO: update query here
  const QUERY = `
    query ($pageSize: Int) {
      oldCategoryPage:stickers(pagination: { page: 1, pageSize: $pageSize }) {
        data {
          id
          attributes {
            publishedAt
            pageCover { heading desktopImage { data { id } } mobileImage { data { id } } }
            pageHeading { heading subHeading image { data { id } } }
            exploreOurCategories: exploreOurRange {
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
            printPanic { heading subHeading QA { question answer } }
            printspiration { title heading images { data { id } } }
            productSpecifications {
              heading
              description { heading subHeading image { data { id } } }
              coverImg { data { id } }
              coverImgAlignment
              content
            }
            productSpecificationWithCarousal: stickerLabelBenefits {
              heading
              coverImgAlignment
              content
              description {
                heading
                subHeading
                coverImg {
                  data {
                    id
                  }
                }
                itemImage {
                  data {
                    id
                  }
                }
              }
            }
            ecoCard {
              title
              heading
              content { heading subHeading image { data { id } } }
              coverImage { data { id } }
              mobileCoverImage { data { id } }
              logoImage { data { id } }
              buttonLink { name isUrl url isExternal icon { data { id } } }
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

  const data = await gql(QUERY, { pageSize: 50 });
  return data.oldCategoryPage?.data || [];
}

function mapEcoCardToDZ(eco) {
  if (!eco) return null;
  return {
    __component: 'block.eco-card',
    __typename: 'ComponentBlockEcoCard',
    title: eco.title || null,
    heading: eco.heading || null,
    content: Array.isArray(eco.content)
      ? eco.content.map((item) => ({
          heading: item?.heading || null,
          subHeading: item?.subHeading || null,
          image: getSingleMediaId(item?.image),
        }))
      : [],
    coverImage: getSingleMediaId(eco.coverImage),
    mobileCoverImage: getSingleMediaId(eco.mobileCoverImage),
    logoImage: getSingleMediaId(eco.logoImage),
    buttonLink: eco.buttonLink
      ? {
          name: eco.buttonLink.name || null,
          isUrl: eco.buttonLink.isUrl ?? true,
          url: eco.buttonLink.url || null,
          isExternal: eco.buttonLink.isExternal ?? false,
          icon: getSingleMediaId(eco.buttonLink.icon),
        }
      : null,
  };
}

function mapFaqToDZ(faq) {
  if (!faq) return null;
  return {
    __component: 'block.faq',
    __typename: 'ComponentBlockFaq',
    heading: faq.heading || '',
    subHeading: faq.subHeading || null,
    QA: Array.isArray(faq.QA)
      ? faq.QA.map((qa) => ({
          question: qa?.question || '',
          answer: qa?.answer || '',
        }))
      : [],
  };
}

function mapPrintspirationToDZ(ps) {
  if (!ps) return null;
  return {
    __component: 'block.printspiration',
    __typename: 'ComponentBlockPrintspiration',
    title: ps.title || null,
    heading: ps.heading || null,
    images: Array.isArray(ps.images?.data)
      ? ps.images.data.map((img) => Number(img?.id)).filter(Boolean)
      : [],
  };
}

function mapProductSpecificationsToDZ(specs) {
  if (!Array.isArray(specs) || specs.length === 0) return [];
  return specs.map((sp) => ({
    __component: 'block.product-specification',
    __typename: 'ComponentBlockProductSpecification',
    heading: sp.heading || '',
    description: Array.isArray(sp.description)
      ? sp.description.map((d) => ({
          heading: d?.heading || null,
          subHeading: d?.subHeading || null,
          image: getSingleMediaId(d?.image),
        }))
      : [],
    coverImg: getSingleMediaId(sp.coverImg),
    coverImgAlignment: sp.coverImgAlignment || null,
    content: sp.content || null,
  }));
}

function mapProductSpecificationWithCarousalToDZ(spec) {
  if (!spec) return null;
  return {
    __component: 'block.product-specification-with-twosub-headings',
    __typename: 'ComponentBlockProductSpecificationWithTwosubHeadings',
    heading: spec.heading || null,
    coverImgAlignment: spec.coverImgAlignment || null,
    content: spec.content || null,
    description: Array.isArray(spec.description)
      ? spec.description.map((d) => ({
          heading: d?.heading || null,
          subHeading: d?.subHeading || null,
          coverImg: getSingleMediaId(d?.coverImg),
          itemImage: getSingleMediaId(d?.itemImage),
        }))
      : [],
  };
}

function buildBottomBlocks(a) {
  const blocks = [];
  const eco = mapEcoCardToDZ(a.ecoCard);
  if (eco) blocks.push(eco);
  const faq = mapFaqToDZ(a.printPanic);
  if (faq) blocks.push(faq);
  const ps = mapPrintspirationToDZ(a.printspiration);
  if (ps) blocks.push(ps);
  const specs = mapProductSpecificationsToDZ(a.productSpecifications);
  if (specs.length > 0) blocks.push(...specs);
  const specWithCarousal = mapProductSpecificationWithCarousalToDZ(a.productSpecificationWithCarousal);
  if (specWithCarousal) blocks.push(specWithCarousal);
  return blocks;
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

async function createCategory(mapped) {
  console.log('mapped', JSON.stringify(mapped, null, 2));
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

function normalizePath(url) {
  if (!url) return '';
  return String(url).trim().replace(/^\/+/, '');
}

async function findProductByCustomerUrl(url) {
  if (!url) return null;
  const normalized = normalizePath(url);
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

async function mapToCategoryInput(sourceNode) {
  const a = sourceNode.attributes || {};

  const pageCover = mapPageCover(a.pageCover);
  const pageHeading = mapPageHeading(a.pageHeading);
  const seo = mapSeo(a.seo);
  const bottomBlocks = buildBottomBlocks(a);

  const { productIds, overrides } = await buildProductsAndOverridesFromExplore(a.exploreOurCategories);

  //TODO: update here
  const derivedName = 'Stickers and Labels' //(a.pageHeading && a.pageHeading.heading) ? a.pageHeading.heading : 'Posters';
  const url = '/stickers';//+ toSlug(derivedName);

  return {
    name: derivedName,
    url,
    pageCover,
    pageHeading,
    bottomBlocks,
    products: productIds,
    productOverrides: overrides,
    seo,
    publishedAt: a.publishedAt,
  };
}

async function main() {
  console.log('➡️  Import ALL business-card → category');
  console.log(`📍 Strapi: ${STRAPI_API_BASE}`);

  const sources = await fetchAllBusinessCards();
  if (!sources || sources.length === 0) {
    console.log('No business-card rows found.');
    return;
  }

  console.log(`Found ${sources.length} business-card rows`);

  let created = 0;
  let skipped = 0;
  let failed = 0;

  for (const node of sources) {
    const a = node.attributes || {};
    //TODO: update here
    const label = 'Stickers and Labels'; //`${a.pageHeading?.heading || 'Booklets'}`;
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
