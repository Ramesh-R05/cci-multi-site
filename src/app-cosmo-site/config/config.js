import brightcove from './brightcove';
import cache from './cache';
import features from './features';
import global from './global';
import services from './services';
import site from './site';
import polar from './polar';

export default {
    ga: { id: 'UA-8689462-1' },

    gtm: { masthead: 'COSMO', id: 'GTM-K774C2' },

    defaultImageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/cosmo/defaultimage.png',

    brightcove,

    gigya: { apiKey: '3_9adtmm8qGhCt_TN8f88ifpDX8YdJZVYyRkgnO_nokUIw1f0kbwQt9TMAfhdR0Pb8' },

    subscribe: {
        subscribeHeading: 'GET THE MAGAZINE'
    },

    features,

    global,

    ads: {
        targets: { env: 'test' },
        blocked: {
            sections: ['sex'],
            tags: [
                'common:topic:Sex stories',
                'common:topic:Sex positions',
                'common:topic:Oral sex',
                'media_common:quotation_subject:Sex',
                'medicine:disease:Sexually transmitted infection',
                'media_common:quotation_subject:Sex scandal'
            ]
        },
        disabledGalleryChangeRefresh: true,
        iasAds: true
    },

    site,

    server: { port: 3001 },

    services,

    cache,

    headerBaseHeight: 202,

    error: {
        404: {
            title: `*COUGH*<br>I CAN'T LOAD UP, I'M SICK!`,
            symbol: null,
            content: [''],
            emojiSrc: '/assets/images/error.gif',
            returnHomeText: 'Try refreshing this page or join us back on the homepage!'
        },
        503: {
            title: `*COUGH*<br>I CAN'T LOAD UP, I'M SICK!`,
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
        },
        newsletterSignupInBodyCopy: 'https://cb.sailthru.com/join/5kd/signup-cosmopolitan-article-iframe-bottom'
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
        newsletterUrl: 'https://www.cosmopolitan.com.au/cosmo-newsletter',
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
                title: 'Elle'
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
        templateId: 'Cosmopolitan_2',
        widgetId: 'AR_1',
        scriptUrl: '//widgets.outbrain.com/outbrain.js'
    },
    nielsen: 'CD3E57F1-952F-472D-946A-F58654E3904B'
};
