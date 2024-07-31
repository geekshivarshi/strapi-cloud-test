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

export interface BlockChatToKaibot extends Schema.Component {
  collectionName: 'components_block_chat_to_kaibots';
  info: {
    displayName: 'chatToKaibot';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    headerImage: Attribute.Media;
    footerText: Attribute.String;
    points: Attribute.Component<'elements.bullet-points', true>;
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
    logoImage: Attribute.Media;
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

export interface BlockHereToHelp extends Schema.Component {
  collectionName: 'components_block_here_to_helps';
  info: {
    displayName: 'hereToHelp';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    leftImage: Attribute.Media;
    rightImage: Attribute.Media;
    description: Attribute.Component<'elements.bullet-points', true>;
  };
}

export interface BlockHowItWorkComponent extends Schema.Component {
  collectionName: 'components_block_how_it_work_components';
  info: {
    displayName: 'howItWorkComponent';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    steps: Attribute.Component<'elements.list-item-with-two-images', true>;
    buttonLink: Attribute.Component<'elements.link'>;
  };
}

export interface BlockHowItWorksStep extends Schema.Component {
  collectionName: 'components_block_how_it_works_steps';
  info: {
    displayName: 'howItWorksStep';
  };
  attributes: {
    heading: Attribute.String;
    content: Attribute.RichText;
    coverImg: Attribute.Media;
    coverImgAlignment: Attribute.String;
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

export interface BlockKaizenProcess extends Schema.Component {
  collectionName: 'components_block_kaizen_processes';
  info: {
    displayName: 'kaizenProcess';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    point1: Attribute.Text;
    point2: Attribute.Text;
    buttonLink: Attribute.Component<'elements.link'>;
    note1: Attribute.Text;
    note2: Attribute.Text;
    coverImgAlignment: Attribute.String;
    coverImage: Attribute.Media;
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

export interface BlockMyAccountCard extends Schema.Component {
  collectionName: 'components_block_my_account_cards';
  info: {
    displayName: 'MyAccountCard';
  };
  attributes: {
    heading: Attribute.String;
    headerImage: Attribute.Media;
    description: Attribute.Text;
    buttonLinks: Attribute.Component<'elements.link', true>;
  };
}

export interface BlockOpenHour extends Schema.Component {
  collectionName: 'components_block_open_hours';
  info: {
    displayName: 'openHour';
  };
  attributes: {
    heading: Attribute.String;
    points: Attribute.Component<'elements.bullet-points', true>;
    qa: Attribute.Component<'elements.qa', true>;
    headerImage: Attribute.Media;
  };
}

export interface BlockOrderSampleCard extends Schema.Component {
  collectionName: 'components_block_order_sample_cards';
  info: {
    displayName: 'OrderSampleCard';
  };
  attributes: {
    heading: Attribute.String;
    headerImage: Attribute.Media;
    points: Attribute.Component<'elements.bullet-points', true>;
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
    image: Attribute.Media;
    subHeading: Attribute.RichText;
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
    contactLink: Attribute.Component<'elements.link', true>;
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.String & Attribute.Required;
    coverImage: Attribute.Media;
    description: Attribute.RichText;
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
    images: Attribute.Media;
  };
}

export interface BlockProdSpecsListImageWithCoverImg extends Schema.Component {
  collectionName: 'components_block_prod_specs_list_image_with_cover_imgs';
  info: {
    displayName: 'ProdSpecsListItemWithCoverImg';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    coverImg: Attribute.Media;
    itemImage: Attribute.Media;
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
    displayName: 'ProductSpecsWithCarousel';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    coverImgAlignment: Attribute.String;
    content: Attribute.RichText;
    description: Attribute.Component<
      'block.prod-specs-list-image-with-cover-img',
      true
    >;
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
    description: Attribute.Component<'elements.list-item-with-image', true>;
    coverImg: Attribute.Media & Attribute.Required;
    coverImgAlignment: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface BlockTrackOrder extends Schema.Component {
  collectionName: 'components_block_track_orders';
  info: {
    displayName: 'TrackOrderCard';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    headerImage: Attribute.Media;
    points: Attribute.Component<'elements.bullet-points', true>;
    buttonLink: Attribute.Component<'elements.link'>;
  };
}

export interface BlockVideoSection extends Schema.Component {
  collectionName: 'components_block_video_sections';
  info: {
    displayName: 'videoSection';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    video: Attribute.Media;
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

export interface ElementsHeadingSection extends Schema.Component {
  collectionName: 'components_elements_heading_sections';
  info: {
    displayName: 'headingSection';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
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
    subHeading: Attribute.Text & Attribute.Required;
    image: Attribute.Media;
  };
}

export interface ElementsListItemWithTwoImages extends Schema.Component {
  collectionName: 'components_block_list_item_with_two_images';
  info: {
    displayName: 'listItemWithTwoImages';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    activeImage: Attribute.Media;
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
      'block.chat-to-kaibot': BlockChatToKaibot;
      'block.cta': BlockCta;
      'block.customer-reviews': BlockCustomerReviews;
      'block.eco-card': BlockEcoCard;
      'block.explore-categories': BlockExploreCategories;
      'block.explore-range-cards': BlockExploreRangeCards;
      'block.faq': BlockFaq;
      'block.here-to-help': BlockHereToHelp;
      'block.how-it-work-component': BlockHowItWorkComponent;
      'block.how-it-works-step': BlockHowItWorksStep;
      'block.insta-post-section': BlockInstaPostSection;
      'block.kaizen-process': BlockKaizenProcess;
      'block.landing-page-cover': BlockLandingPageCover;
      'block.my-account-card': BlockMyAccountCard;
      'block.open-hour': BlockOpenHour;
      'block.order-sample-card': BlockOrderSampleCard;
      'block.page-cover': BlockPageCover;
      'block.page-heading': BlockPageHeading;
      'block.partners': BlockPartners;
      'block.print-sos': BlockPrintSos;
      'block.print-with-kaizen': BlockPrintWithKaizen;
      'block.printspiration': BlockPrintspiration;
      'block.prod-specs-list-image-with-cover-img': BlockProdSpecsListImageWithCoverImg;
      'block.product-card-section': BlockProductCardSection;
      'block.product-specification-with-twosub-headings': BlockProductSpecificationWithTwosubHeadings;
      'block.product-specification': BlockProductSpecification;
      'block.track-order': BlockTrackOrder;
      'block.video-section': BlockVideoSection;
      'elements.advance-image': ElementsAdvanceImage;
      'elements.badge': ElementsBadge;
      'elements.bullet-points': ElementsBulletPoints;
      'elements.card-with-image-item': ElementsCardWithImageItem;
      'elements.card': ElementsCard;
      'elements.heading-section': ElementsHeadingSection;
      'elements.image': ElementsImage;
      'elements.link': ElementsLink;
      'elements.list-item-with-image': ElementsListItemWithImage;
      'elements.list-item-with-two-images': ElementsListItemWithTwoImages;
      'elements.new-image': ElementsNewImage;
      'elements.qa': ElementsQa;
      'elements.section': ElementsSection;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
