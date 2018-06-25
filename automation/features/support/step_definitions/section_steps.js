var section = require('../page_objects/section_widget');
var world = require('../world');

module.exports = function(){

    //Load More content
    this.Then(/^I should see extra (\d+) teasers after loading more$/, function (teaserCount) {
        var extraTeasers = browser.elements(section.sectionRepeatableSectionTeaserAfterLoadMore).value.length;

        expect(extraTeasers).toEqual(parseInt(teaserCount),10);
    });

    this.Then(/^I should see at least one teaser$/, function () {
        expect(browser.isExisting(section.heroComponent)).toEqual(true);
    });

    this.Then(/^I should not see any teaser$/, function () {
        expect(browser.isExisting(section.heroComponent)).toEqual(false);
    });

    this.Then(/^I should see "([^"]*)" title$/, function (sectionName) {
        var sectionTitle = browser.getText(section.sectionTitle);
        expect(sectionTitle).toEqual(sectionName);
    });

    this.Then(/^I should see "([^"]*)" selected as a default in the list$/, function (subSectionName) {
        var subSectionList = browser.getText(section.subSectionList);
        expect(subSectionList).toEqual(subSectionName);
    });


};
