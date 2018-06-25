import loadPageContent from '../../app/actions/loadPageContent';
import loadSearch from '../../app/actions/loadSearch';
import pageNotFound from '../../app/actions/pageNotFound';

import HomePage from '../../app/containers/home';
import SectionPage from '../../app/containers/section';
import SinglePage from '../../app/containers/document';
import SearchPage from '../../app/containers/search';
import ErrorPage from '../../app/components/page/error';

export default {
    home: {
        path: '/',
        method: 'get',
        handler: HomePage,
        action: loadPageContent
    },
    search: {
        path: '/search/:query',
        method: 'get',
        handler: SearchPage,
        action: loadSearch
    },
    recipes: {
        path: '/recipes/:page(.*-):id([0-9]+)',
        method: 'get',
        handler: SinglePage,
        action: loadPageContent
    },
    page: {
        path: '/:page(.*-):id([0-9]+)',
        method: 'get',
        handler: SinglePage,
        action: loadPageContent
    },
    section: {
        path: '/:section',
        method: 'get',
        handler: SectionPage,
        action: loadPageContent
    },
    tags: {
        path: '/tags/:tag',
        method: 'get',
        handler: SectionPage,
        action: loadPageContent
    },
    all: {
        path: '/:all*',
        method: 'get',
        handler: ErrorPage,
        action: pageNotFound
    }
};
