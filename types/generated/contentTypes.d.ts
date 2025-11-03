import type { Attribute, Schema } from '@strapi/strapi';

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Attribute.String;
    registrationToken: Attribute.String & Attribute.Private;
    resetPasswordToken: Attribute.String & Attribute.Private;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    username: Attribute.String;
  };
}

export interface ApiArtworkStepArtworkStep extends Schema.SingleType {
  collectionName: 'artwork_steps';
  info: {
    description: '';
    displayName: 'ArtworkStep';
    pluralName: 'artwork-steps';
    singularName: 'artwork-step';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ArtworkStep: Attribute.Component<'block.canva-artwork-step', true>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::artwork-step.artwork-step',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::artwork-step.artwork-step',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAuthAuth extends Schema.CollectionType {
  collectionName: 'auths';
  info: {
    description: '';
    displayName: 'auth';
    pluralName: 'auths';
    singularName: 'auth';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bottomLeftImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bottomRightImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::auth.auth', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::auth.auth', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiBannerAndSignageBannerAndSignage
  extends Schema.CollectionType {
  collectionName: 'banner_and_signages';
  info: {
    description: '';
    displayName: 'banner and Signage';
    pluralName: 'banner-and-signages';
    singularName: 'banner-and-signage';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bannerUsageGuide: Attribute.Component<'block.product-specification-with-twosub-headings'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::banner-and-signage.banner-and-signage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ecoCard: Attribute.Component<'block.eco-card'>;
    exploreOurRange: Attribute.Component<'block.product-card-section'>;
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    printPanic: Attribute.Component<'block.faq'>;
    printspiration: Attribute.Component<'block.printspiration'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::banner-and-signage.banner-and-signage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    videoSection: Attribute.Component<'block.video-section'>;
  };
}

export interface ApiBenefitsOfKaizenBenefitsOfKaizen extends Schema.SingleType {
  collectionName: 'benefits_of_kaizens';
  info: {
    description: '';
    displayName: 'Benefits of Kaizen';
    pluralName: 'benefits-of-kaizens';
    singularName: 'benefits-of-kaizen';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    benefitsWithKaizen: Attribute.Component<'block.print-with-kaizen'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::benefits-of-kaizen.benefits-of-kaizen',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::benefits-of-kaizen.benefits-of-kaizen',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBookletBooklet extends Schema.CollectionType {
  collectionName: 'booklets';
  info: {
    displayName: 'Booklet';
    pluralName: 'booklets';
    singularName: 'booklet';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::booklet.booklet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ecoCard: Attribute.Component<'block.eco-card'>;
    exploreOurCategories: Attribute.Component<'block.product-card-section'>;
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    printPanic: Attribute.Component<'block.faq'>;
    printspiration: Attribute.Component<'block.printspiration'>;
    productSpecifications: Attribute.Component<
      'block.product-specification',
      true
    >;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::booklet.booklet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBrandedMerchBrandedMerch extends Schema.CollectionType {
  collectionName: 'branded_merches';
  info: {
    description: '';
    displayName: 'Branded Merch';
    pluralName: 'branded-merches';
    singularName: 'branded-merch';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    brochure: Attribute.Component<'elements.section'>;
    brochureCarousel: Attribute.Component<'elements.new-image', true>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::branded-merch.branded-merch',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    hereToHelp: Attribute.Component<'block.here-to-help'>;
    pageCover: Attribute.Component<'block.page-cover'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::branded-merch.branded-merch',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBusinessCardBusinessCard extends Schema.CollectionType {
  collectionName: 'business_cards';
  info: {
    description: '';
    displayName: 'Business card';
    pluralName: 'business-cards';
    singularName: 'business-card';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::business-card.business-card',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ecoCard: Attribute.Component<'block.eco-card'>;
    exploreOurCategories: Attribute.Component<'block.product-card-section'>;
    pageCover: Attribute.Component<'block.page-cover'> & Attribute.Required;
    pageHeading: Attribute.Component<'block.page-heading'>;
    printPanic: Attribute.Component<'block.faq'>;
    printspiration: Attribute.Component<'block.printspiration'>;
    productSpecifications: Attribute.Component<
      'block.product-specification',
      true
    >;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::business-card.business-card',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCanvaPrintEnquiryCanvaPrintEnquiry
  extends Schema.SingleType {
  collectionName: 'canva_print_enquiries';
  info: {
    displayName: 'CanvaPrintEnquiry';
    pluralName: 'canva-print-enquiries';
    singularName: 'canva-print-enquiry';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    canvaPrintEnquiry: Attribute.Component<'block.canva-print-sos'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::canva-print-enquiry.canva-print-enquiry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::canva-print-enquiry.canva-print-enquiry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCategoryCategory extends Schema.CollectionType {
  collectionName: 'categories';
  info: {
    description: '';
    displayName: 'Category';
    pluralName: 'categories';
    singularName: 'category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bottomBlocks: Attribute.DynamicZone<
      [
        'block.printspiration',
        'block.faq',
        'block.eco-card',
        'block.product-specification',
        'block.product-specification-with-twosub-headings'
      ]
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String;
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    productOverrides: Attribute.Component<
      'block.category-product-overrides',
      true
    >;
    products: Attribute.Relation<
      'api::category.category',
      'manyToMany',
      'api::product.product'
    >;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String & Attribute.Unique;
    withGetAQuoteBanner: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ApiChatToKaibotChatToKaibot extends Schema.SingleType {
  collectionName: 'chat_to_kaibots';
  info: {
    description: '';
    displayName: 'Chat To Kaibot';
    pluralName: 'chat-to-kaibots';
    singularName: 'chat-to-kaibot';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    chatToKaibot: Attribute.Component<'block.chat-to-kaibot'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::chat-to-kaibot.chat-to-kaibot',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::chat-to-kaibot.chat-to-kaibot',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactUsContactUs extends Schema.CollectionType {
  collectionName: 'contact_uses';
  info: {
    description: '';
    displayName: 'Contact us';
    pluralName: 'contact-uses';
    singularName: 'contact-us';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-us.contact-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeader: Attribute.Component<'elements.card-with-image-item'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::contact-us.contact-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCookiePolicyCookiePolicy extends Schema.CollectionType {
  collectionName: 'cookie_policies';
  info: {
    description: '';
    displayName: 'CookiePolicy';
    pluralName: 'cookie-policies';
    singularName: 'cookie-policy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.RichText;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cookie-policy.cookie-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    pageCover: Attribute.Component<'block.page-cover'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cookie-policy.cookie-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCustomerReviewCustomerReview extends Schema.SingleType {
  collectionName: 'customer_reviews';
  info: {
    description: '';
    displayName: 'customerReview';
    pluralName: 'customer-reviews';
    singularName: 'customer-review';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::customer-review.customer-review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    customerReview: Attribute.Component<'block.customer-reviews', true>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::customer-review.customer-review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEcoRangeEcoRange extends Schema.SingleType {
  collectionName: 'eco_ranges';
  info: {
    displayName: 'Eco Range';
    pluralName: 'eco-ranges';
    singularName: 'eco-range';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::eco-range.eco-range',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    link: Attribute.Component<'elements.link'>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::eco-range.eco-range',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaqPageFaqPage extends Schema.CollectionType {
  collectionName: 'faq_pages';
  info: {
    description: '';
    displayName: 'FaqPage';
    pluralName: 'faq-pages';
    singularName: 'faq-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    chatToKaibot: Attribute.Component<'block.chat-to-kaibot'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::faq-page.faq-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    faq: Attribute.Component<'block.faq'>;
    openHour: Attribute.Component<'block.open-hour'>;
    pageCover: Attribute.Component<'block.page-cover'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::faq-page.faq-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFlyersFoldedLeafletFlyersFoldedLeaflet
  extends Schema.CollectionType {
  collectionName: 'flyers_folded_leaflets';
  info: {
    description: '';
    displayName: 'FlyersAndFoldedLeaflet';
    pluralName: 'flyers-folded-leaflets';
    singularName: 'flyers-folded-leaflet';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::flyers-folded-leaflet.flyers-folded-leaflet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ecoCard: Attribute.Component<'block.eco-card'>;
    exploreOurRange: Attribute.Component<'block.product-card-section'>;
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    printPanic: Attribute.Component<'block.faq'>;
    printspiration: Attribute.Component<'block.printspiration'>;
    productSpecifications: Attribute.Component<
      'block.product-specification',
      true
    >;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::flyers-folded-leaflet.flyers-folded-leaflet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFooterFooter extends Schema.SingleType {
  collectionName: 'footers';
  info: {
    description: '';
    displayName: 'footer';
    pluralName: 'footers';
    singularName: 'footer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Attribute.Component<'block.catergory', true>;
    chatBotImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    chatBotText: Attribute.String;
    contactLinkIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    contactLinks: Attribute.Component<'elements.link', true>;
    copyRight: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    cta: Attribute.Component<'block.cta'>;
    footerDrawingImage: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    publishedAt: Attribute.DateTime;
    socialMedia: Attribute.Component<'elements.image', true>;
    topLeftImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiForgotPasswordForgotPassword extends Schema.CollectionType {
  collectionName: 'forgot_passwords';
  info: {
    displayName: 'ForgotPassword';
    pluralName: 'forgot-passwords';
    singularName: 'forgot-password';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::forgot-password.forgot-password',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    heading: Attribute.String;
    publishedAt: Attribute.DateTime;
    subHeading: Attribute.Text;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::forgot-password.forgot-password',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGetAQuoteGetAQuote extends Schema.SingleType {
  collectionName: 'get_a_quotes';
  info: {
    displayName: 'Get a Quote';
    pluralName: 'get-a-quotes';
    singularName: 'get-a-quote';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    buttonLink: Attribute.Component<'elements.link'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::get-a-quote.get-a-quote',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    heading: Attribute.Text;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::get-a-quote.get-a-quote',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGoogleReviewGoogleReview extends Schema.SingleType {
  collectionName: 'google_reviews';
  info: {
    description: '';
    displayName: 'Google review';
    pluralName: 'google-reviews';
    singularName: 'google-review';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    averageRating: Attribute.Decimal;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::google-review.google-review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    link: Attribute.Component<'elements.link'>;
    publishedAt: Attribute.DateTime;
    totalReviews: Attribute.BigInteger;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::google-review.google-review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHeaderNewHeaderNew extends Schema.SingleType {
  collectionName: 'header_news';
  info: {
    description: '';
    displayName: 'HeaderNew';
    pluralName: 'header-news';
    singularName: 'header-new';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    animatedSearchText: Attribute.JSON;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::header-new.header-new',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Navigation: Attribute.Component<'block.header-navigation', true>;
    publishedAt: Attribute.DateTime;
    subMenuSections: Attribute.Component<
      'block.header-sub-menu-sections',
      true
    >;
    topHeader: Attribute.Component<'block.header-top-header'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::header-new.header-new',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHeaderHeader extends Schema.SingleType {
  collectionName: 'headers';
  info: {
    description: '';
    displayName: 'Header';
    pluralName: 'headers';
    singularName: 'header';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    appBarCategory: Attribute.JSON;
    brandedMerch: Attribute.JSON;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::header.header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    isTopHeaderVisible: Attribute.Boolean;
    publishedAt: Attribute.DateTime;
    quickBuys: Attribute.JSON;
    specialOffers: Attribute.JSON;
    topHeaderCouponCode: Attribute.String;
    topHeaderText: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::header.header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHereToHelpHereToHelp extends Schema.SingleType {
  collectionName: 'here_to_helps';
  info: {
    description: '';
    displayName: 'Here to Help';
    pluralName: 'here-to-helps';
    singularName: 'here-to-help';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::here-to-help.here-to-help',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    descriptionPoints: Attribute.Component<'elements.bullet-points', true>;
    heading: Attribute.String;
    leftImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    publishedAt: Attribute.DateTime;
    rightImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subHeading: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::here-to-help.here-to-help',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHowItWorkHowItWork extends Schema.CollectionType {
  collectionName: 'how_it_works';
  info: {
    description: '';
    displayName: 'How it work';
    pluralName: 'how-it-works';
    singularName: 'how-it-work';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::how-it-work.how-it-work',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    howItWorksSteps: Attribute.Component<'block.how-it-works-step', true>;
    myAccountCard: Attribute.Component<'block.my-account-card'>;
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    trackOrder: Attribute.Component<'block.track-order'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::how-it-work.how-it-work',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHowItWorksStepHowItWorksStep extends Schema.SingleType {
  collectionName: 'how_it_works_steps';
  info: {
    description: '';
    displayName: 'How it works step';
    pluralName: 'how-it-works-steps';
    singularName: 'how-it-works-step';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::how-it-works-step.how-it-works-step',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    howItWorks: Attribute.Component<'block.how-it-work-component'>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::how-it-works-step.how-it-works-step',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIndustryIndustry extends Schema.CollectionType {
  collectionName: 'industries';
  info: {
    description: '';
    displayName: 'Industry';
    pluralName: 'industries';
    singularName: 'industry';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::industry.industry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    exploreCategories: Attribute.Component<'block.explore-categories'>;
    hereToHelp: Attribute.Component<'block.here-to-help'>;
    pageCover: Attribute.Component<'block.page-cover'>;
    partners: Attribute.Component<'block.partners'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::industry.industry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiKaizenEcoRangeKaizenEcoRange extends Schema.CollectionType {
  collectionName: 'kaizen_eco_ranges';
  info: {
    description: '';
    displayName: 'kaizenEcoRange';
    pluralName: 'kaizen-eco-ranges';
    singularName: 'kaizen-eco-range';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::kaizen-eco-range.kaizen-eco-range',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ecoCard: Attribute.Component<'block.eco-card'>;
    exploreOurRange: Attribute.Component<'block.product-card-section'>;
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::kaizen-eco-range.kaizen-eco-range',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiKaizenPromiseKaizenPromise extends Schema.CollectionType {
  collectionName: 'kaizen_promises';
  info: {
    description: '';
    displayName: 'KaizenPromise';
    pluralName: 'kaizen-promises';
    singularName: 'kaizen-promise';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::kaizen-promise.kaizen-promise',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    kaizenProcess: Attribute.Component<'block.kaizen-process'>;
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    productSpecifications: Attribute.Component<
      'block.product-specification',
      true
    >;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::kaizen-promise.kaizen-promise',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiKaizenPromisecardKaizenPromisecard
  extends Schema.SingleType {
  collectionName: 'kaizen_promisecards';
  info: {
    description: '';
    displayName: 'KaizenPromiseCard';
    pluralName: 'kaizen-promisecards';
    singularName: 'kaizen-promisecard';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    backgroundImage: Attribute.Component<'elements.new-image'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::kaizen-promisecard.kaizen-promisecard',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    heading: Attribute.String;
    logoBackgroundImage: Attribute.Component<'elements.new-image'>;
    logoImage: Attribute.Component<'elements.new-image'>;
    logoText: Attribute.String;
    publishedAt: Attribute.DateTime;
    subHeading: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::kaizen-promisecard.kaizen-promisecard',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLandingLanding extends Schema.CollectionType {
  collectionName: 'landings';
  info: {
    description: '';
    displayName: 'landing';
    pluralName: 'landings';
    singularName: 'landing';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::landing.landing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ecoCard: Attribute.Component<'block.eco-card'>;
    enquirySection: Attribute.Component<'block.print-sos'>;
    exploreEcoRange: Attribute.Component<'block.product-card-section'>;
    exploreIndustries: Attribute.Component<'block.product-card-section'>;
    exploreOurCategories: Attribute.Component<'block.product-card-section'>;
    hero: Attribute.Component<'block.landing-hero'>;
    pageCover: Attribute.Component<'block.landing-page-cover'>;
    printAndProsper: Attribute.Component<'block.product-card-section'>;
    printingSection: Attribute.Component<'block.insta-post-section'>;
    printWithKaizen: Attribute.Component<'block.print-with-kaizen'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::landing.landing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLoginLogin extends Schema.CollectionType {
  collectionName: 'logins';
  info: {
    description: '';
    displayName: 'Login';
    pluralName: 'logins';
    singularName: 'login';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::login.login',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    heading: Attribute.String;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::login.login',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMarketingAndPromoMarketingAndPromo
  extends Schema.CollectionType {
  collectionName: 'marketing_and_promos';
  info: {
    description: '';
    displayName: 'marketingAndPromo';
    pluralName: 'marketing-and-promos';
    singularName: 'marketing-and-promo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::marketing-and-promo.marketing-and-promo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    exploreOurRange: Attribute.Component<'block.product-card-section'>;
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::marketing-and-promo.marketing-and-promo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNeedADesignNeedADesign extends Schema.CollectionType {
  collectionName: 'need_a_designs';
  info: {
    description: '';
    displayName: 'need a design';
    pluralName: 'need-a-designs';
    singularName: 'need-a-design';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::need-a-design.need-a-design',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    formStyleImages: Attribute.Component<'elements.list-item-with-image', true>;
    header: Attribute.Component<'elements.card-with-image-item'>;
    pageCover: Attribute.Component<'block.page-cover'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::need-a-design.need-a-design',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNeedDesignNeedDesign extends Schema.SingleType {
  collectionName: 'need_designs';
  info: {
    description: '';
    displayName: 'Need Design';
    pluralName: 'need-designs';
    singularName: 'need-design';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::need-design.need-design',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    needDesign: Attribute.Component<'elements.link'>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::need-design.need-design',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewCollectionPageNewCollectionPage
  extends Schema.CollectionType {
  collectionName: 'new_collection_pages';
  info: {
    description: '';
    displayName: 'New Collection Page';
    pluralName: 'new-collection-pages';
    singularName: 'new-collection-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::new-collection-page.new-collection-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    exploreOurRange: Attribute.Component<'block.product-card-section'>;
    Name: Attribute.String;
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::new-collection-page.new-collection-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    urlSlug: Attribute.String & Attribute.Unique;
    withGetAQuoteBanner: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface ApiNotepadNotepad extends Schema.CollectionType {
  collectionName: 'notepads';
  info: {
    description: '';
    displayName: 'Notepad';
    pluralName: 'notepads';
    singularName: 'notepad';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::notepad.notepad',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ecoCard: Attribute.Component<'block.eco-card'>;
    exploreOurCategories: Attribute.Component<'block.product-card-section'>;
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    printPanic: Attribute.Component<'block.faq'>;
    printspiration: Attribute.Component<'block.printspiration'>;
    productSpecifications: Attribute.Component<
      'block.product-specification',
      true
    >;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::notepad.notepad',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOpenHourOpenHour extends Schema.SingleType {
  collectionName: 'open_hours';
  info: {
    description: '';
    displayName: 'Open Hour';
    pluralName: 'open-hours';
    singularName: 'open-hour';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::open-hour.open-hour',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    headerImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Attribute.String;
    points: Attribute.Component<'elements.bullet-points', true>;
    publishedAt: Attribute.DateTime;
    qa: Attribute.Component<'elements.qa', true>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::open-hour.open-hour',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrderSampleOrderSample extends Schema.CollectionType {
  collectionName: 'order_samples';
  info: {
    description: '';
    displayName: 'OrderSample';
    pluralName: 'order-samples';
    singularName: 'order-sample';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::order-sample.order-sample',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    footerImage: Attribute.Component<'elements.responsive-image'>;
    orderSampleCard: Attribute.Component<'block.order-sample-card'>;
    pageCover: Attribute.Component<'block.page-cover'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::order-sample.order-sample',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPaymentMethodPaymentMethod extends Schema.CollectionType {
  collectionName: 'payment_methods';
  info: {
    description: '';
    displayName: 'paymentMethod';
    pluralName: 'payment-methods';
    singularName: 'payment-method';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contactLinks: Attribute.Component<'elements.link', true>;
    content: Attribute.RichText;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::payment-method.payment-method',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    heading: Attribute.String;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    pageCover: Attribute.Component<'block.page-cover'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::payment-method.payment-method',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPosterPoster extends Schema.CollectionType {
  collectionName: 'posters';
  info: {
    description: '';
    displayName: 'poster';
    pluralName: 'posters';
    singularName: 'poster';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::poster.poster',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ecoCard: Attribute.Component<'block.eco-card'>;
    exploreOurRange: Attribute.Component<'block.product-card-section'>;
    ourSize: Attribute.Component<'block.product-specification-with-twosub-headings'>;
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    printPanic: Attribute.Component<'block.faq'>;
    printspiration: Attribute.Component<'block.printspiration'>;
    productSpecifications: Attribute.Component<
      'block.product-specification',
      true
    >;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::poster.poster',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPrintEnquiryPrintEnquiry extends Schema.SingleType {
  collectionName: 'print_enquiries';
  info: {
    displayName: 'printEnquiry';
    pluralName: 'print-enquiries';
    singularName: 'print-enquiry';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::print-enquiry.print-enquiry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    printSos: Attribute.Component<'block.print-sos'>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::print-enquiry.print-enquiry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPrivacyPolicyPrivacyPolicy extends Schema.CollectionType {
  collectionName: 'privacy_policies';
  info: {
    description: '';
    displayName: 'PrivacyPolicy';
    pluralName: 'privacy-policies';
    singularName: 'privacy-policy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.RichText;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::privacy-policy.privacy-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    pageCover: Attribute.Component<'block.page-cover'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::privacy-policy.privacy-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductProduct extends Schema.CollectionType {
  collectionName: 'products';
  info: {
    description: '';
    displayName: 'product';
    pluralName: 'products';
    singularName: 'product';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    categories: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::category.category'
    >;
    collectionPagePointers: Attribute.Component<
      'block.product-collection-page-pointers',
      true
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    customerUrl: Attribute.String;
    defaultPrice: Attribute.Decimal;
    defaultQuantity: Attribute.Integer;
    designTemplates: Attribute.Component<'block.product-design-templates'>;
    faqs: Attribute.Component<'block.product-faq', true>;
    info: Attribute.Component<'block.product-info'>;
    isActive: Attribute.Boolean;
    linkText: Attribute.String;
    minPrice: Attribute.Decimal;
    minQuantity: Attribute.Integer;
    name: Attribute.String & Attribute.Unique;
    productImages: Attribute.Component<'block.product-images'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    specifications: Attribute.Component<'block.product-info-specifications'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiQuickPrintBuyQuickPrintBuy extends Schema.CollectionType {
  collectionName: 'quick_print_buys';
  info: {
    description: '';
    displayName: 'quickPrintBuy';
    pluralName: 'quick-print-buys';
    singularName: 'quick-print-buy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::quick-print-buy.quick-print-buy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    exploreOurRange: Attribute.Component<'block.product-card-section'>;
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::quick-print-buy.quick-print-buy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRequestQuoteRequestQuote extends Schema.CollectionType {
  collectionName: 'request_quotes';
  info: {
    description: '';
    displayName: 'Request Quote';
    pluralName: 'request-quotes';
    singularName: 'request-quote';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::request-quote.request-quote',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    hereToHelp: Attribute.Component<'block.here-to-help'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::request-quote.request-quote',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiResetPasswordResetPassword extends Schema.CollectionType {
  collectionName: 'reset_passwords';
  info: {
    displayName: 'ResetPassword';
    pluralName: 'reset-passwords';
    singularName: 'reset-password';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::reset-password.reset-password',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    heading: Attribute.String;
    publishedAt: Attribute.DateTime;
    subHeading: Attribute.Text;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::reset-password.reset-password',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSignupSignup extends Schema.CollectionType {
  collectionName: 'signups';
  info: {
    displayName: 'Signup';
    pluralName: 'signups';
    singularName: 'signup';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::signup.signup',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    heading: Attribute.String;
    publishedAt: Attribute.DateTime;
    subHeading: Attribute.Text;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::signup.signup',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStationaryAndOfficeStationaryAndOffice
  extends Schema.CollectionType {
  collectionName: 'stationary_and_offices';
  info: {
    description: '';
    displayName: 'stationaryAndOffice';
    pluralName: 'stationary-and-offices';
    singularName: 'stationary-and-office';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::stationary-and-office.stationary-and-office',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    exploreOurRange: Attribute.Component<'block.product-card-section'>;
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::stationary-and-office.stationary-and-office',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStickerSticker extends Schema.CollectionType {
  collectionName: 'stickers';
  info: {
    description: '';
    displayName: 'sticker';
    pluralName: 'stickers';
    singularName: 'sticker';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sticker.sticker',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    exploreOurRange: Attribute.Component<'block.product-card-section'>;
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    printPanic: Attribute.Component<'block.faq'>;
    printspiration: Attribute.Component<'block.printspiration'>;
    productSpecifications: Attribute.Component<
      'block.product-specification',
      true
    >;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    stickerLabelBenefits: Attribute.Component<'block.product-specification-with-twosub-headings'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::sticker.sticker',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTermsAndConditionTermsAndCondition
  extends Schema.CollectionType {
  collectionName: 'terms_and_conditions';
  info: {
    description: '';
    displayName: 'TermAndCondition';
    pluralName: 'terms-and-conditions';
    singularName: 'terms-and-condition';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.RichText;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::terms-and-condition.terms-and-condition',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    pageCover: Attribute.Component<'block.page-cover'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::terms-and-condition.terms-and-condition',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    timezone: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    isEntryValid: Attribute.Boolean;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Attribute.String;
    caption: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ext: Attribute.String;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    height: Attribute.Integer;
    mime: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    size: Attribute.Decimal & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String & Attribute.Required;
    width: Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    type: Attribute.String & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    resetPasswordToken: Attribute.String & Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::artwork-step.artwork-step': ApiArtworkStepArtworkStep;
      'api::auth.auth': ApiAuthAuth;
      'api::banner-and-signage.banner-and-signage': ApiBannerAndSignageBannerAndSignage;
      'api::benefits-of-kaizen.benefits-of-kaizen': ApiBenefitsOfKaizenBenefitsOfKaizen;
      'api::booklet.booklet': ApiBookletBooklet;
      'api::branded-merch.branded-merch': ApiBrandedMerchBrandedMerch;
      'api::business-card.business-card': ApiBusinessCardBusinessCard;
      'api::canva-print-enquiry.canva-print-enquiry': ApiCanvaPrintEnquiryCanvaPrintEnquiry;
      'api::category.category': ApiCategoryCategory;
      'api::chat-to-kaibot.chat-to-kaibot': ApiChatToKaibotChatToKaibot;
      'api::contact-us.contact-us': ApiContactUsContactUs;
      'api::cookie-policy.cookie-policy': ApiCookiePolicyCookiePolicy;
      'api::customer-review.customer-review': ApiCustomerReviewCustomerReview;
      'api::eco-range.eco-range': ApiEcoRangeEcoRange;
      'api::faq-page.faq-page': ApiFaqPageFaqPage;
      'api::flyers-folded-leaflet.flyers-folded-leaflet': ApiFlyersFoldedLeafletFlyersFoldedLeaflet;
      'api::footer.footer': ApiFooterFooter;
      'api::forgot-password.forgot-password': ApiForgotPasswordForgotPassword;
      'api::get-a-quote.get-a-quote': ApiGetAQuoteGetAQuote;
      'api::google-review.google-review': ApiGoogleReviewGoogleReview;
      'api::header-new.header-new': ApiHeaderNewHeaderNew;
      'api::header.header': ApiHeaderHeader;
      'api::here-to-help.here-to-help': ApiHereToHelpHereToHelp;
      'api::how-it-work.how-it-work': ApiHowItWorkHowItWork;
      'api::how-it-works-step.how-it-works-step': ApiHowItWorksStepHowItWorksStep;
      'api::industry.industry': ApiIndustryIndustry;
      'api::kaizen-eco-range.kaizen-eco-range': ApiKaizenEcoRangeKaizenEcoRange;
      'api::kaizen-promise.kaizen-promise': ApiKaizenPromiseKaizenPromise;
      'api::kaizen-promisecard.kaizen-promisecard': ApiKaizenPromisecardKaizenPromisecard;
      'api::landing.landing': ApiLandingLanding;
      'api::login.login': ApiLoginLogin;
      'api::marketing-and-promo.marketing-and-promo': ApiMarketingAndPromoMarketingAndPromo;
      'api::need-a-design.need-a-design': ApiNeedADesignNeedADesign;
      'api::need-design.need-design': ApiNeedDesignNeedDesign;
      'api::new-collection-page.new-collection-page': ApiNewCollectionPageNewCollectionPage;
      'api::notepad.notepad': ApiNotepadNotepad;
      'api::open-hour.open-hour': ApiOpenHourOpenHour;
      'api::order-sample.order-sample': ApiOrderSampleOrderSample;
      'api::payment-method.payment-method': ApiPaymentMethodPaymentMethod;
      'api::poster.poster': ApiPosterPoster;
      'api::print-enquiry.print-enquiry': ApiPrintEnquiryPrintEnquiry;
      'api::privacy-policy.privacy-policy': ApiPrivacyPolicyPrivacyPolicy;
      'api::product.product': ApiProductProduct;
      'api::quick-print-buy.quick-print-buy': ApiQuickPrintBuyQuickPrintBuy;
      'api::request-quote.request-quote': ApiRequestQuoteRequestQuote;
      'api::reset-password.reset-password': ApiResetPasswordResetPassword;
      'api::signup.signup': ApiSignupSignup;
      'api::stationary-and-office.stationary-and-office': ApiStationaryAndOfficeStationaryAndOffice;
      'api::sticker.sticker': ApiStickerSticker;
      'api::terms-and-condition.terms-and-condition': ApiTermsAndConditionTermsAndCondition;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
