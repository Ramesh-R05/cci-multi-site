import brightcove from './brightcove';
import cache from './cache';
import features from './features';
import global from './global';
import services from './services';
import site from './site';
import polar from './polar';

export default {

    gtm: { masthead: 'COSMO', id: 'GTM-K774C2' },

    defaultImageUrl: 'http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/cosmo/defaultimage.png',

    brightcove,

    gigya: { apiKey: '3_9adtmm8qGhCt_TN8f88ifpDX8YdJZVYyRkgnO_nokUIw1f0kbwQt9TMAfhdR0Pb8' },

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
            title: `*COUGH* I CAN'T LOAD UP, I'M SICK!`,
            symbol: null,
            content: [''],
            emojiSrc: '/assets/images/error.gif',
            returnHomeText: 'Try refreshing this page or join us back on the homepage'
        },
        503: {
            title: `*COUGH* I CAN'T LOAD UP, I'M SICK!`,
            symbol: null,
            content: [''],
            emojiSrc: '/assets/images/error.gif',
            returnHomeText: 'Come join us back on the homepage!'
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
            facebook: 'https://www.facebook.com/cosmoaustralia',
            twitter: 'https://twitter.com/cosmoaustralia',
            instagram: 'https://www.instagram.com/cosmoaustralia',
            pinterest: 'https://au.pinterest.com/cosmoaustralia',
            youtube: 'https://www.youtube.com/cosmoaustralia'
        }
    },
    // Used for the magazine Image (not the one in the footer)
    product: {
        id: 'cosmo',
        title: '',
        magazineTitle: '',
        socialLinks: {
            facebook: 'https://www.facebook.com/cosmoaustralia',
            twitter: 'https://twitter.com/cosmoaustralia',
            instagram: 'https://www.instagram.com/cosmoaustralia',
            pinterest: 'https://au.pinterest.com/cosmoaustralia',
            youtube: 'https://www.youtube.com/cosmoaustralia'
        },
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
                id: 'harpers',
                imageUrl: '/assets/images/menulogos/HB-logo.svg',
                url: 'http://harpersbazaar.com.au/',
                title: "Harper's Bazaar"
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
        templateId: 'Cosmopolitan_2'
    }
};
