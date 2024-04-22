'use strict';

/**
 * get-a-quote service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::get-a-quote.get-a-quote');
