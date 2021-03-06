import get from 'lodash/object/get';
import API from '../api';
import { getRecipeOverview } from '../dataTransforms';

export default async function recipeMiddleware(req, res, next) {
    try {
        const { data = {} } = req;
        const { entity } = data;
        const nodeTypeAlias = get(req, 'data.entity.nodeTypeAlias', '');
        const listingQuery = "nodeTypeAlias eq 'Article,Gallery,Recipe,Review'";
        const TOP = 20;

        if (nodeTypeAlias !== 'Recipe') {
            next();

            return;
        }

        req.data.leftHandSide = await API.getLatestTeasers(TOP, undefined, listingQuery);
        req.data.entity.recipeOverview = getRecipeOverview(entity);

        next();
    } catch (error) {
        next(error);
    }
}
