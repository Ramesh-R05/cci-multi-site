import get from 'lodash/object/get';
import { getMoreGalleries, getLatestTeasers } from '../api/listing';

const TOP = 20;

export default async function gallery(req, res, next) {
    try {
        const nodeTypeAlias = get(req, 'data.entity.nodeTypeAlias', '');

        if (nodeTypeAlias !== 'Gallery') {
            next();

            return;
        }

        const listingQuery = "nodeTypeAlias eq 'Article' or nodeTypeAlias eq 'Gallery' or nodeTypeAlias eq 'Recipe' or nodeTypeAlias eq 'Review'";
        req.data.leftHandSide = await getLatestTeasers(TOP, undefined, listingQuery);
        req.data.moreGalleries = await getMoreGalleries();

        next();
    } catch (error) {
        next(error);
    }
}
