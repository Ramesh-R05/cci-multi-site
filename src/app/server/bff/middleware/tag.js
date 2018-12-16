import get from 'lodash/object/get';
import find from 'lodash/collection/find';
import getTagName from '@bxm/tags/lib/utils/getTagName';
import makeRequest from '../../makeRequest';
import { getLatestTeasers } from '../api/listing';
import { parseEntities } from '../helper/parseEntity';
import tagsToQuery from '../helper/tagsToQuery';
import capitalize from '../helper/capitalize';
const latestTeaserCount = 7;
const listCount = 14;

export default async function tagMiddleware(req, res, next) {
    try {
        let pageNo = 1;
        const query = req.query;
        pageNo = parseInt(query.pageNo || pageNo, 10);
        const tag = query ? query.tag || query.section : null;
        const entity = get(req, 'data.entity');
        const tagPageTitle = get(req, 'data.entity.pageTitle');
        const contentSummary = get(req, 'data.entity.contentSummary', '');
        const tagsDetails = get(req, 'data.entity.tagsDetails', []);
        const { excludeTagQuery } = req.data;

        if (!tag || query.page || (entity && entity.nodeTypeAlias !== 'TagSection')) {
            next();

            return;
        }

        let title = tag
            .split('-')
            .map(capitalize)
            .join(' ');
        const { entity: entityService, tag: tagService } = req.app.locals.config.services.remote;

        // TODO(thatzi): I don't like this. Need a better way to handle tag pages, tag data and tag canonicals
        // Check the current entity url if it is a /:section page. If this is a /tags/:tag page, then this won't exist.
        // If the latter, we need to query the entity service, passing the tag to check if a tag route has been defined
        // as a TagSection node type to have a tag url without '/tags' so to correctly define the canonical url
        const url =
            get(req, 'data.entity.url') ||
            (await makeRequest(`${entityService}/section/${tag}`)
                .then(listingData => {
                    const defaultTagUrl = `/tags/${tag}`;

                    return listingData.nodeTypeAlias !== 'TagSection' ? defaultTagUrl : listingData.url || defaultTagUrl;
                })
                .catch(() => `/tags/${tag}`));

        const tagData = await makeRequest(`${tagService}/tags/${title}`)
            .then(({ data }) => {
                if (!data.length) {
                    return {};
                }

                return (
                    find(data, tagObj => {
                        const tagName = getTagName(tagObj.tag.name);

                        if (tagName.toLowerCase() === title.toLowerCase()) {
                            title = tagName; // Override tagName with one received from service

                            return true;
                        }

                        return false;
                    }) || {}
                );
            })
            .catch(() => ({}));

        const skip = (pageNo - 1) * listCount;
        const loweredCaseTag = tag.toLowerCase().replace('%20', '-');

        const tagListingQuery = tagsDetails.length
            ? tagsToQuery(tagsDetails.map(singleTag => singleTag.fullName), 'eq')
            : `tagsDetails/urlName eq %27${loweredCaseTag}%27`;

        const listingQuery = excludeTagQuery ? `${tagListingQuery} and ${excludeTagQuery}` : tagListingQuery;
        const latestTeasersResp = await getLatestTeasers(listCount, skip, listingQuery);

        // TODO: need to handle `data` in resp better
        const latestTeasers = latestTeasersResp || {
            data: []
        };

        const basePath = query.section ? `/${tag}` : `/tags/${tag}`;
        let previousPage = null;

        if (pageNo > 1) {
            const path = pageNo === 2 ? `${basePath}` : `${basePath}?pageNo=${pageNo - 1}`;
            previousPage = {
                path,
                url: `${req.app.locals.config.site.host}${path}`
            };
        }

        let nextPage = null;

        if (skip + latestTeasers.data.length < latestTeasers.totalCount) {
            const path = `${basePath}?pageNo=${pageNo + 1}`;
            nextPage = {
                path,
                url: `${req.app.locals.config.site.host}${path}`
            };
        }

        const path = pageNo > 1 ? `${url}?pageNo=${pageNo}` : url;
        const currentPage = {
            path,
            url: `${req.app.locals.config.site.host}${path}`
        };

        req.data.entity = {
            ...req.data.entity,
            nodeTypeAlias: 'TagSection',
            contentTitle: title,
            url,
            pageTitle: capitalize(tagPageTitle || tagData.title || title),
            pageMetaDescription: tagData.description || '',
            contentSummary
        };

        req.data.latestTeasers = latestTeasers.data.slice(0, latestTeaserCount);
        req.data.list = {
            listName: title,
            params: {
                pageNo,
                section: title,
                filter: 'contentTags',
                tagSectionQuery: listingQuery
            },
            items: [parseEntities(latestTeasers.data.slice(latestTeaserCount))],
            previous: previousPage,
            current: currentPage,
            next: nextPage
        };
        req.data.section = { name: 'Tag', urlName: 'tag' }; // Initally used to set the ad slot within @bxm/ads
        next();
    } catch (error) {
        next(error);
    }
}
