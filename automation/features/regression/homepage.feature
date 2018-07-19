@homepage @elle
Feature: Homepage
    As a user
    I should be able to see homepage

    Scenario Outline: Verify the sign-up URL on homepage in <device> view
        Given I switch to "<device>" view
        When I am currently viewing the homepage
        Then I should see the sign up button containing "//www.elle.com.au/elle-newsletter" url in "<device>" view
        @med
        Examples:
            | device            |
            | desktop           |
            | mobile            |
        @low
        Examples:
            | device            |
            | tablet landscape  |
            | tablet portrait   |

    Scenario Outline: Verify the must read module is functional correctly in <device> view
        Given I switch to "<device>" view
        When I am currently viewing the homepage
        * I should see <number> must read images and titles which are clickable to open their page
        @high
        Examples:
            |device             | number |
            | mobile            | 2      |
        @med
        Examples:
            |device             | number |
            | desktop           | 4      |
        @low
        Examples:
            |device             | number |
            | tablet portrait   | 2      |
            | tablet landscape  | 4      |

    Scenario Outline: Verify the hero teaser element is functional correctly in <device> view
        Given I switch to "<device>" view
        When I am currently viewing the homepage
        * I should see the main hero item containing its image and clickable to open its page
        * I should see the main hero item containing its title and clickable to open its page
        @high
        Examples:
            |device |
            |mobile |
        @med
        Examples:
            |device |
            |desktop|
        @low
        Examples:
            |device          |
            |tablet portrait |
            |tablet landscape|

    Scenario Outline: Verify the promoted module is functional correctly in <device> view
        Given I switch to "<device>" view
        When I am currently viewing the homepage
        * I should see promoted header as "WOMEN OF THE YEAR"
        * I should see <number> promoted images and titles which are clickable to open their page
        @high
        Examples:
            |device             | number |
            | mobile            | 2      |
        @med
        Examples:
            |device             | number |
            | desktop           | 4      |
        @low
        Examples:
            |device             | number |
            | tablet portrait   | 3      |
            | tablet landscape  | 4      |

    # This is the GTM class name that hasn't coverd in unit test
    Scenario: Verify the gtm class name of promoted module
        Given I switch to "desktop" view
        When I am currently viewing the homepage
        * I should see each promoted items containing gtm
            |no |gtm                 |
            |1  |gtm-promo1-homepage |
            |2  |gtm-promo2-homepage |
            |3  |gtm-promo3-homepage |
            |4  |gtm-promo4-homepage |

    Scenario Outline: Verify the top news feed is functional correctly in <device> view
        Given I am currently viewing the homepage
        When I switch to "<device>" view
        * I should see 6 "top" half feed
        * I should see a "top" feed item containing its image and clickable to open its page
        * I should see a "top" feed item containing its title and clickable to open its page
        @med
        Examples:
            |device|
            |mobile|
            |desktop|
        @low
        Examples:
            |device|
            |tablet portrait |
            |tablet landscape|

    Scenario Outline: Verify the bottom news feed is functional correctly in "<device>" view
        Given I am currently viewing the homepage
        When I switch to "<device>" view
        * I should see 8 bottom half feed
        * I should see a "bottom" feed item containing its image and clickable to open its page
        * I should see a "bottom" feed item containing its title and clickable to open its page
        @med
        Examples:
            |device|
            |mobile|
            |desktop|
        @low
        Examples:
            |device|
            |tablet portrait |
            |tablet landscape|
