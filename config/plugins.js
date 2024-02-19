const fs = require("fs");
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        serviceAccount: {
          type: "service_account",
          project_id: env("GCS_PROJECT_ID"),
          private_key_id: env("GCS_PRIVATE_KEY_ID"),
          private_key: env("GCS_PRIVATE_KEY"),
          client_email: env("GCS_CLIENT_EMAIL"),
          client_id: env("GCS_CLIENT_ID"),
          auth_uri: env("GCS_AUTH_URL"),
          token_uri: env("GCS_TOKEN_URL"),
          auth_provider_x509_cert_url: env("GCS_AUTH_PROVIDER_CERT_URL"),
          client_x509_cert_url: env("GCS_CLIENT_CERT_URL"),
          universe_domain: env("GCS_UNIVERSAL_DOMAIN"),
        },
        bucketName: env("GCS_BUCKET_NAME"),
        uniform: true,
        publicFiles: true,
        baseUrl: env("GCS_BASE_URL"), // Optional: Base URL for accessing the files
        basepath: "",
        gzip: true,
        metadata: {
          cacheControl: "public, max-age=31536000",
        },
      },
    },
  },
});
