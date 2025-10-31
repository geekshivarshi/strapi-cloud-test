module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  http: {
    serverOptions: {
      timeout: 600000, // Set timeout to 10 minutes (600,000ms)
      headersTimeout: 600000, // Optional: also set headers timeout
      requestTimeout: 600000, // Optional: also set request timeout
    },
  }
});
