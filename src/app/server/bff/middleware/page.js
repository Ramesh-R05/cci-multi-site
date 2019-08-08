import has from 'lodash/object/has';
import getPageID from '../helper/getPageID';
import API from '../api';

export default async function pageMiddleware(req, res, next) {
    try {
        if (has(req, 'data.entity')) {
            next();

            return;
        }

        const id = req.query.id || req.params.id;
        const query = req.query && req.query.page ? req.query : req.params;
        const { page, preview, section, subsection } = query;
        const pageID = id ? getPageID(`${page}${id}`) : getPageID(page);

        if (!pageID) {
            throw { status: 404, message: 'Invalid page ID', section, page };
        }

        const saved = `?saved=${!!preview}`;
        const pageData = await API.getEntity(`${pageID}${saved}`);

        if (!id) {
            const path = subsection ? `/${section}/${subsection}/${page}` : `/${section}/${page}`;

            if (!pageData.url || pageData.url !== path) {
                throw { status: 404, message: `Path ${path} does not match page` };
            }
        }

        req.data = req.data || {};
        req.data.entity = { ...pageData };
        req.data.section = {
            // here is a temp way to prevent amp page from breaking
            // we need the section data
            id: pageData.sectionId,
            name: section || '',
            urlName: section || ''
        }; // Initially used to set the ad slot within @bxm/ads + gtm in @bxm/server
        req.data.subsection = { name: subsection, urlName: subsection };
        next();
    } catch (error) {
        next(error);
    }
}
