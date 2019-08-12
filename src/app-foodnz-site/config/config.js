import brightcove from './brightcove';
import cache from './cache';
import features from './features';
import global from './global';
import services from './services';
import site from './site';
import polar from './polar';

export default {
    ga: { id: 'UA-57795117-3' },

    gtm: { masthead: 'NZFOOD', id: 'GTM-5DSBNK' },

    defaultImageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/FoodNZ/2019/01/25/1248/default-hero-image.png',

    brightcove,

    jwPlayer: {
        scriptKey: 'RkmcpDLH',
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
            privacy: 'http://www.bauermedia.co.nz/privacy',
            advertise: 'https://www.bauermediaadvertising.co.nz',
            terms: 'http://www.bauermedia.co.nz/terms'
        },

        socialUrls: {
            facebook: 'https://www.facebook.com/Foodtolove.nz/',
            instagram: 'https://www.instagram.com/foodtolovenz/',
            pinterest: 'https://www.pinterest.com.au/foodtolovenz/',
            twitter: 'https://twitter.com/foodtolovenz'
        },

        newsletterSignupInBodyCopy: ''
    },

    // Used for the magazine image (not the one in the footer)
    product: {
        id: 'foodnz',
        title: '',
        magazineTitle: '',
        socialLinks: {
            facebook: 'https://www.facebook.com/Foodtolove.nz/',
            instagram: 'https://twitter.com/foodtolovenz',
            pinterest: 'https://www.pinterest.com.au/foodtolovenz/'
        },
        newsletterTitle: 'Get the newsletter',
        newsletterText: 'The latest news delivered to your inbox.',
        newsletterUrl: 'http://foodtolove.e.bauermedia.co.nz/join/5l5/signup-foodtolovenz',
        subscribeButtonText: 'Subscribe Now',
        subscribeButtonUrl: 'https://www.magshop.co.nz/store/bauer-media ',
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
        site: [
            {
                id: 'nztaste',
                title: 'New Zealand Taste',
                magazineTitle: 'New Zealand Taste',
                imageUrl: '/assets/logos/nz-taste.svg',
                url: '/brands/new-zealand-taste',
                socialLinks: {
                    facebook: 'https://www.facebook.com/tastemagazine',
                    instagram: 'https://www.instagram.com/tastemagnz/?hl=en'
                },
                newsletterUrl: 'http://taste.e.bauermedia.co.nz/join/signup-taste-ftl',
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
                newsletterUrl: 'http://nzww.e.bauermedia.co.nz/join/signup-nzww-ftl',
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
                newsletterUrl: 'http://womansday.e.bauermedia.co.nz/join/signup-womansday-ftl',
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
                newsletterUrl: 'http://awwnz.e.bauermedia.co.nz/join/signup-awwnz-ftl',
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
                newsletterUrl: 'http://goodhealth.e.bauermedia.co.nz/join/5kl/signup-ghc-ftl',
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
                newsletterUrl: 'http://nadia.e.bauermedia.co.nz/join/signup-nadia-ftl',
                newsletterSignupInBodyCopy: ''
            },
            {
                id: 'food',
                title: 'food',
                magazineTitle: 'food',
                imageUrl: '/assets/logos/food.svg',
                url: '/brands/food',
                socialLinks: {
                    instagram: 'https://www.instagram.com/foodmagnz/?hl=en',
                    facebook: 'https://www.facebook.com/foodmagnz/'
                },
                newsletterUrl: 'http://foodmagazine.e.bauermedia.co.nz/join/signup-food-ftl',
                newsletterSignupInBodyCopy: ''
            }
        ],
        network: [
            {
                id: 'nztaste',
                imageUrl: '/assets/logos/nz-taste.svg',
                url: '/brands/new-zealand-taste',
                title: 'New Zealand Taste'
            },
            {
                id: 'awwnz',
                imageUrl: '/assets/logos/aww.svg',
                url: '/brands/the-australian-womens-weekly',
                title: `The Australian Women's Weekly`
            },
            {
                id: 'nzwd',
                imageUrl: '/assets/logos/nzwd.svg',
                url: '/brands/womans-day',
                title: `Woman's Day`
            },
            {
                id: 'nzww',
                imageUrl: '/assets/logos/nzww.svg',
                url: '/brands/new-zealand-womans-weekly',
                title: `New Zealand Woman's Weekly`
            },
            {
                id: 'nzgh',
                imageUrl: '/assets/logos/good-health.svg',
                url: '/brands/good-health-and-wellbeing',
                title: 'Good Health And Wellbeing'
            },
            {
                id: 'nadia',
                imageUrl: '/assets/logos/nadia.svg',
                url: '/brands/nadia',
                title: 'Nadia'
            },
            {
                id: 'food',
                imageUrl: '/assets/logos/food.svg',
                url: '/brands/food',
                title: `food`
            },
            {
                id: 'countdown',
                imageUrl: '/assets/images/countdown-logo.png',
                url: 'https://www.countdown.co.nz/',
                title: 'Countdown New Zealand'
            }
        ],
        shortSources: {
            'Food To Love': 'FTLNZ'
        }
    },
    outbrain: {
        templateId: 'Foodtolove',
        widgetId: 'AR_1',
        scriptUrl: '//widgets.outbrain.com/outbrain.js'
    },
    nielsen: ''
};
