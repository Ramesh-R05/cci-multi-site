var home = require('../page_objects/homepage_widget');
var world = require('../world');
var validateImageURL = require('../../../node_modules/@bxm/automation/lib/utils/validateImageURL');

module.exports = function(){

    this.When(/^I should see the main hero item containing its image and clickable to open its page$/, function () {
        //Verify the hero image
        var heroImgUrl = browser.getAttribute(home.heroImgUrl, 'data-srcset');
        validateImageURL(heroImgUrl);
        //Verify the hero image's link
        var heroImgLink = browser.getAttribute(home.heroImgLink, 'href');
        expect(heroImgLink).not.toBeUndefined();
    });

    this.When(/^I should see the main hero item containing its title and clickable to open its page$/, function () {
        //Verify the hero title
        var heroTitle = browser.getText(home.heroTitle);
        expect(heroTitle).not.toBeUndefined();
        //Verify the hero title's link
        var heroTitleLink = browser.getAttribute(home.heroTitle, 'href');
        expect(heroTitleLink).not.toBeUndefined();
    });

    this.When(/^I should see the main hero item containing source$/, function () {
        //Verify the hero source
        var heroSource = browser.getText(home.heroSource);
        expect(heroSource).not.toBeUndefined();
    });

    this.When(/^The homepage hero image should be clickable to open its page$/, function () {
        var heroImgLink = browser.getAttribute(home.heroImgLink, 'href');
        expect(heroImgLink).not.toBeUndefined();
    });

    this.When(/^I should see (\d+) top half feed$/, function (number) {
        var topFeedItems = browser.elements(home.topFeedNumber).value.length;
        expect(topFeedItems).toEqual(parseInt(number,10));
    });

    this.When(/^I should see each top feed item containing its image and clickable to open its page$/, function () {
        //verify images of all teasers
        var topFeedTeaserImgUrl = browser.getAttribute(home.topFeedTeaserImg,'data-srcset');
        var topFeedTeaserImgLink = browser.getAttribute(home.topFeedTeaserImgLink,'href');
        for (var i=0; i<topFeedTeaserImgUrl.length; i++){
            validateImageURL(topFeedTeaserImgUrl[i]);
            expect(topFeedTeaserImgLink[i]).not.toEqual('');
        }
    });

    this.When(/^I should see each top feed item containing its title and clickable to open its page$/, function () {
        //verify titles of all teasers
        var topFeedTeaserTitle = browser.getText(home.topFeedTeaserTitle);
        var topFeedTeaserTitleLink = browser.getAttribute(home.topFeedTeaserTitle,'href');
        for (var i=0; i<topFeedTeaserTitle.length; i++){
            expect(topFeedTeaserTitle[i]).not.toEqual('');
            expect(topFeedTeaserTitleLink[i]).not.toEqual('');
        }
    });

    this.When(/^I should see each top feed item containing source and date$/, function () {
        //verify sources of all teasers
        var topFeedTeaserSource = browser.getText(home.topFeedTeaserSource);
        for (var i=0; i<topFeedTeaserSource.length; i++){
            var valueSourceDate = topFeedTeaserSource[i].split("|");
            //validate the source
            expect(valueSourceDate[0]).not.toEqual('');
            if (i != 0 && i != 5){ //Skip the polar ad spot as no date is required
                //validate the date
                expect(valueSourceDate[1]).not.toEqual('');
                expect(valueSourceDate[1]).not.toMatch('ago');
                expect(valueSourceDate[1]).toEqual(valueSourceDate[1].toUpperCase());
            }
        }
    });

    this.When(/^I should see (\d+) bottom half feed$/, function (number) {
        var bottomFeedItems = browser.elements(home.bottomFeedNumber).value.length;
        expect(bottomFeedItems).toEqual(parseInt(number,10));
    });

    this.When(/^I should see each bottom feed item containing its image and clickable to open its page$/, function () {
        //verify images of all teasers
        var bottomFeedTeaserImgUrl = browser.getAttribute(home.bottomFeedTeaserImg,'data-srcset');
        var bottomFeedTeaserImgLink = browser.getAttribute(home.bottomFeedTeaserImgLink,'href');
        for (var i=0; i<bottomFeedTeaserImgUrl.length; i++){
            validateImageURL(bottomFeedTeaserImgUrl[i]);
            expect(bottomFeedTeaserImgLink[i]).not.toEqual('');
        }
    });

    this.When(/^I should see each bottom feed item containing its title and clickable to open its page$/, function () {
        //verify titles of all teasers
        var bottomFeedTeaserTitle = browser.getText(home.bottomFeedTeaserTitle);
        var bottomFeedTeaserTitleLink = browser.getAttribute(home.bottomFeedTeaserTitle,'href');
        for (var i=0; i<bottomFeedTeaserTitle.length; i++){
            expect(bottomFeedTeaserTitle[i]).not.toEqual('');
            expect(bottomFeedTeaserTitleLink[i]).not.toEqual('');
        }
    });

    this.When(/^I should see each bottom feed item containing source and date$/, function () {
        //verify sources of all teasers
        var bottomFeedTeaserSource = browser.getText(home.bottomFeedTeaserSource);
        for (var i=0; i<bottomFeedTeaserSource.length; i++){
            var valueSourceDate = bottomFeedTeaserSource[i].split("|");
            //validate the source
            expect(valueSourceDate[0]).not.toEqual('');
            if (i != 1 && i != 5){ //Skip the polar ad spot as no date is required
                //validate the date
                expect(valueSourceDate[1]).not.toEqual('');
                expect(valueSourceDate[1]).not.toMatch('ago');
                expect(valueSourceDate[1]).toEqual(valueSourceDate[1].toUpperCase());
            }
        }
    });

    this.When(/^I should see must read header as "([^"]*)"$/, function (name) {
        //verify the must read title
        var title = browser.getText(home.mustreadHeader);
        expect(title).toEqual(name);
    });

    this.Given(/^I should see (\d+) must read images and titles which are clickable to open their page$/, function(number) {
        //find elements of image and title of all must read items
        var mustreadImage = browser.getAttribute(home.mustreadImage,'data-srcset');
        var mustreadImageLink = browser.getAttribute(home.mustreadImageLink,'href');
        var mustreadTitle = browser.getText(home.mustreadTitle);
        var mustreadTitleLink = browser.getAttribute(home.mustreadTitle,'href');

        //validate image and title and their links
        for (var i=0; i<number; i++){
            validateImageURL(mustreadImage[i]);
            expect(mustreadImageLink[i]).not.toEqual('');
            expect(mustreadTitle[i]).not.toEqual('');
            expect(mustreadTitleLink[i]).toEqual(mustreadImageLink[i]);
        }
    });

    this.Then(/^I should see each must read items containing gtm$/, function(dataTable){
        var rows = dataTable.hashes();

        //find elements
        var mustreadImageGTM = browser.getAttribute(home.mustreadImageLink,'class');
        var mustreadTitleGTM = browser.getAttribute(home.mustreadTitle,'class');

        //validate gtm name
        for (var i = 0; i < mustreadImageGTM.length; ++i) {
            var row = rows[i];
            expect(mustreadImageGTM[i]).toMatch(row['gtm']);
            expect(mustreadTitleGTM[i]).toMatch(row['gtm']);
        }
    });

    this.When(/^I should see promoted header as "([^"]*)"$/, function (name) {
        //verify the promoted title
        var title = browser.getText(home.promotedHeader);
        expect(title).toEqual(name);
    });

    this.When(/^I should see promoted header$/, function () {
        //verify the promoted title is not blank (for live sanity)
        var title = browser.getText(home.promotedHeader);
        expect(title).not.toEqual('');
    });

    this.Given(/^I should see (\d+) promoted images and titles which are clickable to open their page$/, function(number) {
        //find elements of image and title of all promoted items
        var promotedImage = browser.getAttribute(home.promotedImage,'data-srcset');
        var promotedImageLink = browser.getAttribute(home.promotedImageLink,'href');
        var promotedTitle = browser.getText(home.promotedTitle);
        var promotedImageSectionTag = browser.getText(home.promotedSectionTag);
        var promotedTitleLink = browser.getAttribute(home.promotedTitle,'href');

        //validate image and title and their links
        for (var i=0; i<number; i++){
            validateImageURL(promotedImage[i]);
            expect(promotedImageLink[i]).not.toEqual('');
            expect(promotedTitle[i]).not.toEqual('');
            expect(promotedImageSectionTag[i]).not.toEqual('');
            expect(promotedTitleLink[i]).toEqual(promotedImageLink[i]);
        }
    });

    this.Then(/^I should see each promoted items containing gtm$/, function(dataTable){
        var rows = dataTable.hashes();

        //find elements
        var promotedImageGTM = browser.getAttribute(home.promotedImageLink,'class');
        var promotedTitleGTM = browser.getAttribute(home.promotedTitle,'class');

        //validate gtm name
        for (var i = 0; i < promotedImageGTM.length; ++i) {
            var row = rows[i];
            expect(promotedImageGTM[i]).toMatch(row['gtm']);
            expect(promotedTitleGTM[i]).toMatch(row['gtm']);
        }
    });

    this.Given(/^I can see the social icons clickable to open its page in the RHS$/, function (dataTable) {
        var rows = dataTable.hashes();

        //below captures the array of social links to validate against the table
        var socialLink = browser.getAttribute(home.rhsSocialLink, 'href');

        for (var i = 0; i < rows.length; ++i) {
            var row = rows[i];
            //validates position of social icons on Index and their link
            expect(socialLink[i]).toContain(row['url']);
        }
    });

    this.Then(/^I should see the GTM container id "([^"]*)" on the DOM$/, function (containerId) {

        var result = browser.execute(checkGoogleTagManager, containerId);
        expect(result.value).toBe(true);

        // To test for only the presence of Google Tag Manager, supply a containerId of null.
        function checkGoogleTagManager(containerId){

            var result = false;
            var gtm = window.google_tag_manager || {};

            for (var prop in gtm){
                if (gtm.hasOwnProperty(prop)){
                    if (prop.substr(0, 4).toLowerCase() === 'gtm-'){
                        result = containerId === null ? true : containerId.toLowerCase() === prop.toLowerCase();
                        break;
                    }
                }
            }

            return result;

        }

    });

    this.Then(/^I should see the GA container id "([^"]*)" on the DOM$/, function (containerId) {

        var result = browser.execute(checkGoogleAnalytics, containerId);
        expect(result.value).toBe(true);

        // To test for only the presence of Google Analytics, supply a containerId of null.
        function checkGoogleAnalytics(containerId){

            var result = false;
            var ga = window.gaData || {};

            for (var prop in ga){
                if (ga.hasOwnProperty(prop)){
                    if (prop.substr(0, 3).toLowerCase() === 'ua-'){
                        result = containerId === null ? true : containerId.toLowerCase() === prop.toLowerCase();
                        break;
                    }
                }
            }

            return result;
        }

    });

    this.Then(/^I should see the sign up button containing "([^"]*)" url and "([^"]*)" gtm in "([^"]*)" view$/, function (url, gtm, device) {
        var signUpBtn, signUpBtnLink, signUpBtnClass;

        switch(device) {
            case 'mobile':
            case 'tablet portrait':
                signUpBtn = home.newsletterSignUpBtnMobile;
                signUpBtnLink = browser.getAttribute(signUpBtn, 'href');
                signUpBtnClass = browser.getAttribute(signUpBtn, 'class');
                break;
            case 'desktop':
            case 'tablet landscape':
                signUpBtn = home.newsletterSignUpBtnDesktop;
                signUpBtnLink = browser.getAttribute(signUpBtn, 'href');
                signUpBtnClass = browser.getAttribute(signUpBtn, 'class');
                break;
        }

        browser.scroll(signUpBtn);
        expect(browser.isVisible(signUpBtn)).toEqual(true);
        expect(signUpBtnLink).toContain(url);
        expect(signUpBtnClass).toContain(gtm);
    });

    this.When(/^I should see a load more feed item containing its image and clickable to open its page$/, function () {
        //verify images of one teaser
        var loadMoreFeedTeaserImgUrl = browser.getAttribute(home.loadMoreFeedTeaserImg,'data-srcset');
        var loadMoreFeedTeaserImgLink = browser.getAttribute(home.loadMoreFeedTeaserImgLink,'href');
        console.log(loadMoreFeedTeaserImgUrl + " => " + loadMoreFeedTeaserImgLink);
        validateImageURL(loadMoreFeedTeaserImgUrl);
        expect(loadMoreFeedTeaserImgLink).toEqual('');
    });

};
