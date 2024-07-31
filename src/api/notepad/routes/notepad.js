'use strict';

/**
 * notepad router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::notepad.notepad');
