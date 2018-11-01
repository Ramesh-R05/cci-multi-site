import get from 'lodash/object/get';
import { parseEntity, parseEntities } from '../helper/parseEntity';
import parseHeaderMetaData from '../helper/parseHeaderMetaData';
import parseModule from '../helper/parseModule';

export default function responseBody(req, res, next) {
    try {
        res.body = {
            ...res.body,
            entity: parseEntity(req.data.entity),
            headerMetaData: parseHeaderMetaData(req.data.entity, get(req, 'data.headerMetaData', {}))
        };

        if (get(req, 'data.theme')) {
            res.body.theme = req.data.theme;
        }

        if (get(req, 'data.search')) {
            res.body.search = req.data.search;
            res.body.headerMetaData = {
                ...res.body.headerMetaData,
                robots: 'NOINDEX,FOLLOW',
                pageName: 'Search'
            };
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

        if (get(req, 'data.entity.contentTitle', null)) {
            const curatedHeroTeaserKey = `${req.data.entity.contentTitle.toLowerCase()}hero`;
            const hasCuratedHeroTeaser = get(req, `data.${curatedHeroTeaserKey}`);

            if (hasCuratedHeroTeaser) {
                // Getting lots of 'undefined to deeply equal' errors if the length is checked at the 'if' above
                // Checking the length is needed to get the boolean logic in an empty array
                // Executing it inside the block does the trick
                if (hasCuratedHeroTeaser.length) {
                    res.body.curatedHeroTeaser = parseEntity(req.data[curatedHeroTeaserKey][0]);
                }
            }
        }

        if (get(req, 'data.mustread')) {
            res.body.mustRead = parseEntities(req.data.mustread, {
                title: 'title',
                imageUrl: 'imageUrl',
                location: 'url'
            });
        }

        if (get(req, 'data.leftHandSide')) {
            const lhsData = req.data.leftHandSide.data.map(lhsTeaser => {
                const withDefaultImg = { ...lhsTeaser };
                withDefaultImg.contentImageUrl = withDefaultImg.contentImageUrl || req.app.locals.config.defaultImageUrl;
                return withDefaultImg;
            });
            res.body.leftHandSide = { items: parseEntities(lhsData) };
        }

        if (get(req, 'data.moreFrom')) {
            res.body.moreFrom = {
                title: req.data.moreFrom.title,
                items: parseEntities(req.data.moreFrom.items)
            };
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

        if (get(req, 'data.subsectionList')) {
            res.body.subsectionList = req.data.subsectionList;
        }

        if (get(req, 'data.promoted')) {
            res.body.promoted = {
                title: '',
                items: []
            };

            res.body.promoted.items = parseEntities(req.data.promoted.items, {
                title: 'title',
                imageUrl: 'imageUrl',
                location: 'url'
            });

            res.body.promoted.title = req.data.promoted.title;
        }

        if (get(req, 'data.magcover')) {
            res.body.magCover = req.data.magcover;
        }

        if (get(req, 'data.comScoreSegmentIds')) {
            res.body.comScoreSegmentIds = req.data.comScoreSegmentIds;
        }

        next();
    } catch (error) {
        next(error);
    }
}
