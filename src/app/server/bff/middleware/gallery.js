import find from 'lodash/collection/find';
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

        const source = get(req, 'data.entity.source', '');
        const adBrand = find(req.app.locals.config.brands.uniheader, b => b.title === source);
        req.data.entity.adBrand = get(adBrand, 'id', 'ntl');

        req.data.moreGalleries = await getMoreGalleries();

        const sectionId = req.data.entity.sectionId;
        const listingQuery = `path eq %27${sectionId}%27`;
        if (sectionId) {
            req.data.leftHandSide = await getLatestTeasers(TOP, undefined, listingQuery);
        }

        next();
    } catch (error) {
        next(error);
    }
}
