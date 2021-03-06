import get from 'lodash/object/get';
import API from '../api';

const TOP = 20;

export default async function collection(req, res, next) {
    try {
        const nodeTypeAlias = get(req, 'data.entity.nodeTypeAlias', '');

        if (nodeTypeAlias !== 'RecipeCollection') {
            next();

            return;
        }

        const listingQuery = "nodeTypeAlias eq 'Article,Gallery,Recipe,Review'";
        req.data.leftHandSide = await API.getLatestTeasers(TOP, undefined, listingQuery);

        next();
    } catch (error) {
        next(error);
    }
}
