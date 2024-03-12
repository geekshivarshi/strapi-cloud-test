import type { Schema, Attribute } from '@strapi/strapi';

export interface BlockCatergory extends Schema.Component {
  collectionName: 'components_block_catergories';
  info: {
    displayName: 'category';
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

export interface BlockEcoCard extends Schema.Component {
  collectionName: 'components_block_eco_cards';
  info: {
    displayName: 'EcoCard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    heading: Attribute.String;
    content: Attribute.Component<'elements.list-item-with-image', true>;
  };
}

export interface BlockExploreRangeCards extends Schema.Component {
  collectionName: 'components_block_explore_range_cards';
  info: {
    displayName: 'ExploreRangeCard';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    buttonLink: Attribute.Component<'elements.link'> & Attribute.Required;
    badge: Attribute.Component<'elements.badge'> & Attribute.Required;
    cardImg: Attribute.Media;
    features: Attribute.Component<'elements.list-item-with-image', true>;
    cardUrl: Attribute.Component<'elements.link'>;
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

export interface BlockPageCover extends Schema.Component {
  collectionName: 'components_block_page_covers';
  info: {
    displayName: 'PageCover';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface BlockPageHeading extends Schema.Component {
  collectionName: 'components_block_page_headings';
  info: {
    displayName: 'PageHeading';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.String & Attribute.Required;
    image: Attribute.Media;
  };
}

export interface BlockPrintSos extends Schema.Component {
  collectionName: 'components_block_print_sos';
  info: {
    displayName: 'PrintSos';
    description: '';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    ContactLink: Attribute.Component<'elements.link', true> &
      Attribute.Required;
  };
}

export interface BlockProductSpecification extends Schema.Component {
  collectionName: 'components_block_product_specifications';
  info: {
    displayName: 'ProductSpecification';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.String & Attribute.Required;
    description: Attribute.Component<'elements.list-item-with-image', true>;
    coverImg: Attribute.Media & Attribute.Required;
    coverImgAlignment: Attribute.String;
  };
}

export interface ElementsBadge extends Schema.Component {
  collectionName: 'components_elements_badges';
  info: {
    displayName: 'Badge';
    description: '';
  };
  attributes: {
    type: Attribute.String & Attribute.Required;
    text: Attribute.String;
    image: Attribute.Media;
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
    description: '';
  };
  attributes: {
    name: Attribute.String;
    isUrl: Attribute.Boolean & Attribute.DefaultTo<true>;
    url: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ElementsListItemWithImage extends Schema.Component {
  collectionName: 'components_elements_list_item_with_images';
  info: {
    displayName: 'listItemWithImage';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.String & Attribute.Required;
    image: Attribute.Media;
  };
}

export interface ElementsNewImage extends Schema.Component {
  collectionName: 'components_elements_new_images';
  info: {
    displayName: 'NewImage';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    url: Attribute.String;
    isUrlExternal: Attribute.Boolean;
    alt: Attribute.String & Attribute.Required;
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

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block.catergory': BlockCatergory;
      'block.cta': BlockCta;
      'block.eco-card': BlockEcoCard;
      'block.explore-range-cards': BlockExploreRangeCards;
      'block.faq': BlockFaq;
      'block.page-cover': BlockPageCover;
      'block.page-heading': BlockPageHeading;
      'block.print-sos': BlockPrintSos;
      'block.product-specification': BlockProductSpecification;
      'elements.badge': ElementsBadge;
      'elements.image': ElementsImage;
      'elements.link': ElementsLink;
      'elements.list-item-with-image': ElementsListItemWithImage;
      'elements.new-image': ElementsNewImage;
      'elements.qa': ElementsQa;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
