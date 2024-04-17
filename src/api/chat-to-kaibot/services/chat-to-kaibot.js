'use strict';

/**
 * chat-to-kaibot service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chat-to-kaibot.chat-to-kaibot');
