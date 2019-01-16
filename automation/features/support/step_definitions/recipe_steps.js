var recipe = require('../page_objects/recipe_widget');

module.exports = function() {

    this.Then(/^I can see the recipe details$/, function () {
        expect(browser.isVisible(recipe.recipeDetails)).toBe(true);
    });

    this.Then(/^I can see the recipe overview$/, function () {
        expect(browser.isVisible(recipe.overview)).toBe(true);
    });

    this.Then(/^I can see the course and cuisine$/, function () {
        expect(browser.isVisible(recipe.course)).toBe(true);
        expect(browser.isVisible(recipe.cuisine)).toBe(true);
    });

    this.Then(/^I should see the recipe print button$/, function () {
        expect(browser.isVisible(recipe.print)).toBe(true);
    });

    this.Then(/^I should not see the recipe print button$/, function () {
        expect(browser.isVisible(recipe.print)).toBe(false);
    });

};
