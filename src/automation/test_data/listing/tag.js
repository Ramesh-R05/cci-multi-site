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
    "magCover": {
        "moduleImageUrl": 'http://dev.assets.cougar.bauer-media.net.au/s3/digital-cougar-assets-dev/Elle/2017/03/17/16588/0018975_elle-australia-magazine-subscription.png'
    }
}
