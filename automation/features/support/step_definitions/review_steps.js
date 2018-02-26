var wn_review = require('../page_objects/review_widget');

module.exports = function() {

    this.Then(/^I can see the restaurant address "([^"]*)"$/, function (reviewRestaurantAddress) {
        var restaurantAddress = browser.getHTML(wn_review.restaurantAddress, false);
        expect(restaurantAddress).toContain(reviewRestaurantAddress);
    });

    this.Then(/^I can see the restaurant hours "([^"]*)"$/, function (reviewRestaurantHours) {
        var restaurantHours = browser.getHTML(wn_review.restaurantHours, false);
        expect(restaurantHours).toContain(reviewRestaurantHours);
    });

    this.Then(/^I can see the restaurant prices "([^"]*)"$/, function (reviewRestaurantPrices) {
        var restaurantPrices = browser.getHTML(wn_review.restaurantPrices, false);
        expect(restaurantPrices).toContain(reviewRestaurantPrices);
    });

};
