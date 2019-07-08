import get from 'lodash/object/get';
import { getLatestTeasers } from '../api/listing';
import { getRecipeOverview } from '../dataTransforms';

export default async function recipeMiddleware(req, res, next) {
    try {
        const { data = {} } = req;
        const { entity } = data;
        const nodeTypeAlias = get(req, 'data.entity.nodeTypeAlias', '');
        const listingQuery = "nodeTypeAlias eq 'Article' or nodeTypeAlias eq 'Gallery' or nodeTypeAlias eq 'Recipe' or nodeTypeAlias eq 'Review'";
        const TOP = 20;

        if (nodeTypeAlias !== 'Recipe') {
            next();

            return;
        }

        req.data.leftHandSide = await getLatestTeasers(TOP, undefined, listingQuery);
        req.data.entity.recipeOverview = getRecipeOverview(entity);

        next();
    } catch (error) {
        next(error);
    }
}
