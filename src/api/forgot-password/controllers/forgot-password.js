'use strict';

/**
 * forgot-password controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::forgot-password.forgot-password');
