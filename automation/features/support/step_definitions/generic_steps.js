var world = require('../world');
var sit = require('../url.sit');
var window_handler = require('../../../node_modules/@bxm/automation/lib/utils/window_handler');
var wait = require('../../../node_modules/@bxm/automation/lib/utils/wait');
var loadMore = require('../page_objects/loadmore_widget');
var isBrowserStack = world.Urls.isBrowserStack;
var scrolling = require('../../../node_modules/@bxm/automation/lib/utils/scrolling');

module.exports = function() {

    //I switch to mobile|desktop|tablet view
    this.When(/^I switch to "([^"]*)" view$/, function (device) {
        if (!isBrowserStack) {
            var window = new window_handler(browser);
            window.windowResize(device);
        }
    });

    this.Given(/^I am currently viewing the homepage$/, function () {
        var pageUrl = world.Urls.home_page;
        console.log('    ' + pageUrl);
        browser.url(pageUrl);
        browser.waitUntil(function () {
            return browser.getUrl() === pageUrl;
        }, 20000, 1000);
    });

    this.Given(/^I am currently viewing "([^"]*)"$/, function (pagename) {
        var pageUrl = world.Urls.home_page + pagename;
        console.log('    ' + pageUrl);
        browser.url(pageUrl);
        browser.waitUntil(function () {
            return browser.getUrl() === pageUrl;
        }, 20000, 1000);
    });

    //This step is for smoke test only
    this.Given(/^I am currently viewing "([^"]*)" page on "([^"]*)" site$/, function (page,site) {
        var pageUrl;

        //Identify the page URL
        if (world.Urls.home_page.length === 0) {
            if (page === 'homepage') {
                pageUrl = sit[site].homepage;
            } else {
                pageUrl = sit[site].homepage + sit[site][page];
            }
        } else {
            if (page === 'homepage') {
                pageUrl = world.Urls.home_page;
            } else {
                pageUrl = world.Urls.home_page + sit[world.Urls.site][page];
            }
        }

        console.log('    ' + pageUrl);
        browser.url(pageUrl);
        browser.waitUntil(function () {
            return browser.getUrl() === pageUrl;
        }, 20000, 1000);
    });

    //This step is for smoke test only
    this.Given(/^I am currently viewing "([^"]*)" url on "([^"]*)" site$/, function (url,site) {
        var pageUrl;

        //Identify the page URL
        if (world.Urls.home_page.length === 0) {
            pageUrl = sit[site].homepage + url;
        } else {
            pageUrl = world.Urls.home_page + url;
        }

        console.log('    ' + pageUrl);
        browser.url(pageUrl);
        browser.waitUntil(function () {
            return browser.getUrl() === pageUrl;
        }, 20000, 1000);
    });

    this.When(/^I scroll the page down$/, function () {
        browser.scroll(0,250)
    });

    this.When(/^I scroll the page up$/, function () {
        browser.scroll(250,0)
    });

    this.When(/^I click on the Load More button$/, function () {
        //static wait due to elements loading move the load more button and creates error in the script
        wait(3000);
        if (isBrowserStack){
            scrolling(browser,loadMore.loadMoreButton,isBrowserStack);
            browser.waitForVisible(loadMore.loadMoreButton,5000);
            scrolling(browser,loadMore.loadMoreButton,isBrowserStack);
        } else {
            //scroll to element and a few pixels up to center the button on the screen
            var x = browser.getLocation(loadMore.loadMoreButton, 'x');
            var y = browser.getLocation(loadMore.loadMoreButton, 'y');
            browser.scroll(x-50,y-50);
        }

        browser.waitForVisible(loadMore.loadMoreButton,10000);
        wait(1500);
        browser.click(loadMore.loadMoreButton);

        //static wait due to elements loading move the load more button and creates error in the script
        wait(5000);
    });
};
