import brightcove from './brightcove';
import cache from './cache';
import features from './features';
import global from './global';
import services from './services';
import site from './site';
import polar from './polar';

export default {
    ga: { id: 'UA-8689488-1' },

    gtm: { masthead: 'GT', id: 'GTM-P8JPLN' }, // TODO: Check that the masthead is correct

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

        newsletterSignupInBodyCopy: ''
    },

    // Used for the magazine image (not the one in the footer)
    product: {
        id: 'foodnz',
        title: '',
        magazineTitle: '',
        socialLinks: {
            facebook: 'https://www.facebook.com/womensweeklyfood/',
            instagram: 'https://www.instagram.com/womensweeklyfood/',
            pinterest: 'https://www.pinterest.com.au/womensweeklyfood/'
        },
        newsletterTitle: 'Get the newsletter',
        newsletterText: 'The latest news delivered to your inbox.',
        newsletterUrl: '/newsletter',
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
        uniheader: [
            {
                id: 'nztaste',
                title: 'New Zealand Taste',
                magazineTitle: 'New Zealand Taste',
                imageUrl: '/assets/logos/nz-taste.svg',
                url: '/brands/new-zealand-taste',
                socialLinks: {
                    facebook: 'https://www.facebook.com/tastemagazine',
                    instagram: 'https://www.instagram.com/tastemagnz/'
                },
                newsletterUrl: '/newsletter-subscribe-new-zealand-taste',
                newsletterSignupInBodyCopy: ''
            },
            {
                id: 'nzww',
                title: "New Zealand Woman's Weekly",
                imageUrl: '/assets/logos/nzww.svg',
                url: '/brands/new-zealand-womans-weekly',
                socialLinks: {
                    facebook: 'https://www.facebook.com/nzwomansweekly',
                    instagram: 'https://www.instagram.com/newzealandwomansweekly'
                },
                newsletterUrl: '/newsletter-subscribe-new-zealand-womans-weekly',
                newsletterSignupInBodyCopy: ''
            },
            {
                id: 'nzwd',
                title: "Woman's Day",
                magazineTitle: "Woman's Day",
                imageUrl: '/assets/logos/nzwd.svg',
                url: '/brands/womans-day',
                socialLinks: {
                    facebook: 'https://www.facebook.com/womansdaynz',
                    instagram: 'https://www.instagram.com/womansdaynz'
                },
                newsletterUrl: '/newsletter-subscribe-womans-day',
                newsletterSignupInBodyCopy: ''
            },
            {
                id: 'awwnz',
                title: "The Australian Women's Weekly",
                magazineTitle: "The Australian Women's Weekly",
                imageUrl: '/assets/logos/aww.svg',
                url: '/brands/the-australian-womens-weekly',
                socialLinks: {
                    facebook: 'https://www.facebook.com/awwmagazine',
                    instagram: 'https://www.instagram.com/awwmagazine'
                },
                newsletterUrl: '/newsletter-subscribe-the-australian-womens-weekly',
                newsletterSignupInBodyCopy: ''
            },
            {
                id: 'nzgh',
                title: 'Good Health And Wellbeing',
                magazineTitle: 'Good Health And Wellbeing',
                imageUrl: '/assets/logos/good-health.svg',
                url: '/brands/good-health-and-wellbeing',
                socialLinks: {
                    facebook: 'https://www.facebook.com/goodhealthchoicesnz/',
                    twitter: 'https://twitter.com/good_health_nz',
                    instagram: 'https://www.instagram.com/goodhealthnz/',
                    pinterest: 'https://nz.pinterest.com/goodhealthmag/'
                },
                newsletterUrl: '/newsletter-subscribe-good-health-and-wellbeing',
                newsletterSignupInBodyCopy: ''
            },
            {
                id: 'nadia',
                title: 'Nadia',
                magazineTitle: 'Nadia',
                imageUrl: '/assets/logos/nadia.svg',
                url: '/brands/nadia',
                socialLinks: {
                    instagram: 'https://www.instagram.com/nadiamagazine',
                    facebook: 'https://www.facebook.com/Foodtolove.nz/'
                },
                newsletterUrl: '/newsletter-subscribe-nadia',
                newsletterSignupInBodyCopy: ''
            }
        ],
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
    nielsen: '69335BF5-94E8-4D8B-B7DB-99D54705A524'
};
