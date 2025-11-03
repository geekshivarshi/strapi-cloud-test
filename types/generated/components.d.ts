import type { Attribute, Schema } from '@strapi/strapi';

export interface BlockCanvaArtworkStep extends Schema.Component {
  collectionName: 'components_block_canva_artwork_steps';
  info: {
    description: '';
    displayName: 'CanvaArtworkStep';
  };
  attributes: {
    heading: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subHeading: Attribute.String;
  };
}

export interface BlockCanvaPrintSos extends Schema.Component {
  collectionName: 'components_block_canva_print_sos';
  info: {
    description: '';
    displayName: 'CanvaPrintSos';
  };
  attributes: {
    buttonText: Attribute.String;
    coverImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Heading: Attribute.Text;
    subheading: Attribute.Text;
    url: Attribute.String;
  };
}

export interface BlockCategoryProductOverrides extends Schema.Component {
  collectionName: 'components_block_category_product_overrides';
  info: {
    description: '';
    displayName: 'category - productOverrides';
  };
  attributes: {
    coverImage: Attribute.Media<'images'>;
    leftBannerImage: Attribute.Media<'images'>;
    leftBannerText: Attribute.String;
    linkText: Attribute.String;
    name: Attribute.String;
    pointers: Attribute.Component<
      'block.product-collection-page-pointers',
      true
    >;
    product: Attribute.Relation<
      'block.category-product-overrides',
      'oneToOne',
      'api::product.product'
    >;
    rightIcon: Attribute.Media<'images'>;
    url: Attribute.String;
  };
}

export interface BlockCatergory extends Schema.Component {
  collectionName: 'components_block_catergories';
  info: {
    description: '';
    displayName: 'category';
  };
  attributes: {
    heading: Attribute.String;
    link: Attribute.Component<'elements.link', true>;
  };
}

export interface BlockChatToKaibot extends Schema.Component {
  collectionName: 'components_block_chat_to_kaibots';
  info: {
    description: '';
    displayName: 'chatToKaibot';
  };
  attributes: {
    footerText: Attribute.String;
    headerImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Attribute.String;
    points: Attribute.Component<'elements.bullet-points', true>;
  };
}

export interface BlockCta extends Schema.Component {
  collectionName: 'components_block_ctas';
  info: {
    description: '';
    displayName: 'CTA';
  };
  attributes: {
    heading: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    inputs: Attribute.JSON;
    subHeading: Attribute.String;
  };
}

export interface BlockCustomerReviews extends Schema.Component {
  collectionName: 'components_block_customer_reviews';
  info: {
    description: '';
    displayName: 'customerReviews';
  };
  attributes: {
    customerName: Attribute.Component<'elements.list-item-with-image'>;
    heading: Attribute.String;
    subHeading: Attribute.Text;
  };
}

export interface BlockEcoCard extends Schema.Component {
  collectionName: 'components_block_eco_cards';
  info: {
    description: '';
    displayName: 'EcoCard';
  };
  attributes: {
    buttonLink: Attribute.Component<'elements.link'>;
    content: Attribute.Component<'elements.list-item-with-image', true>;
    coverImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Attribute.String;
    logoImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mobileCoverImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
  };
}

export interface BlockExploreCategories extends Schema.Component {
  collectionName: 'components_block_explore_categories';
  info: {
    displayName: 'ExploreCategories';
    icon: 'cube';
  };
  attributes: {
    card: Attribute.Component<'elements.card', true>;
    heading: Attribute.String;
    headingImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    topImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlockExploreRangeCards extends Schema.Component {
  collectionName: 'components_block_explore_range_cards';
  info: {
    description: '';
    displayName: 'ExploreRangeCard';
  };
  attributes: {
    badge: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    banner: Attribute.Component<'elements.badge'>;
    buttonLink: Attribute.Component<'elements.link'> & Attribute.Required;
    cardImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    features: Attribute.Component<'elements.list-item-with-image', true>;
    product_id: Attribute.BigInteger;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BlockFaq extends Schema.Component {
  collectionName: 'components_block_faqs';
  info: {
    description: '';
    displayName: 'FAQ';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    QA: Attribute.Component<'elements.qa', true>;
    subHeading: Attribute.String;
  };
}

export interface BlockHeaderNavigation extends Schema.Component {
  collectionName: 'components_block_header_navigations';
  info: {
    description: '';
    displayName: 'Header - Navigation';
  };
  attributes: {
    name: Attribute.String;
    subMenu: Attribute.Component<'block.header-sub-menu', true>;
    subMenuButtons: Attribute.Component<'block.header-sub-menu-buttons', true>;
    url: Attribute.String;
    withSubMenu: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface BlockHeaderNavigationLinks extends Schema.Component {
  collectionName: 'components_block_header_navigation_links';
  info: {
    displayName: 'Header - navigationLinks';
  };
  attributes: {
    bannerImage: Attribute.Media<'images'>;
    bannerText: Attribute.String;
    name: Attribute.String;
    url: Attribute.String;
  };
}

export interface BlockHeaderSubMenu extends Schema.Component {
  collectionName: 'components_block_header_sub_menus';
  info: {
    description: '';
    displayName: 'Header - subMenu';
  };
  attributes: {
    highlightProductBannerImg: Attribute.Media<'images'>;
    highlightProductBannerText: Attribute.String;
    highlightProductCTAText: Attribute.String;
    highlightProductCTAUrl: Attribute.String;
    highlightProductImg: Attribute.Media<'images'>;
    highlightProductName: Attribute.String;
    icon: Attribute.Media<'images'>;
    isLinkUrlExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    isVisible: Attribute.Boolean & Attribute.DefaultTo<true>;
    linkToUrl: Attribute.String;
    name: Attribute.String;
    sectionIds: Attribute.JSON;
    showSubMenuSectionImages: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface BlockHeaderSubMenuButtons extends Schema.Component {
  collectionName: 'components_block_header_sub_menu_buttons';
  info: {
    displayName: 'Header - subMenuButtons';
  };
  attributes: {
    buttonType: Attribute.Enumeration<['primary', 'secondary', 'outline']>;
    icon: Attribute.Media<'images'>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
    url: Attribute.Text;
  };
}

export interface BlockHeaderSubMenuSections extends Schema.Component {
  collectionName: 'components_block_header_sub_menu_sections';
  info: {
    description: '';
    displayName: 'Header - subMenuSections';
  };
  attributes: {
    banner: Attribute.Component<'elements.badge'>;
    headerLink: Attribute.Component<'elements.url'>;
    image: Attribute.Media<'images'>;
    links: Attribute.Component<'block.header-navigation-links', true>;
    name: Attribute.String;
    showImage: Attribute.Boolean & Attribute.DefaultTo<true>;
    subMenuSectionId: Attribute.String & Attribute.Required;
  };
}

export interface BlockHeaderTopHeader extends Schema.Component {
  collectionName: 'components_block_header_top_headers';
  info: {
    description: '';
    displayName: 'Header - topHeader';
  };
  attributes: {
    offerCode: Attribute.String;
    offerText: Attribute.String;
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
    description: Attribute.Component<'elements.bullet-points', true>;
    heading: Attribute.String;
    leftImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    rightImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subHeading: Attribute.Text;
  };
}

export interface BlockHowItWorkComponent extends Schema.Component {
  collectionName: 'components_block_how_it_work_components';
  info: {
    description: '';
    displayName: 'howItWorkComponent';
  };
  attributes: {
    buttonLink: Attribute.Component<'elements.link'>;
    heading: Attribute.String;
    steps: Attribute.Component<'elements.list-item-with-two-images', true>;
  };
}

export interface BlockHowItWorksStep extends Schema.Component {
  collectionName: 'components_block_how_it_works_steps';
  info: {
    displayName: 'howItWorksStep';
  };
  attributes: {
    content: Attribute.RichText;
    coverImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    coverImgAlignment: Attribute.String;
    heading: Attribute.String;
  };
}

export interface BlockInstaPostSection extends Schema.Component {
  collectionName: 'components_block_insta_post_sections';
  info: {
    description: '';
    displayName: 'instaPostSection';
  };
  attributes: {
    heading: Attribute.String;
    images: Attribute.Component<'elements.advance-image', true>;
    instagramLink: Attribute.Component<'elements.link'>;
  };
}

export interface BlockKaizenProcess extends Schema.Component {
  collectionName: 'components_block_kaizen_processes';
  info: {
    description: '';
    displayName: 'kaizenProcess';
  };
  attributes: {
    buttonLink: Attribute.Component<'elements.link'>;
    coverImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    coverImgAlignment: Attribute.String;
    heading: Attribute.String;
    note1: Attribute.Text;
    note2: Attribute.Text;
    point1: Attribute.Text;
    point2: Attribute.Text;
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

export interface BlockLandingHeroCard extends Schema.Component {
  collectionName: 'components_block_landing_hero_cards';
  info: {
    description: '';
    displayName: 'Landing - heroCard';
  };
  attributes: {
    bgColor: Attribute.String;
    image: Attribute.Media<'images'>;
    link: Attribute.Component<'elements.url'>;
    metaTitle: Attribute.String;
    metaTitleColor: Attribute.Component<'elements.color'>;
    metaTitleSizeInPx: Attribute.Component<'elements.responsive-size-input'>;
    subTitle: Attribute.Text;
    subTitleColor: Attribute.Component<'elements.color'>;
    subTitleSizePx: Attribute.Component<'elements.responsive-size-input'>;
    title: Attribute.String;
    titleColor: Attribute.Component<'elements.color'>;
    titleSizePx: Attribute.Component<'elements.responsive-size-input'>;
  };
}

export interface BlockLandingPageCover extends Schema.Component {
  collectionName: 'components_block_landing_page_covers';
  info: {
    description: '';
    displayName: 'LandingPageCover';
  };
  attributes: {
    coverImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    coverImgMobile: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Attribute.String;
    productLinks: Attribute.Component<'elements.link', true>;
    subHeading: Attribute.String;
  };
}

export interface BlockMyAccountCard extends Schema.Component {
  collectionName: 'components_block_my_account_cards';
  info: {
    displayName: 'MyAccountCard';
  };
  attributes: {
    buttonLinks: Attribute.Component<'elements.link', true>;
    description: Attribute.Text;
    headerImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Attribute.String;
  };
}

export interface BlockOpenHour extends Schema.Component {
  collectionName: 'components_block_open_hours';
  info: {
    displayName: 'openHour';
  };
  attributes: {
    headerImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Attribute.String;
    points: Attribute.Component<'elements.bullet-points', true>;
    qa: Attribute.Component<'elements.qa', true>;
  };
}

export interface BlockOrderSampleCard extends Schema.Component {
  collectionName: 'components_block_order_sample_cards';
  info: {
    displayName: 'OrderSampleCard';
  };
  attributes: {
    headerImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Attribute.String;
    points: Attribute.Component<'elements.bullet-points', true>;
  };
}

export interface BlockPageCover extends Schema.Component {
  collectionName: 'components_block_page_covers';
  info: {
    description: '';
    displayName: 'PageCover';
  };
  attributes: {
    desktopImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    heading: Attribute.String & Attribute.Required;
    mobileImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
  };
}

export interface BlockPageHeading extends Schema.Component {
  collectionName: 'components_block_page_headings';
  info: {
    description: '';
    displayName: 'PageHeading';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subHeading: Attribute.RichText;
  };
}

export interface BlockPartners extends Schema.Component {
  collectionName: 'components_block_partners';
  info: {
    description: '';
    displayName: 'Partners';
    icon: 'briefcase';
  };
  attributes: {
    heading: Attribute.String;
    logos: Attribute.Component<'elements.new-image', true>;
    subHeading: Attribute.String;
  };
}

export interface BlockPrintSos extends Schema.Component {
  collectionName: 'components_block_print_sos';
  info: {
    description: '';
    displayName: 'PrintSos';
  };
  attributes: {
    contactLink: Attribute.Component<'elements.link', true>;
    coverImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.RichText;
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.String & Attribute.Required;
  };
}

export interface BlockPrintWithKaizen extends Schema.Component {
  collectionName: 'components_block_print_with_kaizens';
  info: {
    description: '';
    displayName: 'printWithKaizen';
  };
  attributes: {
    description: Attribute.RichText;
    heading: Attribute.String;
    metaTitle: Attribute.String;
    specifications: Attribute.Component<'elements.list-item-with-image', true>;
    title: Attribute.String;
  };
}

export interface BlockPrintspiration extends Schema.Component {
  collectionName: 'components_block_printspirations';
  info: {
    description: '';
    displayName: 'printspiration';
  };
  attributes: {
    heading: Attribute.String;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    title: Attribute.String;
  };
}

export interface BlockProdSpecsListImageWithCoverImg extends Schema.Component {
  collectionName: 'components_block_prod_specs_list_image_with_cover_imgs';
  info: {
    displayName: 'ProdSpecsListItemWithCoverImg';
  };
  attributes: {
    coverImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Attribute.String;
    itemImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subHeading: Attribute.Text;
  };
}

export interface BlockProductCardSection extends Schema.Component {
  collectionName: 'components_block_product_card_section';
  info: {
    displayName: 'productCardSection';
  };
  attributes: {
    description: Attribute.String;
    exploreRangeCards: Attribute.Component<'block.explore-range-cards', true>;
    headerImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Attribute.String;
    subHeading: Attribute.String;
  };
}

export interface BlockProductCollectionPagePointers extends Schema.Component {
  collectionName: 'components_block_product_collection_page_pointers';
  info: {
    displayName: 'product - collectionPagePointers';
  };
  attributes: {
    img: Attribute.Media<'images'>;
    point: Attribute.String;
  };
}

export interface BlockProductDesignTemplatePointers extends Schema.Component {
  collectionName: 'components_block_product_design_template_pointers';
  info: {
    description: '';
    displayName: 'product - designTemplatePointers';
  };
  attributes: {
    explanation: Attribute.String;
    indesign: Attribute.Media<'files'>;
    pdf: Attribute.Media<'files'>;
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
    answer: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    mdQuestion: Attribute.RichText;
    question: Attribute.String;
  };
}

export interface BlockProductImages extends Schema.Component {
  collectionName: 'components_block_product_images';
  info: {
    displayName: 'product - Images';
  };
  attributes: {
    images: Attribute.Media<'images', true>;
    leftBannerImage: Attribute.Media<'images'>;
    leftBannerText: Attribute.String;
    rightIcon: Attribute.Media<'images'>;
  };
}

export interface BlockProductInfo extends Schema.Component {
  collectionName: 'components_block_product_infos';
  info: {
    description: '';
    displayName: 'product - info';
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

export interface BlockProductInfoPointers extends Schema.Component {
  collectionName: 'components_block_product_info_pointers';
  info: {
    displayName: 'product - info pointers';
  };
  attributes: {
    explanation: Attribute.String;
    iconImg: Attribute.Media<'images'>;
    mdText: Attribute.RichText;
    textInBold: Attribute.String;
  };
}

export interface BlockProductInfoSpecifications extends Schema.Component {
  collectionName: 'components_block_product_info_specifications';
  info: {
    displayName: 'product-infoSpecifications';
  };
  attributes: {
    needHelpText: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    pointers: Attribute.Component<'block.product-specification-pointers', true>;
    productSpecification: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface BlockProductSpecification extends Schema.Component {
  collectionName: 'components_block_product_specifications';
  info: {
    description: '';
    displayName: 'ProductSpecification';
  };
  attributes: {
    content: Attribute.RichText;
    coverImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    coverImgAlignment: Attribute.String;
    description: Attribute.Component<'elements.list-item-with-image', true>;
    heading: Attribute.String & Attribute.Required;
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
    description: '';
    displayName: 'ProductSpecsWithCarousel';
  };
  attributes: {
    content: Attribute.RichText;
    coverImgAlignment: Attribute.String;
    description: Attribute.Component<
      'block.prod-specs-list-image-with-cover-img',
      true
    >;
    heading: Attribute.String;
  };
}

export interface BlockTrackOrder extends Schema.Component {
  collectionName: 'components_block_track_orders';
  info: {
    description: '';
    displayName: 'TrackOrderCard';
  };
  attributes: {
    buttonLink: Attribute.Component<'elements.link'>;
    headerImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Attribute.String;
    points: Attribute.Component<'elements.bullet-points', true>;
  };
}

export interface BlockVideoSection extends Schema.Component {
  collectionName: 'components_block_video_sections';
  info: {
    description: '';
    displayName: 'videoSection';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    video: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ElementsAdvanceImage extends Schema.Component {
  collectionName: 'components_elements_advance_images';
  info: {
    displayName: 'advanceImage';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageUrl: Attribute.Component<'elements.link'>;
    type: Attribute.Enumeration<['reel', 'multiple-images', 'image']>;
  };
}

export interface ElementsBadge extends Schema.Component {
  collectionName: 'components_elements_badges';
  info: {
    description: '';
    displayName: 'Banner';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    text: Attribute.String & Attribute.Required;
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

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    description: '';
    displayName: 'Card';
  };
  attributes: {
    backgroundImage: Attribute.Component<'elements.new-image'>;
    content: Attribute.Text;
    headerImage: Attribute.Component<'elements.new-image'>;
    heading: Attribute.String;
    subheading: Attribute.String;
  };
}

export interface ElementsCardWithImageItem extends Schema.Component {
  collectionName: 'components_elements_card_with_image_items';
  info: {
    displayName: 'CardWithImageItem';
    icon: 'picture';
  };
  attributes: {
    headerImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Attribute.String;
    listItem: Attribute.Component<'elements.list-item-with-image', true>;
    subHeading: Attribute.String;
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
    file: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.String;
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
    alt: Attribute.String & Attribute.Required;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    isLink: Attribute.Boolean & Attribute.DefaultTo<false>;
    src: Attribute.String & Attribute.Required;
    url: Attribute.String;
  };
}

export interface ElementsLink extends Schema.Component {
  collectionName: 'components_elements_links';
  info: {
    description: '';
    displayName: 'link';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    isUrl: Attribute.Boolean & Attribute.DefaultTo<true>;
    name: Attribute.String;
    url: Attribute.String;
  };
}

export interface ElementsListItemWithImage extends Schema.Component {
  collectionName: 'components_elements_list_item_with_images';
  info: {
    description: '';
    displayName: 'listItemWithImage';
  };
  attributes: {
    heading: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subHeading: Attribute.Text & Attribute.Required;
  };
}

export interface ElementsListItemWithTwoImages extends Schema.Component {
  collectionName: 'components_block_list_item_with_two_images';
  info: {
    description: '';
    displayName: 'listItemWithTwoImages';
  };
  attributes: {
    activeImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Attribute.String;
    subHeading: Attribute.Text;
  };
}

export interface ElementsNewImage extends Schema.Component {
  collectionName: 'components_elements_new_images';
  info: {
    description: '';
    displayName: 'NewImage';
  };
  attributes: {
    alt: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    isUrlExternal: Attribute.Boolean;
    url: Attribute.String;
  };
}

export interface ElementsQa extends Schema.Component {
  collectionName: 'components_elements_qas';
  info: {
    description: '';
    displayName: 'QA';
  };
  attributes: {
    answer: Attribute.RichText;
    question: Attribute.String & Attribute.Required;
  };
}

export interface ElementsResponsiveImage extends Schema.Component {
  collectionName: 'components_elements_responsive_images';
  info: {
    displayName: 'ResponsiveImage';
  };
  attributes: {
    desktopImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mobileImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ElementsResponsiveSizeInput extends Schema.Component {
  collectionName: 'components_elements_responsive_size_inputs';
  info: {
    displayName: 'responsive size input';
  };
  attributes: {
    baseSize: Attribute.Decimal;
    desktop: Attribute.Decimal;
    mobile: Attribute.Decimal;
    tablet: Attribute.Decimal;
  };
}

export interface ElementsSection extends Schema.Component {
  collectionName: 'components_elements_sections';
  info: {
    description: '';
    displayName: 'Section';
  };
  attributes: {
    ecoCollection: Attribute.Component<'elements.file'>;
    heading: Attribute.String;
    merchandiseCollection: Attribute.Component<'elements.file'>;
    points: Attribute.Component<'elements.bullet-points', true>;
    premiumCollection: Attribute.Component<'elements.file'>;
    subheading: Attribute.String;
  };
}

export interface ElementsSimpleButton extends Schema.Component {
  collectionName: 'components_elements_simple_buttons';
  info: {
    displayName: 'simple button';
  };
  attributes: {
    isExternal: Attribute.Boolean;
    text: Attribute.String;
    url: Attribute.String;
  };
}

export interface ElementsTextAndImage extends Schema.Component {
  collectionName: 'components_elements_text_and_images';
  info: {
    displayName: 'textAndImage';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    text: Attribute.Text;
  };
}

export interface ElementsUrl extends Schema.Component {
  collectionName: 'components_elements_urls';
  info: {
    displayName: 'url';
  };
  attributes: {
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    url: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Attribute.String;
    keywords: Attribute.Text;
    metaDescription: Attribute.String & Attribute.Required;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Attribute.String;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    metaTitle: Attribute.String & Attribute.Required;
    metaViewport: Attribute.String;
    structuredData: Attribute.JSON;
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
      'block.header-navigation': BlockHeaderNavigation;
      'block.header-navigation-links': BlockHeaderNavigationLinks;
      'block.header-sub-menu': BlockHeaderSubMenu;
      'block.header-sub-menu-buttons': BlockHeaderSubMenuButtons;
      'block.header-sub-menu-sections': BlockHeaderSubMenuSections;
      'block.header-top-header': BlockHeaderTopHeader;
      'block.here-to-help': BlockHereToHelp;
      'block.how-it-work-component': BlockHowItWorkComponent;
      'block.how-it-works-step': BlockHowItWorksStep;
      'block.insta-post-section': BlockInstaPostSection;
      'block.kaizen-process': BlockKaizenProcess;
      'block.landing-hero': BlockLandingHero;
      'block.landing-hero-card': BlockLandingHeroCard;
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
      'block.product-info': BlockProductInfo;
      'block.product-info-pointers': BlockProductInfoPointers;
      'block.product-info-specifications': BlockProductInfoSpecifications;
      'block.product-specification': BlockProductSpecification;
      'block.product-specification-pointers': BlockProductSpecificationPointers;
      'block.product-specification-with-twosub-headings': BlockProductSpecificationWithTwosubHeadings;
      'block.track-order': BlockTrackOrder;
      'block.video-section': BlockVideoSection;
      'elements.advance-image': ElementsAdvanceImage;
      'elements.badge': ElementsBadge;
      'elements.bullet-points': ElementsBulletPoints;
      'elements.card': ElementsCard;
      'elements.card-with-image-item': ElementsCardWithImageItem;
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
