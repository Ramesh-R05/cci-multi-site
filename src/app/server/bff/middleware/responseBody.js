import { parseEntity, parseEntities } from '../helper/parseEntity';
import { parseHeaderMetaData } from '../helper/parseHeaderMetaData';
import { parseModule } from '../helper/parseModule';
import { getPlaceholderImage } from '../helper/getPlaceholderImage';
import get from 'lodash/object/get';

export default function responseBody(req, res, next) {

    try {
        res.body = {
            entity: parseEntity(req.data.entity),
            headerMetaData: parseHeaderMetaData(req.data.entity, get(req, 'data.headerMetaData', {}))
        };

        if (get(req, 'data.theme')) {
            res.body.theme = req.data.theme;
        }

        if (get(req, 'data.headernavigation')) {
            res.body.headerNavigation = {
                items: parseEntities(req.data.headernavigation, { contentTitle: 'name' })
            };
        }

        if (get(req, 'data.hamburgernavigation')) {
            res.body.hamburgerNavigation = {
                items: parseEntities(req.data.hamburgernavigation, { contentTitle: 'name' })
            };
        }

        if (get(req, 'data.footer')) {
            res.body.footer = parseModule(req.data.footer);
        }

        if (get(req, 'data.mustread')) {
            res.body.mustRead = parseEntities(req.data.mustread, {
                title: 'title', imageUrl: 'imageUrl', location: 'url'
            });
        }

        if (get(req, 'data.leftHandSide')) {
            var lhsData = getPlaceholderImage(req.data.leftHandSide.data);
            res.body.leftHandSide = { items: parseEntities(lhsData) };
        }

        if (get(req, 'data.trendingItems')) {
            res.body.trendingItems = parseEntities(req.data.trendingItems, {
                title: 'title', imageUrl: 'imageUrl', location: 'url'
            });
        }

        if (req.data.moreGalleries) {
            res.body.moreGalleries = parseEntities(req.data.moreGalleries.data);
        }

        if (get(req, 'data.hero')) {
            res.body.heroTeaser = parseEntity(req.data.hero);
        }

        if (get(req, 'data.latestTeasers')) {
            res.body.latestTeasers = parseEntities(req.data.latestTeasers);
        }

        if (get(req, 'data.list')) {
            res.body.list = req.data.list;
        }

        if (get(req, 'data.videoGalleryTeasers')) {
            res.body.videoGalleryTeasers = parseEntities(req.data.videoGalleryTeasers.data);
        }

        if (get(req, 'data.section')) {
            res.body.section = req.data.section;
        }

        if (get(req, 'data.subsection')) {
            res.body.subsection = req.data.subsection;
        }

        if (get(req, 'data.promoted')) {

            res.body.promoted = {
                title : '',
                items : []
            };

            res.body.promoted.items = parseEntities(req.data.promoted.items, {
                title: 'title', imageUrl: 'imageUrl', location: 'url'
            });

            res.body.promoted.title = req.data.promoted.title;
        }

        next();
    } catch(error) {
        next(error);
    }
}
