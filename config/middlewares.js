module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "img-src": ["'self'", "data:", "blob:", "storage.googleapis.com"],
          "media-src": ["'self'", "data:", "blob:", "storage.googleapis.com"],
          upgradeInsecureRequests: null,
          'script-src': ['https://cdn.ckeditor.com'],
          'connect-src': ["'self'", "https:", 'https://proxy-event.ckeditor.com'],
        },
      },
    },
  },
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '10mb',
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
];
