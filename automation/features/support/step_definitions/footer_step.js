var footer = require('../page_objects/footer_widget');

// Used to test the subscription links. Only test the relevant part of the url.
function endsWith(str, endStr){
    var index = str.lastIndexOf(endStr);
    return index === str.length - endStr.length;
}

module.exports = function() {

    this.Given(/^I can see the social logo in the footer$/, function () {
        //Validate the existence of the 'Elle' text
        var logoText = browser.getText(footer.footerSocialLogo);
        expect(logoText.toLowerCase()).toMatch('elle');
    });

    this.Given(/^I can see the social icons clickable to open its page in the footer$/, function (dataTable) {
        var rows = dataTable.hashes();

        //below captures the array of social links to validate against the table
        var socialLink = browser.getAttribute(footer.footerSocialLink, 'href');

        for (var i = 0; i < rows.length; ++i) {
            var row = rows[i];
            //validates position of social icons on Index and their link
            console.log(row['social'] + ' : ' + socialLink[i]);
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
        expect(browser.isVisible(footer.footerElementSocialContainer)).toBe(true);
        expect(browser.isVisible(footer.footerElementNavigation)).toBe(true);
        expect(browser.isVisible(footer.footerElementCopyright)).toBe(true);
    });

    this.Given(/^I can see the subscription magazine cover image$/, function (dataTable) {

        // Check that the anchor is present
        expect(browser.isVisible(footer.footerElementSubscriptionCover)).toBe(true);
        expect(browser.isVisible(footer.footerElementSubscriptionCoveriPad)).toBe(true);

        // Check that the image is present
        expect(browser.isVisible(footer.footerElementSubscriptionCover + ' > img')).toBe(true);
        expect(browser.isVisible(footer.footerElementSubscriptionCoveriPad + ' > img')).toBe(true);

        // Check that the anchors have the right urls
        var rows = dataTable.hashes();
        var coverLink = browser.getAttribute(footer.footerElementSubscriptionCover, 'href');
        var ipadLink = browser.getAttribute(footer.footerElementSubscriptionCoveriPad, 'href');

        expect(endsWith(coverLink, rows[0].url)).toBe(true);
        expect(endsWith(ipadLink, rows[1].url)).toBe(true);

    });

    this.Given(/^I can see the subscription button$/, function (dataTable) {

        // Check that the button is present
        browser.waitForVisible(footer.footerElementSubscriptionButton, 5000);

        // Check that the anchor has the right url
        var rows = dataTable.hashes();
        var buttonLink = browser.getAttribute(footer.footerElementSubscriptionButton, 'href');

        expect(endsWith(buttonLink, rows[0].url)).toBe(true);
    });


};
