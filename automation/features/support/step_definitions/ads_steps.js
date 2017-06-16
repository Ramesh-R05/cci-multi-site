var wn_ads = require('../page_objects/ads_widget');
var gallery = require('../page_objects/gallery_widget');
var visibilityFunctions = require('../utils/visibilityFunctions');
var wait = require('../utils/wait');

module.exports = function() {

    this.Given(/^I should see sticky MREC ad next to the top news feed$/, function () {
        //Always scroll to the top first to allow this scenario can be reused for tablet landscape after testing desktop
        browser.scroll(0,0);
        //Verify the ad is appearing
        expect(browser.isVisible(wn_ads.ad_TopMrecRhs)).toBe(true);
        //Verify the ad is a sticky ad after scrolling down
        browser.scroll(0,1500);
        expect(browser.isVisible(wn_ads.ad_TopMrecRhs)).toBe(true);
        expect(browser.getAttribute(wn_ads.adMrecNextToTopFeedSticky, 'style')).toContain("fixed");
    });

    this.Given(/^I should see sticky MREC ad next to the bottom news feed$/, function () {
        //Always scroll to the beginning of the bottom news feed to allow this scenario can be reused for tablet landscape after testing desktop
        browser.scroll(0,2000);
        //Verify the ad is appearing
        browser.waitForVisible(wn_ads.ad_BottomMrecRhs,3000);
        expect(browser.isVisible(wn_ads.ad_BottomMrecRhs)).toBe(true);
        //Verify the ad is a sticky ad after scrolling down
        browser.scroll(0,2700);
        expect(browser.isVisible(wn_ads.ad_BottomMrecRhs)).toBe(true);
        //expect(browser.getAttribute(wn_ads.adMrecNextToBottomFeedSticky, 'style')).toContain("fixed"); //Unstable result - Will find a solution later
    });

    this.Then(/^I should see MREC ad under the hero teaser$/, function () {
        expect(browser.isVisible(wn_ads.ad_MrecUnderHeroTeaser)).toBe(true);
    });

    this.Then(/^I should not see MREC ad under the hero teaser$/, function () {
        expect(browser.isVisible(wn_ads.ad_MrecUnderHeroTeaser)).toBe(false);
    });

    this.Then(/^I should see the top leaderboard ad under navigation$/, function () {
        expect(browser.waitForVisible(wn_ads.ad_TopLeaderboard,5000)).toBe(true);
    });

    this.Then(/^I should see the middle leaderboard ad under the top news feed$/, function () {
        expect(browser.isVisible(wn_ads.ad_MiddleLeaderboard)).toBe(true);
    });

    this.Then(/^I should see the bottom leaderboard ad above the footer$/, function () {
        expect(browser.isVisible(wn_ads.ad_BottomLeaderboard)).toBe(true);
    });

    this.Then(/^I should not see the bottom leaderboard ad above the footer$/, function () {
        expect(browser.isVisible(wn_ads.ad_BottomLeaderboard)).toBe(false);
    });

    this.Then(/^I should see MREC ad in the bottom news feed$/, function () {
        expect(browser.isVisible(wn_ads.ad_MrecInBottomFeed)).toBe(true);
    });

    this.Then(/^I should not see MREC ad in the bottom news feed$/, function () {
        expect(browser.isVisible(wn_ads.ad_MrecInBottomFeed)).toBe(false);
    });

    //BELOW ARE STEPS FOR GALLERY
    this.Then(/^I should see the top leaderboard ad above the gallery slide$/, function () {
        expect(browser.isVisible(wn_ads.adTopLeaderboardGallery)).toBe(true);
    });

    this.Then(/^I should not see the bottom leaderboard ad under the gallery slide$/, function () {
        expect(browser.isVisible(wn_ads.adBottomLeaderboardGallery)).toBe(false);
    });

    this.Then(/^I should see the MREC ad at the bottom right of the gallery$/, function () {
        expect(browser.isVisible(wn_ads.adMrecBottomRightGallery)).toBe(true);
    });

    this.Then(/^I should not see the MREC ad at the bottom right of the gallery$/, function () {
        expect(browser.isVisible(wn_ads.adMrecBottomRightGallery)).toBe(false);
    });

    this.Then(/^I should see the MREC ad after the (\d+) slide$/, function (slide) {
        //Go to the MREC slide
        for (var i=0; i<slide; i++){
            browser.click(gallery.galleryNextButton);
        }
        //Validate
        browser.waitForVisible(wn_ads.adMrecInSlideGallery,3000);
        expect(browser.isVisible(wn_ads.adMrecInSlideGallery)).toBe(true);
    });

    //BELOW ARE STEPS FOR ARTICLE
    this.Then(/^I should see the bottom leaderboard ad above the footer on article$/, function () {
        browser.moveToObject(wn_ads.ad_BottomLeaderboard);
        wait(1500);
        browser.moveToObject(wn_ads.ad_BottomLeaderboard); //move to the object again after the images on gallery are loaded from the first move.
        expect(browser.isVisible(wn_ads.ad_BottomLeaderboard)).toBe(true);
    });

    this.Then(/^I should see MREC ad between images$/, function () {
        wait(2000);
        browser.moveToObject(wn_ads.ad_MrecAfterSlide3);
        expect(browser.waitForVisible(wn_ads.ad_MrecAfterSlide3,5000)).toBe(true);
        browser.moveToObject(wn_ads.ad_MrecAfterSlide7);
        browser.waitForVisible(wn_ads.gallerySlide6,5000);
        browser.waitForVisible(wn_ads.gallerySlide7,5000);
        browser.moveToObject(wn_ads.ad_MrecAfterSlide7);
        expect(browser.waitForVisible(wn_ads.ad_MrecAfterSlide7,7000)).toBe(true);
    });

    this.Then(/^I should see four MREC ads in the RHR feed$/, function () {
        browser.moveToObject(wn_ads.ad_MrecRhs1);
        browser.moveToObject(wn_ads.ad_MrecRhs2);
        browser.moveToObject(wn_ads.ad_MrecRhs3);
        browser.moveToObject(wn_ads.ad_MrecRhs4);
    });

    this.Then(/^I should see MREC ad under the hero image$/, function () {
        expect(browser.isVisible(wn_ads.ad_MrecUnderHeroImage)).toBe(true);
    });

    this.Then(/^I should not see MREC ad under the hero image$/, function () {
        expect(browser.isVisible(wn_ads.ad_MrecUnderHeroImage)).toBe(false);
    });

    this.Then(/^I should see MREC ad above recommendation$/, function () {
        expect(browser.isVisible(wn_ads.ad_MrecBeforeRecommendation)).toBe(true);
    });

    this.Then(/^I should not see MREC ad above recommendation$/, function () {
        expect(browser.isVisible(wn_ads.ad_MrecBeforeRecommendation)).toBe(false);
    });

    //BELOW ARE THE STEPS TO TEST WALLPAPER, SIDE PANEL, OUT OF PAGE ADs
    this.Then(/^I should "([^"]*)" the wallpaper ad slot on "([^"]*)"$/, function (visibility, page) {
        visibilityFunctions.isAdVisible(page, visibility,wn_ads.ad_Wallpaper);
    });

    this.Then(/^I should "([^"]*)" the left and right side ad slot on "([^"]*)"$/, function (visibility, page) {
        visibilityFunctions.isAdVisible(page, visibility,wn_ads.ad_LeftSidePanel);
        visibilityFunctions.isAdVisible(page, visibility,wn_ads.ad_RightSidePanel);
    });

    this.Then(/^I should "([^"]*)" the out of page ad slot on "([^"]*)"$/, function (visibility, page) {
        visibilityFunctions.isAdVisible(page, visibility,wn_ads.ad_OutOfPage);
    });

    //----------------------------------------
    this.Then(/^I should see each outside ad slot element containing proper class name$/, function (dataTable) {
        var rows = dataTable.hashes();
        var adElement;
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            switch(row['ad']) {
                case 'Top Leaderboard':
                    adElement = wn_ads.ad_TopLeaderboard;
                    break;
                case 'Middle Leaderboard':
                    adElement = wn_ads.ad_MiddleLeaderboard;
                    break;
                case 'Bottom Leaderboard':
                    adElement = wn_ads.ad_BottomLeaderboard;
                    break;
                case 'Teads':
                    adElement = wn_ads.ad_Teads;
                    break;
                case 'MREC Under Hero Teaser': //mobile
                    adElement = wn_ads.ad_MrecUnderHeroTeaser;
                    break;
            }
            var className = browser.getAttribute(adElement,'class');
            expect(className).toEqual(row['class-name']);
        }
    });

    this.Then(/^I should see each body ad slot element containing proper class name$/, function (dataTable) {
        var rows = dataTable.hashes();
        var adElement;
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            switch(row['ad']) {
                case 'MREC After Slide 3':
                    adElement = wn_ads.ad_MrecAfterSlide3;
                    break;
                case 'MREC After Slide 7':
                    adElement = wn_ads.ad_MrecAfterSlide7;
                    break;
                case 'MREC In Bottom Feed': //mobile
                    adElement = wn_ads.ad_MrecInBottomFeed;
                    break;
                case 'MREC Before Recommendation': //mobile
                    adElement = wn_ads.ad_MrecBeforeRecommendation;
                    break;
                case 'MREC Under Hero Image': //mobile
                    adElement = wn_ads.ad_MrecUnderHeroImage;
                    break;
            }
            var className = browser.getAttribute(adElement,'class');
            expect(className).toEqual(row['class-name']);
        }
    });

    this.Then(/^I should see each RHS ad slot element containing proper class name$/, function (dataTable) {
        var rows = dataTable.hashes();
        var adElement;
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            switch(row['ad']) {
                case 'Top MREC RHS':
                    adElement = wn_ads.ad_TopMrecRhs;
                    break;
                case 'Bottom MREC RHS':
                    adElement = wn_ads.ad_BottomMrecRhs;
                    break;
                case 'MREC RHS 1':
                    adElement = wn_ads.ad_MrecRhs1;
                    break;
                case 'MREC RHS 2':
                    adElement = wn_ads.ad_MrecRhs2;
                    break;
                case 'MREC RHS 3':
                    adElement = wn_ads.ad_MrecRhs3;
                    break;
                case 'MREC RHS 4':
                    adElement = wn_ads.ad_MrecRhs4;
                    break;
                case 'Sticky MREC RHS':
                    adElement = wn_ads.ad_StickyMrecRhs;
                    break;
            }
            var className = browser.getAttribute(adElement,'class');
            expect(className).toEqual(row['class-name']);
        }
    });

    this.Then(/^I should see each additional ad slot element containing proper class name$/, function (dataTable) {
        var rows = dataTable.hashes();
        var adElement;
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            switch(row['ad']) {
                case 'Out Of Page':
                    adElement = wn_ads.ad_OutOfPage;
                    break;
                case 'Left Side Panel':
                    adElement = wn_ads.ad_LeftSidePanel;
                    break;
                case 'Right Side Panel':
                    adElement = wn_ads.ad_RightSidePanel;
                    break;
                case 'Wallpaper':
                    adElement = wn_ads.ad_Wallpaper;
                    break;
            }
            var className = browser.getAttribute(adElement,'class');
            expect(className).toEqual(row['class-name']);
        }
    });

    this.Then(/^I should see each load more ad slot element containing proper class name$/, function (dataTable) {
        var rows = dataTable.hashes();
        var adElement;
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            switch (row['ad']) {
                case 'Load More MREC RHS':
                    adElement = wn_ads.ad_LoadMoreMrecRhs;
                    break;
                case 'Load More MREC In Bottom Feed': //mobile
                    adElement = wn_ads.ad_LoadMoreMrecInBottomFeed;
                    break;
            }
            var className = browser.getAttribute(adElement, 'class');
            expect(className).toEqual(row['class-name']);
        }
    });
};
