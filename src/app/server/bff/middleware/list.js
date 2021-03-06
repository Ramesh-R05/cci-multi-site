import API from '../api';
import { parseEntities } from '../helper/parseEntity';
import tagsToQuery from '../helper/tagsToQuery';
const listCount = 14;

export default async function list(req, res, next) {
    try {
        const { commercialTagSections, excludeTagQuery } = req.data;
        const pageNo = parseInt(req.query.pageNo, 10);
        const { section, filter, tagSectionQuery } = req.query;

        let listingQuery;

        if (tagSectionQuery) {
            listingQuery = tagSectionQuery;
        } else {
            const query = section && filter ? `${filter} eq %27${section}%27` : undefined;
            const queryWithCommercialTag = query ? `${query} and ${excludeTagQuery}` : excludeTagQuery;
            listingQuery = excludeTagQuery ? queryWithCommercialTag : query;
            const currentCommercialTag = Array.isArray(commercialTagSections)
                ? commercialTagSections.filter(commercialTagSection => commercialTagSection.url === req.query.section)
                : [];

            if (currentCommercialTag.length && Array.isArray(currentCommercialTag[0].tagsDetails)) {
                if (currentCommercialTag[0].tagsDetails.length) {
                    const commercialTagFullNames = currentCommercialTag[0].tagsDetails.map(tag => tag.fullName);
                    listingQuery = tagsToQuery(commercialTagFullNames, 'eq');
                }
            }
        }

        const top = listCount;
        const skip = (pageNo - 1) * listCount;
        const latestTeasers = await API.getLatestTeasers(top, skip, listingQuery);
        const listResp = latestTeasers && latestTeasers.data ? latestTeasers : { data: [] };

        const basePath = section ? `/${section}` : '/';
        let previousPage = null;

        if (pageNo > 1) {
            const path = `${basePath}?pageNo=${pageNo - 1}`;
            previousPage = {
                path,
                url: `${req.app.locals.config.site.host}${path}`
            };
        }

        let nextPage = null;

        if (skip + listResp.data.length < listResp.totalCount) {
            const path = `${basePath}?pageNo=${pageNo + 1}`;
            nextPage = {
                path,
                url: `${req.app.locals.config.site.host}${path}`
            };
        }

        const path = pageNo > 1 ? `${basePath}?pageNo=${pageNo}` : basePath;
        const currentPage = {
            path,
            url: `${req.app.locals.config.site.host}${path}`
        };

        res.body = {
            list: {
                listName: section || 'home',
                params: {
                    ...req.query,
                    pageNo
                },
                items: [parseEntities(listResp.data)],
                previous: previousPage,
                current: currentPage,
                next: nextPage
            }
        };

        next();
    } catch (error) {
        next(error);
    }
}
