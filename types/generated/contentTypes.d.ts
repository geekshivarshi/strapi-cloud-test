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

export interface ApiArtworkStepArtworkStep extends Schema.SingleType {
  collectionName: 'artwork_steps';
  info: {
    singularName: 'artwork-step';
    pluralName: 'artwork-steps';
    displayName: 'ArtworkStep';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ArtworkStep: Attribute.Component<'block.canva-artwork-step', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::artwork-step.artwork-step',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'auth';
    pluralName: 'auths';
    displayName: 'auth';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bottomLeftImage: Attribute.Media;
    bottomRightImage: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::auth.auth', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::auth.auth', 'oneToOne', 'admin::user'> &
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
    videoSection: Attribute.Component<'block.video-section'>;
    bannerUsageGuide: Attribute.Component<'block.product-specification-with-twosub-headings'>;
    seo: Attribute.Component<'shared.seo'>;
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

export interface ApiBenefitsOfKaizenBenefitsOfKaizen extends Schema.SingleType {
  collectionName: 'benefits_of_kaizens';
  info: {
    singularName: 'benefits-of-kaizen';
    pluralName: 'benefits-of-kaizens';
    displayName: 'Benefits of Kaizen';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    benefitsWithKaizen: Attribute.Component<'block.print-with-kaizen'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::benefits-of-kaizen.benefits-of-kaizen',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'booklet';
    pluralName: 'booklets';
    displayName: 'Booklet';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    exploreOurCategories: Attribute.Component<'block.product-card-section'>;
    printspiration: Attribute.Component<'block.printspiration'>;
    productSpecifications: Attribute.Component<
      'block.product-specification',
      true
    >;
    ecoCard: Attribute.Component<'block.eco-card'>;
    printPanic: Attribute.Component<'block.faq'>;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::booklet.booklet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    hereToHelp: Attribute.Component<'block.here-to-help'>;
    seo: Attribute.Component<'shared.seo'>;
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
    printPanic: Attribute.Component<'block.faq'>;
    ecoCard: Attribute.Component<'block.eco-card'>;
    exploreOurCategories: Attribute.Component<'block.product-card-section'>;
    printspiration: Attribute.Component<'block.printspiration'>;
    productSpecifications: Attribute.Component<
      'block.product-specification',
      true
    >;
    seo: Attribute.Component<'shared.seo'>;
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

export interface ApiCanvaPrintEnquiryCanvaPrintEnquiry
  extends Schema.SingleType {
  collectionName: 'canva_print_enquiries';
  info: {
    singularName: 'canva-print-enquiry';
    pluralName: 'canva-print-enquiries';
    displayName: 'CanvaPrintEnquiry';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    canvaPrintEnquiry: Attribute.Component<'block.canva-print-sos'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::canva-print-enquiry.canva-print-enquiry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'category';
    pluralName: 'categories';
    displayName: 'Category';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String & Attribute.Unique;
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    products: Attribute.Relation<
      'api::category.category',
      'manyToMany',
      'api::product.product'
    >;
    productOverrides: Attribute.Component<
      'block.category-product-overrides',
      true
    >;
    bottomBlocks: Attribute.DynamicZone<
      [
        'block.printspiration',
        'block.faq',
        'block.eco-card',
        'block.product-specification',
        'block.product-specification-with-twosub-headings'
      ]
    >;
    seo: Attribute.Component<'shared.seo'>;
    withGetAQuoteBanner: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::category.category',
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
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    chatToKaibot: Attribute.Component<'block.chat-to-kaibot'>;
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
    seo: Attribute.Component<'shared.seo'>;
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

export interface ApiCookiePolicyCookiePolicy extends Schema.CollectionType {
  collectionName: 'cookie_policies';
  info: {
    singularName: 'cookie-policy';
    pluralName: 'cookie-policies';
    displayName: 'CookiePolicy';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.RichText;
    seo: Attribute.Component<'shared.seo'>;
    pageCover: Attribute.Component<'block.page-cover'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cookie-policy.cookie-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'customer-review';
    pluralName: 'customer-reviews';
    displayName: 'customerReview';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    customerReview: Attribute.Component<'block.customer-reviews', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::customer-review.customer-review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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

export interface ApiFaqPageFaqPage extends Schema.CollectionType {
  collectionName: 'faq_pages';
  info: {
    singularName: 'faq-page';
    pluralName: 'faq-pages';
    displayName: 'FaqPage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageCover: Attribute.Component<'block.page-cover'>;
    faq: Attribute.Component<'block.faq'>;
    chatToKaibot: Attribute.Component<'block.chat-to-kaibot'>;
    openHour: Attribute.Component<'block.open-hour'>;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::faq-page.faq-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    ecoCard: Attribute.Component<'block.eco-card'>;
    printPanic: Attribute.Component<'block.faq'>;
    productSpecifications: Attribute.Component<
      'block.product-specification',
      true
    >;
    seo: Attribute.Component<'shared.seo'>;
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
    contactLinks: Attribute.Component<'elements.link', true>;
    contactLinkIcon: Attribute.Media;
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

export interface ApiForgotPasswordForgotPassword extends Schema.CollectionType {
  collectionName: 'forgot_passwords';
  info: {
    singularName: 'forgot-password';
    pluralName: 'forgot-passwords';
    displayName: 'ForgotPassword';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::forgot-password.forgot-password',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    brandedMerch: Attribute.JSON;
    specialOffers: Attribute.JSON;
    quickBuys: Attribute.JSON;
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

export interface ApiHeaderNewHeaderNew extends Schema.SingleType {
  collectionName: 'header_news';
  info: {
    singularName: 'header-new';
    pluralName: 'header-news';
    displayName: 'HeaderNew';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    topHeader: Attribute.Component<'block.header-top-header'>;
    animatedSearchText: Attribute.JSON;
    Navigation: Attribute.Component<'block.header-navigation', true>;
    subMenuSections: Attribute.Component<
      'block.header-sub-menu-sections',
      true
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::header-new.header-new',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::header-new.header-new',
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

export interface ApiHowItWorkHowItWork extends Schema.CollectionType {
  collectionName: 'how_it_works';
  info: {
    singularName: 'how-it-work';
    pluralName: 'how-it-works';
    displayName: 'How it work';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    howItWorksSteps: Attribute.Component<'block.how-it-works-step', true>;
    trackOrder: Attribute.Component<'block.track-order'>;
    myAccountCard: Attribute.Component<'block.my-account-card'>;
    seo: Attribute.Component<'shared.seo'>;
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::how-it-work.how-it-work',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'how-it-works-step';
    pluralName: 'how-it-works-steps';
    displayName: 'How it works step';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    howItWorks: Attribute.Component<'block.how-it-work-component'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::how-it-works-step.how-it-works-step',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    hereToHelp: Attribute.Component<'block.here-to-help'>;
    seo: Attribute.Component<'shared.seo'>;
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
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    exploreOurRange: Attribute.Component<'block.product-card-section'>;
    ecoCard: Attribute.Component<'block.eco-card'>;
    seo: Attribute.Component<'shared.seo'>;
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

export interface ApiKaizenPromiseKaizenPromise extends Schema.CollectionType {
  collectionName: 'kaizen_promises';
  info: {
    singularName: 'kaizen-promise';
    pluralName: 'kaizen-promises';
    displayName: 'KaizenPromise';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    kaizenProcess: Attribute.Component<'block.kaizen-process'>;
    seo: Attribute.Component<'shared.seo'>;
    productSpecifications: Attribute.Component<
      'block.product-specification',
      true
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::kaizen-promise.kaizen-promise',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'kaizen-promisecard';
    pluralName: 'kaizen-promisecards';
    displayName: 'KaizenPromiseCard';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.String;
    description: Attribute.Text;
    backgroundImage: Attribute.Component<'elements.new-image'>;
    logoBackgroundImage: Attribute.Component<'elements.new-image'>;
    logoImage: Attribute.Component<'elements.new-image'>;
    logoText: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::kaizen-promisecard.kaizen-promisecard',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    seo: Attribute.Component<'shared.seo'>;
    hero: Attribute.Component<'block.landing-hero'>;
    exploreIndustries: Attribute.Component<'block.product-card-section'>;
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

export interface ApiLoginLogin extends Schema.CollectionType {
  collectionName: 'logins';
  info: {
    singularName: 'login';
    pluralName: 'logins';
    displayName: 'Login';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::login.login',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    seo: Attribute.Component<'shared.seo'>;
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
    seo: Attribute.Component<'shared.seo'>;
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

export interface ApiNewCollectionPageNewCollectionPage
  extends Schema.CollectionType {
  collectionName: 'new_collection_pages';
  info: {
    singularName: 'new-collection-page';
    pluralName: 'new-collection-pages';
    displayName: 'New Collection Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Attribute.String;
    urlSlug: Attribute.String & Attribute.Unique;
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    exploreOurRange: Attribute.Component<'block.product-card-section'>;
    seo: Attribute.Component<'shared.seo'>;
    withGetAQuoteBanner: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::new-collection-page.new-collection-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::new-collection-page.new-collection-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNotepadNotepad extends Schema.CollectionType {
  collectionName: 'notepads';
  info: {
    singularName: 'notepad';
    pluralName: 'notepads';
    displayName: 'Notepad';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    exploreOurCategories: Attribute.Component<'block.product-card-section'>;
    printspiration: Attribute.Component<'block.printspiration'>;
    productSpecifications: Attribute.Component<
      'block.product-specification',
      true
    >;
    ecoCard: Attribute.Component<'block.eco-card'>;
    printPanic: Attribute.Component<'block.faq'>;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::notepad.notepad',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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

export interface ApiOrderSampleOrderSample extends Schema.CollectionType {
  collectionName: 'order_samples';
  info: {
    singularName: 'order-sample';
    pluralName: 'order-samples';
    displayName: 'OrderSample';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageCover: Attribute.Component<'block.page-cover'>;
    orderSampleCard: Attribute.Component<'block.order-sample-card'>;
    footerImage: Attribute.Component<'elements.responsive-image'>;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::order-sample.order-sample',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'payment-method';
    pluralName: 'payment-methods';
    displayName: 'paymentMethod';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    heading: Attribute.String;
    content: Attribute.RichText;
    pageCover: Attribute.Component<'block.page-cover'>;
    images: Attribute.Media;
    contactLinks: Attribute.Component<'elements.link', true>;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::payment-method.payment-method',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    ecoCard: Attribute.Component<'block.eco-card'>;
    exploreOurRange: Attribute.Component<'block.product-card-section'>;
    printPanic: Attribute.Component<'block.faq'>;
    productSpecifications: Attribute.Component<
      'block.product-specification',
      true
    >;
    ourSize: Attribute.Component<'block.product-specification-with-twosub-headings'>;
    seo: Attribute.Component<'shared.seo'>;
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

export interface ApiPrivacyPolicyPrivacyPolicy extends Schema.CollectionType {
  collectionName: 'privacy_policies';
  info: {
    singularName: 'privacy-policy';
    pluralName: 'privacy-policies';
    displayName: 'PrivacyPolicy';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.RichText;
    seo: Attribute.Component<'shared.seo'>;
    pageCover: Attribute.Component<'block.page-cover'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::privacy-policy.privacy-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'product';
    pluralName: 'products';
    displayName: 'product';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Unique;
    customerUrl: Attribute.String;
    isActive: Attribute.Boolean;
    productImages: Attribute.Component<'block.product-images'>;
    info: Attribute.Component<'block.product-info'>;
    specifications: Attribute.Component<'block.product-info-specifications'>;
    designTemplates: Attribute.Component<'block.product-design-templates'>;
    faqs: Attribute.Component<'block.product-faq', true>;
    minPrice: Attribute.Decimal;
    defaultPrice: Attribute.Decimal;
    minQuantity: Attribute.Integer;
    defaultQuantity: Attribute.Integer;
    linkText: Attribute.String;
    collectionPagePointers: Attribute.Component<
      'block.product-collection-page-pointers',
      true
    >;
    seo: Attribute.Component<'shared.seo'>;
    categories: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::category.category'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'quick-print-buy';
    pluralName: 'quick-print-buys';
    displayName: 'quickPrintBuy';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageCover: Attribute.Component<'block.page-cover'>;
    pageHeading: Attribute.Component<'block.page-heading'>;
    exploreOurRange: Attribute.Component<'block.product-card-section'>;
    seo: Attribute.Component<'shared.seo'>;
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

export interface ApiRequestQuoteRequestQuote extends Schema.CollectionType {
  collectionName: 'request_quotes';
  info: {
    singularName: 'request-quote';
    pluralName: 'request-quotes';
    displayName: 'Request Quote';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hereToHelp: Attribute.Component<'block.here-to-help'>;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::request-quote.request-quote',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'reset-password';
    pluralName: 'reset-passwords';
    displayName: 'ResetPassword';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::reset-password.reset-password',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'signup';
    pluralName: 'signups';
    displayName: 'Signup';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::signup.signup',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    seo: Attribute.Component<'shared.seo'>;
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
    printPanic: Attribute.Component<'block.faq'>;
    productSpecifications: Attribute.Component<
      'block.product-specification',
      true
    >;
    stickerLabelBenefits: Attribute.Component<'block.product-specification-with-twosub-headings'>;
    seo: Attribute.Component<'shared.seo'>;
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

export interface ApiTermsAndConditionTermsAndCondition
  extends Schema.CollectionType {
  collectionName: 'terms_and_conditions';
  info: {
    singularName: 'terms-and-condition';
    pluralName: 'terms-and-conditions';
    displayName: 'TermAndCondition';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.RichText;
    seo: Attribute.Component<'shared.seo'>;
    pageCover: Attribute.Component<'block.page-cover'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::terms-and-condition.terms-and-condition',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::terms-and-condition.terms-and-condition',
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
      'api::header.header': ApiHeaderHeader;
      'api::header-new.header-new': ApiHeaderNewHeaderNew;
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
    }
  }
}
