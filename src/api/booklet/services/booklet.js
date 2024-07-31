'use strict';

/**
 * booklet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::booklet.booklet');
