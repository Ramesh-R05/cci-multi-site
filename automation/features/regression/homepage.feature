@homepage @elle
Feature: Homepage
    As a user
    I should be able to see homepage

    @BXMA-502
    Scenario Outline: Verify the sign-up URL on homepage
        Given I switch to "<device>" view
        When I am currently viewing the homepage
        Then I should see the sign up button containing "http://www.elle.com.au/elle-newsletter" url and "gtm-subs-homepage" gtm in "<device>" view
    @high
        Examples:
            | device            |
            | desktop           |
            | mobile            |
    @low
        Examples:
            | device            |
            | tablet landscape  |
            | tablet portrait   |

    @mustread @BXMA-81
    Scenario Outline: Verify the must read module is functional correctly in "<device>" view
        Given I switch to "<device>" view
        When I am currently viewing the homepage
        * I should see <number> must read images and titles which are clickable to open their page
        * I should see each must read items containing gtm
            |no |gtm                    |
            |1  |gtm-mustread1-homepage |
            |2  |gtm-mustread2-homepage |
            |3  |gtm-mustread3-homepage |
            |4  |gtm-mustread4-homepage |

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


    @hero @BXMA-40
    Scenario Outline: Verify the hero teaser element is functional correctly in "<device>" view
        Given I switch to "<device>" view
        When I am currently viewing the homepage
        * I should see the main hero item containing its image and clickable to open its page
        * I should see the main hero item containing its title and clickable to open its page
        * I should see the main hero item containing source
    @high
        Examples:
            |device|
            |mobile|
            |desktop|
    @low
        Examples:
            |device|
            |tablet portrait |
            |tablet landscape|


    @promoted @BXMA-205 @low
    Scenario Outline: Verify the promoted module is functional correctly in "<device>" view
        Given I switch to "<device>" view
        When I am currently viewing the homepage
        * I should see promoted header as "WOMEN OF THE YEAR"
        * I should see <number> promoted images and titles which are clickable to open their page
        * I should see each promoted items containing gtm
            |no |gtm                 |
            |1  |gtm-promo1-homepage |
            |2  |gtm-promo2-homepage |
            |3  |gtm-promo3-homepage |
            |4  |gtm-promo4-homepage |
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


    @homepagefeed @BXMA-82
    Scenario Outline: Verify the top news feed is functional correctly in "<device>" view
        Given I am currently viewing the homepage
        When I switch to "<device>" view
        * I should see 6 top half feed
        * I should see each top feed item containing its image and clickable to open its page
        * I should see each top feed item containing its title and clickable to open its page
#       commented below because source and date are no longer valid,
#       sometimes source is visible, other times date is visible.
#       Wait until the relevant tickets have been completed to work out which item goes where
#        * I should see each top feed item containing source and date
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


    @homepagefeed-bottom @BXMA-60
    Scenario Outline: Verify the bottom news feed is functional correctly in "<device>" view
        Given I am currently viewing the homepage
        When I switch to "<device>" view
        * I should see 8 bottom half feed
        * I should see each bottom feed item containing its image and clickable to open its page
        * I should see each bottom feed item containing its title and clickable to open its page
#        * I should see each bottom feed item containing source and date
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





