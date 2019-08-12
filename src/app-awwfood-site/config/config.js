import brightcove from './brightcove';
import cache from './cache';
import features from './features';
import global from './global';
import services from './services';
import site from './site';
import polar from './polar';

export default {
    ga: { id: 'UA-57795117-1' },

    gtm: { masthead: 'AWWFOOD', id: 'GTM-MHX78ZT' }, // TODO: Check that the masthead is correct

    defaultImageUrl: 'http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/awwfood/2018/09/03/1535939419920_awwfood-default.png',

    brightcove,

    jwPlayer: {
        scriptKey: 'V2EH3i8K',
        baseUrl: 'https://cdn.jwplayer.com'
    },

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

    alternativeTitleMap: {
        article: 'Kitchen Tips',
        recipecollection: 'Best Of',
        recipes: 'Recipe'
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

        newsletterSignupInBodyCopy: '' // Not used on WWFood
    },

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
        templateId: 'Foodtolove',
        widgetId: 'AR_1',
        scriptUrl: '//widgets.outbrain.com/outbrain.js'
    },
    nielsen: '69335BF5-94E8-4D8B-B7DB-99D54705A524',
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
