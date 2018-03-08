import get from 'lodash/object/get';
import { getLatestTeasers } from '../api/listing';

const TOP = 20;

export default async function review(req, res, next) {
    try {
        const nodeTypeAlias = get(req, 'data.entity.nodeTypeAlias', '');
        if (nodeTypeAlias !== 'Review') {
            next();
            return;
        }

        const listingQuery = "nodeTypeAlias eq 'Article' or nodeTypeAlias eq 'Gallery' or nodeTypeAlias eq 'Recipe' or nodeTypeAlias eq 'Review'";
        const titleSuffix = get(req.app.locals.config, 'features.reviewPage.titleSuffix', '');
        req.data.leftHandSide = await getLatestTeasers(TOP, undefined, listingQuery);
        req.data.entity.pageTitle += titleSuffix;
        req.data.entity.contentTitle += titleSuffix;

        next();
    } catch (error) {
        next(error);
    }
}
