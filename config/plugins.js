const fs = require("fs");
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "@strapi-community/strapi-provider-upload-google-cloud-storage",
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
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: false,
      defaultLimit: 20,
      showCrud: true,
      maxLimit: 200,
      generateArtifacts: true,
      artifacts: {
        schema: true,
        typegen: true,
      },
      apolloServer: {
        tracing: true,
      },
    },
  },
  seo: {
    enabled: true,
  },
  "preview-button": {
    config: {
      contentTypes: [
        {
          uid: "api::landing.landing",
          draft: {
            url: env("KAIZENPRINT_STAGING_URL") + "/api/preview", // kaizenprint staging url
            query: {
              type: "page",
              slug: "landing",
              secret: env("STRAPI_PREVIEW_SECRET"),
            },
            openTarget: "_blank",
            alwaysVisible: true,
          },
          published: {
            url: env("KAIZENPRINT_PROD_URL"), // kaizenprint prod url
            openTarget: "_blank",
          },
        },
        {
          uid: "api::business-card.business-card",
          draft: {
            url: env("KAIZENPRINT_STAGING_URL") + "/api/preview",
            query: {
              type: "page",
              slug: "business-cards",
              secret: env("STRAPI_PREVIEW_SECRET"),
            },
            openTarget: "_blank",
            alwaysVisible: true,
          },
          published: {
            url: env("KAIZENPRINT_PROD_URL") + "/{slug}",
            openTarget: "_blank",
          },
        },
        {
          uid: "api::banner-and-signage.banner-and-signage",
          draft: {
            url: env("KAIZENPRINT_STAGING_URL") + "/api/preview",
            query: {
              type: "page",
              slug: "banner-and-signage",
              secret: env("STRAPI_PREVIEW_SECRET"),
            },
            openTarget: "_blank",
            alwaysVisible: true,
          },
          published: {
            url: env("KAIZENPRINT_PROD_URL") + "/{slug}",
            openTarget: "_blank",
          },
        },
        {
          uid: "api::cookie-policy.cookie-policy",
          draft: {
            url: env("KAIZENPRINT_STAGING_URL") + "/api/preview",
            query: {
              type: "page",
              slug: "cookie-policy",
              secret: env("STRAPI_PREVIEW_SECRET"),
            },
            openTarget: "_blank",
            alwaysVisible: true,
          },
          published: {
            url: env("KAIZENPRINT_PROD_URL") + "/{slug}",
            openTarget: "_blank",
          },
        },
        {
          uid: "api::faq-page.faq-page",
          draft: {
            url: env("KAIZENPRINT_STAGING_URL") + "/api/preview",
            query: {
              type: "page",
              slug: "faq",
              secret: env("STRAPI_PREVIEW_SECRET"),
            },
            openTarget: "_blank",
            alwaysVisible: true,
          },
          published: {
            url: env("KAIZENPRINT_PROD_URL") + "/{slug}",
            openTarget: "_blank",
          },
        },
        {
          uid: "api::flyers-folded-leaflet.flyers-folded-leaflet",
          draft: {
            url: env("KAIZENPRINT_STAGING_URL") + "/api/preview",
            query: {
              type: "page",
              slug: "flyers-and-leaflets",
              secret: env("STRAPI_PREVIEW_SECRET"),
            },
            openTarget: "_blank",
            alwaysVisible: true,
          },
          published: {
            url: env("KAIZENPRINT_PROD_URL") + "/{slug}",
            openTarget: "_blank",
          },
        },
        {
          uid: "api::how-it-work.how-it-work",
          draft: {
            url: env("KAIZENPRINT_STAGING_URL") + "/api/preview",
            query: {
              type: "page",
              slug: "how-it-works",
              secret: env("STRAPI_PREVIEW_SECRET"),
            },
            openTarget: "_blank",
            alwaysVisible: true,
          },
          published: {
            url: env("KAIZENPRINT_PROD_URL") + "/{slug}",
            openTarget: "_blank",
          },
        },
        {
          uid: "api::kaizen-eco-range.kaizen-eco-range",
          draft: {
            url: env("KAIZENPRINT_STAGING_URL") + "/api/preview",
            query: {
              type: "page",
              slug: "eco-range",
              secret: env("STRAPI_PREVIEW_SECRET"),
            },
            openTarget: "_blank",
            alwaysVisible: true,
          },
          published: {
            url: env("KAIZENPRINT_PROD_URL") + "/{slug}",
            openTarget: "_blank",
          },
        },
        {
          uid: "api::kaizen-promise.kaizen-promise",
          draft: {
            url: env("KAIZENPRINT_STAGING_URL") + "/api/preview",
            query: {
              type: "page",
              slug: "kaizen-promise",
              secret: env("STRAPI_PREVIEW_SECRET"),
            },
            openTarget: "_blank",
            alwaysVisible: true,
          },
          published: {
            url: env("KAIZENPRINT_PROD_URL") + "/{slug}",
            openTarget: "_blank",
          },
        },
        {
          uid: "api::marketing-and-promo.marketing-and-promo",
          draft: {
            url: env("KAIZENPRINT_STAGING_URL") + "/api/preview",
            query: {
              type: "page",
              slug: "marketing-and-promo",
              secret: env("STRAPI_PREVIEW_SECRET"),
            },
            openTarget: "_blank",
            alwaysVisible: true,
          },
          published: {
            url: env("KAIZENPRINT_PROD_URL") + "/{slug}",
            openTarget: "_blank",
          },
        },
        {
          uid: "api::payment-method.payment-method",
          draft: {
            url: env("KAIZENPRINT_STAGING_URL") + "/api/preview",
            query: {
              type: "page",
              slug: "payment-methods",
              secret: env("STRAPI_PREVIEW_SECRET"),
            },
            openTarget: "_blank",
            alwaysVisible: true,
          },
          published: {
            url: env("KAIZENPRINT_PROD_URL") + "/{slug}",
            openTarget: "_blank",
          },
        },
        {
          uid: "api::poster.poster",
          draft: {
            url: env("KAIZENPRINT_STAGING_URL") + "/api/preview",
            query: {
              type: "page",
              slug: "poster",
              secret: env("STRAPI_PREVIEW_SECRET"),
            },
            openTarget: "_blank",
            alwaysVisible: true,
          },
          published: {
            url: env("KAIZENPRINT_PROD_URL") + "/{slug}",
            openTarget: "_blank",
          },
        },
        {
          uid: "api::privacy-policy.privacy-policy",
          draft: {
            url: env("KAIZENPRINT_STAGING_URL") + "/api/preview",
            query: {
              type: "page",
              slug: "privacy-policy",
              secret: env("STRAPI_PREVIEW_SECRET"),
            },
            openTarget: "_blank",
            alwaysVisible: true,
          },
          published: {
            url: env("KAIZENPRINT_PROD_URL") + "/{slug}",
            openTarget: "_blank",
          },
        },
        {
          uid: "api::quick-print-buy.quick-print-buy",
          draft: {
            url: env("KAIZENPRINT_STAGING_URL") + "/api/preview",
            query: {
              type: "page",
              slug: "quickbuy",
              secret: env("STRAPI_PREVIEW_SECRET"),
            },
            openTarget: "_blank",
            alwaysVisible: true,
          },
          published: {
            url: env("KAIZENPRINT_PROD_URL") + "/{slug}",
            openTarget: "_blank",
          },
        },
        {
          uid: "api::stationary-and-office.stationary-and-office",
          draft: {
            url: env("KAIZENPRINT_STAGING_URL") + "/api/preview",
            query: {
              type: "page",
              slug: "stationery-and-office",
              secret: env("STRAPI_PREVIEW_SECRET"),
            },
            openTarget: "_blank",
            alwaysVisible: true,
          },
          published: {
            url: env("KAIZENPRINT_PROD_URL") + "/{slug}",
            openTarget: "_blank",
          },
        },
        {
          uid: "api::sticker.sticker",
          draft: {
            url: env("KAIZENPRINT_STAGING_URL") + "/api/preview",
            query: {
              type: "page",
              slug: "stickers",
              secret: env("STRAPI_PREVIEW_SECRET"),
            },
            openTarget: "_blank",
            alwaysVisible: true,
          },
          published: {
            url: env("KAIZENPRINT_PROD_URL") + "/{slug}",
            openTarget: "_blank",
          },
        },
        {
          uid: "api::terms-and-condition.terms-and-condition",
          draft: {
            url: env("KAIZENPRINT_STAGING_URL") + "/api/preview",
            query: {
              type: "page",
              slug: "terms-and-conditions",
              secret: env("STRAPI_PREVIEW_SECRET"),
            },
            openTarget: "_blank",
            alwaysVisible: true,
          },
          published: {
            url: env("KAIZENPRINT_PROD_URL") + "/{slug}",
            openTarget: "_blank",
          },
        },
      ],
    },
  },
});
