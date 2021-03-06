import { backendLogger as logger } from '@bxm/winston-logger';
import amp from '@bxm/server/lib/middleware/amp';

export default function stubServer(siteServer, siteConfig) {
    const config = siteConfig;
    const server = siteServer;

    server.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, OPTION, POST, PUT');
        res.setHeader('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With');
        return next();
    });

    // Home page only
    server.use(config.services.endpoints.page, (req, res, next) => {
        try {
            if (req.query) {
                const { page, section, tag } = req.query;

                if (page || section || tag) {
                    return next('route');
                }
            }
            const home = require('../../automation/test_data/home').default;
            return res.json(home);
        } catch (e) {
            logger.error('contentApi: Error', e);
        }
    });

    // Load More
    server.get(config.services.endpoints.list, function(req, res, next) {
        const loadMoreData = require('../test_data/listing/loadMore').default;
        res.json(loadMoreData);
    });

    // For pages with url /section (a section page)
    server.get(config.services.endpoints.page, (req, res, next) => {
        const { page, section, tag } = req.query;

        if (page || tag) {
            return next('route');
        }

        // /section landing pages and brand landing pages
        if (section === 'section' || section === 'fashion') {
            const section = require('../test_data/listing/section').default;
            return res.json(section);
        }
        if (section === 'beauty') {
            //beauty section has the Inskin ad
            const section = require('../test_data/listing/section_inskin').default;
            return res.json(section);
        } else if (section === 'xmas') {
            //xmas is a test commercial tag section
            const section = require('../test_data/listing/commercialtag').default;
            return res.json(section);
        } else {
            return next({ body: 'Could not find the section page', err: null, status: 404 });
        }
    });

    // For pages with url /tags/(:tag) (a tag page)
    server.get(config.services.endpoints.page, function(req, res, next) {
        const { page, tag } = req.query;

        if (page) {
            return next('route');
        }

        // /section
        if (tag === 'video') {
            const tagData = require('../test_data/listing/tag').default;
            return res.json(tagData);
        } else {
            return next({ body: 'Could not find the tag page', err: null, status: 404 });
        }
    });

    // For pages with url /section/page (a Gallery or Article page)
    server.get(config.services.endpoints.page, function(req, res, next) {
        const { page } = req.query;
        let data;

        // /anything/page_name_id
        switch (page) {
            case 'kendall-jenners-skin-doctor-tells-us-what-mistake-3640':
                data = require('../test_data/pages/article').default;
                break;
            case 'automation-test-article-with-hero-video-3664':
                data = require('../test_data/pages/article_hero_video').default;
                break;
            case 'automation-test-article-with-hero-image-3663':
                data = require('../test_data/pages/article_hero_image').default;
                break;
            case 'automation-test-article-with-social-embed-3663':
                data = require('../test_data/pages/article_social_embeds').default;
                break;
            case 'automation-test-gallery-13302':
                data = require('../test_data/pages/gallery').default;
                break;
            case 'automation-test-gallery-inskin-13303':
                data = require('../test_data/pages/gallery_inskin').default;
                break;
            case 'automation-test-recipe-2127':
                data = require('../test_data/pages/recipe').default;
                break;
            case 'bar-rochford-restaurant-review-1713':
                data = require('../test_data/pages/review').default;
                break;
            case 'comforting-slow-cooker-recipes-31166':
                data = require('../test_data/pages/recipe_collection').default;
                break;
            default:
                return next({ body: 'Could not find the article page', err: null, status: 404 });
        }
        return res.json(data);
    });

    server.get(
        '/amp/:section/:page',
        (req, res, next) => {
            const pageId = req.url.match(/\d{3,}/)[0];
            var ampArticle;
            try {
                switch (pageId) {
                    case '41699':
                        ampArticle = require('../../automation/test_data/pages/article_hero_image').default;
                        res.body = ampArticle;
                        break;
                    case '41200':
                        ampArticle = require('../../automation/test_data/pages/amp_article_multiple_paragraphs').default;
                        res.body = ampArticle;
                        break;
                    case '3663':
                        ampArticle = require('../../automation/test_data/pages/amp_article_social_embeds').default;
                        res.body = ampArticle;
                        break;
                }

                next();
            } catch (e) {
                logger.error('AMP: Error', e);
                next(e);
            }
        },
        amp
    );

    server.use((err, req, res, next) => {
        const errorResponse = {
            error: err,
            magCover: {
                moduleImageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/Elle/2017/09/25/12815/COVER-Marketing.jpg',
                moduleTitle: 'Subscribe Now'
            }
        };
        res.status(404).json(errorResponse);
    });

    logger.info('stub routes added to server');
}
