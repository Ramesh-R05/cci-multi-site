import tagsToQuery from '../helper/tagsToQuery';
import getEntity from '../api/entity';

export default async function commercialTag(req, res, next) {
    try {
        const {
            config: {
                site: { prefix }
            }
        } = req.app.locals;

        req.data = req.data || {};
        req.data.isFoodSite = ['awwfood', 'foodnz'].includes(prefix.toLowerCase());

        if (!req.data.isFoodSite) {
            next();

            return;
        }

        const allCommercailSectionTags = await getEntity('alltagsections').catch(() => []);

        if (!allCommercailSectionTags || !Array.isArray(allCommercailSectionTags) || !allCommercailSectionTags.length) {
            next();

            return;
        }

        const commercialTagSections = allCommercailSectionTags.filter(tag => tag.nodeTypeAlias === 'CommercialTagSection');
        const tagSections = allCommercailSectionTags.filter(tag => tag.nodeTypeAlias === 'TagSection');
        const tagsToExclude = commercialTagSections.reduce((fullNameList, currentTag) => {
            const tagsDetails = Array.isArray(currentTag.tagsDetails) && currentTag.tagsDetails.length ? currentTag.tagsDetails : [];
            const newFullNames = tagsDetails.map(tag => tag.fullName);

            return [...fullNameList, ...newFullNames];
        }, []);

        req.data.tagSections = tagSections;
        req.data.commercialTagSections = commercialTagSections;
        req.data.tagsToExclude = tagsToExclude;
        req.data.excludeTagQuery = tagsToQuery(tagsToExclude);
        next();
    } catch (error) {
        next(error);
    }
}
