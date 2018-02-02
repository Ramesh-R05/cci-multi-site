import imageResize from '@bxm/ui/lib/common/ImageResize';

export default {
    mustRead: {
        desktopCount: 4,
        tabletCount: 2,
        showOutsideContainer: false,
        showInsideContainer: true,
        imageSizes: {
            s: { w: 300, h: 225 },
            m: { w: 300, h: 225 },
            l: { w: 300, h: 225 },
            xl: { w: 230, h: 173 }
        }
    },
    promoted: {
        showBelowHero: false,
        showAboveBottomTeasers: true,
        imageSizes: {
            s: { w: 300, h: 225 },
            m: { w: 300, h: 225 },
            l: { w: 300, h: 225 },
            xl: { w: 230, h: 173 }
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
    teaserImageAnchorType: imageResize.anchor.MC,
    teaserImageSizes: {
        s: { w: 323, h: 242 },
        m: { w: 452, h: 339 },
        l: { w: 409, h: 307 },
        xl: { w: 1010, h: 756 }
    },
    homePage: {
        topNewsFeedListType: 'list',
        newsFeed: {
            showImageBadge: true,
            tagsToShow: 2,
            linesToShow: 3
        }
    }
};
