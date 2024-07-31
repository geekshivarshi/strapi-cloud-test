'use strict';

/**
 * notepad service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::notepad.notepad');
