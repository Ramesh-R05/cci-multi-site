import get from 'lodash.get';
import set from 'lodash.set';

export const httpsSet = (obj, path) => {
    let url = get(obj, path);
    if (typeof url !== 'string' || url.startsWith('https') || url.startsWith('/api/asset?url=')) return;
    url = url.replace('http://d3lp4xedbqa8a5.cloudfront.net', 'https://d3lp4xedbqa8a5.cloudfront.net');
    url = url.replace('http://cdn.assets.cougar.bauer-media.net.au', 'https://d3lp4xedbqa8a5.cloudfront.net');
    if (url.startsWith('https')) set(obj, path, url);
    else set(obj, path, `/api/asset?url=${encodeURIComponent(url)}`);
};

const itemLists = [
    'data.headernavigation',
    'data.promoted.items',
    'data.latestTeasers',
    'data.leftHandSide.data',
    'data.moreGalleries.data',
    'data.mustread',
    'data.hamburgernavigation',
    'data.teasers'
];

const imageUrls = [
    'data.entity.contentImageUrl',
    'data.hero.contentImageUrl',
    'data.theme.themeImage',
    'data.theme.headerSmallBackground',
    'data.theme.headerMediumBackground',
    'data.theme.headerLargeBackground'
];

export default function https(req, res, next) {
    try {
        imageUrls.forEach(imageUrl => {
            httpsSet(req, imageUrl);
        });

        itemLists.forEach(i => {
            get(req, i, []).forEach(item => {
                httpsSet(item, 'contentImageUrl');
            });
        });

        get(req, 'data.entity.contentBody', []).forEach(item => {
            switch (item.type) {
                case 'image':
                    httpsSet(item, 'content.url');
                    break;

                case 'whooshka':
                    httpsSet(item, 'content.url');
                    break;

                case 'image-revealer':
                    httpsSet(item, 'content.left.url');
                    httpsSet(item, 'content.right.url');
                    break;

                case 'related-content':
                    item.content.forEach(related => {
                        httpsSet(related, 'imageUrl');
                    });
                    break;

                case 'gallery':
                    httpsSet(item, 'content[0].imageUrl');
                    break;
                default:
            }
        });

        get(req, 'data.entity.contentGallery', []).forEach(item => {
            httpsSet(item, 'url');
        });

        get(req, 'data.list.items', []).forEach(item => {
            item.forEach(listItem => {
                httpsSet(listItem, 'imageUrl');
            });
        });

        get(res, 'body.list.items', []).forEach(item => {
            item.forEach(listItem => {
                httpsSet(listItem, 'imageUrl');
            });
        });

        get(res, 'body.latestTeasers', []).forEach(item => {
            httpsSet(item, 'imageUrl');
        });

        get(req, 'data.magcover', []).forEach(item => {
            httpsSet(item, 'moduleImageUrl');
        });

        next();
    } catch (error) {
        next(error);
    }
}

export { itemLists, imageUrls };
