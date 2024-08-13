'use strict';

/**
 * forgot-password service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::forgot-password.forgot-password');
