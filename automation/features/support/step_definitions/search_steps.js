var search = require('../page_objects/search_widget');
var sit = require('../url.sit');
var wait = require('../../../node_modules/@bxm/automation/lib/utils/wait');
var world = require('../world');
var isBrowserStack = world.Urls.isBrowserStack;
var scrolling = require('../../../node_modules/@bxm/automation/lib/utils/scrolling');

module.exports = function() {
    this.Then(/^I should see the search icon in the navigation bar$/, function () {
        if (!isBrowserStack) {
            browser.scroll(0,0);
        } else {
            scrolling(browser,search.headerWrapper,isBrowserStack);
        }

        var searchIcon = browser.isVisible(search.searchNavIcon);
        expect(searchIcon).toBe(true);
    });

    this.Then(/^I should see the search box after clicking the icon$/, function () {
        browser.click(search.searchNavIcon);
        var searchBox = browser.waitForVisible(search.searchNavBox,5000);
        expect(searchBox).toBe(true);
    });

    this.Then(/^I should still see the search box after scrolling the page down$/, function () {
        if (!isBrowserStack) {
            browser.scroll(0,1500);
        } else {
            scrolling(browser,search.siteWrapper,isBrowserStack);
        }
        wait(2000);
        var searchBox = browser.isVisible(search.searchNavBox);
        expect(searchBox).toBe(true);

        //Check if the box is hidden after clicking the icon again
        browser.click(search.searchNavIcon);
        wait(2000);
        var searchBox = browser.isVisible(search.searchNavBox);
        expect(searchBox).toBe(false);
    });

    this.Then(/^I should be able to search a keyword on "([^"]*)" and see the result page on "([^"]*)" site$/, function (position, site) {
        var searchBox, searchSubmit, keyword;
        if (!isBrowserStack) {
            browser.scroll(0,0);
        } else {
            browser.waitForVisible(search.headerWrapper,5000);
            scrolling(browser,search.headerWrapper,isBrowserStack);
        }

        //To get a site name from APP_KEY if the URL is specified
        if (world.Urls.home_page.length !== 0) {
            site = world.Urls.site;
        }

        switch (position){
            case 'navigation bar' :
                searchBox = search.searchNavBox;
                searchSubmit = search.searchNavSubmit;
                keyword = sit[site].keyword1;
                if (browser.isVisible(search.searchNavBox) === false) {
                    browser.click(search.searchNavIcon);
                    browser.waitForVisible(searchBox,5000);
                }
                break;
            case 'search result page' :
                searchBox = search.searchResultPageBox;
                searchSubmit = search.searchResultPageSubmit;
                keyword = sit[site].keyword2;
                browser.url(world.Urls.home_page + 'search/' + keyword);
                break;
        }

        browser.setValue(searchBox, keyword);
        browser.click(searchSubmit);
        wait(1000);

        //Check the search result title
        browser.waitForVisible(search.searchResultPageTitle, 5000);
        var searchTitle = browser.getText(search.searchResultPageTitle);
        expect(searchTitle).toContain(keyword.toUpperCase() + ' RESULT');

        //Check the first teaser containing the keyword in the teaser title
        var searchTeaserTitle = browser.getText(search.searchResultPageTeaserTitle);
        expect(searchTeaserTitle.toLowerCase()).toContain(keyword);
    });

    this.Then(/^I should not see the search bar on the search result page in mobile version$/, function () {
        var searchBox = browser.isVisible(search.searchResultPageBox);
        expect(searchBox).toBe(false);
    });

};
