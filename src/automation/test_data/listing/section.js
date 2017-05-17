import navigation from '../modules/navigation';
import latestTeasers from '../latestTeasers';

export default {
    entity: {
        id: "NOW-1206",
        title: "Fashion",
        dateCreated: "2016-11-23T02:25:50.00Z",
        imageFacebookUrl: {
            tags: [ ],
            source: "",
            credits: [ ]
        },
        nodeType: "Section",
        url: "/",
        parentName: "Fashion",
        parentUrl: "/fashion"
    },
    headerMetaData: {
        googleTagManagerEnvironment: "dev",
        googleTagManagerMasthead: "NOW",
        robots: "NOINDEX,NOFOLLOW",
        canonicalUrl: "",
        pageDescription: "Fashion",
        pageName: "Fashion",
        title: "Fashion"
    },
    latestTeasers: latestTeasers.slice(0, 7),
    list: {
        params: {
            pageNo: 1
        },
        items: [
            latestTeasers.slice(7)
        ]
    },
    request: {
        queryString: {
            leaf: ''
        }
    },
    section: {
        id: "NOW-1206",
        name: "Fashion"
    },
    headerNavigation: navigation.getData(),
    magCover: {
        moduleImageUrl: 'http://dev.assets.cougar.bauer-media.net.au/s3/digital-cougar-assets-dev/Elle/2017/03/17/16588/0018975_elle-australia-magazine-subscription.png',
        moduleTitle: 'Subscribe Now'
    }
}
