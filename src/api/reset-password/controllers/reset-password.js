'use strict';

/**
 * reset-password controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::reset-password.reset-password');
