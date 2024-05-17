'use strict';

/**
 * order-sample service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::order-sample.order-sample');
