import navigation from '../modules/navigation';

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
    request: {
        queryString: {
            leaf: ''
        }
    },
    headerNavigation: navigation.getData(),
    magCover: {
        moduleImageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/elle/2017/10/11/1507683961181_0018975elle-australia-magazine-subscription.png',
        moduleTitle: 'Subscribe Now'
    }
}
