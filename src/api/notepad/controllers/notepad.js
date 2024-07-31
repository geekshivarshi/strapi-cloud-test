'use strict';

/**
 * notepad controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::notepad.notepad');
