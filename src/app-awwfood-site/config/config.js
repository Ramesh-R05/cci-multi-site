import brightcove from './brightcove';
import cache from './cache';
import features from './features';
import global from './global';
import services from './services';
import site from './site';
import polar from './polar';

export default {
    ga: { id: 'UA-57795117-12' },

    gtm: { masthead: 'AWWFOOD', id: 'GTM-MHX78ZT' }, // TODO: Check that the masthead is correct

    defaultImageUrl: 'http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/awwfood/2018/09/03/1535939419920_awwfood-default.png',

    brightcove,

    gigya: { apiKey: '' },

    subscribe: {
        subscribeHeading: 'Hungry for more?'
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
            title: "Whoops, seems we couldn't find the page you were looking for. But we did find this cake.",
            symbol: null,
            content: [''],
            emojiSrc: '/assets/images/error.png',
            returnHomeText: 'Try refreshing this page or join us back on the <span class="error-page__text-hyperlink">homepage</span>.'
        },
        503: {
            title: "Whoops, seems we couldn't find the page you were looking for. But we did find this cake.",
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
            facebook: 'https://www.facebook.com/womensweeklyfood/',
            instagram: 'https://www.instagram.com/womensweeklyfood/',
            pinterest: 'https://www.pinterest.com.au/womensweeklyfood/'
        },

        newsletterSignupInBodyCopy: 'https://cb.sailthru.com/join/5kf/signup-gourmettraveller-article-iframe-bottom' // TODO: update this URL
    },

    // TODO: update below for awwfood
    // Used for the magazine image (not the one in the footer)
    product: {
        id: 'awwfood',
        title: '',
        magazineTitle: '',
        socialLinks: {
            facebook: 'https://www.facebook.com/womensweeklyfood/',
            instagram: 'https://www.instagram.com/womensweeklyfood/',
            pinterest: 'https://www.pinterest.com.au/womensweeklyfood/'
        },
        newsletterTitle: 'Get the newsletter',
        newsletterText: 'Subscribe to receive triple-tested recipes, expert cooking tips, food inspiration, and exclusive offers.',
        newsletterUrl: 'https://www.womensweeklyfood.com.au/womensweeklyfood-newsletter', // to update
        subscribeButtonText: 'Subscribe',
        subscribeButtonUrl: '/subscribe-magazine',
        imageSizes: {
            s: { w: 275 },
            m: { w: 275 },
            l: { w: 275 },
            xl: { w: 275 }
        },
        footerSubscribeButtonText: [
            {
                url: '/wwf',
                text: `Subscribe to Women's Weekly Food`
            },
            {
                url: '/australian-womens-weekly',
                text: 'Subscribe to The Weekly'
            },
            {
                url: '/aww-cookbooks',
                text: 'Browse all cookbooks'
            }
        ]
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
        // TODO: change this for awwfood
        templateId: "Harper'sBazaarAU",
        widgetId: 'AR_1',
        scriptUrl: '//widgets.outbrain.com/outbrain.js'
    },
    nielsen: '0C1B8319-D481-4F99-B742-68A42FE2A708', // TODO: change this ID
    sailthru: {
        list: 'master_foodtolove',
        vars: {
            list_foodtolove_newsletter: '1',
            list_foodtolove_solus: '1'
        },
        source: {
            sidebar: 'wwf_website_sidebar',
            contentPage: 'wwf_website_content_bottom'
        }
    },
    navItemsToExcludeUrlList: ['In The Test Kitchen']
};
