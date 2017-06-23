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
    theme: {
        id: "ELLE-11814",
        url: "/modules/fashiontheme",
        moduleName: "fashiontheme",
        pageDateCreated: "2017-06-23T01:12:43.00Z",
        headerLogoColour: "pink",
        headerLogoAlignment: "Left",
        moduleManualContent: {
            totalCount: 0,
            data: [ ]
        },
        headerLargeBackground: "http://dev.assets.cougar.bauer-media.net.au/s3/digital-cougar-assets-dev/Elle/2017/06/16/11790/elle-gif-test.gif",
        headerSmallBackground: "http://dev.assets.cougar.bauer-media.net.au/s3/digital-cougar-assets-dev/Elle/2017/06/16/11790/elle-gif-test.gif",
        headerMediumBackground: "http://dev.assets.cougar.bauer-media.net.au/s3/digital-cougar-assets-dev/Elle/2017/06/16/11790/elle-gif-test.gif"
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
            latestTeasers.slice(6)
        ],
        "previous": null,
        "current": {
            "path": "/",
            "url": "http://multi-site.test.bxm.net.au/fashion"
        },
        "next": {
            "path": "/?pageNo=2",
            "url": "http://multi-site.test.bxm.net.au/fashion/?pageNo=2"
        }
    },
    request: {
        queryString: {
            leaf: ''
        }
    },
    section: {
        id: "NOW-1206",
        name: "Fashion",
        urlName: "fashion"
    },
    headerNavigation: navigation.getData(),
    magCover: {
        moduleImageUrl: 'http://dev.assets.cougar.bauer-media.net.au/s3/digital-cougar-assets-dev/Elle/2017/03/17/16588/0018975_elle-australia-magazine-subscription.png',
        moduleTitle: 'Subscribe Now'
    }
}
