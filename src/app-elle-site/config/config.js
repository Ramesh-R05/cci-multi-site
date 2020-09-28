import cache from './cache';
import features from './features';
import global from './global';
import polar from './polar';
import services from './services';
import site from './site';

export default {
    ga: { id: 'UA-42966291-1' },

    gtm: { masthead: 'ELLE', id: 'GTM-TXC6CF' },

    defaultImageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/elle/defaultimage.png',

    jwPlayer: {
        scriptKey: 'MIcVRCL9',
        baseUrl: 'https://cdn.jwplayer.com'
    },

    gigya: { apiKey: '3_R74vzxKbWVOiWuMSjElPNubJi5gS7NQ-KkpquR6Y3zVBafukYzJSZRMHKtri2igs' },

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

    headerBaseHeight: 215,

    error: {
        404: {
            title: "Oops, we don't have the page you're looking for.",
            symbol: null,
            content: [''],
            emojiSrc: '/assets/images/error.jpg',
            returnHomeText: 'Try refreshing this page or <span class="error-page__text-hyperlink"> join us</span> back on the homepage'
        },
        503: {
            title: "Oops, we don't have the page you're looking for",
            symbol: null,
            content: [''],
            emojiSrc: '/assets/images/error.jpg',
            returnHomeText: 'Try refreshing this page or <span class="error-page__text-hyperlink"> join us</span> back on the homepage'
        }
    },

    polar,

    urls: {
        footerUrls: {
            privacy: 'https://www.aremedia.com.au/privacy/',
            advertise: 'https://www.aremedia.com.au/brands/',
            terms: 'https://www.aremedia.com.au/terms/'
        },
        socialUrls: {
            facebook: 'https://www.facebook.com/ELLEaus',
            twitter: 'https://twitter.com/ELLEaus',
            instagram: 'https://www.instagram.com/elleaus',
            pinterest: 'https://www.pinterest.com.au/elle_australia',
            youtube: 'https://www.youtube.com/elleaus'
        },
        newsletterSignupInBodyCopy: 'https://cb.sailthru.com/join/5kg/signup-elle-article-iframe-bottom'
    },
    // Used for the magazine Image (not the one in the footer)
    product: {
        id: 'elle',
        title: '',
        magazineTitle: '',
        socialLinks: {
            facebook: 'https://www.facebook.com/ELLEaus',
            twitter: 'https://twitter.com/ELLEaus',
            instagram: 'https://www.instagram.com/elleaus',
            pinterest: 'https://www.pinterest.com.au/elle_australia',
            youtube: 'https://www.youtube.com/elleaus'
        },
        newsletterUrl: 'https://www.elle.com.au/elle-newsletter',
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
        site: [],
        network: [
            {
                id: 'now',
                imageUrl: '/assets/images/menulogos/NTL-logo.svg',
                url: 'https://www.nowtolove.com.au/',
                title: 'Now To Love'
            },
            {
                id: 'homes',
                imageUrl: '/assets/images/menulogos/HTL-logo-greytext.svg',
                url: 'https://www.homestolove.com.au/',
                title: 'Homes To Love'
            },
            {
                id: 'wwfood',
                imageUrl: '/assets/images/menulogos/WWF-logo.svg',
                url: 'https://www.womensweeklyfood.com.au/',
                title: "Women's Weekly Food"
            },
            {
                id: 'harpers',
                imageUrl: '/assets/images/menulogos/HB-logo.svg',
                url: 'https://www.harpersbazaar.com.au/',
                title: "Harper's Bazaar"
            },
            {
                id: 'gt',
                imageUrl: '/assets/images/menulogos/GT-logo.svg',
                url: 'https://www.gourmettraveller.com.au/',
                title: 'Gourmet Traveller'
            },
            {
                id: 'dolly',
                imageUrl: '/assets/images/menulogos/DOLLY-logo.svg',
                url: 'http://www.dolly.com.au/',
                title: 'Dolly'
            },
            {
                id: 'beautyheaven',
                imageUrl: '/assets/images/menulogos/BEAUTYHEAVEN-logo.svg',
                url: 'https://www.beautyheaven.com.au/',
                title: 'Beauty Heaven'
            }
        ],
        shortSources: {
            "Australian Women's Weekly": 'AWW'
        }
    },
    outbrain: {
        templateId: 'Elle_1',
        widgetId: 'AR_1',
        scriptUrl: '//widgets.outbrain.com/outbrain.js'
    },
    nielsen: '5714739C-ACCD-4AC1-9BFB-EB7DD3E8DAD4',

    meta: {
        awinDomainVerification: {
            content: 'c3d5cce4f1d8928a160682c3caae996c',
            scriptUrl: 'https://www.dwin2.com/pub.687331.min.js'
        },
        commissionFactoryVerification: {
            content: '18e210d1af3940b8a7c0b41c991874fb'
        }
    }
};
