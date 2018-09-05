import navigation from '../modules/navigation';
import latestTeasers from '../latestTeasers';

export default {
    entity: {
        nodeType: 'TagSection',
        title: 'Video',
        url: '/tags/video'
    },
    headerMetaData: {
        author: 'Theo Hatzi',
        canonicalUrl: '',
        faceBookAdmins: '',
        googleTagManagerEnvironment: 'Development',
        googleTagManagerMasthead: 'DOLLY',
        GroupingCategory: '',
        hrefLang: '',
        pageDescription: '',
        pageName: 'Tag',
        robots: 'NOINDEX,NOFOLLOW',
        title: ''
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
    headerNavigation: navigation.getData(),
    magCover: {
        moduleImageUrl:
            'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/elle/2017/10/11/1507683961181_0018975elle-australia-magazine-subscription.png',
        moduleTitle: 'Subscribe Now'
    }
};
