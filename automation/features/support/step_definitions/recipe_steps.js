var recipe = require('../page_objects/recipe_widget');

module.exports = function() {

    this.Then(/^I can see the At A Glance$/, function () {
        expect(browser.isVisible(recipe.atGlance)).toBe(true);
    });

};