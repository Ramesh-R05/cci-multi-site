import loadPageContent from '../actions/loadPageContent';
import pageNotFound from '../actions/pageNotFound';

import HomePage from '../containers/home';
import SectionPage from '../containers/section';
import SinglePage from '../containers/document';
import ErrorPage from '../components/page/error';

export default {
    home: {
        path: '/',
        method: 'get',
        handler: HomePage,
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
    page: {
        path: '/:section/:page',
        method: 'get',
        handler: SinglePage,
        action: loadPageContent
    },
    previewPage: {
        path: '/:preview(preview)/:section/:page',
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
