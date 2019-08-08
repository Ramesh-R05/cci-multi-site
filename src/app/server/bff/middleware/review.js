import get from 'lodash/object/get';
import API from '../api';

const TOP = 20;

export default async function review(req, res, next) {
    try {
        const { data = {} } = req;
        const { entity } = data;
        const nodeTypeAlias = get(req, 'data.entity.nodeTypeAlias', '');

        if (nodeTypeAlias !== 'Review') {
            next();

            return;
        }

        const listingQuery = "nodeTypeAlias eq 'Article' or nodeTypeAlias eq 'Gallery' or nodeTypeAlias eq 'Recipe' or nodeTypeAlias eq 'Review'";
        req.data.leftHandSide = await API.getLatestTeasers(TOP, undefined, listingQuery);

        if (entity && get(req.app.locals.config, 'features.reviewTitleSuffix.enabled', false)) {
            const titleSuffix = get(req.app.locals.config, 'features.reviewTitleSuffix.titleSuffix', '');
            entity.pageTitle += titleSuffix;
            entity.contentTitle += titleSuffix;
        }

        next();
    } catch (error) {
        next(error);
    }
}
