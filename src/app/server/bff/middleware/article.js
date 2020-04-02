import get from 'lodash/object/get';
import API from '../api';

const TOP = 20;

export default async function article(req, res, next) {
    try {
        const nodeTypeAlias = get(req, 'data.entity.nodeTypeAlias', '');

        if (nodeTypeAlias !== 'Article') {
            next();

            return;
        }

        const section = get(req, 'query.section', '');

        req.data.altArticleNewsLetterSignupUrl = get(req, `app.locals.config.urls.alternateNewsletterSignupIframeForArticle.${section}`, null);

        req.data.sailthruArticleNewsLetterSignupUrl = get(
            req,
            `app.locals.config.urls.alternateSailthruNewsletterSignupIframeForArticle.${section}`,
            null
        );

        const listingQuery = "nodeTypeAlias eq 'Article' or nodeTypeAlias eq 'Gallery' or nodeTypeAlias eq 'Recipe' or nodeTypeAlias eq 'Review'";
        req.data.leftHandSide = await API.getLatestTeasers(TOP, undefined, listingQuery);

        next();
    } catch (error) {
        next(error);
    }
}
