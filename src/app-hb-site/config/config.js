import cache from './cache';
import features from './features';
import global from './global';
import polar from './polar';
import services from './services';
import site from './site';

export default {
    ga: { id: 'UA-8689567-1' },

    gtm: { masthead: 'HB', id: 'GTM-NX2PKZ' },

    defaultImageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/HarpersBazaar/defaultimage.png',

    jwPlayer: {
        scriptKey: 't1keIqBp',
        baseUrl: 'https://cdn.jwplayer.com'
    },

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
            title: "Whoops! Looks like we don't have the page you’re looking for.",
            symbol: null,
            content: [''],
            emojiSrc: '/assets/images/error.jpg',
            returnHomeText: 'Try refreshing this page or join us back on the <span class="error-page__text-hyperlink">homepage</span>.'
        },
        503: {
            title: "Whoops! Looks like we don't have the page you're looking for.",
            symbol: null,
            content: [''],
            emojiSrc: '/assets/images/error.jpg',
            returnHomeText: 'Try refreshing this page or join us back on the <span class="error-page__text-hyperlink">homepage</span>.'
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
            facebook: 'https://www.facebook.com/HarpersBAZAARAustralia',
            twitter: 'https://twitter.com/BAZAARAustralia',
            instagram: 'http://instagram.com/bazaaraustralia',
            pinterest: 'http://www.pinterest.com/bazaaraustralia/',
            youtube: 'https://www.youtube.com/user/BAZAARaustralia'
        },
        newsletterSignupInBodyCopy: 'https://cb.sailthru.com/join/5ki/signup-harpersbazaar-article-iframe-bottom',
        alternateNewsletterSignupIframeForArticle: {
            beauty: 'https://link.harpersbazaar.com.au/join/5ki/signup-hbbeautygen-article-iframe-bottom&hash=47c0eac6b402'
        }
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
        newsletterUrl: 'https://www.harpersbazaar.com.au/hb-newsletter',
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
                id: 'elle',
                imageUrl: '/assets/images/menulogos/elle-logo.svg',
                url: 'https://www.elle.com.au/',
                title: 'Elle'
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
        templateId: "Harper'sBazaarAU",
        widgetId: 'AR_1',
        scriptUrl: '//widgets.outbrain.com/outbrain.js'
    },
    nielsen: 'B18AE936-92F1-49ED-ADA2-B6E10FAF25C7',

    meta: {
        awinDomainVerification: {
            content: 'f40d68b85fdb358fce6781888547076b',
            scriptUrl: 'https://www.dwin2.com/pub.687331.min.js'
        },
        commissionFactoryVerification: {
            content: '0c8be7f63d754e698e8aca7744339a33'
        }
    }
};
