var section = require('../page_objects/section_widget');
var world = require('../world');

module.exports = function(){

    this.When(/^I should not see the section title containing the default word as now$/, function () {
        //Verify the section title
        var sectionTitle = browser.getText(section.sectionTitle);
        expect(sectionTitle).not.toContain("now");
    });

    //Load More content
    this.Then(/^I should see extra (\d+) teasers after loading more$/, function (teaserCount) {
        var extraTeasers = browser.elements(section.sectionRepeatableSectionTeaserAfterLoadMore).value.length;

        expect(extraTeasers).toEqual(parseInt(teaserCount),10);
    });

};
