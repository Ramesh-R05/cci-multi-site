import get from 'lodash/object/get';
import { parseEntities, parseEntity } from '../helper/parseEntity';

import parseHeaderMetaData from '../helper/parseHeaderMetaData';
import parseModule from '../helper/parseModule';

export default function responseBody(req, res, next) {
    try {
        const { data = {} } = req;
        const {
            entity,
            theme,
            search,
            headernavigation,
            hamburgernavigation,
            footer,
            mustread,
            moreFrom,
            hero,
            latestTeasers,
            videoGalleryTeasers,
            leftHandSide,
            list,
            section,
            subsectionList,
            promoted,
            magcover,
            comScoreSegmentIds,
            altArticleNewsLetterSignupUrl,
            sailthruArticleNewsLetterSignupUrl
        } = data;

        res.body = {
            ...res.body,
            entity: parseEntity(entity),
            headerMetaData: parseHeaderMetaData(entity, get(req, 'data.headerMetaData', {}))
        };

        if (get(req, 'data.theme')) {
            res.body.theme = theme;
        }

        if (get(req, 'data.siteAlert')) {
            res.body.siteAlert = req.data.siteAlert;
        }

        if (get(req, 'data.search')) {
            res.body.search = search;
            res.body.headerMetaData = {
                ...res.body.headerMetaData,
                robots: 'NOINDEX,FOLLOW',
                pageName: 'Search'
            };
        }

        if (get(req, 'data.headernavigation')) {
            res.body.headerNavigation = {
                items: parseEntities(headernavigation, { contentTitle: 'name' })
            };
        }

        if (get(req, 'data.hamburgernavigation')) {
            res.body.hamburgerNavigation = {
                items: parseEntities(hamburgernavigation, { contentTitle: 'name' })
            };
        }

        if (get(req, 'data.footer')) {
            res.body.footer = parseModule(footer);
        }

        if (get(req, 'data.entity.contentTitle', null)) {
            const curatedHeroTeaserKey = `${entity.contentTitle.toLowerCase()}hero`;
            const hasCuratedHeroTeaser = get(req, `data.${curatedHeroTeaserKey}`);

            if (hasCuratedHeroTeaser) {
                // Getting lots of 'undefined to deeply equal' errors if the length is checked at the 'if' above
                // Checking the length is needed to get the boolean logic in an empty array
                // Executing it inside the block does the trick
                if (hasCuratedHeroTeaser.length) {
                    res.body.curatedHeroTeaser = parseEntity(data[curatedHeroTeaserKey][0]);
                }
            }
        }

        if (get(req, 'data.mustread')) {
            res.body.mustRead = parseEntities(mustread, {
                title: 'title',
                imageUrl: 'imageUrl',
                location: 'url'
            });
        }

        if (get(leftHandSide, 'data')) {
            const lhsData = leftHandSide.data.map(lhsTeaser => {
                const withDefaultImg = { ...lhsTeaser };
                withDefaultImg.contentImageUrl = withDefaultImg.contentImageUrl || req.app.locals.config.defaultImageUrl;

                return withDefaultImg;
            });
            res.body.leftHandSide = { items: parseEntities(lhsData) };
        }

        if (get(req, 'data.moreFrom')) {
            res.body.moreFrom = {
                title: moreFrom.title,
                items: parseEntities(moreFrom.items)
            };
        }

        if (get(req, 'data.hero')) {
            res.body.heroTeaser = parseEntity(hero);
        }

        if (get(req, 'data.latestTeasers')) {
            res.body.latestTeasers = parseEntities(latestTeasers);
        }

        if (get(req, 'data.list')) {
            res.body.list = list;
        }

        if (get(req, 'data.videoGalleryTeasers')) {
            res.body.videoGalleryTeasers = parseEntities(videoGalleryTeasers.data);
        }

        if (get(req, 'data.section')) {
            res.body.section = section;
        }

        if (get(req, 'data.subsectionList')) {
            res.body.subsectionList = subsectionList;
        }

        if (get(req, 'data.promoted')) {
            res.body.promoted = {
                title: '',
                items: []
            };

            res.body.promoted.items = parseEntities(promoted.items, {
                title: 'title',
                imageUrl: 'imageUrl',
                location: 'url'
            });

            res.body.promoted.title = promoted.title;
        }

        if (get(req, 'data.magcover')) {
            res.body.magCover = magcover;
        }

        if (get(req, 'data.comScoreSegmentIds')) {
            res.body.comScoreSegmentIds = comScoreSegmentIds;
        }

        if (get(req, 'data.altArticleNewsLetterSignupUrl')) {
            res.body.altArticleNewsLetterSignupUrl = altArticleNewsLetterSignupUrl;
        }

        if (get(req, 'data.sailthruArticleNewsLetterSignupUrl')) {
            res.body.sailthruArticleNewsLetterSignupUrl = sailthruArticleNewsLetterSignupUrl;
        }

        next();
    } catch (error) {
        next(error);
    }
}
