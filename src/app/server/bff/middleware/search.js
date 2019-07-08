import get from 'lodash/object/get';
import qs from 'qs';
import { parseEntities } from '../helper/parseEntity';
import getSearchResults from '../api/search';

const searchResultTeaserCount = 6;
const searchCount = 14;

/*
    TODO: move to helpers
    write simple unit test
*/

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/*
    TODO : refactor into a more generic function that generates queryStrings based on params & appends them to the basePath (if included)
*/

function generateSearchQueryUrl(basePath, q, size, from, pageNo) {
    const queryString = qs.stringify(
        {
            q,
            size,
            from,
            pageNo
        },
        { addQueryPrefix: true }
    );

    return `${basePath}${queryString}`;
}

export default async function searchMiddleware(req, res, next) {
    try {
        let pageNo = 1;

        if (req.query) {
            pageNo = parseInt(req.query.pageNo || pageNo, 10);
        }

        const query = req.query.params ? get(req, 'query.params.query', '') : get(req, 'query.q', '');
        const from = (pageNo - 1) * searchCount;
        const searchDataResp = await getSearchResults(searchCount, from, query);

        const searchData = (searchDataResp && searchDataResp.results) || [];
        const searchDataCount = (searchDataResp && searchDataResp.total) || 0;

        const basePath = `/search/${query}`;

        let previousPage = null;

        if (pageNo > 1) {
            const prevPageNo = pageNo - 1;
            const prevFrom = (prevPageNo - 1) * searchCount;
            const path = generateSearchQueryUrl(basePath, query, searchCount, prevFrom, prevPageNo);

            previousPage = {
                path,
                url: `${req.app.locals.config.site.host}${path}`
            };
        }

        let nextPage = null;

        if (from + searchData.length < searchDataCount) {
            const nextPageNo = pageNo + 1;
            const nextFrom = (nextPageNo - 1) * searchCount;
            const path = generateSearchQueryUrl(basePath, query, searchCount, nextFrom, nextPage);
            nextPage = {
                path,
                url: `${req.app.locals.config.site.host}${path}`
            };
        }

        const path = pageNo > 1 ? generateSearchQueryUrl(basePath, query, searchCount, from, pageNo) : basePath;
        const currentPage = {
            path,
            url: `${req.app.locals.config.site.host}${path}`
        };

        const decodedQuery = decodeURI(query);
        const formattedQuery = capitalizeFirstLetter(decodedQuery);
        const dashSeparatedLowerCasedQuery = decodedQuery.replace(/[^A-Z0-9]+/gi, '-');

        req.data = {
            ...req.data,
            entity: {
                id: `${req.app.locals.config.site.prefix}-SEARCH-${dashSeparatedLowerCasedQuery}`,
                nodeTypeAlias: 'Search',
                contentTitle: formattedQuery,
                url: currentPage.url,
                pageTitle: capitalizeFirstLetter(formattedQuery),
                pageMetaDescription: `${formattedQuery} search results`
            },
            search: {
                total: searchDataCount
            },
            latestTeasers: pageNo > 1 ? [] : searchData.slice(0, searchResultTeaserCount),
            list: {
                listName: 'search',
                params: {
                    q: query,
                    from,
                    size: searchCount,
                    pageNo
                },
                items: [pageNo > 1 ? parseEntities(searchData) : parseEntities(searchData.slice(searchResultTeaserCount))],
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
