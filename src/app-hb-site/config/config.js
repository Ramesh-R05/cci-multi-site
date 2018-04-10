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

    defaultImageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/HarpersBazaar/defaultimage.png',

    brightcove,

    gigya: { apiKey: '' },

    subscribe: {
        subscribeHeading: 'GET THE MAGAZINE'
    },

    features,

    global,

    ads: {
        targets: { env: 'test' },
        disabledGalleryChangeRefresh: true
    },

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
            facebook: 'https://www.facebook.com/HarpersBAZAARAustralia',
            twitter: 'https://twitter.com/BAZAARAustralia',
            instagram: 'http://instagram.com/bazaaraustralia',
            pinterest: 'http://www.pinterest.com/bazaaraustralia/',
            youtube: 'https://www.youtube.com/user/BAZAARaustralia'
        },
        newsletterSignupInBodyCopy: 'http://cb.sailthru.com/join/5ki/signup-harpersbazaar-article-iframe-bottom'
    },

    // Used for the magazine image (not the one in the footer)
    product: {
        id: 'hb',
        title: '',
        magazineTitle: '',
        socialLinks: {
            facebook: 'https://www.facebook.com/HarpersBAZAARAustralia',
            twitter: 'https://twitter.com/BAZAARAustralia',
            instagram: 'http://instagram.com/bazaaraustralia',
            pinterest: 'http://www.pinterest.com/bazaaraustralia/',
            youtube: 'https://www.youtube.com/user/BAZAARaustralia'
        },
        newsletterUrl: '//www.harpersbazaar.com.au/hb-newsletter',
        subscribeButtonText: 'Subscribe',
        subscribeButtonUrl: '/subscribe-magazine',
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
                id: 'gt',
                imageUrl: '/assets/images/menulogos/GT-logo.svg',
                url: 'http://gourmettraveller.com.au/',
                title: 'Gourmet Traveller'
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
    },
    nielsen: 'B18AE936-92F1-49ED-ADA2-B6E10FAF25C7'

};

