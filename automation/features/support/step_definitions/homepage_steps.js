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
        expect(heroImgLink).not.toEqual('');
    });

    this.When(/^I should see the main hero item containing its title and clickable to open its page$/, function () {
        //Verify the hero title
        var heroTitle = browser.getText(home.heroTitle);
        expect(heroTitle).not.toBeUndefined();
        //Verify the hero title's link
        var heroTitleLink = browser.getAttribute(home.heroTitle, 'href');
        expect(heroTitleLink).not.toEqual('');
    });

    this.When(/^The homepage hero image should be clickable to open its page$/, function () {
        var heroImgLink = browser.getAttribute(home.heroImgLink, 'href');
        expect(heroImgLink).not.toEqual('');
    });

    this.When(/^I should see (\d+) "([^"]*)" half feed$/, function (number, part) {
        var feedItems_element;

        switch(part) {
            case 'top':
                feedItems_element = home.topFeedNumber;
                break;
            case 'bottom':
                feedItems_element = home.bottomFeedNumber;
                break;
        }
        var feedItems = browser.elements(feedItems_element).value.length;
        expect(feedItems).toEqual(parseInt(number,10));
    });

    this.When(/^I should see a "([^"]*)" feed item containing its image and clickable to open its page$/, function (part) {
        var feedTeaserImg_element, feedTeaserImgLink_element, i;

        switch(part) {
            case 'top':
                feedTeaserImg_element = home.topFeedTeaserImg;
                feedTeaserImgLink_element = home.topFeedTeaserImgLink;
                i = 4; //Test the 5th item which is array no.4
                break;
            case 'bottom':
                feedTeaserImg_element = home.bottomFeedTeaserImg;
                feedTeaserImgLink_element = home.bottomFeedTeaserImgLink;
                i = 6; //Test the 7th item which is array no.6
                break;
        }

        //verify images of all teasers
        var feedTeaserImgUrl = browser.getAttribute(feedTeaserImg_element,'data-srcset');
        var feedTeaserImgLink = browser.getAttribute(feedTeaserImgLink_element,'href');
        validateImageURL(feedTeaserImgUrl[i]);
        expect(feedTeaserImgLink[i]).not.toEqual('');
    });

    this.When(/^I should see a "([^"]*)" feed item containing its title and clickable to open its page$/, function (part) {
        var feedTeaserTitle_element, i;

        switch(part) {
            case 'top':
                feedTeaserTitle_element = home.topFeedTeaserTitle;
                i = 4; //Test the 5th item which is array no.4
                break;
            case 'bottom':
                feedTeaserTitle_element = home.bottomFeedTeaserTitle;
                i = 6; //Test the 7th item which is array no.6
                break;
        }

        //verify titles of all teasers
        var feedTeaserTitle = browser.getText(feedTeaserTitle_element);
        var feedTeaserTitleLink = browser.getAttribute(feedTeaserTitle_element,'href');
        expect(feedTeaserTitle[i]).not.toEqual('');
        expect(feedTeaserTitleLink[i]).not.toEqual('');
    });

    this.When(/^I should see (\d+) bottom half feed$/, function (number) {
        var bottomFeedItems = browser.elements(home.bottomFeedNumber).value.length;
        expect(bottomFeedItems).toEqual(parseInt(number,10));
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

    this.Then(/^I should see the sign up button containing "([^"]*)" url in "([^"]*)" view$/, function (url, device) {
        var signUpBtn, signUpBtnLink;

        switch(device) {
            case 'mobile':
            case 'tablet portrait':
                signUpBtn = home.newsletterSignUpBtnMobile;
                signUpBtnLink = browser.getAttribute(signUpBtn, 'href');
                break;
            case 'desktop':
            case 'tablet landscape':
                signUpBtn = home.newsletterSignUpBtnDesktop;
                signUpBtnLink = browser.getAttribute(signUpBtn, 'href');
                break;
        }

        browser.scroll(signUpBtn);
        expect(browser.isVisible(signUpBtn)).toEqual(true);
        expect(signUpBtnLink).toContain(url);
    });

    this.When(/^I should see a load more feed item containing its image and clickable to open its page$/, function () {
        //verify images of one teaser
        var loadMoreFeedTeaserImgUrl = browser.getAttribute(home.loadMoreFeedTeaserImg,'data-srcset');
        var loadMoreFeedTeaserImgLink = browser.getAttribute(home.loadMoreFeedTeaserImgLink,'href');
        console.log(loadMoreFeedTeaserImgUrl + " => " + loadMoreFeedTeaserImgLink);
        validateImageURL(loadMoreFeedTeaserImgUrl);
        expect(loadMoreFeedTeaserImgLink).not.toEqual('');
    });

};
