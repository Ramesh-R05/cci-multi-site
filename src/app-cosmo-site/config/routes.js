import loadPageContent from '../../app/actions/loadPageContent';
import loadSearch from '../../app/actions/loadSearch';
import pageNotFound from '../../app/actions/pageNotFound';

import HomePage from '../../app/containers/home';
import SectionPage from '../../app/containers/section';
import SearchPage from '../../app/containers/search';
import SinglePage from '../../app/containers/document';
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
    previewPage: {
        path: '/:preview(preview)/:section/:page',
        method: 'get',
        handler: SinglePage,
        action: loadPageContent
    },
    page: {
        path: '/:section/:page*',
        method: 'get',
        handler: SinglePage,
        action: loadPageContent
    },
    all: {
        path: '/:all*',
        method: 'get',
        handler: ErrorPage,
        action: pageNotFound
    }
};
