import get from 'lodash/object/get';
import makeRequest from '../../makeRequest';
import { getLatestTeasers } from '../api/listing';
import getTrending from '../api/trending';
import { parseEntities } from '../helper/parseEntity';
const trendingCount = 6;
const latestTeaserCount = 6;
const listCount = 14;
const videoGalleryTeaserCount = 6;

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

        const skip = ((pageNo - 1) * listCount);
        const [pageData, latestTeasersResp, videoGalleryTeasers, trendingItems] = await Promise.all([
            makeRequest(`${req.app.locals.config.services.remote.entity}/homepage`),
            getLatestTeasers(listCount, skip),
            getLatestTeasers(videoGalleryTeaserCount, undefined, 'video eq %27$contentTags%27').catch(() => ({ data: [] })),
            getTrending(trendingCount)
        ]);
        videoGalleryTeasers.data = videoGalleryTeasers.data.map((gallery) => {
            gallery.contentImageUrl = get(gallery, 'contentVideo.properties.videoConfiguration.videoStillUrl', gallery.contentImageUrl);
            return gallery;
        });

        // TODO: need to handle `data` in resp better
        const latestTeasers = latestTeasersResp || {
            data: []
        };

        let previousPage = null;
        if (pageNo > 1) {
            const path = pageNo === 2 ? '/' : `/?pageNo=${pageNo - 1}`;
            previousPage = {
                path,
                url: `${req.app.locals.config.site.host}${path}`
            };
        }

        let nextPage = null;
        if (skip + latestTeasers.data.length < latestTeasers.totalCount) {
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
        req.data.latestTeasers = latestTeasers.data.slice(0, latestTeaserCount);

        req.data.list = {
            listName: 'home',
            params: {
                pageNo
            },
            items: [
                parseEntities(latestTeasers.data.slice(latestTeaserCount))
            ],
            previous: previousPage,
            current: currentPage,
            next: nextPage
        };
        req.data.videoGalleryTeasers = videoGalleryTeasers;
        req.data.trendingItems = trendingItems;
        req.data.section = { id: pageData.id, name: 'Home', urlName: 'home' }; // Initally used to set the ad slot within @bxm/ads + gtm in @bxm/server
        next();
    } catch (error) {
        next(error);
    }
}
