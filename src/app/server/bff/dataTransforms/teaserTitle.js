export default function teaserTitle(teaser, appConfig) {
    const { alternativeTitleMap, isFeatureEnabled } = appConfig;
    const transformedTeaser = { ...teaser };

    if (isFeatureEnabled.call(appConfig, 'alternativeTitle') && !!alternativeTitleMap && teaser.nodeTypeAlias) {
        const titleToReplace = teaser.nodeTypeAlias.toLowerCase();

        return {
            ...transformedTeaser,
            parentName: alternativeTitleMap[titleToReplace] || teaser.nodeTypeAlias
        };
    }

    return transformedTeaser;
}
