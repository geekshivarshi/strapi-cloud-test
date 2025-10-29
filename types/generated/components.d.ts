import type { Schema, Attribute } from '@strapi/strapi';

export interface BlockCanvaArtworkStep extends Schema.Component {
  collectionName: 'components_block_canva_artwork_steps';
  info: {
    displayName: 'CanvaArtworkStep';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    Image: Attribute.Media;
    subHeading: Attribute.String;
  };
}

export interface BlockCanvaPrintSos extends Schema.Component {
  collectionName: 'components_block_canva_print_sos';
  info: {
    displayName: 'CanvaPrintSos';
    description: '';
  };
  attributes: {
    Heading: Attribute.Text;
    subheading: Attribute.Text;
    buttonText: Attribute.String;
    url: Attribute.String;
    coverImage: Attribute.Media;
  };
}

export interface BlockCategoryProductOverrides extends Schema.Component {
  collectionName: 'components_block_category_product_overrides';
  info: {
    displayName: 'category - productOverrides';
    description: '';
  };
  attributes: {
    product: Attribute.Relation<
      'block.category-product-overrides',
      'oneToOne',
      'api::product.product'
    >;
    coverImage: Attribute.Media;
    rightIcon: Attribute.Media;
    leftBannerImage: Attribute.Media;
    leftBannerText: Attribute.String;
    linkText: Attribute.String;
    pointers: Attribute.Component<
      'block.product-collection-page-pointers',
      true
    >;
    url: Attribute.String;
  };
}

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
    banner: Attribute.Component<'elements.badge'>;
    cardImg: Attribute.Media;
    features: Attribute.Component<'elements.list-item-with-image', true>;
    product_id: Attribute.BigInteger;
    badge: Attribute.Media;
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

export interface BlockHeaderNavigationLinks extends Schema.Component {
  collectionName: 'components_block_header_navigation_links';
  info: {
    displayName: 'Header - navigationLinks';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
    bannerText: Attribute.String;
    bannerImage: Attribute.Media;
  };
}

export interface BlockHeaderNavigation extends Schema.Component {
  collectionName: 'components_block_header_navigations';
  info: {
    displayName: 'Header - Navigation';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
    withSubMenu: Attribute.Boolean & Attribute.DefaultTo<false>;
    subMenu: Attribute.Component<'block.header-sub-menu', true>;
    subMenuButtons: Attribute.Component<'block.header-sub-menu-buttons', true>;
  };
}

export interface BlockHeaderSubMenuButtons extends Schema.Component {
  collectionName: 'components_block_header_sub_menu_buttons';
  info: {
    displayName: 'Header - subMenuButtons';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.Text;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    icon: Attribute.Media;
    buttonType: Attribute.Enumeration<['primary', 'secondary', 'outline']>;
  };
}

export interface BlockHeaderSubMenuSections extends Schema.Component {
  collectionName: 'components_block_header_sub_menu_sections';
  info: {
    displayName: 'Header - subMenuSections';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    name: Attribute.String;
    banner: Attribute.Component<'elements.badge'>;
    links: Attribute.Component<'block.header-navigation-links', true>;
    subMenuSectionId: Attribute.String & Attribute.Required;
    showImage: Attribute.Boolean & Attribute.DefaultTo<true>;
    headerLink: Attribute.Component<'elements.url'>;
  };
}

export interface BlockHeaderSubMenu extends Schema.Component {
  collectionName: 'components_block_header_sub_menus';
  info: {
    displayName: 'Header - subMenu';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    icon: Attribute.Media;
    isVisible: Attribute.Boolean & Attribute.DefaultTo<true>;
    sectionIds: Attribute.JSON;
    highlightProductImg: Attribute.Media;
    highlightProductName: Attribute.String;
    highlightProductBannerImg: Attribute.Media;
    highlightProductBannerText: Attribute.String;
    highlightProductCTAText: Attribute.String;
    highlightProductCTAUrl: Attribute.String;
    showSubMenuSectionImages: Attribute.Boolean & Attribute.DefaultTo<true>;
    linkToUrl: Attribute.String;
    isLinkUrlExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface BlockHeaderTopHeader extends Schema.Component {
  collectionName: 'components_block_header_top_headers';
  info: {
    displayName: 'Header - topHeader';
    description: '';
  };
  attributes: {
    offerText: Attribute.String;
    offerCode: Attribute.String;
    showGoogleReviews: Attribute.Boolean & Attribute.DefaultTo<true>;
    showTopHeader: Attribute.Boolean & Attribute.DefaultTo<true>;
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

export interface BlockLandingHeroCard extends Schema.Component {
  collectionName: 'components_block_landing_hero_cards';
  info: {
    displayName: 'Landing - heroCard';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String;
    title: Attribute.String;
    subTitle: Attribute.Text;
    bgColor: Attribute.String;
    image: Attribute.Media;
    link: Attribute.Component<'elements.url'>;
    metaTitleSizeInPx: Attribute.Component<'elements.responsive-size-input'>;
    titleSizePx: Attribute.Component<'elements.responsive-size-input'>;
    subTitleSizePx: Attribute.Component<'elements.responsive-size-input'>;
    metaTitleColor: Attribute.Component<'elements.color'>;
    titleColor: Attribute.Component<'elements.color'>;
    subTitleColor: Attribute.Component<'elements.color'>;
  };
}

export interface BlockLandingHero extends Schema.Component {
  collectionName: 'components_block_landing_hero_s';
  info: {
    displayName: 'Landing - Hero ';
  };
  attributes: {
    cards: Attribute.Component<'block.landing-hero-card', true>;
    properties: Attribute.Component<'elements.text-and-image', true>;
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
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    specifications: Attribute.Component<'elements.list-item-with-image', true>;
    metaTitle: Attribute.String;
    title: Attribute.String;
    description: Attribute.RichText;
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

export interface BlockProductCollectionPagePointers extends Schema.Component {
  collectionName: 'components_block_product_collection_page_pointers';
  info: {
    displayName: 'product - collectionPagePointers';
  };
  attributes: {
    img: Attribute.Media;
    point: Attribute.String;
  };
}

export interface BlockProductDesignTemplatePointers extends Schema.Component {
  collectionName: 'components_block_product_design_template_pointers';
  info: {
    displayName: 'product - designTemplatePointers';
    description: '';
  };
  attributes: {
    explanation: Attribute.String;
    pdf: Attribute.Media;
    indesign: Attribute.Media;
  };
}

export interface BlockProductDesignTemplates extends Schema.Component {
  collectionName: 'components_block_product_design_templates';
  info: {
    displayName: 'product - designTemplates';
  };
  attributes: {
    headingParagraph: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    templates: Attribute.Component<
      'block.product-design-template-pointers',
      true
    >;
  };
}

export interface BlockProductFaq extends Schema.Component {
  collectionName: 'components_block_product_faqs';
  info: {
    displayName: 'product - faq';
  };
  attributes: {
    question: Attribute.String;
    mdQuestion: Attribute.RichText;
    answer: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface BlockProductImages extends Schema.Component {
  collectionName: 'components_block_product_images';
  info: {
    displayName: 'product - Images';
  };
  attributes: {
    images: Attribute.Media;
    rightIcon: Attribute.Media;
    leftBannerText: Attribute.String;
    leftBannerImage: Attribute.Media;
  };
}

export interface BlockProductInfoPointers extends Schema.Component {
  collectionName: 'components_block_product_info_pointers';
  info: {
    displayName: 'product - info pointers';
  };
  attributes: {
    iconImg: Attribute.Media;
    textInBold: Attribute.String;
    explanation: Attribute.String;
    mdText: Attribute.RichText;
  };
}

export interface BlockProductInfoSpecifications extends Schema.Component {
  collectionName: 'components_block_product_info_specifications';
  info: {
    displayName: 'product-infoSpecifications';
  };
  attributes: {
    productSpecification: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    needHelpText: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    pointers: Attribute.Component<'block.product-specification-pointers', true>;
  };
}

export interface BlockProductInfo extends Schema.Component {
  collectionName: 'components_block_product_infos';
  info: {
    displayName: 'product - info';
    description: '';
  };
  attributes: {
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    needHelpText: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    pointerHeading: Attribute.String &
      Attribute.DefaultTo<'Benefits at a glance'>;
    pointers: Attribute.Component<'block.product-info-pointers', true>;
  };
}

export interface BlockProductSpecificationPointers extends Schema.Component {
  collectionName: 'components_block_product_specification_pointers';
  info: {
    displayName: 'product - specificationPointers';
  };
  attributes: {
    pointer: Attribute.String;
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
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
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

export interface ElementsColor extends Schema.Component {
  collectionName: 'components_elements_colors';
  info: {
    displayName: 'color';
  };
  attributes: {
    color: Attribute.String;
  };
}

export interface ElementsFile extends Schema.Component {
  collectionName: 'components_elements_files';
  info: {
    displayName: 'file';
  };
  attributes: {
    name: Attribute.String;
    file: Attribute.Media;
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

export interface ElementsResponsiveImage extends Schema.Component {
  collectionName: 'components_elements_responsive_images';
  info: {
    displayName: 'ResponsiveImage';
  };
  attributes: {
    desktopImage: Attribute.Media;
    mobileImage: Attribute.Media;
  };
}

export interface ElementsResponsiveSizeInput extends Schema.Component {
  collectionName: 'components_elements_responsive_size_inputs';
  info: {
    displayName: 'responsive size input';
  };
  attributes: {
    baseSize: Attribute.Decimal;
    mobile: Attribute.Decimal;
    tablet: Attribute.Decimal;
    desktop: Attribute.Decimal;
  };
}

export interface ElementsSection extends Schema.Component {
  collectionName: 'components_elements_sections';
  info: {
    displayName: 'Section';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.String;
    points: Attribute.Component<'elements.bullet-points', true>;
    merchandiseCollection: Attribute.Component<'elements.file'>;
    ecoCollection: Attribute.Component<'elements.file'>;
    premiumCollection: Attribute.Component<'elements.file'>;
  };
}

export interface ElementsSimpleButton extends Schema.Component {
  collectionName: 'components_elements_simple_buttons';
  info: {
    displayName: 'simple button';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
    isExternal: Attribute.Boolean;
  };
}

export interface ElementsTextAndImage extends Schema.Component {
  collectionName: 'components_elements_text_and_images';
  info: {
    displayName: 'textAndImage';
  };
  attributes: {
    text: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ElementsUrl extends Schema.Component {
  collectionName: 'components_elements_urls';
  info: {
    displayName: 'url';
  };
  attributes: {
    url: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
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
      'block.canva-artwork-step': BlockCanvaArtworkStep;
      'block.canva-print-sos': BlockCanvaPrintSos;
      'block.category-product-overrides': BlockCategoryProductOverrides;
      'block.catergory': BlockCatergory;
      'block.chat-to-kaibot': BlockChatToKaibot;
      'block.cta': BlockCta;
      'block.customer-reviews': BlockCustomerReviews;
      'block.eco-card': BlockEcoCard;
      'block.explore-categories': BlockExploreCategories;
      'block.explore-range-cards': BlockExploreRangeCards;
      'block.faq': BlockFaq;
      'block.header-navigation-links': BlockHeaderNavigationLinks;
      'block.header-navigation': BlockHeaderNavigation;
      'block.header-sub-menu-buttons': BlockHeaderSubMenuButtons;
      'block.header-sub-menu-sections': BlockHeaderSubMenuSections;
      'block.header-sub-menu': BlockHeaderSubMenu;
      'block.header-top-header': BlockHeaderTopHeader;
      'block.here-to-help': BlockHereToHelp;
      'block.how-it-work-component': BlockHowItWorkComponent;
      'block.how-it-works-step': BlockHowItWorksStep;
      'block.insta-post-section': BlockInstaPostSection;
      'block.kaizen-process': BlockKaizenProcess;
      'block.landing-hero-card': BlockLandingHeroCard;
      'block.landing-hero': BlockLandingHero;
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
      'block.product-collection-page-pointers': BlockProductCollectionPagePointers;
      'block.product-design-template-pointers': BlockProductDesignTemplatePointers;
      'block.product-design-templates': BlockProductDesignTemplates;
      'block.product-faq': BlockProductFaq;
      'block.product-images': BlockProductImages;
      'block.product-info-pointers': BlockProductInfoPointers;
      'block.product-info-specifications': BlockProductInfoSpecifications;
      'block.product-info': BlockProductInfo;
      'block.product-specification-pointers': BlockProductSpecificationPointers;
      'block.product-specification-with-twosub-headings': BlockProductSpecificationWithTwosubHeadings;
      'block.product-specification': BlockProductSpecification;
      'block.track-order': BlockTrackOrder;
      'block.video-section': BlockVideoSection;
      'elements.advance-image': ElementsAdvanceImage;
      'elements.badge': ElementsBadge;
      'elements.bullet-points': ElementsBulletPoints;
      'elements.card-with-image-item': ElementsCardWithImageItem;
      'elements.card': ElementsCard;
      'elements.color': ElementsColor;
      'elements.file': ElementsFile;
      'elements.heading-section': ElementsHeadingSection;
      'elements.image': ElementsImage;
      'elements.link': ElementsLink;
      'elements.list-item-with-image': ElementsListItemWithImage;
      'elements.list-item-with-two-images': ElementsListItemWithTwoImages;
      'elements.new-image': ElementsNewImage;
      'elements.qa': ElementsQa;
      'elements.responsive-image': ElementsResponsiveImage;
      'elements.responsive-size-input': ElementsResponsiveSizeInput;
      'elements.section': ElementsSection;
      'elements.simple-button': ElementsSimpleButton;
      'elements.text-and-image': ElementsTextAndImage;
      'elements.url': ElementsUrl;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
