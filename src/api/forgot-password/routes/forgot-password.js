'use strict';

/**
 * forgot-password router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::forgot-password.forgot-password');
