import find from 'lodash/collection/find';
import get from 'lodash/object/get';
import { parseEntities } from '../helper/parseEntity';
import API from '../api';
import tagsToQuery from '../helper/tagsToQuery';
import { reviewItemsSort } from '../dataTransforms';
const LATEST_TEASER_COUNT = 7;

export default async function sectionMiddleware(req, res, next) {
    let LIST_COUNT = 14;

    try {
        let pageNo = 1;
        const { page, section, subsection } = req.query;
        const reviewSection = 'dining-out/restaurant-guide';

        if (`${section}/${subsection}` === reviewSection) {
            LIST_COUNT = 200;
        }

        const { config } = req.app.locals;
        const { commercialTagSections, excludeTagQuery } = req.data;
        pageNo = parseInt(req.query.pageNo || pageNo, 10);
        const nodeTypeAlias = get(req, 'data.entity.nodeTypeAlias', '');
        const id = get(req, 'data.entity.id', '');

        if (
            (nodeTypeAlias !== 'Section' &&
                nodeTypeAlias !== 'Subsection' &&
                nodeTypeAlias !== 'Brand' &&
                nodeTypeAlias !== 'CommercialTagSection') ||
            !section ||
            page
        ) {
            next();

            return;
        }

        let listingQuery;
        let teaserQuery;
        let teaserFilter;
        let sectionQuery;

        if (nodeTypeAlias === 'CommercialTagSection') {
            const currentCommercialTagSection = commercialTagSections.find(tag => tag.id === id);
            const isEmptyTagsDetails =
                !currentCommercialTagSection ||
                !Array.isArray(currentCommercialTagSection.tagsDetails) ||
                !currentCommercialTagSection.tagsDetails.length;

            if (!currentCommercialTagSection || isEmptyTagsDetails) {
                req.data.latestTeasers = [];
                next();

                return;
            }

            const commercialTagFullNames = currentCommercialTagSection.tagsDetails.map(tag => tag.fullName);

            teaserQuery = `/${section}${subsection ? `/${subsection}` : ''}`;
            sectionQuery = `/${section}${subsection ? `/${subsection}` : ''}`;
            listingQuery = tagsToQuery(commercialTagFullNames, 'eq');
        }

        if (nodeTypeAlias === 'Section' || nodeTypeAlias === 'Subsection') {
            teaserQuery = `/${section}${subsection ? `/${subsection}` : ''}`;
            sectionQuery = `/${section}${subsection ? `/${subsection}` : ''}`;
            teaserFilter = 'parentUrl';
            const sectionListingQuery = `${teaserFilter} eq %27${teaserQuery}%27`;
            listingQuery = excludeTagQuery ? `${sectionListingQuery} and ${excludeTagQuery}` : sectionListingQuery;
            req.data.subsectionList = await API.getModules([`sections/${section}`]);
        }

        if (nodeTypeAlias === 'Brand') {
            const source = get(req, 'data.entity.source', '');
            const adBrand = find(config.brands.site, b => b.title === source);
            req.data.entity.adBrand = get(adBrand, 'id', config.product.id);

            teaserQuery = source.replace(/'/g, "''");
            teaserFilter = 'source';
            const brandListingQuery = `${teaserFilter} eq %27${teaserQuery}%27 and nodeTypeAlias ne %27Brand%27`;
            listingQuery = excludeTagQuery ? `${brandListingQuery} and ${excludeTagQuery}` : brandListingQuery;
        }

        const skip = (pageNo - 1) * LIST_COUNT;
        const latestTeasersResp = await API.getLatestTeasers(LIST_COUNT, skip, listingQuery);

        const latestTeasersData = (latestTeasersResp && latestTeasersResp.data) || [];
        const latestTeasersCount = (latestTeasersResp && latestTeasersResp.totalCount) || 0;

        const totalPageFloor = Math.floor(latestTeasersCount / LIST_COUNT);
        const totalPage = latestTeasersCount % LIST_COUNT ? totalPageFloor : totalPageFloor + 1;
        const err = new Error('Page not found');
        err.status = 404;

        if (totalPage < pageNo - 1) {
            throw err;
        }

        let previousPage = null;

        if (pageNo > 1) {
            const path = pageNo === 2 ? `${sectionQuery}` : `/${sectionQuery}?pageNo=${pageNo - 1}`;
            previousPage = {
                path,
                url: `${config.site.host}${path}`
            };
        }

        let nextPage = null;

        if (skip + latestTeasersData.length < latestTeasersCount) {
            const path = `${sectionQuery}?pageNo=${pageNo + 1}`;
            nextPage = {
                path,
                url: `${config.site.host}${path}`
            };
        }

        const path = pageNo > 1 ? `${sectionQuery}?pageNo=${pageNo}` : `${sectionQuery}`;
        const currentPage = {
            path,
            url: `${config.site.host}${path}`
        };

        const latestTeaserItems = reviewItemsSort(latestTeasersData, `${section}/${subsection}`, config);
        req.data.latestTeasers = latestTeaserItems.slice(0, LATEST_TEASER_COUNT);
        req.data.list = {
            listName: section,
            params: {
                pageNo,
                section: teaserQuery,
                filter: teaserFilter,
                sectionFormatted: section
            },
            items: [parseEntities(latestTeaserItems.slice(LATEST_TEASER_COUNT))],
            previous: previousPage,
            current: currentPage,
            next: nextPage
        };

        next();
    } catch (error) {
        next(error);
    }
}
