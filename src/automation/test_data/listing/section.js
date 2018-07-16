import navigation from '../modules/navigation';
import latestTeasers from '../latestTeasers';

export default {
    entity: {
        id: 'NOW-1206',
        title: 'Fashion',
        dateCreated: '2016-11-23T02:25:50.00Z',
        imageFacebookUrl: {
            tags: [],
            source: '',
            credits: []
        },
        nodeType: 'Section',
        url: '/',
        parentName: 'Fashion',
        parentUrl: '/fashion'
    },
    theme: {
        id: 'ELLE-11814',
        url: '/modules/fashiontheme',
        moduleName: 'fashiontheme',
        pageDateCreated: '2017-06-23T01:12:43.00Z',
        headerLogoColour: 'pink',
        headerLogoAlignment: 'Left',
        moduleManualContent: {
            totalCount: 0,
            data: []
        },
        headerLargeBackground: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/elle/2017/10/11/1507683862029_elle-gif-test.gif',
        headerSmallBackground:
            'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/elle/2017/10/11/1507683902141_ELLEFiatMastheadAnimatedSmall.gif',
        headerMediumBackground: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/elle/2017/10/11/1507683933530_elle-gif-test1.gif'
    },
    headerMetaData: {
        googleTagManagerEnvironment: 'dev',
        googleTagManagerMasthead: 'NOW',
        robots: 'NOINDEX,NOFOLLOW',
        canonicalUrl: '',
        pageDescription: 'Fashion',
        pageName: 'Fashion',
        title: 'Fashion'
    },
    latestTeasers: latestTeasers.slice(0, 7),
    list: {
        params: {
            pageNo: 1
        },
        items: [latestTeasers.slice(6)],
        previous: null,
        current: {
            path: '/',
            url: 'http://multi-site.test.bxm.net.au/fashion'
        },
        next: {
            path: '/?pageNo=2',
            url: 'http://multi-site.test.bxm.net.au/fashion/?pageNo=2'
        }
    },
    request: {
        queryString: {
            leaf: ''
        }
    },
    section: {
        id: 'NOW-1206',
        name: 'Fashion',
        urlName: 'fashion'
    },
    headerNavigation: navigation.getData(),
    magCover: {
        moduleImageUrl:
            'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/elle/2017/10/11/1507683961181_0018975elle-australia-magazine-subscription.png',
        moduleTitle: 'Subscribe Now'
    }
};
