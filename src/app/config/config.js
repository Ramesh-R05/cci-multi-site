import cache from './cache';
import features from './features';
import global from './global';
import polar from './polar';
import services from './services';
import site from './site';

export default {
    gtm: { masthead: 'NOW', id: 'GTM-MSL9XB' },

    defaultImageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/now/defaultimage.png',

    gigya: { apiKey: '3_R74vzxKbWVOiWuMSjElPNubJi5gS7NQ-KkpquR6Y3zVBafukYzJSZRMHKtri2igs' },

    features,

    global,

    ads: { targets: { env: 'test' } },

    site,

    server: { port: 3001 },

    services,

    cache,

    error: {
        404: {
            title: 'Sorry, this page is not found.',
            symbol: null,
            content: [''],
            emojiSrc: '/assets/images/error.gif',
            returnHomeText: 'Try refreshing this page or join us back on the homepage'
        },
        503: {
            title: 'Sorry, this page is broken.',
            symbol: null,
            content: [''],
            emojiSrc: '/assets/images/error.gif',
            returnHomeText: 'Try refreshing this page or join us back on the homepage'
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
            facebook: 'https://www.facebook.com/nowtolove',
            twitter: 'https://twitter.com/NowToLove',
            instagram: 'https://www.instagram.com/NowToLove'
        }
    },

    brands: {
        site: [
            {
                id: 'aww',
                title: "Australian Women's Weekly",
                magazineTitle: 'The Weekly',
                imageUrl: '/assets/images/headerlogos/AWW-logo.svg',
                url: '/aww',
                socialLinks: {
                    facebook: 'https://www.facebook.com/WomensWeeklyMag',
                    twitter: 'https://twitter.com/womensweeklymag',
                    instagram: 'https://www.instagram.com/womensweeklymag'
                }
            },
            {
                id: 'wd',
                title: "Woman's Day",
                imageUrl: '/assets/images/headerlogos/WD-logo.svg',
                url: '/womansday',
                socialLinks: {
                    facebook: 'https://www.facebook.com/WomansDayAUS',
                    twitter: 'https://twitter.com/womansdayaus',
                    instagram: 'https://www.instagram.com/Womansdayaus'
                }
            },
            {
                id: 'gh',
                title: 'Good Health',
                imageUrl: '/assets/images/headerlogos/GH-logo.svg',
                url: '/good-health',
                socialLinks: {
                    facebook: 'https://www.facebook.com/GoodHealthMag/',
                    twitter: 'https://twitter.com/goodhealthmag',
                    instagram: 'https://www.instagram.com/goodhealthmag'
                }
            },
            {
                id: 'ok',
                title: 'OK! Magazine',
                imageUrl: '/assets/images/headerlogos/OK-logo.svg',
                url: '/okmagazine',
                socialLinks: {
                    facebook: 'https://www.facebook.com/OKmagAustralia',
                    twitter: 'https://twitter.com/okmagaustralia',
                    instagram: 'https://www.instagram.com/okmagaustralia'
                }
            },
            {
                id: 'shop',
                title: 'SHOP Til You Drop',
                imageUrl: '/assets/images/headerlogos/SUMMERSHOP-logo.svg',
                url: '/shop-til-you-drop',
                socialLinks: {
                    facebook: 'https://www.facebook.com/shoptilyoudropmag/',
                    twitter: 'https://twitter.com/shoptilyoudrop',
                    instagram: 'https://www.instagram.com/shoptilyoudropmag/'
                },
                renderSubscribeElements: false
            },
            {
                id: 'nw',
                title: 'NW',
                imageUrl: '/assets/images/headerlogos/NW-logo.svg',
                url: '/nw',
                socialLinks: {
                    facebook: 'https://www.facebook.com/NWmagazine',
                    twitter: 'https://twitter.com/nwmag',
                    instagram: 'https://www.instagram.com/nwmag/'
                }
            },
            {
                id: 'take5',
                title: 'Take 5',
                imageUrl: '/assets/images/headerlogos/T5-logo.svg',
                url: '/take5mag',
                socialLinks: {
                    facebook: 'https://www.facebook.com/take5magazine',
                    twitter: 'https://twitter.com/take5magazine',
                    instagram: 'https://www.instagram.com/take5magazine/'
                }
            },
            {
                id: 'yours',
                title: 'Yours',
                imageUrl: '/assets/images/headerlogos/YOURS-logo.svg',
                url: '/yours',
                socialLinks: {
                    facebook: 'https://www.facebook.com/Yoursmagazineau/',
                    twitter: 'https://twitter.com/yoursmagazineau',
                    instagram: 'https://www.instagram.com/yoursmagazineau/'
                }
            },
            {
                id: 'mb',
                title: 'Mother and Baby',
                imageUrl: '/assets/images/headerlogos/MB-logo.svg',
                url: '/mother-and-baby',
                socialLinks: {
                    facebook: 'https://www.facebook.com/mbmag/',
                    twitter: 'https://twitter.com/motherbaby_au',
                    instagram: 'https://www.instagram.com/motherbaby_au'
                },
                renderSubscribeElements: false
            },
            {
                id: 'tvweek',
                title: 'TV WEEK',
                imageUrl: '/assets/images/headerlogos/TVWEEK-logo.svg',
                url: '/tvweek',
                socialLinks: {
                    facebook: 'https://www.facebook.com/tvweekmag',
                    twitter: 'https://twitter.com/TVWEEKmag',
                    instagram: 'https://www.instagram.com/TVWEEK'
                }
            }
        ],
        network: [
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
                imageUrl: '/assets/images/menulogos/ELLE-logo-redtext.svg',
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
                id: 'cosmo',
                imageUrl: '/assets/images/menulogos/COSMO-logo.svg',
                url: 'https://www.cosmopolitan.com.au/',
                title: 'Cosmopolitan'
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
        templateId: 'NowtoLove',
        widgetId: 'AR_1',
        scriptUrl: '//widgets.outbrain.com/outbrain.js'
    }
};
