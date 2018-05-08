const entityPropertyMap = {
    id: 'id',
    contentTitle: 'title',
    contentSummaryTitle: 'shortTitle',
    contentBody: 'body',
    contentProfiles: 'authorProfiles',
    pageDateCreated: 'dateCreated',
    updated_at: 'dateModified',
    contentNewsKeywords: 'googleNewsKeywords',
    contentImageAltText: 'imageAltText',
    contentImageCaption: 'imageCaption',
    contentFacebookImageUrl: 'imageFacebookUrl',
    contentImageUrl: 'imageUrl',
    contentCampaign: 'campaign',
    contentMagazineIssue: 'magazineIssue',
    contentPhotoCredit: 'photoCredit',
    contentStyling: 'styling',
    nodeTypeAlias: 'nodeType',
    contentSummary: 'summary',
    contentCustomLabel: 'customLabel',
    contentSource: 'source',
    articleSource: 'source',
    source: 'source',
    adBrand: 'brand',
    url: 'url',
    location: 'url',
    parentName: 'parentName',
    parentUrl: 'parentUrl',
    contentVideo: 'video',
    contentHasVideo: 'hasVideo',
    contentGallery: 'galleryItems',
    siteName: 'siteName',
    siteUrl: 'siteUrl',
    tagsDetails: 'tagsDetails',
    subsections: 'subsections',
    recipeCookingTime: 'recipeCookingTime',
    recipeCookingMethod: 'recipeCookingMethod',
    recipeIngredients: 'recipeIngredients',
    recipeServings: 'recipeServings',
    recipeTips: 'recipeTips',
    contentAddress: 'address',
    contentHours: 'hours',
    contentPrices: 'prices',
    recipeCourse: 'recipeCourse',
    cuisine: 'recipeCuisine',
    disableAmp: 'disableAmp',
    enableAmp: 'enableGalleryAmp'
};

export function parseEntity(data, propertyMapOverride = {}) {
    const entity = {};
    const propertyMap = Object.assign({}, entityPropertyMap, propertyMapOverride);
    Object.keys(propertyMap).forEach((key) => {
        const propertyName = propertyMap[key];
        if (propertyName && data[key]) {
            entity[propertyName] = data[key];
        }
    });

    return entity;
}

export function parseEntities(entities, propertyMapOverride) {
    return entities.map(entity => parseEntity(entity, propertyMapOverride));
}
