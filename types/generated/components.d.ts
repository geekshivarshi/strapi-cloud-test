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
    heading: Attribute.String;
    image: Attribute.Media;
    subHeading: Attribute.String;
    inputs: Attribute.JSON;
  };
}

export interface BlockCustomerReviews extends Schema.Component {
  collectionName: 'components_block_customer_reviews';
  info: {
    displayName: 'customerReviews';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    customerName: Attribute.Component<'elements.list-item-with-image'>;
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
    coverImage: Attribute.Media;
    buttonLink: Attribute.Component<'elements.link'>;
    mobileCoverImage: Attribute.Media;
  };
}

export interface BlockExploreCategories extends Schema.Component {
  collectionName: 'components_block_explore_categories';
  info: {
    displayName: 'ExploreCategories';
    icon: 'cube';
  };
  attributes: {
    heading: Attribute.String;
    headingImage: Attribute.Media;
    topImage: Attribute.Media;
    card: Attribute.Component<'elements.card', true>;
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

export interface BlockInstaPostSection extends Schema.Component {
  collectionName: 'components_block_insta_post_sections';
  info: {
    displayName: 'instaPostSection';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    instagramLink: Attribute.Component<'elements.link'>;
    images: Attribute.Component<'elements.advance-image', true>;
  };
}

export interface BlockLandingPageCover extends Schema.Component {
  collectionName: 'components_block_landing_page_covers';
  info: {
    displayName: 'LandingPageCover';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.String;
    coverImg: Attribute.Media;
    productLinks: Attribute.Component<'elements.link', true>;
    coverImgMobile: Attribute.Media;
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
    desktopImage: Attribute.Media & Attribute.Required;
    mobileImage: Attribute.Media & Attribute.Required;
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

export interface BlockPartners extends Schema.Component {
  collectionName: 'components_block_partners';
  info: {
    displayName: 'Partners';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.String;
    logos: Attribute.Component<'elements.new-image', true>;
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
    contactLink: Attribute.Component<'elements.link', true> &
      Attribute.Required;
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.String & Attribute.Required;
    coverImage: Attribute.Media;
  };
}

export interface BlockPrintWithKaizen extends Schema.Component {
  collectionName: 'components_block_print_with_kaizens';
  info: {
    displayName: 'printWithKaizen';
  };
  attributes: {
    heading: Attribute.String;
    specifications: Attribute.Component<'elements.list-item-with-image', true>;
  };
}

export interface BlockPrintspiration extends Schema.Component {
  collectionName: 'components_block_printspirations';
  info: {
    displayName: 'printspiration';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    heading: Attribute.String;
    images: Attribute.Component<'elements.image', true>;
  };
}

export interface BlockProductCardSection extends Schema.Component {
  collectionName: 'components_block_product_card_section';
  info: {
    displayName: 'productCardSection';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.String;
    description: Attribute.String;
    exploreRangeCards: Attribute.Component<'block.explore-range-cards', true>;
    headerImage: Attribute.Media;
  };
}

export interface BlockProductSpecificationWithTwosubHeadings
  extends Schema.Component {
  collectionName: 'components_block_product_specs_with_two_sub_headings';
  info: {
    displayName: 'ProductSpecsWithTwoSubHeadings';
  };
  attributes: {
    heading: Attribute.String;
    subHeading1: Attribute.Text;
    subHeading2: Attribute.Text;
    coverImg: Attribute.Media;
    coverImgAlignment: Attribute.String;
    description: Attribute.Component<'elements.list-item-with-image', true>;
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

export interface ElementsAdvanceImage extends Schema.Component {
  collectionName: 'components_elements_advance_images';
  info: {
    displayName: 'advanceImage';
  };
  attributes: {
    image: Attribute.Media;
    type: Attribute.Enumeration<['reel', 'multiple-images', 'image']>;
    imageUrl: Attribute.Component<'elements.link'>;
  };
}

export interface ElementsBadge extends Schema.Component {
  collectionName: 'components_elements_badges';
  info: {
    displayName: 'Badge';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    image: Attribute.Media;
    type: Attribute.Enumeration<['banner', 'icon', 'none']>;
  };
}

export interface ElementsBulletPoints extends Schema.Component {
  collectionName: 'components_elements_bullet_points';
  info: {
    displayName: 'Bullet Points';
    icon: 'bulletList';
  };
  attributes: {
    point: Attribute.Text;
  };
}

export interface ElementsCardWithImageItem extends Schema.Component {
  collectionName: 'components_elements_card_with_image_items';
  info: {
    displayName: 'CardWithImageItem';
    icon: 'picture';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.String;
    listItem: Attribute.Component<'elements.list-item-with-image', true>;
    headerImage: Attribute.Media;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.String;
    content: Attribute.Text;
    headerImage: Attribute.Component<'elements.new-image'>;
    backgroundImage: Attribute.Component<'elements.new-image'>;
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
    icon: Attribute.Media;
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
    answer: Attribute.RichText;
  };
}

export interface ElementsSection extends Schema.Component {
  collectionName: 'components_elements_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.String;
    points: Attribute.Component<'elements.bullet-points', true>;
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
      'block.customer-reviews': BlockCustomerReviews;
      'block.eco-card': BlockEcoCard;
      'block.explore-categories': BlockExploreCategories;
      'block.explore-range-cards': BlockExploreRangeCards;
      'block.faq': BlockFaq;
      'block.insta-post-section': BlockInstaPostSection;
      'block.landing-page-cover': BlockLandingPageCover;
      'block.page-cover': BlockPageCover;
      'block.page-heading': BlockPageHeading;
      'block.partners': BlockPartners;
      'block.print-sos': BlockPrintSos;
      'block.print-with-kaizen': BlockPrintWithKaizen;
      'block.printspiration': BlockPrintspiration;
      'block.product-card-section': BlockProductCardSection;
      'block.product-specification-with-twosub-headings': BlockProductSpecificationWithTwosubHeadings;
      'block.product-specification': BlockProductSpecification;
      'elements.advance-image': ElementsAdvanceImage;
      'elements.badge': ElementsBadge;
      'elements.bullet-points': ElementsBulletPoints;
      'elements.card-with-image-item': ElementsCardWithImageItem;
      'elements.card': ElementsCard;
      'elements.image': ElementsImage;
      'elements.link': ElementsLink;
      'elements.list-item-with-image': ElementsListItemWithImage;
      'elements.new-image': ElementsNewImage;
      'elements.qa': ElementsQa;
      'elements.section': ElementsSection;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
