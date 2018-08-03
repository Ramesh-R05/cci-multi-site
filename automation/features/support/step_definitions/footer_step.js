var footer = require('../page_objects/footer_widget');

module.exports = function() {

    this.Given(/^I can see the social heading in the footer$/, function () {
        //Validate the existence of the social heading
        expect(browser.isExisting(footer.footerSocialLogo)).toBe(true);
    });

    this.Given(/^I can see the social icons clickable to open its page in the footer$/, function (dataTable) {
        var rows = dataTable.hashes();
        browser.waitForVisible(footer.footerSocialLink, 10000);

        //below captures the array of social links to validate against the table
        var socialLink = browser.getAttribute(footer.footerSocialLink, 'href');

        for (var i = 0; i < rows.length; ++i) {
            var row = rows[i];
            //validates position of social icons on Index and their link
            expect(socialLink[i]).toContain(row['url']);
        }
    });

    this.Given(/^I can see the brands title in the footer as "([^"]*)"$/, function (text) {
        //Validate the brands title is correct.
        expect(browser.getText(footer.footerLogosTitle)).toEqual(text)
    });

    this.Given(/^I can navigate to all sites in the footer$/, function (dataTable) {
        var rows = dataTable.hashes();

        //below captures the array of menu items to validate against the table
        var brandTitle = browser.getAttribute(footer.footerLogosList, 'title');
        var brandHref = browser.getAttribute(footer.footerLogosList, 'href');
        var brandGTM = browser.getAttribute(footer.footerLogosList, 'class');
        //end

        for (var i = 0; i < rows.length; ++i) {
            var row = rows[i];
            //validates position of menu base on Index including their url and gtm
            expect(brandTitle[i]).toEqual(row['title']);
            expect(brandHref[i]).toMatch(row['url']);
            expect(brandGTM[i]).toEqual(row['gtm']);
        }
    });

    this.Given(/^I can navigate to all standard pages in the footer$/, function (dataTable) {
        var rows = dataTable.hashes();

        //below captures the array of menu items to validate against the table
        var pageTitle = browser.getText(footer.footerStandardPage);
        var pageLink = browser.getAttribute(footer.footerStandardPage, 'href');
        //end

        for (var i = 0; i < rows.length; ++i) {
            var row = rows[i];
            //validates position of standard page base on Index including their url
            expect(pageTitle[i]).toEqual(row['page']);
            expect(pageLink[i]).toMatch(row['url']);
        }
    });

    this.Given(/^I can see the standard bauer text in the footer as "([^"]*)"$/, function (text) {
        //Validate the bauer text is correct
        var bauer = browser.getText(footer.footerElementCopyrightBauer);
        expect(text).toContain(bauer);
    });

    this.Given(/^I can see the standard copyright text in the footer as "([^"]*)"$/, function (text) {
        //Validate the copyright text is correct
        var copyright = browser.getText(footer.footerElementCopyright);
        expect(text).toContain(copyright);
    });

    this.Given(/^I can see all main elements in the footer$/, function () {
        //Validate that the four main elements in the footer appears
        browser.waitForVisible(footer.footerElementSocialContainer, 2000);
        expect(browser.isVisible(footer.footerElementSocialContainer)).toBe(true);
        expect(browser.isVisible(footer.footerElementNavigation)).toBe(true);
        expect(browser.isVisible(footer.footerElementCopyright)).toBe(true);

        expect(browser.isVisible(footer.footerElementSubscriptionCoverLink)).toBe(true);
        expect(browser.isVisible(footer.footerElementSubscriptionCoveriPadLink)).toBe(true);
        expect(browser.isVisible(footer.footerElementSubscriptionButton)).toBe(true);

    });

    this.Given(/^I can see the subscription magazine and digital cover$/, function () {

        //Verify the src is not null
        var magCover = browser.getAttribute(footer.footerElementSubscriptionCoverImage, 'src');
        expect(magCover).not.toBeUndefined();

        //Verify the src is not null
        var magCoverIpad = browser.getAttribute(footer.footerElementSubscriptionCoveriPadImage, 'src');
        expect(magCoverIpad).not.toBeUndefined();

    });

    this.Given(/^I can click both the images$/, function () {

        //Verify the href is not null
        var magCoverLink = browser.getAttribute(footer.footerElementSubscriptionCoverLink, 'href');
        expect(magCoverLink).toContain('subscribe-magazine');

        //Verify the href is not null
        var magCoverIpadLink = browser.getAttribute(footer.footerElementSubscriptionCoveriPadLink, 'href');
        expect(magCoverIpadLink).toContain('subscribe-digital');

    });

    this.Given(/^I can see the subscription button$/, function () {

        // Check that the button is present
        browser.waitForVisible(footer.footerElementSubscriptionButton, 5000);
        // Check the link should not be empty
        var subscribeButton = browser.getAttribute(footer.footerElementSubscriptionButton, 'href');
        expect(subscribeButton).toContain('subscribe-magazine');
    });

    this.Given(/^I can see mag buttons clickable to open its page in the footer$/, function () {

        //below captures the array of mag buttons to validate against the table
        var buttonLink = browser.getAttribute(footer.footerElementSubscriptionButton, 'href');
        expect(buttonLink[0]).toEqual(browser.getAttribute(footer.footerElementSubscriptionCoverLink, 'href'));

        for (var i = 0; i < buttonLink.length; ++i) {
            //validates position of mag buttons on Index and their link
            expect(buttonLink[i]).toContain('https://www.magshop.com.au/');
        }
    });
};
