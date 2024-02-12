import type { Schema, Attribute } from '@strapi/strapi';

export interface WdwewewewewWewewewe extends Schema.Component {
  collectionName: 'components_wdwewewewew_wewewewes';
  info: {
    displayName: 'wewewewe';
  };
  attributes: {
    wewewew: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'wdwewewewew.wewewewe': WdwewewewewWewewewe;
    }
  }
}
