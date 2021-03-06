import imageResize from '@bxm/ui/lib/common/ImageResize';

export default {
    mustRead: {
        desktopCount: 4,
        tabletCount: 2,
        showOutsideContainer: false,
        showInsideContainer: true,
        imageSizes: {
            s: { w: 300, h: 185 },
            m: { w: 300, h: 185 },
            l: { w: 300, h: 185 },
            xl: { w: 230, h: 142 }
        }
    },
    promoted: {
        showBelowHero: false,
        showAboveBottomTeasers: true,
        imageSizes: {
            s: { w: 300, h: 185 },
            m: { w: 300, h: 185 },
            l: { w: 300, h: 185 },
            xl: { w: 230, h: 142 }
        }
    },
    galleryOfGalleries: {
        enabled: true
    },
    socialShareBlock: {
        enabled: true
    },
    loadMoreBtn: {
        enabled: true
    },
    recommendations: {
        enabled: true
    },
    noCachePages: {
        enabled: true,
        paths: ['/preview/']
    },
    lazyLoadAds: {
        enabled: false
    },
    showTeaserBadgeLink: false,
    headerExpanded: true,
    outbrain: {
        enabled: true
    },
    sailthru: {
        enabled: true
    },
    outbrainAmp: {
        enabled: true
    },
    feedCarousel: {
        enabled: true
    },
    galleryItemCountSeparator: '/',
    teaserImageAnchorType: imageResize.anchor.MC,
    teaserImageSizes: {
        s: { w: 323, h: 200 },
        m: { w: 452, h: 279 },
        l: { w: 409, h: 253 },
        xl: { w: 1010, h: 624 }
    },
    homePage: {
        topNewsFeedListType: 'grid',
        newsFeed: {
            showImageBadge: false,
            tagsToShow: 2,
            linesToShow: 3
        }
    },
    sectionPage: {
        topNewsFeedListType: 'grid',
        newsFeed: {
            showImageBadge: false,
            tagsToShow: 2,
            linesToShow: 3
        }
    },
    giftCard: {
        enabled: false
    },
    summary: {
        enabled: true
    },
    curatedHeroTeaser: {
        enabled: true
    },
    alternativeTitle: {
        enabled: true
    },
    navigationSubSectionDropdown: {
        enabled: true
    },
    royMorganAmp: {
        enabled: true,
        id: 'm8frgflsxh',
        pixels: [
            { ca: '20002950', a: 'jmtr1l0t' }, // Site pixel
            { ca: '20001092', a: 'jmtr1l0t' }, // Rollup pixel
            { ca: '20002302', a: '0j16fz4d' }, // To Love pixel
            { ca: '20002304', a: '30tp4z58' } // Women's sites pixel
        ]
    },
    reviewTitleSuffix: {
        enabled: true,
        titleSuffix: ': Restaurant review'
    },
    search: {
        enabled: true
    },
    showRecipeSourceAsAttribute: {
        enabled: true
    },
    ias: {
        enabled: true,
        id: 926929
    },
    skimLinks: {
        enabled: false,
        publisherCode: ''
    },
    moreFrom: {
        enabled: true,
        title: "More From Women's Weekly Food",
        options: {
            showTeaserLink: true,
            showSubSection: true,
            showTeaserSummary: false,
            imageSizes: {
                s: { w: 690, h: 427 },
                m: { w: 486, h: 300 },
                l: { w: 624, h: 386 },
                xl: { w: 368, h: 227 }
            }
        }
    },
    jwPlayer: {
        enabled: true
    },
    googleNativeAds: {
        enabled: true
    },
    ix: {
        enabled: true,
        scriptUrl: '//js-sec.indexww.com/ht/p/187830-276471052722483.js'
    }
};
