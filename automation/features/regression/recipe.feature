@recipe @elle
Feature: Recipe
    As a user
    I should be able to see the recipe page

# -------- Recipe page on mobile and desktop  ---------------#
    Scenario Outline: Verify a recipe page which contains a hero image in <device> view
        Given I switch to "<device>" view
        When I am currently viewing "recipes/automation-test-recipe-2127"
        * I can see the long title "automation test recipe long title"
        * I can see the created date "FEB 16, 2018"
        * I can see the hero image
        * I can see the short teaser "Automation Test Recipe Short Teaser"
        * I can see the body paragraph "Automation Test Recipe Body Paragraph 1"
        @high
        Examples:
            |device             |
            |desktop            |
            |mobile             |
# -------- Recipe page on mobile and desktop end ---------------#

# -------- RHR ---------------#
    @high
    Scenario: Verify the RHR on a recipe page in desktop view
        Given I am currently viewing "recipes/automation-test-recipe-2127"
        When I switch to "desktop" view
        * I can see 20 items in the list of items in RHR
        * I can see the 20 images of each item in RHR
        * Image in RHR is clickable to open its page
        * I can see the long title of an item in RHR
        * Long title in RHR is clickable to open its page

    @low
    Scenario: Verify the RHR on a recipe page in tablet landscape view
        Given I am currently viewing "recipes/automation-test-recipe-2127"
        When I switch to "tablet landscape" view
        * I can see the RHR
# -------- RHR end ---------------#

# -------- Recipe page on tablet landscape and tablet portrait ---------------#
    Scenario Outline: Verify a recipe page in tablet view (Test in <device>)
        Given I switch to "<device>" view
        When I am currently viewing "recipes/automation-test-recipe-2127"
        * I can see the long title "automation test recipe long title"
        * I can see the created date "FEB 16, 2018"
        * I can see the hero image
        * I can see the short teaser "Automation Test Recipe Short Teaser"
        * I can see the body paragraph "Automation Test Recipe Body Paragraph 1"
    @low
        Examples:
            | device            |
            | tablet portrait   |
            | tablet landscape  |
# -------- Recipe page on tablet landscape and tablet portrait end ---------------#
