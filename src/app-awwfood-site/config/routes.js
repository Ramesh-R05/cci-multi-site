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
    /* Google tries to call old FoodToLove urls, eg:
     * https://www.womensweeklyfood.com.au/Recipe/FOOD-8937
     * In this instance, the node id works because it references a folder in the live cms. This is not ideal.
     * Block any old FoodToLove urls from being accessed, because the node id is wrong.
     * */
    oldFoodToLoveRecipes: {
        path: '/Recipe/*',
        method: 'get',
        handler: ErrorPage,
        action: pageNotFound
    },
    search: {
        path: '/search/:query',
        method: 'get',
        handler: SearchPage,
        action: loadSearch
    },
    tags: {
        path: '/tags/:tag',
        method: 'get',
        handler: SectionPage,
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
    subsection: {
        path: '/:section/:subsection*',
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
    recipes: {
        path: '/recipes/:page(.*-):id([0-9]+)',
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
