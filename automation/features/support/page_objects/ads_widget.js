var ads_widget = {
    adTopLeaderboard: '.side-menu-wrapper > .ad--section-top-leaderboard [id^=gpt-slot-]', //homepage, section, article
    adMrecUnderHero: '.hero-wrapper [id^=gpt-slot-]', //homepage, section
    adMrecNextToTopFeed: '.page__top-container [id^=gpt-slot-]', //homepage, section
    adMrecNextToTopFeedSticky: '.page__top-container .page__social-wrapper > div > div > span', //homepage, section
    adMiddleLeaderboard: '.ad--section-leaderboard [id^=gpt-slot-]', //homepage, section
    adMrecInBottomNewsFeed: '.ad--teaser-list [id^=gpt-slot-]', //homepage, section
    adMrecNextToBottomFeed: '.bottom-news-feed [id^=gpt-slot-]', //homepage, section
    adMrecNextToBottomFeedSticky: '.bottom-news-feed div.carriage', //homepage, section
    adBottomLeaderboard: '.content-wrapper .ad--section-top-leaderboard > [id^=gpt-slot-]', //homepage, section, article
    adTopLeaderboardGallery: '.ad.gallery__mobile-ad.ad--bottom-label [id^=gpt-slot-]', //gallery
    adMrecBottomRightGallery: '.ad.gallery__aside-ad.ad--top-label [id^=gpt-slot-]', //gallery
    adMrecInSlideGallery: '.ad.gallery__slide-ad.ad--bottom-label [id^=gpt-slot-]', //gallery
    adBottomLeaderboardGallery: '.ad.gallery__footer-ad.ad--top-label', //gallery
    adMrecRHRFeed1: 'ul.feed__items li.feed-ad:nth-child(3) [id^=gpt-slot-]', //article
    adMrecRHRFeed2: 'ul.feed__items li.feed-ad:nth-child(9) [id^=gpt-slot-]', //article
    adMrecRHRFeed3: 'ul.feed__items li.feed-ad:nth-child(15) [id^=gpt-slot-]', //article
    adMrecRHRFeed4: 'ul.feed__items li.feed-ad:nth-child(21) [id^=gpt-slot-]', //article
    adBottomLeaderboardArticle: '.sticky-block .ad--section-top-leaderboard [id^=gpt-slot-]',
    adMrecUnderHeroArticle: '.ad--beneath-hero [id^=gpt-slot-]', //article
    adMrecAboveRecommendation: '.ad--article-before-recommendations [id^=gpt-slot-]', //article

    adWallpaperHomepageSection: '.ad--wallpaper [id^=gpt-slot-]', //homepage, section
    adLeftSideHomepageSection: '.ad--sidepanel-left [id^=gpt-slot-]', //homepage, section
    adRightSideHomepageSection: '.ad--sidepanel-right [id^=gpt-slot-]', //homepage, section
    adOutOfPageHomepageSection: '.ad--out-of-page [id^=gpt-slot-]', //homepage, section
    adWallpaperArticle: '.ad--wallpaper [id^=gpt-slot-]', //article
    adLeftSideArticle: '.ad--sidepanel-left [id^=gpt-slot-]', //article
    adRightSideArticle: '.ad--sidepanel-right [id^=gpt-slot-]', //article
    adOutOfPageArticle: '.ad--out-of-page [id^=gpt-slot-]', //article
    adWallpaperGallery: '.ad--wallpaper [id^=gpt-slot-]', //gallery
    adLeftSideGallery: '.ad--sidepanel-left [id^=gpt-slot-]', //gallery
    adRightSideGallery: '.ad--sidepanel-right [id^=gpt-slot-]', //gallery
    adOutOfPageGallery: '.ad--out-of-page [id^=gpt-slot-]' //gallery
};
module.exports = ads_widget;
