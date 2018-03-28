var search = require('../page_objects/search_widget');
var wait = require('../../../node_modules/@bxm/automation/lib/utils/wait');

module.exports = function() {
    this.Then(/^I should see the search icon in the navigation bar$/, function () {
        browser.scroll(0,0);
        var searchIcon = browser.isVisible(search.searchNavIcon);
        expect(searchIcon).toBe(true);
    });

    this.Then(/^I should see the search box after clicking the icon$/, function () {
        browser.click(search.searchNavIcon);
        var searchBox = browser.waitForVisible(search.searchNavBox,5000);
        expect(searchBox).toBe(true);
    });

    this.Then(/^I should still see the search box after scrolling the page down$/, function () {
        browser.scroll(0,1500);
        wait(2000);
        var searchBox = browser.isVisible(search.searchNavBox);
        expect(searchBox).toBe(true);
    });

    this.Then(/^I should be able to search a keyword "([^"]*)" on "([^"]*)" and see the result page$/, function (keyword, position) {
        var searchBox, searchSubmit;
        browser.scroll(0,0);

        switch (position){
            case 'navigation bar' :
                searchBox = search.searchNavBox;
                searchSubmit = search.searchNavSubmit;
                break;
            case 'search result page' :
                searchBox = search.searchResultPageBox;
                searchSubmit = search.searchResultPageSubmit;
                break;
        }

        browser.setValue(searchBox, keyword);
        browser.click(searchSubmit);
        wait(1000);

        browser.waitForVisible(search.searchResultPageTitle, 5000);
        var searchTitle = browser.getText(search.searchResultPageTitle);
        expect(searchTitle).toContain(keyword.toUpperCase() + ' RESULT');

        var searchTeaserTitle = browser.getText(search.searchResultPageTeaserTitle);
        expect(searchTeaserTitle[0].toLowerCase()).toContain(keyword);
    });

    this.Then(/^I should not see the search bar on the search result page in mobile version$/, function () {
        var searchBox = browser.isVisible(search.searchResultPageBox);
        expect(searchBox).toBe(false);
    });


};
