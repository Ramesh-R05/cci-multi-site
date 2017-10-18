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
