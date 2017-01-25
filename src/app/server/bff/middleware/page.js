import has from 'lodash/object/has';
import makeRequest from '../../makeRequest';
import getPageID from '../helper/getPageID';
import get from 'lodash/object/get';
import find from 'lodash/collection/find';

export default async function page(req, res, next) {
    try {
        if (has(req, 'data.entity')) {
            next();
            return;
        }

        const {page, preview, section, subsection} = req.query;
        const pageID = getPageID(page);

        if (!pageID) throw {status: 404, message: 'Invalid page ID', section, page};

        const saved = `?saved=${!!preview}`;
        const pageData = await makeRequest(`${req.app.config.services.remote.entity}/${pageID}${saved}`);

        const path = `/${section}/${subsection}/${page}`;

        if (!pageData.url || pageData.url !== path) {
            throw {status: 404, message: `Path ${path} does not match page`};
        }

        req.data = req.data || {};
        req.data.entity = { ...pageData };
        req.data.section = { id: pageData.sectionId, name: section }; // Initially used to set the ad slot within @bxm/ads + gtm in @bxm/server
        req.data.subsection = { name: subsection };
        next();
    } catch(error) {
        console.error('[bff/middleware/page]', error);
        next(error);
    }
}
