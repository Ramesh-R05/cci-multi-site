var recipecollection = require('../page_objects/recipecollection_widget');

module.exports = function() {

    this.Then(/^I can see the list of recipes$/, function () {
        expect(browser.isVisible(recipecollection.teaserList)).toBe(true);
        expect(browser.getAttribute(recipecollection.teaserListItemImage,'srcset')).toContain('.jpg');
        expect(browser.getText(recipecollection.teaserListItemTitle)).not.toBe('');
    });
};
