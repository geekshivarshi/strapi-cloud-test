'use strict';

/**
 * get-a-quote controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::get-a-quote.get-a-quote');
