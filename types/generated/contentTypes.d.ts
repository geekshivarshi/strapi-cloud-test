import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
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
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
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
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
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
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
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
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
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
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
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
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
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
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
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
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
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
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
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
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
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
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBannerAndSignageBannerAndSignage
  extends Schema.CollectionType {
  collectionName: 'banner_and_signages';
  info: {
    singularName: 'banner-and-signage';
    pluralName: 'banner-and-signages';
    displayName: 'banner and Signage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    exploreOurRange: Attribute.Component<'block.product-card-section'>;
    printspiration: Attribute.Component<'block.printspiration'>;
    ecoCard: Attribute.Component<'block.eco-card'>;
    printPanic: Attribute.Component<'block.faq'>;
    bannerUsageGuide: Attribute.Component<'block.product-specification'>;
    videoSection: Attribute.Component<'block.video-section'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::banner-and-signage.banner-and-signage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::banner-and-signage.banner-and-signage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBrandedMerchBrandedMerch extends Schema.CollectionType {
  collectionName: 'branded_merches';
  info: {
    singularName: 'branded-merch';
    pluralName: 'branded-merches';
    displayName: 'Branded Merch';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageCover: Attribute.Component<'block.page-cover'>;
    brochure: Attribute.Component<'elements.section'>;
    brochureCarousel: Attribute.Component<'elements.new-image', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::branded-merch.branded-merch',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'business-card';
    pluralName: 'business-cards';
    displayName: 'Business card';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageCover: Attribute.Component<'block.page-cover'> & Attribute.Required;
    pageHeading: Attribute.Component<'block.page-heading'>;
    exploreOurRange: Attribute.Component<'block.explore-range-cards', true>;
    ourMaterials: Attribute.Component<'block.product-specification'>;
    printPanic: Attribute.Component<'block.faq'>;
    printSos: Attribute.Component<'block.print-sos'>;
    ecoCard: Attribute.Component<'block.eco-card'>;
    ultimateTouches: Attribute.Component<'block.product-specification'>;
    exploreOurCategories: Attribute.Component<'block.product-card-section'>;
    printspiration: Attribute.Component<'block.printspiration'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::business-card.business-card',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::business-card.business-card',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiChatToKaibotChatToKaibot extends Schema.SingleType {
  collectionName: 'chat_to_kaibots';
  info: {
    singularName: 'chat-to-kaibot';
    pluralName: 'chat-to-kaibots';
    displayName: 'Chat To Kaibot';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.String;
    headerImage: Attribute.Media;
    footerText: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::chat-to-kaibot.chat-to-kaibot',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'contact-us';
    pluralName: 'contact-uses';
    displayName: 'Contact us';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeader: Attribute.Component<'elements.card-with-image-item'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-us.contact-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact-us.contact-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEcoRangeEcoRange extends Schema.SingleType {
  collectionName: 'eco_ranges';
  info: {
    singularName: 'eco-range';
    pluralName: 'eco-ranges';
    displayName: 'Eco Range';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    link: Attribute.Component<'elements.link'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::eco-range.eco-range',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::eco-range.eco-range',
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
    singularName: 'flyers-folded-leaflet';
    pluralName: 'flyers-folded-leaflets';
    displayName: 'FlyersAndFoldedLeaflet';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    exploreOurRange: Attribute.Component<'block.product-card-section'>;
    printspiration: Attribute.Component<'block.printspiration'>;
    ourMaterials: Attribute.Component<'block.product-specification'>;
    ecoCard: Attribute.Component<'block.eco-card'>;
    printPanic: Attribute.Component<'block.faq'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::flyers-folded-leaflet.flyers-folded-leaflet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'footer';
    pluralName: 'footers';
    displayName: 'footer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cta: Attribute.Component<'block.cta'>;
    category: Attribute.Component<'block.catergory', true>;
    socialMedia: Attribute.Component<'elements.image', true>;
    copyRight: Attribute.String;
    footerDrawingImage: Attribute.Media;
    chatBotImg: Attribute.Media;
    chatBotText: Attribute.String;
    topLeftImage: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGetAQuoteGetAQuote extends Schema.SingleType {
  collectionName: 'get_a_quotes';
  info: {
    singularName: 'get-a-quote';
    pluralName: 'get-a-quotes';
    displayName: 'Get a Quote';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.Text;
    buttonLink: Attribute.Component<'elements.link'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::get-a-quote.get-a-quote',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'google-review';
    pluralName: 'google-reviews';
    displayName: 'Google review';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    averageRating: Attribute.Decimal;
    totalReviews: Attribute.BigInteger;
    link: Attribute.Component<'elements.link'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::google-review.google-review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::google-review.google-review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHeaderHeader extends Schema.SingleType {
  collectionName: 'headers';
  info: {
    singularName: 'header';
    pluralName: 'headers';
    displayName: 'Header';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    appBarCategory: Attribute.JSON;
    bestSellers: Attribute.JSON;
    specialOffers: Attribute.JSON;
    quickBuys: Attribute.JSON;
    popoverImage: Attribute.Media;
    imageLink: Attribute.Component<'elements.link'>;
    topHeaderText: Attribute.String;
    topHeaderCouponCode: Attribute.String;
    isTopHeaderVisible: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::header.header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'here-to-help';
    pluralName: 'here-to-helps';
    displayName: 'Here to Help';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.String;
    leftImage: Attribute.Media;
    rightImage: Attribute.Media;
    descriptionPoints: Attribute.Component<'elements.bullet-points', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::here-to-help.here-to-help',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::here-to-help.here-to-help',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomeHome extends Schema.CollectionType {
  collectionName: 'homes';
  info: {
    singularName: 'home';
    pluralName: 'homes';
    displayName: 'home';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    test: Attribute.String;
    next: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiIndustryIndustry extends Schema.CollectionType {
  collectionName: 'industries';
  info: {
    singularName: 'industry';
    pluralName: 'industries';
    displayName: 'Industry';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageCover: Attribute.Component<'block.page-cover'>;
    exploreCategories: Attribute.Component<'block.explore-categories'>;
    partners: Attribute.Component<'block.partners'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::industry.industry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'kaizen-eco-range';
    pluralName: 'kaizen-eco-ranges';
    displayName: 'kaizenEcoRange';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    exploreOurRange: Attribute.Component<'block.product-card-section'>;
    ecoCard: Attribute.Component<'block.eco-card'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::kaizen-eco-range.kaizen-eco-range',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::kaizen-eco-range.kaizen-eco-range',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLandingLanding extends Schema.CollectionType {
  collectionName: 'landings';
  info: {
    singularName: 'landing';
    pluralName: 'landings';
    displayName: 'landing';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageCover: Attribute.Component<'block.landing-page-cover'>;
    printAndProsper: Attribute.Component<'block.product-card-section'>;
    exploreOurCategories: Attribute.Component<'block.product-card-section'>;
    ecoCard: Attribute.Component<'block.eco-card'>;
    exploreEcoRange: Attribute.Component<'block.product-card-section'>;
    enquirySection: Attribute.Component<'block.print-sos'>;
    printWithKaizen: Attribute.Component<'block.print-with-kaizen'>;
    printingSection: Attribute.Component<'block.insta-post-section'>;
    customerReviews: Attribute.Component<'block.customer-reviews', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::landing.landing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::landing.landing',
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
    singularName: 'marketing-and-promo';
    pluralName: 'marketing-and-promos';
    displayName: 'marketingAndPromo';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    exploreOurRange: Attribute.Component<'block.product-card-section'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::marketing-and-promo.marketing-and-promo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'need-a-design';
    pluralName: 'need-a-designs';
    displayName: 'need a design';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageCover: Attribute.Component<'block.page-cover'>;
    formStyleImages: Attribute.Component<'elements.list-item-with-image', true>;
    header: Attribute.Component<'elements.card-with-image-item'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::need-a-design.need-a-design',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'need-design';
    pluralName: 'need-designs';
    displayName: 'Need Design';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    needDesign: Attribute.Component<'elements.link'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::need-design.need-design',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::need-design.need-design',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOpenHourOpenHour extends Schema.SingleType {
  collectionName: 'open_hours';
  info: {
    singularName: 'open-hour';
    pluralName: 'open-hours';
    displayName: 'Open Hour';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String;
    points: Attribute.Component<'elements.bullet-points', true>;
    qa: Attribute.Component<'elements.qa', true>;
    headerImage: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::open-hour.open-hour',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::open-hour.open-hour',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPosterPoster extends Schema.CollectionType {
  collectionName: 'posters';
  info: {
    singularName: 'poster';
    pluralName: 'posters';
    displayName: 'poster';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    printspiration: Attribute.Component<'block.printspiration'>;
    ourMaterials: Attribute.Component<'block.product-specification'>;
    ecoCard: Attribute.Component<'block.eco-card'>;
    exploreOurRange: Attribute.Component<'block.product-card-section'>;
    printPanic: Attribute.Component<'block.faq'>;
    ourSize: Attribute.Component<'block.product-specification'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::poster.poster',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'print-enquiry';
    pluralName: 'print-enquiries';
    displayName: 'printEnquiry';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    printSos: Attribute.Component<'block.print-sos'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::print-enquiry.print-enquiry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::print-enquiry.print-enquiry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiQuickPrintBuyQuickPrintBuy extends Schema.CollectionType {
  collectionName: 'quick_print_buys';
  info: {
    singularName: 'quick-print-buy';
    pluralName: 'quick-print-buys';
    displayName: 'quickPrintBuy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    exploreOurRange: Attribute.Component<'block.product-card-section'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::quick-print-buy.quick-print-buy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::quick-print-buy.quick-print-buy',
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
    singularName: 'stationary-and-office';
    pluralName: 'stationary-and-offices';
    displayName: 'stationaryAndOffice';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    exploreOurRange: Attribute.Component<'block.product-card-section'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::stationary-and-office.stationary-and-office',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'sticker';
    pluralName: 'stickers';
    displayName: 'sticker';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    exploreOurRange: Attribute.Component<'block.product-card-section'>;
    printspiration: Attribute.Component<'block.printspiration'>;
    StickerLabelBenefits: Attribute.Component<'block.product-specification'>;
    stickersUsage: Attribute.Component<'block.product-specification'>;
    printPanic: Attribute.Component<'block.faq'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sticker.sticker',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sticker.sticker',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::banner-and-signage.banner-and-signage': ApiBannerAndSignageBannerAndSignage;
      'api::branded-merch.branded-merch': ApiBrandedMerchBrandedMerch;
      'api::business-card.business-card': ApiBusinessCardBusinessCard;
      'api::chat-to-kaibot.chat-to-kaibot': ApiChatToKaibotChatToKaibot;
      'api::contact-us.contact-us': ApiContactUsContactUs;
      'api::eco-range.eco-range': ApiEcoRangeEcoRange;
      'api::flyers-folded-leaflet.flyers-folded-leaflet': ApiFlyersFoldedLeafletFlyersFoldedLeaflet;
      'api::footer.footer': ApiFooterFooter;
      'api::get-a-quote.get-a-quote': ApiGetAQuoteGetAQuote;
      'api::google-review.google-review': ApiGoogleReviewGoogleReview;
      'api::header.header': ApiHeaderHeader;
      'api::here-to-help.here-to-help': ApiHereToHelpHereToHelp;
      'api::home.home': ApiHomeHome;
      'api::industry.industry': ApiIndustryIndustry;
      'api::kaizen-eco-range.kaizen-eco-range': ApiKaizenEcoRangeKaizenEcoRange;
      'api::landing.landing': ApiLandingLanding;
      'api::marketing-and-promo.marketing-and-promo': ApiMarketingAndPromoMarketingAndPromo;
      'api::need-a-design.need-a-design': ApiNeedADesignNeedADesign;
      'api::need-design.need-design': ApiNeedDesignNeedDesign;
      'api::open-hour.open-hour': ApiOpenHourOpenHour;
      'api::poster.poster': ApiPosterPoster;
      'api::print-enquiry.print-enquiry': ApiPrintEnquiryPrintEnquiry;
      'api::quick-print-buy.quick-print-buy': ApiQuickPrintBuyQuickPrintBuy;
      'api::stationary-and-office.stationary-and-office': ApiStationaryAndOfficeStationaryAndOffice;
      'api::sticker.sticker': ApiStickerSticker;
    }
  }
}
