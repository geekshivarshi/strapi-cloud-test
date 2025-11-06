#!/usr/bin/env node

/**
 * Simple script to import products from backend API to Strapi using GraphQL mutations
 * 
 * This script:
 * 1. Fetches products from the external backend API
 * 2. Creates products in Strapi using GraphQL mutations
 * 3. Only creates products with name field for now (minimal approach)
 * 
 * Usage: node import-products-script.js
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

// Configuration
// TODO: fill these with actual values
const BACKEND_GRAPHQL_ENDPOINT = ""
const BACKEND_CLIENT_SECRET_KEY = ""


// Strapi configuration - update these based on your local setup
const STRAPI_ENDPOINT = 'http://localhost:1337/graphql';
const STRAPI_API_BASE = 'http://localhost:1337';
// TODO: fill this with actual value
const STRAPI_API_TOKEN = '';

// TODO: update here with actual icon ids ( for product info icon pointer )
const infoIconsMap = {
  'a411296d-681e-4ca5-93c5-66cb5fd9500d': 1,
  'ad7027e0-2ebf-4d44-b2b5-3e936d187030' : 1,
  'b2dd4c46-b248-4ad9-bc1f-12ff91377a42' : 1,
}

async function fetchProductsFromBackend() {
  console.log('📡 Fetching products from backend API...');
  
  const PRODUCTS_QUERY = `
    query GetProducts {
      product (order_by: {id: asc}, offset: 0,  limit: 150) {
        id
        name
        handle
        is_archived
        min_price
        max_price
        meta_description
        title_tag
        keywords
        seo_custom_json
        product_configurations(where: {is_recommended: {_eq: true}}) {
          product_pricings(where: {is_recommended: {_eq: true}}) {
            qty
            price
          }
        }
        product_media(order_by: {image_sequence: asc}) {
          file_metadata {
            id
            original_file_name
            download_url
            mime_type
            size
          }
        }
        product_icon {
          file_metadata {
            id
            original_file_name
            download_url
            mime_type
            size
          }
        }
        product_info {
          description
          pointer_heading
          help
          icon_pointers(order_by: {created_at: asc}) {
            id
            icon_id
            heading
            description
          }
        }
        product_faqs(order_by: {created_at: asc_nulls_last}) {
          question
          answer
        }
        product_specification {
          description
          help
          specification_pointers(order_by: {created_at: asc_nulls_last}) {
            description
          }
        }
        product_template {
          description
          template_designs {
            description
            fileMetadataByPdf {
              id
              original_file_name
              download_url
              mime_type
              size
            }
            fileMetadataByInDesign {
              id
              original_file_name
              download_url
              mime_type
              size
            }
          }
        }
      }
    }
  `;
  
  try {
    const response = await fetch(BACKEND_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'client-secret-key': BACKEND_CLIENT_SECRET_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: PRODUCTS_QUERY
      })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    
    if (result.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
    }
    
    const products = result.data.product;
    console.log(`✅ Successfully fetched ${products.length} products from backend`);
    
    return products;
    
  } catch (error) {
    console.error('❌ Error fetching products from backend:', error.message);
    throw error;
  }
}

async function createProductInStrapi(productData) {
  console.log(`🔄 Creating product in Strapi: ${productData.name}`);
  
  const CREATE_PRODUCT_MUTATION = `
    mutation CreateProduct($data: ProductInput!) {
      createProduct(data: $data) {
        data {
          id
          attributes {
            name
            createdAt
            updatedAt
            publishedAt
          }
        }
      }
    }
  `;
  
  try {

    const name = productData.name;

    // upload files to strapi media library
    const templateDesigns = await Promise.all(productData.product_template.template_designs.map(async template => {
      const pdfId = await uploadFileToStrapi(template.fileMetadataByPdf, `products/${name}`);
      const indesignId = await uploadFileToStrapi(template.fileMetadataByInDesign, `products/${name}`);
      return {
        ...template,
        pdf: pdfId,
        indesign: indesignId
      }
    }));

    const productMedia = await Promise.all(productData.product_media.map(async media => {
      const fileId = await uploadFileToStrapi(media.file_metadata, `products/${name}`);
      return {
        ...media,
        image: fileId
      }
    }));

    const productIcon = await uploadFileToStrapi(productData.product_icon ? productData.product_icon.file_metadata : null, `products/${name}`);

    const productStrapiData = {
      name: productData.name,
      customerUrl: productData.handle,
      isActive: !productData.is_archived,
      minPrice: productData.min_price,
      defaultPrice: parseFloat(productData.product_configurations?.[0]?.product_pricings?.[0]?.price) || 0,
      defaultQuantity: parseInt(productData.product_configurations?.[0]?.product_pricings?.[0]?.qty) || 0,
      productImages: {
        images: productMedia.map(media => media.image),
        rightIcon: productIcon,
        leftBannerText: '',
        leftBannerImage: null
      },
      info: {
        description: productData.product_info.description,
        needHelpText: productData.product_info.help,
        pointerHeading: productData.product_info.pointer_heading,
        pointers: productData.product_info.icon_pointers.map(pointer => ({
          iconImg: infoIconsMap[pointer.icon_id],
          textInBold: pointer.heading,
          explanation: pointer.description,
          mdText: `**${pointer.heading}**: ${pointer.description}`
        }))
      },
      specifications: {
        productSpecification: productData.product_specification.description,
        needHelpText: productData.product_specification.help,
        pointers: (productData.product_specification.specification_pointers || []).map(pointer => ({
          pointer: pointer.description
        }))
      },
      designTemplates: {
        headingParagraph: productData.product_template.description,
        templates: templateDesigns.map(template => ({
          explanation: template.description,
          pdf: template.pdf,
          indesign: template.indesign
        }))
      },
      faqs: productData.product_faqs?.map(faq => ({
        mdQuestion: faq.question,
        answer: faq.answer,
        question: faq.question
      })),
      publishedAt: new Date().toISOString(),
      seo: {
        metaDescription: productData.meta_description,
        metaTitle: productData.title_tag,
        keywords: productData.keywords,
        structuredData: productData.seo_custom_json
      }
    }

    const response = await fetch(STRAPI_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: CREATE_PRODUCT_MUTATION,
        variables: {
          data: productStrapiData,
        }
      }),
    });
    
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error(`Authentication failed! Check your API token. Status: ${response.status}`);
      } else if (response.status === 404) {
        throw new Error(`Strapi not found! Make sure Strapi is running on port 1337. Status: ${response.status}`);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }
    
    const result = await response.json();
    
    if (result.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
    }
    
    const createdProduct = result.data.createProduct.data;
    console.log(`✅ Successfully created product with ID: ${createdProduct.id}`);
    
    return createdProduct;
    
  } catch (error) {
    console.error(`❌ Error creating product "${productData.name}":`, error.message);
    throw error;
  }
}

/**
 * Upload file to Strapi media library
 * 
 * @param {Object} row - File row from database with fields: original_file_name, download_url, url, etc.
 * @param {string|null} destinationFolder - Optional folder path in Strapi media library
 * @returns {Promise<number>} The asset ID of the uploaded file
 * 
 * @example
 * const row = {
 *   id: 'uuid',
 *   original_file_name: 'image.jpg',
 *   download_url: 'https://example.com/image.jpg',
 *   mime_type: 'image/jpeg',
 *   size: 12345
 * };
 * const assetId = await uploadFileToStrapi(row, 'products/images');
 */
async function uploadFileToStrapi(row, destinationFolder = null) {
  if(!row) return null;
  console.log(`📤 Uploading file to Strapi: ${row.original_file_name}`);
  
  // Step 1: Check if file already exists in Strapi media library using GraphQL
  try {
    const fileName = row.original_file_name;
    console.log(`🔍 Checking for existing file: ${fileName}`);
    
    const CHECK_FILE_QUERY = `
      query CheckFile($name: String) {
        uploadFiles(filters: { name: { eq: $name } }) {
          data {
            id
            attributes {
              name
              hash
            }
          }
        }
      }
    `;
    
    const response = await fetch(STRAPI_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: CHECK_FILE_QUERY,
        variables: {
          name: fileName
        }
      })
    });
    
    if (!response.ok) {
      console.warn(`⚠️  Check API returned status ${response.status}`);
      const errorText = await response.text();
      console.warn(`Response: ${errorText}`);
    } else {
      const result = await response.json();
      
      if (result.errors) {
        console.warn(`⚠️  GraphQL errors: ${JSON.stringify(result.errors)}`);
      } else {
        const files = result?.data?.uploadFiles?.data || [];
        console.log(`📋 Check result summary: ${files.length} file(s) found`);
        
        // If file exists, return the asset ID
        if (files.length > 0) {
          const existingFile = files[0];
          const fileId = existingFile.id;
          console.log(`✅ File "${fileName}" already exists in media library with ID: ${fileId}`);
          return fileId;
        } else {
          console.log(`📝 File "${fileName}" not found in media library, will upload`);
        }
      }
    }
    
  } catch (error) {
    console.error('❌ Error checking existing files:', error.message);
    console.log('⚠️  Continuing to upload despite check error...');
  }
  
  // Step 2: Download the file
  console.log(`⬇️  Downloading file from: ${row.download_url}`);
  
  const tempDir = os.tmpdir();
  const tempFilePath = path.join(tempDir, row.original_file_name);
  
  try {
    const downloadResponse = await fetch(row.download_url || row.url);
    
    if (!downloadResponse.ok) {
      throw new Error(`Failed to download file: ${downloadResponse.status}`);
    }
    
    const buffer = await downloadResponse.arrayBuffer();
    fs.writeFileSync(tempFilePath, new Uint8Array(buffer));
    console.log(`✅ File downloaded to temp location`);
    
  } catch (error) {
    console.error('❌ Error downloading file:', error.message);
    throw error;
  }
  
  // Step 3: Upload file to Strapi
  console.log(`⬆️  Uploading file to Strapi media library...`);
  
  try {
    const formData = new FormData();
    const fileBuffer = fs.readFileSync(tempFilePath);
    const fileName = row.original_file_name;
    const mimeType = row.mime_type || 'application/octet-stream';
    
    // Create a Blob from the buffer (convert Buffer to Uint8Array for type compatibility)
    const blob = new Blob([new Uint8Array(fileBuffer)], { type: mimeType });
    
    formData.append('files', blob, fileName);
    
    if (destinationFolder) {
      formData.append('refId', destinationFolder);
      formData.append('path', destinationFolder);
    }
    
    const uploadUrl = `${STRAPI_API_BASE}/api/upload`;
    const uploadResponse = await fetch(uploadUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRAPI_API_TOKEN}`
      },
      body: formData
    });
    
    if (!uploadResponse.ok) {
      const errorText = await uploadResponse.text();
      throw new Error(`Upload failed with status ${uploadResponse.status}: ${errorText}`);
    }
    
    const uploadResult = await uploadResponse.json();
    
    if (uploadResult && uploadResult.length > 0) {
      const uploadedFile = uploadResult[0];
      
      // Clean up temp file after successful upload
      if (fs.existsSync(tempFilePath)) {
        fs.unlinkSync(tempFilePath);
        console.log(`✅ Temp file cleaned up`);
      }
      
      console.log(`✅ File uploaded successfully with ID: ${uploadedFile.id}`);
      return uploadedFile.id;
    } else {
      throw new Error('Upload response was empty');
    }
    
  } catch (error) {
    console.error('❌ Error uploading file:', error.message);
    
    // Clean up temp file on error
    if (fs.existsSync(tempFilePath)) {
      fs.unlinkSync(tempFilePath);
    }
    
    throw error;
  }
}

async function checkExistingProduct(productName) {
  console.log(`🔍 Checking if product "${productName}" already exists...`);
  
  const CHECK_PRODUCT_QUERY = `
    query CheckProduct($filters: ProductFiltersInput) {
      products(filters: $filters) {
        data {
          id
          attributes {
            name
          }
        }
      }
    }
  `;
  
  try {
    const response = await fetch(STRAPI_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: CHECK_PRODUCT_QUERY,
        variables: {
          filters: {
            name: {
              eq: productName
            }
          }
        }
      })
    });
    
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error(`Authentication failed! Check your API token. Status: ${response.status}`);
      } else if (response.status === 404) {
        throw new Error(`Strapi not found! Make sure Strapi is running on port 1337. Status: ${response.status}`);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }
    
    const result = await response.json();

    console.log(`🔍 Check result: ${JSON.stringify(result)}`);
    
    if (result.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
    }
    
    const existingProducts = result.data.products.data;
    return existingProducts.length > 0;
    
  } catch (error) {
    console.error(`❌ Error checking existing product:`, error.message);
    throw error;
  }
}

async function main() {
  console.log('🚀 Starting product import script...');
  console.log(`📡 Backend endpoint: ${BACKEND_GRAPHQL_ENDPOINT}`);
  console.log(`🏠 Strapi endpoint: ${STRAPI_ENDPOINT}`);
  
  try {
    // Step 1: Fetch products from backend
    const backendProducts = await fetchProductsFromBackend();
    
    if (!backendProducts || backendProducts.length === 0) {
      console.log('⚠️  No products found in backend response');
      return;
    }
    
    // Step 2: Process each product
    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;
    
    // Limit to first 5 products for testing
    const productsToProcess = backendProducts.slice(0, 10);
    
    for (const [index, productData] of productsToProcess.entries()) {
      try {
        console.log(`\n🔄 Processing product ${index + 1}/${productsToProcess.length}: ${productData.name}`);
        
        // Check if product already exists
        const exists = await checkExistingProduct(productData.name);
        
        if (exists) {
          console.log(`⚠️  Product "${productData.name}" already exists, skipping...`);
          skipCount++;
          continue;
        }
        
        // Create product in Strapi
        await createProductInStrapi(productData);
        successCount++;
        
      } catch (error) {
        console.error(`❌ Error processing product ${index + 1}:`, error.message);
        errorCount++;
      }
    }
    
    // Step 3: Summary
    console.log(`\n📊 Import Summary:`);
    console.log(`✅ Successfully created: ${successCount} products`);
    console.log(`⚠️  Skipped (duplicates): ${skipCount} products`);
    console.log(`❌ Failed: ${errorCount} products`);
    
    console.log('\n🎉 Product import script completed!');
    
  } catch (error) {
    console.error('❌ Script failed:', error.message);
    process.exit(1);
  }
}



// Run the script
if (require.main === module) {
  main();
}

module.exports = {
  fetchProductsFromBackend,
  createProductInStrapi,
  checkExistingProduct,
  uploadFileToStrapi,
  main
};
