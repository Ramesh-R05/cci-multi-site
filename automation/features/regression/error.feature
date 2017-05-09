@error @BXMA-139 @elle
Feature: Error page
    As a user
    I should be able to see the error page

# -------- Error page is low priority in terms of Impact  ---------------#
    @low
    Scenario: I can see the 404 error page in the mobile style
        Given I switch to "mobile" view
        When I am currently viewing "404"
        * I should see the site header logo clickable to open homepage
        * I should see the hamburger menu
        * I should see the error title as "Oops, we don't have the page you're looking for."
        * I should see the error giphy image
        * I should see the text clickable to homepage with gtm "gtm-error-goback"

    Scenario Outline: I can see the 404 error page in the desktop style on "<device>"
        Given I switch to "<device>" view
        When I am currently viewing "404"
        * I should see the large header banner clickable to open homepage
        * I should not see the hamburger menu
        * I should see the error title as "Oops, we don't have the page you're looking for."
        * I should see the error giphy image
        * I should see the text clickable to homepage with gtm "gtm-error-goback"
        @low
        Examples:
            | device            |
            | desktop           |
        @low
        Examples:
            | device            |
            | tablet portrait   |
            | tablet landscape  |
