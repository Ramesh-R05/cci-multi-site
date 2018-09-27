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
    galleryItemCountSeparator: '/',
    teaserImageAnchorType: imageResize.anchor.MC,
    teaserImageSizes: {
        s: { w: 323, h: 242 },
        m: { w: 452, h: 339 },
        l: { w: 409, h: 307 },
        xl: { w: 1010, h: 756 }
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
            // Please leave these (copied from GT) here until RoyMorgan for awwfood implementation has been confirmed.
            // The given implementation looks wrong, as it doesn't follow what the other sites are doing.
            // I'm guessing that we will have to use these in the future. - GKappatos

            // { ca: '10034218', a: 'yp0d3p0a' }, // GT pixel
            // { ca: '20001092', a: 'jmtr1l0t' }, // Rollup pixel
            // { ca: '20002303', a: 'qv7034ra' }, // Luxury pixel
            // { ca: '20002304', a: '30tp4z58' } // Women's sites pixel

            { ca: '20002950', a: 'jmtr1l0t' }, // AwwFood - see BXMA-1403, BXMA-1234
            { ca: '20002304', a: '30tp4z58' } // Women's sites pixel - see BXMA-1403, BXMA-1234
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
    }
};
