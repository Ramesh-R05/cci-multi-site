import brightcove from './brightcove';
import cache from './cache';
import features from './features';
import global from './global';
import services from './services';
import site from './site';
import polar from './polar';

export default {

    gtm: { masthead: 'HB', id: 'GTM-NX2PKZ' },

    defaultImageUrl: 'http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/HarpersBazaar/defaultimage.png',

    brightcove,

    gigya: { apiKey: '' },

    subscribe: {
        subscribeHeading: 'GET THE MAGAZINE',
        subscribeText: "Subscribe to Harper's Bazaar magazine now"
    },

    features,

    global,

    ads: { targets: { env: 'test' } },

    site,

    server: { port: 3001 },

    services,

    cache,

    error: {
        404: {
            title: 'Whoops! Looks like we don\'t have the page you’re looking for.',
            symbol: null,
            content: [''],
            emojiSrc: '/assets/images/error.jpg',
            returnHomeText: 'Try refreshing this page or join us back on the <span class="error-page__text-hyperlink">homepage</span>.'
        },
        503: {
            title: 'Whoops! Looks like we don\'t have the page you\'re looking for.',
            symbol: null,
            content: [''],
            emojiSrc: '/assets/images/error.jpg',
            returnHomeText: 'Try refreshing this page or join us back on the <span class="error-page__text-hyperlink">homepage</span>.'
        }
    },

    polar
};

