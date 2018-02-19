@section @elle
Feature: Section Landing page
    As a user
    I should be able to see section landing page which has the same layout as homepage

    Scenario Outline: Verify the sign-up URL on section landing page in <device> view
        Given I switch to "<device>" view
        When I am currently viewing "fashion"
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

    Scenario Outline: Verify the hero teaser element is functional correctly in "<device>" view
        Given I switch to "<device>" view
        When I am currently viewing "fashion"
        * I should see the main hero item containing its image and clickable to open its page
        * I should see the main hero item containing its title and clickable to open its page
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

    Scenario Outline: Verify the top news feed is functional correctly in "<device>" view
        Given I switch to "<device>" view
        When I am currently viewing "fashion"
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
        Given I switch to "<device>" view
        When I am currently viewing "fashion"
        * I should see 7 "bottom" half feed
        * I should see a "bottom" feed item containing its image and clickable to open its page
        * I should see a "bottom" feed item containing its title and clickable to open its page
        @med
        Examples:
            |device |
            |mobile |
            |desktop|
        @low
        Examples:
            |device             |
            |tablet portrait    |
            |tablet landscape   |




