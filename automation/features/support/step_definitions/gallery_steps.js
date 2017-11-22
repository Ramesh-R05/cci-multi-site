var gallery = require('../page_objects/gallery_widget');
var world = require('../world');
var wait = require('../../../node_modules/@bxm/automation/lib/utils/wait');
var findValue = require('../../../node_modules/@bxm/automation/lib/utils/findValue');
var validateImageURL = require('../../../node_modules/@bxm/automation/lib/utils/validateImageURL');
var loadAllElements = require('../../../node_modules/@bxm/automation/lib/utils/loadAllElements');

module.exports = function() {

    this.Given(/^I can see the logo on the gallery header$/, function() {
        expect(browser.isVisible(gallery.headerLogo)).toBe(true);
    });

    this.Given(/^I can click the logo to go to homepage$/, function() {
        var logoLink = browser.getAttribute(gallery.headerLogo, 'href');
        expect(logoLink).toEqual(world.Urls.home_page);
    });

    this.Given(/^I can see an image appearing on the gallery$/, function() {
        // To load all elements on the page before validating
        loadAllElements('gallery', browser);

        var img = browser.getAttribute(gallery.galleryImg, 'srcset');
        console.log("IMAGE SRC =" + " " + img[0]);
        validateImageURL(img[0]);
    });

    this.Given(/^I can see the source appearing on the gallery with gtm "([^"]*)"$/, function (gtm) {
        //Get values
        var sourceHref = browser.getAttribute(gallery.gallerySource, 'href');
        var sourceGTM = browser.getAttribute(gallery.gallerySource,'class');
        var sourceLogo = browser.getAttribute(gallery.gallerySourceImg,'src');

        //Validate the values
        expect(sourceHref).not.toEqual('');
        expect(sourceGTM).toEqual(gtm);
        expect(sourceLogo).not.toEqual('');
    });

    this.Given(/^I can see the created date on the gallery "([^"]*)"$/, function(date) {
        var galleryDate = browser.getText(gallery.galleryDate);
        expect(galleryDate).toContain(date);
    });

    this.Given(/^I can see the gallery title containing "([^"]*)"$/, function(longTitle) {
        var galleryTitle = browser.getText(gallery.galleryLongTitle);
        expect(galleryTitle.toLowerCase()).toContain(longTitle.toLowerCase());
    });

    this.Given(/^I can not see the gallery title$/, function() {
        expect(browser.isVisible(gallery.galleryLongTitle)).toBe(false);
    });

    this.Given(/^I can see the gallery description of the gallery containing "([^"]*)"$/, function(description) {
        var galleryDescription = browser.getText(gallery.galleryDescription);
        expect(galleryDescription).toContain(description);
    });

    this.Given(/^I can see the image number "([^"]*)" on the gallery$/, function(num) {
        var imageCountIndex = browser.getText('.gallery__feed-item:nth-child(' + num +') .gallery__item-index');
        console.log(imageCountIndex);
        expect(imageCountIndex).toEqual(num);
    });

    this.Given(/^I can see the image caption on the gallery containing "([^"]*)"$/, function(caption) {
        browser.waitForVisible(gallery.imgCaption);
        var imgCaption = browser.getText(gallery.imgCaption);
        expect(imgCaption).toMatch(caption);
    });

    this.When(/^I see the image no "([^"]*)" on the gallery$/, function(imgNum) {
        expect(browser.getText(gallery.currentImgNum)).toMatch(imgNum);
    });


    this.When(/^I see the video ID "([^"]*)" on the gallery$/, function(videoId) {
        browser.waitForVisible(gallery.videoWrapper, 3000);
        browser.scroll(gallery.videoWrapper);
        expect(browser.getAttribute(gallery.videoWrapper, gallery.videoId)).toEqual(videoId)
    });

    this.When(/^I can see the play button and click on it$/, function() {
        browser.waitForVisible(gallery.playButton, 5000);
        browser.click(gallery.playButton);
        expect(browser.isVisible(gallery.videoPlayWrap, gallery.videoAdPlay)).toBe(true);
        //verify video is playing the Ad
    });

    this.When(/^I can slide to the first MREC ad$/, function() {
        //Go to the 4th slide which is the first MREC ad
        for (var i = 0; i < 3; i++) {
            wait(500);
            browser.waitForEnabled(gallery.galleryNextButton, 2000);
            browser.click(gallery.galleryNextButton);
        }
    });

    this.When(/^I can see the facebook share button on gallery page$/, function () {
        var facebook = browser.isVisible(gallery.galleryFacebook);
        var facebookButton = browser.getText(gallery.galleryFacebook);
        expect(facebook).toBe(true);
        expect(facebookButton).toEqual('SHARE');
    });

    this.When(/^I can see the pinterest share button on gallery page$/, function () {
        var pinterest = browser.isVisible(gallery.galleryPinterest);
        var pinterestButton = browser.getText(gallery.galleryPinterest);
        expect(pinterest).toBe(true);
        expect(pinterestButton).toEqual('PIN IT');
    });
};
