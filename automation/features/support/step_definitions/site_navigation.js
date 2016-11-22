var site_nav = require('../page_objects/site_navigation_widget');
var wait = require('../utils/wait');

module.exports = function() {
    this.Then(/^I should see the site Header banner$/, function () {
        browser.waitForVisible(site_nav.siteNavHeader, 3000);
    });

    this.Then(/^I should see the site navigation links$/, function () {
        var navLink = browser.getText(site_nav.siteNavLinks);
        expect(navLink).not.toEqual("");
        console.log(navLink);
    });

    this.Then(/^I should see the site navigation hamburger icon$/, function () {
        browser.click(site_nav.siteNavHamburger);
        browser.waitForVisible(site_nav.siteNavHamburgerLinks, 3000);
        var burgerLink = browser.getText(site_nav.siteNavHamburgerLinks);
        expect(burgerLink).not.toEqual("");
        console.log(burgerLink);
        wait(500); // ensure it waits for transition effect to complete
        browser.click(site_nav.siteNavClose);
    });

    this.Then(/^I should see the site Header logo$/, function () {
        browser.waitForVisible(site_nav.siteNavHeaderLogo, 3000);
    });

    this.Then(/^I should not see the site navigation links$/, function () {
        expect(browser.isVisible(site_nav.siteNavLinks)).toEqual(false);
    });

    this.Then(/^I can see the link "([^"]*)" is highlighted on the navigation links$/, function (section) {
        var activeLink = (browser.getText(site_nav.siteNaveActiveLink));
        expect(activeLink).toEqual(section);
    });

    this.Then(/^I can see the link "([^"]*)" is highlighted on the hamburger navigation links$/, function (section) {
        browser.click(site_nav.siteNavHamburger);
        browser.waitForVisible(site_nav.siteNavHamburgerLinks, 3000);
        var activeLink = (browser.getText(site_nav.siteNaveHamburgerActiveLink));
        expect(activeLink).toEqual(section);
        wait(500); // ensure it waits for transition effect to complete
        browser.click(site_nav.siteNavClose);
    });

    this.Then(/^I can navigate to all sites in the hamburger navigation menu/, function(dataTable){
        browser.click(site_nav.siteNavHamburger);
        browser.waitForVisible(site_nav.siteNavHamburgerLinks, 3000);
        wait(500); // ensure it waits for transition effect to complete
        var rows = dataTable.hashes();

        var menuTitle = browser.getAttribute(site_nav.siteNavLogos, 'title');
        var menuhref = browser.getAttribute(site_nav.siteNavLogos, 'href');
        var menuTag = browser.getAttribute(site_nav.siteNavLogos, 'class');
        //end

        for (var i = 0; i < rows.length; ++i) {
            var row = rows[i];
            //validates position of menu base on Index
            expect(menuTitle[i]).toEqual(row['title']);
            expect(menuhref[i]).toMatch(row['url']);
            expect(menuTag[i]).toEqual(row['tag']);
        }
        browser.click(site_nav.siteNavClose);
    });

    this.Then(/^when I scroll down in the page$/, function () {
        browser.scroll(0, 1000);
    });

    this.Then(/^I can not see the hamburger menu$/, function () {
        expect(browser.isVisible(site_nav.siteNavHamburger)).toEqual(false);
    });
};
