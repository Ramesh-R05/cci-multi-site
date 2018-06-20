export default {
    mustRead: {
        desktopCount: 4,
        tabletCount: 2,
        showOutsideContainer: false,
        showInsideContainer: true
    },
    promoted: {
        showBelowHero: false,
        showAboveBottomTeasers: true,
        imageSizes: {
            s: { w: 300, h: 170 },
            m: { w: 300, h: 170 },
            l: { w: 300, h: 170 },
            xl: { w: 219, h: 124 }
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
    royMorganAmp: {
        enabled: true,
        id: 'm8frgflsxh',
        pixels: [
            { ca: '10034215', a: 'yp0d3p0a' }, // Cosmo pixel
            { ca: '20001092', a: 'jmtr1l0t' }, // Rollup pixel
            { ca: '20002304', a: '30tp4z58' }  // Women's sites pixel
        ]
    },
    feedCarousel: {
        enabled: true
    },
    search: {
        enabled: true
    },
    pubmatic: {
        enabled: false
    }
};
