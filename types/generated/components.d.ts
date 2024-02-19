import type { Schema, Attribute } from '@strapi/strapi';

export interface BlockCatergory extends Schema.Component {
  collectionName: 'components_block_catergories';
  info: {
    displayName: 'catergory';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    link: Attribute.Component<'elements.link', true>;
  };
}

export interface BlockCta extends Schema.Component {
  collectionName: 'components_block_ctas';
  info: {
    displayName: 'CTA';
    description: '';
  };
  attributes: {
    img: Attribute.Component<'elements.image'>;
    heading: Attribute.String;
  };
}

export interface BlockFaq extends Schema.Component {
  collectionName: 'components_block_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.String;
    QA: Attribute.Component<'elements.qa', true>;
  };
}

export interface ElementsImage extends Schema.Component {
  collectionName: 'components_elements_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    src: Attribute.String & Attribute.Required;
    alt: Attribute.String & Attribute.Required;
    isLink: Attribute.Boolean & Attribute.DefaultTo<false>;
    url: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ElementsLink extends Schema.Component {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    name: Attribute.String;
    isUrl: Attribute.Boolean & Attribute.DefaultTo<true>;
    url: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ElementsQa extends Schema.Component {
  collectionName: 'components_elements_qas';
  info: {
    displayName: 'QA';
    description: '';
  };
  attributes: {
    question: Attribute.String & Attribute.Required;
    answer: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block.catergory': BlockCatergory;
      'block.cta': BlockCta;
      'block.faq': BlockFaq;
      'elements.image': ElementsImage;
      'elements.link': ElementsLink;
      'elements.qa': ElementsQa;
    }
  }
}
