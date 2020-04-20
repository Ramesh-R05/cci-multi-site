import get from 'lodash/object/get';
import API from '../api';

const TOP = 20;

export default async function gallery(req, res, next) {
    try {
        const nodeTypeAlias = get(req, 'data.entity.nodeTypeAlias', '');

        if (nodeTypeAlias !== 'Gallery') {
            next();

            return;
        }

        const section = get(req, 'query.section', '');
        req.data.altArticleNewsLetterSignupUrl = get(req, `app.locals.config.urls.alternateNewsletterSignupIframeForArticle.${section}`, null);

        const listingQuery = "nodeTypeAlias eq 'Article,Gallery,Recipe,Review'";
        req.data.leftHandSide = await API.getLatestTeasers(TOP, undefined, listingQuery);
        req.data.moreGalleries = await API.getMoreGalleries();

        next();
    } catch (error) {
        next(error);
    }
}
