import makeRequest from '../../makeRequest';
import tagsToQuery from '../helper/tagsToQuery';
import logger from '../../../../logger';
export default async function commercialTag(req, res, next) {
    try {
        const {
            config: {
                services: { remote: entity },
                site: { prefix }
            }
        } = req.app.locals;

        req.data = req.data || {};
        req.data.isFoodSite = ['awwfood', 'foodnz'].includes(prefix.toLowerCase());
        if (!req.data.isFoodSite) {
            next();
            return;
        }
        const allCommercailSectionTags = await makeRequest(`${entity}/alltagsections/`);

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
