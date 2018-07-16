import makeRequest from '../../makeRequest';
import tagsToQuery from '../helper/tagsToQuery';
export default async function commercialTag(req, res, next) {
    try {
        const sitePrefix = req.app.locals.config.site.prefix;
        req.data = req.data || {};
        req.data.isFoodSite = ['awwfood', 'foodnz'].includes(sitePrefix.toLowerCase());
        if (!req.data.isFoodSite) {
            next();
            return;
        }
        const commercialTags = await makeRequest(req.app.locals.config.services.remote.commercialtagsections);

        if (
            !commercialTags ||
            !Array.isArray(commercialTags) ||
            !commercialTags.length ||
            !commercialTags[0].tagsDetails ||
            !commercialTags[0].tagsDetails.length
        ) {
            next();
            return;
        }
        req.data.commercialTag = commercialTags[0].tagsDetails.map(tag => tag.fullName);
        req.data.excludeCommercialTagQuery = tagsToQuery(req.data.commercialTag);
        next();
    } catch (error) {
        next();
    }
}
