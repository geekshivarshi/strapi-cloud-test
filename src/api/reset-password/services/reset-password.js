'use strict';

/**
 * reset-password service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reset-password.reset-password');
