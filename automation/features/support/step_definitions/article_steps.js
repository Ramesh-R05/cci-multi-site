var lhr = require('../page_objects/lhr_widget');
var wn_article = require('../page_objects/article_widget');
var wait = require('../../../node_modules/@bxm/automation/lib/utils/wait');
var nconf = require('nconf');
var site_domain = nconf.get('APP_KEY');
var world = require('../world');
var isBrowserStack = world.Urls.isBrowserStack;
var scrolling = require('../../../node_modules/@bxm/automation/lib/utils/scrolling');

module.exports = function() {

    this.When(/^I can see (\d+) items in the list of items in RHR$/, function (count) {
        var feedList = browser.elements(wn_article.lhrFeedItems);
        expect((feedList.value.length).toString()).toEqual(count);
    });

    this.When(/^I can see the (\d+) images of each item in RHR$/, function (count) {
        var feedImages = browser.elements(wn_article.lhrFeedImgs);
        expect((feedImages.value.length).toString()).toEqual(count);
    });

    this.When(/^Image in RHR is clickable to open its page$/, function () {
        var feedImageUrl = browser.getAttribute(wn_article.lhrFeedOneImg, 'href');
        expect(feedImageUrl === '').toBe(false);
    });

    this.When(/^I can see the long title of an item in RHR/, function () {
        var feedTitle = browser.getText(wn_article.lhrFeedOneTitle);
        expect(feedTitle === '').toBe(false);
    });

    this.When(/^Long title in RHR is clickable to open its page$/, function () {
        var feedTitleUrl = browser.getAttribute(wn_article.lhrFeedOneTitle, 'href');
        expect(feedTitleUrl === '').toBe(false);
        expect(feedTitleUrl === null).toBe(false);

    });

    this.When(/^I can see an item in RHR containing source and date$/, function () {
        //verify sources/dates of one LHR items
        var feedSource = browser.getText(wn_article.lhrFeedOneSource);
        var feedDate = browser.getText(wn_article.lhrFeedOneDate);
        //validate the source
        expect(feedSource).not.toEqual('');
        //validate the date
        expect(feedDate).not.toEqual('');
        expect(feedDate).toEqual(feedDate.toUpperCase());
    });

    this.When(/^I can see the hero image$/, function () {
        scrolling(browser,wn_article.heroImg,isBrowserStack);
        var heroImg = browser.waitForVisible(wn_article.heroImg,2000);
        expect(heroImg).toBe(true);
    });
    this.When(/^I can see the hero image on Food$/, function () {
        browser.scroll(wn_article.heroImgFood);
        var heroImg = browser.waitForVisible(wn_article.heroImgFood,2000);
        expect(heroImg).toBe(true);
    });
    this.Given(/^I can see the image alt text in the hero image element "([^"]*)"$/, function (altText) {
        var imgaltText = browser.getAttribute(wn_article.heroImg, 'alt');
        expect(imgaltText).toMatch(altText);
    });
    this.When(/^I should not see the hero image caption$/, function () {
        var heroImgCaption = browser.isVisible(wn_article.heroImgCaption);
        expect(heroImgCaption).toBe(false);
    });
    this.When(/^I can see the hero image caption "([^"]*)"$/, function (ImgCaption) {
        var heroImgCaption = browser.getText(wn_article.heroImgCaption);
        expect(heroImgCaption).toContain(ImgCaption);
    });
    this.When(/^I can see the RHR$/, function () {
        var lhrFeed = browser.isVisible(wn_article.lhrFeed);
        expect(lhrFeed).toBe(true);
    });
    this.When(/^I should not see the LHR$/, function () {
        var lhrFeed = browser.isVisible(wn_article.lhrFeed);
        expect(lhrFeed).toBe(false);
    });
    this.Given(/^I can see the long title "([^"]*)"$/, function (articleTitle) {
        browser.waitForVisible(wn_article.longTitle, 10000);
        var longTitle = browser.getText(wn_article.longTitle).toLowerCase();
        expect(longTitle).toContain(articleTitle);
    });
    this.Given(/^I can see the created date "([^"]*)"$/, function (date) {
        browser.waitForVisible(wn_article.dateText, 10000);
        var articleDate = browser.getText(wn_article.dateText);
        expect(articleDate.toString()).toContain(date);
    });
    this.Given(/^I can see the hero video instead of the main image$/, function () {
        var heroVideo = browser.isVisible(wn_article.heroVideo);
        expect(heroVideo).toBe(true);
        var heroImg = browser.isVisible(wn_article.heroImg);
        expect(heroImg).toBe(false);
    });
    this.Given(/^I can see the hero video instead of the main image on Food$/, function () {
        var heroVideo = browser.isVisible(wn_article.heroVideoFood);
        expect(heroVideo).toBe(true);
        var heroImg = browser.isVisible(wn_article.heroImgFood);
        expect(heroImg).toBe(false);
    });
    this.Given(/^I can see the short teaser "([^"]*)"$/, function (articleShortTeaser) {
        browser.waitForVisible(wn_article.shortTeaser, 10000);
        var shortTeaser = browser.getText(wn_article.shortTeaser);
        expect(shortTeaser).toContain(articleShortTeaser);
    });

    this.Given(/^I can see the body paragraph "([^"]*)"$/, function (articleBodyPara) {
        var bodyPara = browser.getText(wn_article.bodyParagraph);
        expect(bodyPara[0]).toContain(articleBodyPara);
        //Validate the body paragraph
    });

    this.Given(/^I can see the body list "([^"]*)"$/, function (articleBodyList) {
        expect(browser.element(wn_article.bodyList).getText()).toContain(articleBodyList);
    });

    this.Given(/^I can see the body heading "([^"]*)"$/, function (articleBodyHeading) {
        var bodyHeading = browser.getText(wn_article.bodyHeading);
        expect(bodyHeading).toContain(articleBodyHeading);
    });

    this.Given(/^I can see the body related content$/, function () {
        // use the site domain to select different class element for aww,wd,food and dolly,cosmo,homes
        browser.scroll(wn_article.relatedContentHeading);
        var rcHeading = browser.getText(wn_article.relatedContentHeading);
        var rcItemsImage = browser.getAttribute(wn_article.relatedContentItemsImage, 'data-srcset');
        var rcItemsTitle = browser.getText(wn_article.relatedContentItemsTitle);

        //Validate the heading of Related
        expect(rcHeading).not.toEqual('');

        //Loop through the related items, and Validate the body related items' image and title
        for(var i=0; i<rcItemsTitle.length; i++) {
            var image = rcItemsImage[i];
            var title = rcItemsTitle[i];
            expect(image === '').toBe(false);
            expect(title === '').toBe(false);
        }
    });

    this.Given(/^I can see the body related content in Food style$/, function () {
        var rcItemsImage = browser.getAttribute(wn_article.relatedContentItemsImage_food, 'srcset');
        var rcItemsTitle = browser.getText(wn_article.relatedContentItemsTitle_food);

        //Loop through the related items, and Validate the body related items' image and title
        for(var i=0; i<rcItemsTitle.length; i++) {
            var image = rcItemsImage[i];
            var title = rcItemsTitle[i];
            expect(image === '').toBe(false);
            expect(title === '').toBe(false);
        }
    });

    this.Given(/^I can see the body image$/, function () {
        var bodyImg = browser.isVisible(wn_article.bodyImg);
        expect(bodyImg).toBe(true);
    });
    this.Given(/^I can see the body image caption "([^"]*)"$/, function (ImgCaption) {
        var bodyImgCaption = browser.getText(wn_article.bodyImgCaption);
        expect(bodyImgCaption).toContain(ImgCaption);
    });
    this.Given(/^I can see the body gallery$/, function () {
        var bodyGallery = browser.getAttribute(wn_article.bodyGallery, 'href');
        for(var i=0; i<bodyGallery.length; i++){
            var galleryItems = bodyGallery[i];
            expect(galleryItems == '').toBe(false);
        }
    });
    this.Given(/^I can see the body video$/, function () {
        var bodyVideo = browser.isVisible(wn_article.bodyVideo);
        expect(bodyVideo).toBe(true);
    });
    this.Given(/^I can see the body tips "([^"]*)"$/, function (articleBodyTips) {
        var bodyTips = browser.getText(wn_article.bodyTips).toLowerCase();
        expect(bodyTips).toContain(articleBodyTips);
    });
    this.Given(/^I can see the body competition$/, function () {
        var competiton = browser.getAttribute(wn_article.Bodycomp,'src');
        expect(competiton).toMatch("engagesciences");
    });
    this.Given(/^I can see the body Twitter embed "([^"]*)"$/, function (twitterId) {
        var twitEmbed = browser.getAttribute(wn_article.twitterEmb1, 'data-tweet-id');
        expect(twitEmbed).toEqual(twitterId);
    });
    this.Given(/^I can see the body Instagram embed with caption "([^"]*)"$/, function (instagramSrc) {
        var instagramEmbed = browser.getAttribute(wn_article.instagramEmb1, 'src');
        expect(instagramEmbed[0]).toMatch(instagramSrc);
    });
    this.Given(/^I can see the body Instagram embed without caption "([^"]*)"$/, function (instagramSrc) {
        var instagramEmbed = browser.getAttribute(wn_article.instagramEmb1, 'src');
        expect(instagramEmbed[1]).toMatch(instagramSrc);
        expect(instagramEmbed[1]).not.toMatch("captioned");
    });
    this.Given(/^I can see the body Facebook embed "([^"]*)"$/, function (facebookUrl) {
        browser.waitForExist(wn_article.facebookEmb1, 3000);
        var facebookEmbed = browser.getAttribute(wn_article.facebookEmb1, 'data-href');
        expect(facebookEmbed).toEqual(facebookUrl);
    });
    this.Given(/^I can see the body Playbuzz embed "([^"]*)"$/, function (playbuzzUrl) {
        var playbuzzEmbed = browser.getAttribute(wn_article.playbuzzEmb1, 'data-game');
        expect(playbuzzEmbed).toEqual(playbuzzUrl);
    });
    this.Given(/^I can see the body Youtube embed "([^"]*)"$/, function (youtubeUrl) {
        //The stubbed data of Youtube is in the first iframe of video container.
        var videoEmbArry = browser.getAttribute(wn_article.videoEmbArry, 'src');
        expect(videoEmbArry[0]).toEqual(youtubeUrl);
    });
    this.Given(/^I can see the body Vimeo embed "([^"]*)"$/, function (vimeoUrl) {
        //The stubbed data of Vimeo is in the second iframe of video container.
        var videoEmbArry = browser.getAttribute(wn_article.videoEmbArry, 'src');
        expect(videoEmbArry[1]).toEqual(vimeoUrl);
    });
    this.Given(/^I can see the body Whooshka embed "([^"]*)"$/, function (whooshkaUrl) {
        var whooshkaEmbed = browser.getAttribute(wn_article.whooshkaEmb1, 'src');
        expect(whooshkaEmbed).toEqual(whooshkaUrl);
    });
    this.Given(/^I can see the body Wirewax embed "([^"]*)"$/, function (wirewaxUrl) {
        var wirewaxEmbed  = browser.getAttribute(wn_article.wirewaxEmb1, 'src');
        expect(wirewaxEmbed).toEqual(wirewaxUrl);
    });
    this.Given(/^I can see the body Linklay embed "([^"]*)"$/, function (linklayUrl) {
        browser.waitForVisible(wn_article.linklayEmb, 3000);
        var linklayEmb = browser.getAttribute(wn_article.linklayEmb, 'src');
        expect(linklayEmb).toEqual(linklayUrl);
    });
    this.Given(/^I can see the body Giphy embed "([^"]*)"$/, function (giphyId) {
        var giphyEmb = browser.getAttribute(wn_article.giphyEmb, 'src');
        expect(giphyEmb).toContain(giphyId);
    });
    this.Given(/^I can see the related tags "([^"]*)"$/, function (rTag1) {
        var relatedTags = browser.getText(wn_article.relatedTags, 'href');
        expect(relatedTags).toEqual(rTag1);
    });
    this.Given(/^I can see the related tags "([^"]*)" "([^"]*)"$/, function (rTag1, rTag2) {
        var relatedTags = browser.getText(wn_article.relatedTags, 'href');
        expect(relatedTags[0]).toEqual(rTag1);
        expect(relatedTags[1]).toEqual(rTag2);
    });
    this.Given(/^I can see the author "([^"]*)"$/, function (authorName) {
        var author = browser.getText(wn_article.authorText);
        expect(author).toEqual(authorName);
    });

    this.Given(/^I can see the "([^"]*)" source appearing with gtm "([^"]*)"$/, function (position,gtm) {
        //Identify the element
        switch(position) {
            case 'header':
                var source = wn_article.headerSource;
                var sourceImg = wn_article.headerSourceImg;
                break;
            case 'bottom':
                var source = wn_article.bottomSource;
                var sourceImg = wn_article.bottomSourceImg;
                break;
        }

        //Get values
        var sourceHref = browser.getAttribute(source, 'href');
        var sourceGTM = browser.getAttribute(source,'class');
        var sourceLogo = browser.getAttribute(sourceImg,'src');

        //Validate the values
        expect(sourceHref).not.toEqual('');
        expect(sourceGTM).toEqual(gtm);
        expect(sourceLogo).not.toEqual('');
    });

    this.Given(/^I can see the ([^"]*) top and bottom ad$/, function (adSize) {
        // adSize = billboard|leaderboard|banner
        var adPlacements =[];
        switch(adSize) {
            case 'billboard':
                adPlacements = browser.getText(wn_article.adSection);
                break;
            case 'leaderboard':
                adPlacements = browser.getText(wn_article.adSection);
                break;
            case 'banner':
                adPlacements = browser.getText(wn_article.adSection);
                break;
        }

        expect(adPlacements.length).toEqual(2);
    });

    this.Given(/^I can see the related tag "([^"]*)"$/, function (rTag) {
        browser.waitForExist(wn_article.relatedWnTags,3000);
        browser.scroll(wn_article.relatedWnTags);
        var relatedTag = browser.getText(wn_article.relatedWnTags, 'href');
        expect(relatedTag[0]).toEqual(rTag);
    });

    this.Given(/^I can see the author is "([^"]*)"$/, function (authorName) {
        var author = browser.getText(wn_article.authorWn);
        expect(author).toEqual(authorName);
    });

    this.Then(/^I can see the sticky ad when the top banner disappears from view$/, function () {
        scrolling(browser,wn_article.articleFooter,isBrowserStack);
        wait(3500);//the top ad will be sticky for 3.5sec
        expect(browser.waitForVisible(wn_article.stickyAdSection,2000)).toBe(true);
    });

    this.Given(/^I can see the hero video is "([^"]*)"$/, function (heroVideoID) {
        browser.waitForVisible(wn_article.heroVideo,2000);
        var heroVideo = browser.getAttribute(wn_article.heroVideo, 'poster');
        expect(heroVideo).toContain(heroVideoID);
        // Verify the hero video ID
    });

    this.Given(/^I can see the playlist container$/, function () {
        browser.scroll(0,1000);
        browser.waitForVisible(wn_article.heroVideoPlaylist,2000);
        // Verify the playlist container exists
    });

    this.Given(/^I can see the video thumbnail of each video in the playlist$/, function () {
        var heroVideoPlaylistThumbnail = browser.getAttribute(wn_article.heroVideoPlaylistThumbnail, 'src');
        for (var i = 0; i < heroVideoPlaylistThumbnail.length; ++i) {
            var thumbnail = heroVideoPlaylistThumbnail[i];
            expect(thumbnail === '').toBe(false);
        }
        // Verify the thumbnail images in the playlist
    });

    this.Given(/^I can see the video title of each video in the playlist$/, function () {
        var heroVideoPlaylistTitle = browser.getText(wn_article.heroVideoPlaylistTitle);
        for (var i = 0; i < heroVideoPlaylistTitle.length; ++i) {
            var title = heroVideoPlaylistTitle[i];
            expect(title === '').toBe(false);
        }
        // Verify the titles in the playlist
    });

    this.Given(/^I can click the play button of the main video$/, function () {
        var heroVideoProgress = browser.getAttribute(wn_article.heroVideoProgress,'aria-valuenow');
        expect(heroVideoProgress[0]).toEqual('NaN');
        // Verify the progress bar is not loaded before playing.

        browser.click(wn_article.heroVideoPlayButton);
        var heroVideoPlayButton = browser.isVisible(wn_article.heroVideoPlayButton);
        expect(heroVideoPlayButton).toBe(false);
        // Verify the play button is clickable to play the video
    });

    this.Given(/^I can see the video playing$/, function () {

        console.log('Waiting a few seconds before validating')
        wait(6000);

        var heroVideoProgress = browser.getAttribute(wn_article.heroVideoProgress,'aria-valuenow');
        expect(heroVideoProgress[0]).not.toEqual('NaN');
        // Verify the control bar of the hero video shows the loading progress. (When it isn't started, it will show NaN.)
    });

    this.Given(/^I can see the next video is auto-played after the previous video$/, function () {
        var heroVideoPlaylistItem = browser.getAttribute(wn_article.heroVideoPlaylistItem, 'class');
        expect(heroVideoPlaylistItem[0]).toContain('vjs-selected');
        expect(heroVideoPlaylistItem[1]).not.toContain('vjs-selected');

        console.log('Waiting 9 seconds to ensure the first video is ended before validating the next video')
        wait(9000);
        // wait 9 seconds to ensure the first video has finished

        var heroVideoPlaylistItem = browser.getAttribute(wn_article.heroVideoPlaylistItem, 'class');
        expect(heroVideoPlaylistItem[0]).not.toContain('vjs-selected');

        // Verify that the first video is not the selected one
        var heroVideoProgress = browser.getAttribute(wn_article.heroVideoProgress,'aria-valuetext');
        expect(heroVideoProgress[0]).not.toEqual('NaN');
        // Verify that the player is still playing.
    });

    this.Given(/^I should not see the LATEST header in LHR$/, function () {
        // Verify that the LATEST header has been removed. This is the main request of DAW-1129
        expect(browser.isExisting(wn_article.wd_lhrFeedHeader)).toBe(false);
    });

    this.When(/^I should see image of each item in LHR$/, function () {
        // Verify that images of items appear in LHR
        var lhrFeedImage = browser.getAttribute(wn_article.wd_lhrFeedImage, 'src');
        for (var i=0; i<2; i++){
            var FeedImage = lhrFeedImage[i];
            expect(FeedImage === '').toBe(false);
        }
    });

    this.When(/^I should be able to click on image in LHR to go to its page$/, function () {
        // Verify that images of items are clickable
        var lhrFeedImageLink = browser.getAttribute(wn_article.wd_lhrFeedImageLink, 'href');
        for (var i=0; i<2; i++){
            var FeedImageLink = lhrFeedImageLink[i];
            expect(FeedImageLink === '').toBe(false);
        }
    });

    this.When(/^I should see long title of each item in LHR$/, function () {
        // Verify that long titles of items appear in LHR
        var lhrFeedLongTitle = browser.getText(wn_article.wd_lhrFeedLongTitle);
        for (var i=0; i<2; i++){
            var FeedLongTitle = lhrFeedLongTitle[i];
            expect(FeedLongTitle === '').toBe(false);
        }
    });

    this.When(/^I should be able to click on long title in LHR to go to its page$/, function () {
        // Verify that long titles of items are clickable
        var lhrFeedLongTitleLink = browser.getAttribute(wn_article.wd_lhrFeedLongTitleLink, 'href');
        for (var i=0; i<2; i++){
            var FeedLongTitleLink = lhrFeedLongTitleLink[i];
            expect(FeedLongTitleLink === '').toBe(false);
        }
    });

    this.When(/^I should see subsection of each item in LHR$/, function () {
        // Verify that subsections of items appear in LHR
        var lhrFeedSubsection = browser.getText(wn_article.wd_lhrFeedSubsection);
        for (var i=0; i<2; i++){
            var FeedSubsection = lhrFeedSubsection[i];
            expect(FeedSubsection === '').toBe(false);
        }
    });

    this.When(/^I should be able to click on subsection in LHR to go to its page$/, function () {
        // Verify that subsections of items are clickable
        var lhrFeedSubsectionLink = browser.getAttribute(wn_article.wd_lhrFeedSubsectionLink, 'href');
        for (var i=0; i<2; i++){
            var FeedSubsectionLink = lhrFeedSubsectionLink[i];
            expect(FeedSubsectionLink === '').toBe(false);
        }
    });

    this.When(/^I should see created date of each item in LHR$/, function () {
        // Verify that created dates of items appear in LHR
        var lhrFeedDate = browser.getText(wn_article.wd_lhrFeedDate);
        for (var i=0; i<2; i++){
            var FeedDate = lhrFeedDate[i];
            expect(FeedDate === '').toBe(false);
        }
    });

    this.When(/^I can see the facebook share button on article page$/, function () {
        var facebook = browser.isVisible(wn_article.articleFacebook);
        var facebookButton = browser.getText(wn_article.articleFacebook);
        expect(facebook).toBe(true);
        expect(facebookButton).toEqual('SHARE');
    });

    this.When(/^I can see the pinterest share button on article page$/, function () {
        var pinterest = browser.isVisible(wn_article.articlePinterest);
        var pinterestButton = browser.getText(wn_article.articlePinterest);
        expect(pinterest).toBe(true);
        expect(pinterestButton).toEqual('PIN IT');
    });

    this.Given(/^I can see the Image Revealer component$/, function() {
        var isVisible = browser.isVisible(wn_article.imageRevealer);
        var leftImageSrc = browser.getAttribute(wn_article.imageRevealerLeftImg, 'src');
        var rightImageSrc = browser.getAttribute(wn_article.imageRevealerRightImg, 'src');
        expect(isVisible).toBe(true);
        expect(leftImageSrc).not.toBeUndefined();
        expect(rightImageSrc).not.toBeUndefined();
    });

    this.Given(/^I can see readmore carousel$/, function() {
       var feedCarousel = browser.elements(wn_article.feedCoursel);
       expect(feedCarousel.value.length).toBe(1);
    });
};
