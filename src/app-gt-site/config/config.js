import cache from './cache';
import features from './features';
import global from './global';
import services from './services';
import site from './site';
import polar from './polar';

export default {
    ga: { id: 'UA-8689488-1' },

    gtm: { masthead: 'GT', id: 'GTM-P8JPLN' },

    defaultImageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/defaultimage.png',

    jwPlayer: {
        scriptKey: 'wbnwKpx0',
        baseUrl: 'https://cdn.jwplayer.com'
    },

    gigya: { apiKey: '' },

    subscribe: {
        subscribeHeading: 'Get The Magazine'
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
            title: "Oops - we're not sure why you ended up here. But at least there's a view.",
            symbol: null,
            content: [''],
            emojiSrc: '/assets/images/error.png',
            returnHomeText: 'Try refreshing this page or join us back on the <span class="error-page__text-hyperlink">homepage</span>.'
        },
        503: {
            title: "Oops - we're not sure why you ended up here. But at least there's a view.",
            symbol: null,
            content: [''],
            emojiSrc: '/assets/images/error.png',
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
            'gift-card': 'gift-card'
        },

        newsletterSignupInBodyCopy: 'https://cb.sailthru.com/join/5kf/signup-gourmettraveller-article-iframe-bottom'
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
        newsletterTitle: 'Get the newsletter',
        newsletterText: 'The latest news, restaurant reviews, recipes and travel inspiration, straight to your inbox',
        newsletterUrl: 'https://www.gourmettraveller.com.au/gt-newsletter',
        subscribeButtonText: 'Subscribe',
        subscribeButtonUrl: '/subscribe-magazine',
        imageSizes: {
            s: { w: 275 },
            m: { w: 275 },
            l: { w: 275 },
            xl: { w: 275 }
        },
        giftCard: {
            image: 'gift-card.jpg',
            url: 'https://gourmettravellergiftcard.com.au/bauer/web'
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
                id: 'harpers',
                imageUrl: '/assets/images/menulogos/HB-logo.svg',
                url: 'https://www.harpersbazaar.com.au/',
                title: "Harper's Bazaar"
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
    nielsen: '0C1B8319-D481-4F99-B742-68A42FE2A708',

    meta: {
        commissionFactoryVerification: {
            content: '5f59a6842b0043d5ba3f0a24475c5c2e'
        }
    }
};
