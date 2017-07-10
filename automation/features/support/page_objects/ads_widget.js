var ads_widget = {

    //For checking sticky ad
    adMrecNextToTopFeedSticky: '.page__top-container .page__social-wrapper > div > div > span', //homepage, section
    adMrecNextToBottomFeedSticky: '.bottom-news-feed .fixed-column--sticky>div', //homepage, section

   //For old gallery
    adTopLeaderboardGallery: '.ad.gallery__mobile-ad.ad--bottom-label [id^=gpt-slot-]', //gallery
    adMrecBottomRightGallery: '.ad.gallery__aside-ad.ad--top-label [id^=gpt-slot-]', //gallery
    adMrecInSlideGallery: '.ad.gallery__slide-ad.ad--bottom-label [id^=gpt-slot-]', //gallery
    adBottomLeaderboardGallery: '.ad.gallery__footer-ad.ad--top-label', //gallery

// =======For Ads Location
    //Outside
    ad_TopLeaderboard: '.side-menu-wrapper > .ad--section-top-leaderboard [id^=gpt-slot-]', //homepage, index, brand, gallery, article
    ad_MiddleLeaderboard: '.content-wrapper .ad--section-leaderboard [id^=gpt-slot-]', //homepage, index, brand
    ad_BottomLeaderboard: '.content-wrapper .ad--section-top-leaderboard [id^=gpt-slot-]', //homepage, index, brand, gallery, article
    ad_Teads: '.ad--slot-teads [id^=gpt-slot-]', //gallery, article

    //RHS
    ad_TopMrecRhs: '.page__top-container .ad--section-mrec [id^=gpt-slot-]', //homepage, index, brand
    ad_BottomMrecRhs: '.bottom-news-feed .ad--section-mrec [id^=gpt-slot-]', //homepage, index, brand
    ad_MrecRhs1: '.feed-ad:nth-child(3) [id^=gpt-slot-]', //gallery, article
    ad_MrecRhs2: '.feed-ad:nth-child(9) [id^=gpt-slot-]', //gallery, article
    ad_MrecRhs3: '.feed-ad:nth-child(15) [id^=gpt-slot-]', //gallery, article
    ad_MrecRhs4: '.feed-ad:nth-child(21) [id^=gpt-slot-]', //gallery, article
    ad_StickyMrecRhs: '.sticky-block.rhs-ads [id^=gpt-slot-]', //gallery

    //Additional
    ad_OutOfPage: '.ad--out-of-page [id^=gpt-slot-]', //homepage, index, brand
    ad_LeftSidePanel: '.ad--sidepanel-left [id^=gpt-slot-]', //homepage, index, brand
    ad_RightSidePanel: '.ad--sidepanel-right [id^=gpt-slot-]', //homepage, index, brand
    ad_Wallpaper: '.ad--wallpaper [id^=gpt-slot-]', //homepage, index, brand

    //Polar
    ad_PolarMustRead2: '.mustread-teaser-view-grid .teaser__list-item:nth-child(2) .ad--bottom-label [id^=gpt-slot-]', //homepage
    ad_PolarMustRead5: '.mustread-teaser-view-grid .teaser__list-item:nth-child(5) .ad--bottom-label [id^=gpt-slot-]', //homepage
    ad_PolarTopTeaser1: '.top-news-feed .teaser__list-item:nth-child(1) .ad--bottom-label [id^=gpt-slot-]', //homepage, section
    ad_PolarTopTeaser6: '.top-news-feed .teaser__list-item:nth-child(6) .ad--bottom-label [id^=gpt-slot-]', //homepage, section
    ad_PolarBottomTeaser2: '.bottom-news-feed:nth-child(1) .teaser__list-item:nth-child(2) .ad--bottom-label [id^=gpt-slot-]', //homepage, section
    ad_PolarBottomTeaser6: '.bottom-news-feed:nth-child(1) .teaser__list-item:nth-child(7) .ad--bottom-label [id^=gpt-slot-]', //homepage, section
    ad_PolarLoadMore2: '.bottom-news-feed:nth-child(2) .teaser__list-item:nth-child(2) .ad--bottom-label [id^=gpt-slot-]', //homepage, section
    ad_PolarLoadMore6: '.bottom-news-feed:nth-child(2) .teaser__list-item:nth-child(7) .ad--bottom-label [id^=gpt-slot-]', //homepage, section
    ad_PolarRHS2: '.feed__container .feed-item:nth-child(2) .ad--bottom-label [id^=gpt-slot-]', //gallery, article
    ad_PolarRHS5: '.feed__container .feed-item:nth-child(6) .ad--bottom-label [id^=gpt-slot-]', //gallery, article
    ad_PolarRHS9: '.feed__container .feed-item:nth-child(11) .ad--bottom-label [id^=gpt-slot-]', //gallery, article
    ad_PolarRHS14: '.feed__container .feed-item:nth-child(17) .ad--bottom-label [id^=gpt-slot-]', //gallery, article
    ad_PolarRelatedContentInBody: '.content-body-container .content-body__related-content .feed-item:nth-child(1) .ad--bottom-label [id^=gpt-slot-]', //gallery, article
    ad_PolarRelatedContentAfterSlide7: '.gallery__feed-item--ad:nth-child(9) .content-body__related-content .feed-item:nth-child(1) .ad--bottom-label [id^=gpt-slot-]', //gallery

    //After Load More
    ad_LoadMoreMrecRhs: '.bottom-news-feed:nth-child(2) .ad--section-mrec [id^=gpt-slot-]', //homepage, index, brand

    //Body
    ad_MrecAfterSlide3: '.gallery__feed-item--ad:nth-child(4) .gallery__ad [id^=gpt-slot-]', //gallery
    ad_MrecAfterSlide7: '.gallery__feed-item--ad:nth-child(9) .gallery__ad [id^=gpt-slot-]', //gallery

    //For Mobile
    ad_MrecUnderHeroTeaser: '.hero-wrapper [id^=gpt-slot-]', //mobile homepage, index, brand
    ad_MrecInBottomFeed: '.bottom-news-feed .teaser__list-item--ad [id^=gpt-slot-]', //mobile homepage, index, brand
    ad_LoadMoreMrecInBottomFeed: '.bottom-news-feed:nth-child(2) .teaser__list-item--ad [id^=gpt-slot-]', //mobile homepage, index, brand
    ad_MrecBeforeRecommendation: '.ad--article-before-recommendations [id^=gpt-slot-]', //mobile gallery
    ad_MrecUnderHeroImage: '.ad--beneath-hero [id^=gpt-slot-]', //mobile article

    //--Non-ad element
    topFeedItem6: '.top-news-feed .teaser__list-item:nth-child(6)', //for 'I should see sticky MREC ad next to the top news feed'
    gallerySlide3: '.gallery__feed-item:nth-child(3)', //for 'I should see MREC ad between images'
    gallerySlide7: '.gallery__feed-item:nth-child(8)', //for 'I should see MREC ad between images'

    // Vertical Gallery
    galleryNativeAd: '.ad--article-native',
    galleryNativeAdDfp: '.ad--article-native [id^=gpt-slot-]'
};
module.exports = ads_widget;
