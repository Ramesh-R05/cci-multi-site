import amp from '@bxm/server/lib/middleware/amp';
import assetProxy from '@bxm/server/lib/middleware/assetProxy';
import emailLinkTracking from '@bxm/server/lib/middleware/emailLinkTracking';
import page from './bff/middleware/page';
import home from './bff/middleware/home';
import article from './bff/middleware/article';
import recipe from './bff/middleware/recipe';
import gallery from './bff/middleware/gallery';
import review from './bff/middleware/review';
import responseBody from './bff/middleware/responseBody';
import https from './bff/middleware/https';
import render from './bff/middleware/render';
import error from './bff/middleware/error';
import pageModules from './bff/middleware/pageModules';
import listing from './bff/middleware/listing';
import section from './bff/middleware/section';
import tag from './bff/middleware/tag';
import headerMeta from './bff/middleware/headerMeta';
import sitemap from './bff/middleware/sitemap';
import list from './bff/middleware/list';
import stubServer from '../../automation/test_data/contentApi';
import logger from '../../logger';
import comScore from './bff/middleware/comScore';
import search from './bff/middleware/search';
import commercialTag from './bff/middleware/commercialTag';
import collection from './bff/middleware/collection';
import moreFrom from './bff/middleware/moreFrom';

const cosmoRedirects = {
    beauty: 'https://www.elle.com.au/beauty',
    fashion: 'https://www.elle.com.au/fashion',
    celebrity: 'https://www.elle.com.au/celebrity',
    news: 'https://www.elle.com.au/news',
    sex: 'https://www.elle.com.au/health-fitness',
    'health-fitness': 'https://www.elle.com.au/health-fitness',
    horoscopes: 'https://www.elle.com.au/culture',
    lifestyle: 'https://www.elle.com.au/culture',
    'women-of-the-year': 'https://www.elle.com.au/',
    weddings: 'https://www.elle.com.au/wedding',
    careers: 'https://www.elle.com.au/culture',
    travel: 'https://www.elle.com.au/travel',
    bachelor: 'https://www.elle.com.au/',
    win: 'https://www.elle.com.au/',
    love: 'https://www.elle.com.au/culture',
    homepage: 'https://www.elle.com.au/'
};

function cosmoRedirectsMiddleware(req, res, next) {
    if (process.env.APP_KEY !== 'cosmo-site') {
        return next();
    }

    const s = req.url.split('/')[1] || 'homepage';

    if (cosmoRedirects[s]) {
        return res.redirect(301, cosmoRedirects[s]);
    }

    return next();
}

export default function bff(server) {
    server.get('/api/asset', assetProxy);

    if (process.env.APP_STUBBED === 'true') {
        stubServer(server, server.locals.config);
        logger.warn('stubbing does not exercise BFF code');
    } else {
        server.use(cosmoRedirectsMiddleware);
        server.get('/sitemap/:section?', sitemap, error);
        server.get(
            '(/:preview(preview))?/amp/:page*:id([0-9]+)',
            pageModules,
            commercialTag,
            section,
            page,
            article,
            gallery,
            collection,
            moreFrom,
            headerMeta,
            responseBody,
            amp
        );
        server.get(
            '(/:preview(preview))?/amp/:section/:page',
            pageModules,
            commercialTag,
            section,
            page,
            article,
            gallery,
            collection,
            moreFrom,
            headerMeta,
            responseBody,
            amp
        );
        server.get(
            '(/:preview(preview))?/amp/:section/:subsection/:page',
            pageModules,
            commercialTag,
            section,
            page,
            article,
            gallery,
            collection,
            moreFrom,
            headerMeta,
            responseBody,
            amp
        );
        server.get(server.locals.config.services.endpoints.list, commercialTag, list, https, render, error);
        server.get(
            server.locals.config.services.endpoints.page,
            emailLinkTracking,
            pageModules,
            commercialTag,
            comScore,
            home,
            listing,
            tag,
            section,
            page,
            article,
            recipe,
            gallery,
            collection,
            review,
            moreFrom,
            headerMeta,
            https,
            responseBody,
            render,
            error
        );
        server.get(
            server.locals.config.services.endpoints.search,
            pageModules,
            commercialTag,
            comScore,
            headerMeta,
            search,
            https,
            responseBody,
            render,
            error
        );
    }
}
