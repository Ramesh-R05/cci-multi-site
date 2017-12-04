@navigation @elle
Feature: Site Navigation
    As a user
    I should be able to see site navigation in different devices

#----- Navigation widget on different pages and devices -----#
    @med @homepage
    Scenario: I can see the navigation widget on the homepage desktop
        Given I switch to "desktop" view
        When I am currently viewing the homepage
        Then I should see the site header banner
        And I should see the site navigation in hamburger menu

    @med @homepage
    Scenario: I can see the navigation widget on the homepage mobile
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        Then I should see the site header banner
        And I should not see the site navigation links
        And I should see the site navigation in hamburger menu

    Scenario Outline: I can see the navigation widget on the <page> page in <device> view
        Given I switch to "<device>" view
        When I am currently viewing "<pageURL>"
        Then I can see the link "FASHION" is highlighted on the navigation links
        And I can see the link "FASHION" is highlighted on the hamburger navigation links
    @med @section
        Examples:
            | device    | page      | pageURL   |
            | desktop   | section   | fashion   |
    @low @article
        Examples:
            | device            | page      | pageURL                                               |
            | tablet portrait   | article   | fashion/automation-test-article-with-hero-image-3663  |
    @low @gallery
        Examples:
            | device            | page      | pageURL                                   |
            | tablet landscape  | gallery   | fashion/automation-test-gallery-13302     |

    @med @gallery
    Scenario: I can see the navigation widget on the gallery page on mobile view
        Given I switch to "mobile" view
        When I am currently viewing "fashion/automation-test-gallery-13302"
        Then I should not see the site navigation links
        And I can see the link "FASHION" is highlighted on the hamburger navigation links
#----- Navigation widget on different pages and devices end -----#

#----- Behaviour of navigation when scrolling down -----#
    @med @article
    Scenario: Mobile users menu will fade out as they scroll down the page
        Given I switch to "mobile portrait" view
        When I am currently viewing "fashion/automation-test-article-with-hero-image-3663"
        Then the menu fades out as I scroll down the page

    @med @homepage
    Scenario: Desktop users menu will see sticky navigation when they scroll down the page
        Given I switch to "desktop" view
        When I am currently viewing the homepage
        And I scroll down in the page
        Then I should see the site header logo clickable to open homepage
        And I should see the site navigation in hamburger menu
#----- Behaviour of navigation when scrolling down end -----#

#----- Logo and masthead -----#
    @low
    Scenario Outline: Verify the logo and the custom masthead in <device> view (Test on <page>)
        Given I switch to "<device>" view
        When I am currently viewing the homepage
        Then I should see the Big Banner logo that takes me back to the home page
        And I should see the custom masthead appearing on top of the page
        When I scroll to the end of the page
        Then I can see the smaller logo in the navigation bar that takes me back to the home page
    @homepage
        Examples:
            | device            | page      | pageURL                                              |
            | desktop           | homepage  |                                                      |
    @article
        Examples:
            | device            | page      | pageURL                                              |
            | tablet landscape  | article   | fashion/automation-test-article-with-hero-image-3663 |
    @gallery
        Examples:
            | device            | page      | pageURL                                              |
            | tablet portrait   | gallery   | fashion/automation-test-gallery-13302                |

    @low @section
    Scenario: Verify the logo and the custom masthead in mobile view
        Given I switch to "mobile portrait" view
        When I am currently viewing "fashion"
        Then I can see the smaller logo in the navigation bar that takes me back to the home page
        And I should see the custom masthead appearing on top of the page in mobile
#----- Logo and masthead end-----#

