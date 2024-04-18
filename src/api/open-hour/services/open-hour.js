'use strict';

/**
 * open-hour service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::open-hour.open-hour');
