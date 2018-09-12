import makeRequest from '../../makeRequest';
import tagsToQuery from '../helper/tagsToQuery';
import logger from '../../../../logger';
export default async function commercialTag(req, res, next) {
    try {
        const sitePrefix = req.app.locals.config.site.prefix;
        req.data = req.data || {};
        req.data.isFoodSite = ['awwfood', 'foodnz'].includes(sitePrefix.toLowerCase());
        if (!req.data.isFoodSite) {
            next();
            return;
        }
        const allCommercailSectionTags = await makeRequest(req.app.locals.config.services.remote.alltagsections);

        if (!allCommercailSectionTags || !Array.isArray(allCommercailSectionTags) || !allCommercailSectionTags.length) {
            next();
            return;
        }

        const commercialTagSections = allCommercailSectionTags.filter(tag => tag.nodeTypeAlias === 'CommercialTagSection');
        const tagSections = allCommercailSectionTags.filter(tag => tag.nodeTypeAlias === 'TagSection');
        const tagsToExclude = commercialTagSections.reduce((fullNameList, currentTag) => {
            const tagsDetails = Array.isArray(currentTag.tagsDetails) && currentTag.tagsDetails.length ? currentTag.tagsDetails : [];
            const newFullNames = tagsDetails.map(t => t.fullName);
            return [...fullNameList, ...newFullNames];
        }, []);

        req.data.tagSections = tagSections;
        req.data.commercialTagSections = commercialTagSections;
        req.data.tagsToExclude = tagsToExclude;
        req.data.excludeTagQuery = tagsToQuery(tagsToExclude);
        next();
    } catch (error) {
        logger.error(error);
        next();
    }
}