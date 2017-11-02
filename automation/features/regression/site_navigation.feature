@navigation @elle
Feature: Build and Style the Header, Top Site Navigation and Hamburger Menu to be used across all devices

    @homepage
    Scenario Outline: I can see the navigation widget on the homepage "<device>"
        Given I switch to "<device>" view
        When I am currently viewing the homepage
        Then I should see the site header banner
        And I should see the site header logo clickable to open homepage
        And I should see the site navigation links and "gtm-navigation-section nav-item" class name in "header"
        And I should see the site navigation links and "gtm-navigation-section nav-item" class name in "hamburger"
        @med
        Examples:
            | device            |
            | desktop           |
        @low
        Examples:
            | device            |
            | tablet portrait   |
            | tablet landscape  |

    @med @homepage
    Scenario: I can see the navigation widget on the homepage mobile
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        Then I should see the site header logo clickable to open homepage
        And I should not see the site navigation links
        And I should see the site navigation links and "gtm-navigation-section nav-item" class name in "hamburger"

    @med @homepage
    Scenario: I can see the sticky navigation on the homepage
        Given I switch to "desktop" view
        When I am currently viewing the homepage
        And when I scroll down in the page
        Then I should see the site header logo clickable to open homepage
        And I should see the site navigation links and "gtm-navigation-section nav-item" class name in "header"
        And I should see the site navigation links and "gtm-navigation-section nav-item" class name in "hamburger"

    @med @section
    Scenario: I can see the navigation widget on the section page
        Given I switch to "desktop" view
        When I am currently viewing "fashion"
        Then I should see the site header logo clickable to open homepage
        And I should see the site navigation links and "gtm-navigation-section nav-item" class name in "header"
        And I should see the site navigation links and "gtm-navigation-section nav-item" class name in "hamburger"
        And I can see the link "FASHION" is highlighted on the navigation links
        And I can see the link "FASHION" is highlighted on the hamburger navigation links

    @low @article
    Scenario: I can see the navigation widget on the article page
        Given I switch to "tablet portrait" view
        When I am currently viewing "fashion/automation-test-article-with-hero-image-3663"
        Then I should see the site header logo clickable to open homepage
        And I should see the site navigation links and "gtm-navigation-section nav-item" class name in "header"
        And I should see the site navigation links and "gtm-navigation-section nav-item" class name in "hamburger"
        And I can see the link "FASHION" is highlighted on the navigation links
        And I can see the link "FASHION" is highlighted on the hamburger navigation links

    @low @gallery
    Scenario: I can see the navigation widget on the gallery page
        Given I switch to "tablet landscape" view
        When I am currently viewing "fashion/automation-test-gallery-13302"
        Then I should see the site header logo clickable to open homepage
        And I should see the site navigation links and "gtm-navigation-section nav-item" class name in "header"
        And I should see the site navigation links and "gtm-navigation-section nav-item" class name in "hamburger"
        And I can see the link "FASHION" is highlighted on the navigation links
        And I can see the link "FASHION" is highlighted on the hamburger navigation links

    @med @gallery
    Scenario: I can see the navigation widget on the gallery page on mobile view
        Given I switch to "mobile" view
        When I am currently viewing "fashion/automation-test-gallery-13302"
        Then I should not see the site navigation links
        And I should see the hamburger menu

    @med @article
    Scenario: Mobile users menu will fade out as they scroll down the page
        Given I switch to "mobile portrait" view
        When I am currently viewing "fashion/automation-test-article-with-hero-image-3663"
        Then the menu fades out as I scroll down the page

    @low @homepage
    Scenario Outline: Users are able to navigate back to the homepage in <device> view
        Given I switch to "<device>" view
        When I am currently viewing the homepage
        Then I should see the Big Banner logo that takes me back to the home page
        When I scroll to the end of the page
        Then I can see the smaller logo in the navigation bar that takes me back to the home page

        Examples:
            | device            |
            | desktop           |
            | tablet landscape  |
            | tablet portrait   |

    @low @homepage
    Scenario: Users are able to navigate back to the homepage with smaller breakpoints
        Given I switch to "mobile portrait" view
        When I am currently viewing the homepage
        Then I can see the smaller logo in the navigation bar that takes me back to the home page

    @med
    Scenario Outline: Verify that the custom masthead appears on <page> in desktop view
        Given I am currently viewing "<url>"
        When I switch to "desktop" view
        * I should see the custom masthead appearing on top of the page
        @homepage
        Examples:
            |page         |url        |
            |Homepage     |           |
        @section
        Examples:
            |page          |url        |
            |Section       |fashion    |

    @med
    Scenario Outline: Verify that the custom masthead appears on <page> in mobile view
        Given I am currently viewing "<url>"
        When I switch to "mobile" view
        * I should see the custom masthead appearing on top of the page in mobile
        @homepage
        Examples:
            |page         |url        |
            |Homepage     |           |
        @section
        Examples:
            |page          |url        |
            |Section       |fashion    |
