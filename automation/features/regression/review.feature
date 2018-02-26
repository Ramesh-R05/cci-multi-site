@review @elle
Feature: Review
    As a user
    I should be able to see the review page

# -------- Review page on mobile and desktop  ---------------#
    Scenario Outline: Verify a review page which contains restaurant details in <device> view
        Given I switch to "<device>" view
        When I am currently viewing "restaurant-reviews/bar-rochford-restaurant-review-1713"
        * I can see the long title "bar rochford: restaurant review"
        * I can see the created date "OCT 11, 2017 10:02AM"
        * I can see the hero image
        * I can see the short teaser "Canberra - Modern Australian cuisine"
        * I can see the body paragraph "You Am I is on the stereo"
        * I can see the restaurant address "Level 1, 65 London Circuit<br>Canberra, ACT"
        * I can see the restaurant hours "Friday 3pm-11pm<br>Dinner Tuesday to Saturday 5pm-10.30pm"
        * I can see the restaurant prices "<strong>E $8-$18</strong><br><em>M $20-$36</em><br><strong>D $10-$14</strong>"
        @high
        Examples:
            |device             |
            |desktop            |
            |mobile             |
# -------- Review page on mobile and desktop end ---------------#

# -------- RHR ---------------#
    @high
    Scenario: Verify the RHR on a review page in desktop view
        Given I am currently viewing "restaurant-reviews/bar-rochford-restaurant-review-1713"
        When I switch to "desktop" view
        * I can see 20 items in the list of items in RHR
        * I can see the 20 images of each item in RHR
        * Image in RHR is clickable to open its page
        * I can see the long title of an item in RHR
        * Long title in RHR is clickable to open its page

    @low
    Scenario: Verify the RHR on a review page in tablet landscape view
        Given I am currently viewing "restaurant-reviews/bar-rochford-restaurant-review-1713"
        When I switch to "tablet landscape" view
        * I can see the RHR
# -------- RHR end ---------------#

# -------- Review page on tablet landscape and tablet portrait ---------------#
    Scenario Outline: Verify a review page in tablet view (Test in <device>)
        Given I switch to "<device>" view
        When I am currently viewing "restaurant-reviews/bar-rochford-restaurant-review-1713"
        * I can see the long title "bar rochford: restaurant review"
        * I can see the created date "OCT 11, 2017 10:02AM"
        * I can see the hero image
        * I can see the short teaser "Canberra - Modern Australian cuisine"
        * I can see the body paragraph "You Am I is on the stereo"
        * I can see the restaurant address "Level 1, 65 London Circuit<br>Canberra, ACT"
        * I can see the restaurant hours "Friday 3pm-11pm<br>Dinner Tuesday to Saturday 5pm-10.30pm"
        * I can see the restaurant prices "<strong>E $8-$18</strong><br><em>M $20-$36</em><br><strong>D $10-$14</strong>"
    @low
        Examples:
            | device            |
            | tablet portrait   |
            | tablet landscape  |
# -------- Review page on tablet landscape and tablet portrait end ---------------#
