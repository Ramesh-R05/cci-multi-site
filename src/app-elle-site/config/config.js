import brightcove from './brightcove';
import cache from './cache';
import features from './features';
import global from './global';
import services from './services';
import site from './site';
import polar from './polar';

export default {

    gtm: { masthead: 'ELLE', id: 'GTM-TXC6CF' },

    defaultImageUrl: 'http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/elle/defaultimage.png',

    brightcove,

    gigya: { apiKey: '3_R74vzxKbWVOiWuMSjElPNubJi5gS7NQ-KkpquR6Y3zVBafukYzJSZRMHKtri2igs' },

    subscribe: {
        subscribeHeading: 'GET THE MAGAZINE'
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
            title: 'Oops, we don\'t have the page you\'re looking for.',
            symbol: null,
            content: [''],
            emojiSrc: '/assets/images/error.jpg',
            returnHomeText: 'Try refreshing this page or <span class="error-page__text-hyperlink"> join us</span> back on the homepage'
        },
        503: {
            title: 'Oops, we don\'t have the page you\'re looking for',
            symbol: null,
            content: [''],
            emojiSrc: '/assets/images/error.jpg',
            returnHomeText: 'Try refreshing this page or <span class="error-page__text-hyperlink"> join us</span> back on the homepage'
        }
    },

    polar
};

