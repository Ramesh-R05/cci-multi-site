import brightcove from './brightcove';
import cache from './cache';
import features from './features';
import global from './global';
import services from './services';
import site from './site';
import polar from './polar';

export default {

    ga: { id: 'UA-8689567-1' },

    gtm: { masthead: 'HB', id: 'GTM-NX2PKZ' },

    defaultImageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/defaultimage.png',

    brightcove,

    gigya: { apiKey: '' },

    subscribe: {
        subscribeHeading: 'Get The Magazine'
    },

    features,

    global,

    ads: { targets: { env: 'test' } },

    site,

    server: { port: 3001 },

    services,

    cache,

    headerBaseHeight: 212,

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

    polar,

    urls: {
        footerUrls: {
            privacy: 'http://www.bauer-media.com.au/privacy',
            advertise: 'http://www.bauer-media.com.au/advertising/advertise-with-us',
            terms: 'http://www.bauer-media.com.au/terms/website-terms'
        },

        socialUrls: {
            facebook: 'https://www.facebook.com/gourmettraveller',
            twitter: 'https://twitter.com/GourmetTweets',
            instagram: 'https://www.instagram.com/gourmettraveller/',
            pinterest: 'https://www.pinterest.com.au/gourmetpins/',
            'gift-card': 'gift-card',
        }
    },

    // Used for the magazine image (not the one in the footer)
    product: {
        id: 'gt',
        title: '',
        magazineTitle: '',
        socialLinks: {
            facebook: 'https://www.facebook.com/gourmettraveller',
            twitter: 'https://twitter.com/GourmetTweets',
            instagram: 'https://www.instagram.com/gourmettraveller/',
            pinterest: 'https://www.pinterest.com.au/gourmetpins/',
            'gift-card': 'gift-card'
        },
        newsletterText: 'Receive offers straight to your inbox',
        newsletterUrl: '//www.gourmettraveller.com.au/gt-newsletter',
        subscribeButtonText: 'Subscribe',
        subscribeButtonUrl: 'subscribe-magazine',
        imageSizes: {
            s: { w: 275 },
            m: { w: 275 },
            l: { w: 275 },
            xl: { w: 275 }
        }
    },

    brands: {
        uniheader: [],
        hamburgers: [
            {
                id: 'now',
                imageUrl: '/assets/images/menulogos/NTL-logo.svg',
                url: 'http://nowtolove.com.au/',
                title: 'Now To Love'
            },
            {
                id: 'homes',
                imageUrl: '/assets/images/menulogos/HTL-logo-greytext.svg',
                url: 'http://homestolove.com.au/',
                title: 'Homes To Love'
            },
            {
                id: 'food',
                imageUrl: '/assets/images/menulogos/FTL-logo.svg',
                url: 'http://foodtolove.com.au/',
                title: 'Food To Love'
            },
            {
                id: 'elle',
                imageUrl: '/assets/images/menulogos/elle-logo.svg',
                url: 'http://elle.com.au/',
                title: "Elle"
            },
            {
                id: 'harpers',
                imageUrl: '/assets/images/menulogos/HB-logo.svg',
                url: 'http://harpersbazaar.com.au/',
                title: "Harper's Bazaar"
            },
            {
                id: 'cosmo',
                imageUrl: '/assets/images/menulogos/COSMO-logo.svg',
                url: 'http://cosmopolitan.com.au/',
                title: 'Cosmopolitan'
            },
            {
                id: 'dolly',
                imageUrl: '/assets/images/menulogos/DOLLY-logo.svg',
                url: 'http://dolly.com.au/',
                title: 'Dolly'
            },
            {
                id: 'beautyheaven',
                imageUrl: '/assets/images/menulogos/BEAUTYHEAVEN-logo.svg',
                url: 'http://beautyheaven.com.au/',
                title: 'Beauty Heaven'
            }
        ],
        shortSources: {
            "Australian Women's Weekly": 'AWW'
        }
    },
    outbrain: {
        templateId: 'Harper\'sBazaarAU',
        widgetId: 'AR_1',
        scriptUrl: '//widgets.outbrain.com/outbrain.js'
    }

};

