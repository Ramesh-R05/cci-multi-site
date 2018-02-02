import loadPageContent from '../../app/actions/loadPageContent';
import pageNotFound from '../../app/actions/pageNotFound';

import HomePage from '../../app/containers/home';
import SectionPage from '../../app/containers/section';
import SinglePage from '../../app/containers/document';
import ErrorPage from '../../app/components/page/error';

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
    subsection: {
        path: '/:section/:subsection',
        method: 'get',
        handler: SectionPage,
        action: loadPageContent
    },
    page: {
        path: '/:section/:subsection/:page',
        method: 'get',
        handler: SinglePage,
        action: loadPageContent
    },
    previewPage: {
        path: '/:preview(preview)/:section/:subsection/:page',
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
