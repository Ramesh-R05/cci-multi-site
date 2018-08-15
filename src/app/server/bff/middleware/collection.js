import get from 'lodash/object/get';
import { getLatestTeasers } from '../api/listing';

const TOP = 20;

export default async function collection(req, res, next) {
    try {
        const nodeTypeAlias = get(req, 'data.entity.nodeTypeAlias', '');
        if (nodeTypeAlias !== 'RecipeCollection') {
            next();
            return;
        }

        const listingQuery = "nodeTypeAlias eq 'Article' or nodeTypeAlias eq 'Gallery' or nodeTypeAlias eq 'Recipe' or nodeTypeAlias eq 'Review'";
        req.data.leftHandSide = await getLatestTeasers(TOP, undefined, listingQuery);

        next();
    } catch (error) {
        next(error);
    }
}
