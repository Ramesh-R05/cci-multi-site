import { parseEntities } from '../helper/parseEntity';
import API from '../api';
const LATEST_TEASER_COUNT = 6;
const LIST_COUNT = 14;

export default async function home(req, res, next) {
    try {
        let pageNo = 1;

        if (req.query) {
            const { page, section, tag } = req.query;

            if (page || section || tag) {
                next();

                return;
            }

            pageNo = parseInt(req.query.pageNo || pageNo, 10);
        }

        const skip = (pageNo - 1) * LIST_COUNT;
        const [pageData, latestTeasersResp] = await Promise.all([
            API.getEntity('homepage'),
            API.getLatestTeasers(LIST_COUNT, skip, req.data.excludeTagQuery)
        ]);

        const latestTeasersData = (latestTeasersResp && latestTeasersResp.data) || [];
        const latestTeasersCount = (latestTeasersResp && latestTeasersResp.totalCount) || 0;

        let previousPage = null;

        if (pageNo > 1) {
            const path = pageNo === 2 ? '/' : `/?pageNo=${pageNo - 1}`;
            previousPage = {
                path,
                url: `${req.app.locals.config.site.host}${path}`
            };
        }

        let nextPage = null;

        if (skip + latestTeasersData.length < latestTeasersCount) {
            const path = `/?pageNo=${pageNo + 1}`;
            nextPage = {
                path,
                url: `${req.app.locals.config.site.host}${path}`
            };
        }

        const path = pageNo > 1 ? `/?pageNo=${pageNo}` : '/';
        const currentPage = {
            path,
            url: `${req.app.locals.config.site.host}${path}`
        };

        req.data = req.data || {};
        req.data.entity = { ...pageData };
        req.data.latestTeasers = latestTeasersData.slice(0, LATEST_TEASER_COUNT);

        if (pageData.enableSearch) {
            req.data.entity.searchBackgroundImage = pageData.searchBackgroundImage && pageData.searchBackgroundImage.url;
        }

        req.data.list = {
            listName: 'home',
            params: {
                pageNo
            },
            items: [parseEntities(latestTeasersData.slice(LATEST_TEASER_COUNT))],
            previous: previousPage,
            current: currentPage,
            next: nextPage
        };

        req.data.section = { id: pageData.id, name: 'Home', urlName: 'home' }; // Initally used to set the ad slot within @bxm/ads + gtm in @bxm/server
        next();
    } catch (error) {
        next(error);
    }
}
