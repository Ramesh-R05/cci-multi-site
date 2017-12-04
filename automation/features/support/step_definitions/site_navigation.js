var site_nav = require('../page_objects/site_navigation_widget');
var wait = require('../../../node_modules/@bxm/automation/lib/utils/wait');
//compose URL base on ENV variables
var nconf = require('nconf');
nconf.argv().env();
var site_domain = nconf.get('URL');


module.exports = function() {
    this.Then(/^I should see the site header banner$/, function () {
        browser.waitForVisible(site_nav.siteNavHeader, 3000);
    });

    this.Then(/^I should see the site header logo to open homepage and contain "([^"]*)" class name$/, function (gtm) {
        browser.waitForExist(site_nav.smallIconlink, 3000);
        //Validate the logo is clickable to open homepage
        var headerLogoLink = browser.getAttribute(site_nav.smallIconlink,'href');
        expect(headerLogoLink).toEqual(site_domain);
        //Validate GTM
        var headerLogoClass = browser.getAttribute(site_nav.smallIconlink,'class');
        expect(headerLogoClass).toContain(gtm);
    });

    this.Then(/^I should see the Big Banner logo to open homepage and contain "([^"]*)" class name$/, function (gtm) {
        browser.waitForExist(site_nav.bigIconlink, 3000);
        //Validate the logo is clickable to open homepage
        var headerLogoLink = browser.getAttribute(site_nav.bigIconlink,'href');
        expect(headerLogoLink).toEqual(site_domain);
        //Validate GTM
        var headerLogoClass = browser.getAttribute(site_nav.bigIconlink,'class');
        expect(headerLogoClass).toContain(gtm);
    });

    this.Then(/^I should see the site header logo clickable to open homepage$/, function () {
        browser.waitForExist(site_nav.siteNavHeader, 3000);
        //Validate the logo is clickable to open homepage
        var headerLogoLink = browser.getAttribute(site_nav.smallIconlink,'href');
        var domain = site_domain;
        headerLogoLink.endsWith('/') && (headerLogoLink = headerLogoLink.substr(0, headerLogoLink.length - 1));
        domain.endsWith('/') && (domain = domain.substr(0, domain.length - 1));
        expect(headerLogoLink).toEqual(domain);
    });

    this.Then(/^I should see the site navigation in hamburger menu$/, function () {
        browser.waitForVisible(site_nav.siteHamburger, 1000);
        browser.click(site_nav.siteHamburger);
        browser.waitForVisible(site_nav.siteHamburgerDetail, 3000);

        wait(500); // ensure it waits for transition effect to complete
        browser.click(site_nav.siteHamburgerClose);

    });

    this.Then(/^I should not see the site navigation links$/, function () {
        expect(browser.isVisible(site_nav.siteNavSection)).toEqual(false);
    });

    this.Then(/^I can see the link "([^"]*)" is highlighted on the navigation links$/, function (section) {
        var activeLink = (browser.getText(site_nav.siteNavActiveLink));
        expect(activeLink.toUpperCase()).toEqual(section);
    });

    this.Then(/^I can see the link "([^"]*)" is highlighted on the hamburger navigation links$/, function (section) {
        browser.click(site_nav.siteHamburger);
        browser.waitForVisible(site_nav.siteHamburgerDetail, 3000);
        var activeLink = (browser.getText(site_nav.siteHamburgerActiveLink));
        expect(activeLink.toUpperCase()).toEqual(section);
        wait(500); // ensure it waits for transition effect to complete
        browser.click(site_nav.siteHamburgerClose);
    });

    this.Then(/^I can navigate to all (\d+) sites in the hamburger navigation menu/, function(number, dataTable){
        var menuTitle, menuhref, menuGTM, i, row;
        browser.click(site_nav.siteHamburger);
        browser.waitForVisible(site_nav.siteHamburgerOneDetail, 3000);
        wait(500); // ensure it waits for transition effect to complete
        var rows = dataTable.hashes();
        for (i = 1; i <= number; ++i) {
            menuTitle = browser.getAttribute('.mobile-menu-list li:nth-child(' + i +') a', 'title');
            menuhref = browser.getAttribute('.mobile-menu-list li:nth-child(' + i +') a', 'href');
            menuGTM = browser.getAttribute('.mobile-menu-list li:nth-child(' + i +') a', 'class');

            row = rows[i-1];
            //validates position of menu base on Index
            expect(menuTitle).toEqual(row['title']);
            expect(menuhref).toMatch(row['url']);
            expect(menuGTM).toEqual(row['gtm']);
        }
        browser.click(site_nav.siteHamburgerClose);
    });

    this.Then(/^I scroll down in the page$/, function () {
        browser.scroll(0, 1000);
    });

    this.Then(/^I should see the hamburger menu$/, function () {
        expect(browser.isVisible(site_nav.siteHamburger)).toEqual(true);
    });

    this.Then(/^I should not see the hamburger menu$/, function () {
        expect(browser.isVisible(site_nav.siteHamburger)).toEqual(false);
    });

    this.Then(/^I should see the large header banner clickable to open homepage$/, function () {
        expect(browser.isVisible(site_nav.siteHeaderBanner)).toEqual(true);

        //Validate the logo is clickable to open homepage
        var headerLogoLink = browser.getAttribute(site_nav.siteHeaderBanner,'href');
        expect(headerLogoLink).not.toEqual('');
    });

    this.Then(/^the menu fades out as I scroll down the page$/, function () {
        browser.waitForVisible(site_nav.menuHeader, 10000);
        expect(browser.isVisible(site_nav.menuHeader)).toBe(true);
        browser.scroll(0,1000);
        wait(1000);
        expect(browser.getAttribute(site_nav.menuHeader,'class')).toContain('header--hide');
    });

    this.Then(/^I should see the Big Banner logo that takes me back to the home page$/, function () {
        expect(browser.isVisible(site_nav.bigIcon)).toBe(true);
        var menuhref = browser.getAttribute(site_nav.bigIconlink, 'href');
        expect(menuhref).toEqual(site_domain);
    });

    this.When(/^I scroll to the end of the page$/, function () {
        browser.scroll(0,10000);
    });

    this.Then(/^I can see the smaller logo in the navigation bar that takes me back to the home page$/, function () {
        browser.waitForVisible(site_nav.smallIcon, 5000);
        expect(browser.isVisible(site_nav.smallIcon)).toBe(true);
        var menuhref = browser.getAttribute(site_nav.smallIconlink, 'href');
        expect(menuhref).toEqual(site_domain);
    });


    this.Then(/^I should see the custom masthead appearing on top of the page$/, function () {
        wait(2000); //static wait as the background image is loaded after some time
        var customMastHead = browser.getAttribute(site_nav.customMastHead, 'style');
        expect(customMastHead).toContain('background-image');
    });

    this.Then(/^I should see the custom masthead appearing on top of the page in mobile$/, function () {
        var customMastHeadMobile = browser.getAttribute(site_nav.customMastHeadMobile, 'style');
        expect(customMastHeadMobile).toContain('background-image');
    });

};
