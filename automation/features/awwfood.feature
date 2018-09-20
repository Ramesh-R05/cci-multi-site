@smoketestawwfood
Feature: Smoke test for AWW FOOD
    As a user
    I should be able to see the AWWFOOD site showing correct static data and all pages are working correctly
    @awwfoodmobile
    Scenario: Verify the homepage
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        Then I should see the sign up form in "mobile" view
        And I should see 2 must read images and titles which are clickable to open their page
        And I should see the main hero item containing its image and clickable to open its page
        And I should see 2 promoted images and titles which are clickable to open their page
        And I should see a "top" feed item containing its image and clickable to open its page
        And I should see a "bottom" feed item containing its image and clickable to open its page
        When I click on the Load More button
        Then I should see extra 14 teasers after loading more
        And I should see a load more feed item containing its image and clickable to open its page

    @awwfoodmobile
    Scenario: Verify the section landing page
        Given I switch to "mobile" view
        When I am currently viewing "recipes"
        Then I should see "RECIPES" title
        # Then I should see "SELECT A SUB-SECTION..." selected as a default in the list
        Then I should see the sign up form in "mobile" view
        Then I should see the main hero item containing its image and clickable to open its page
        And I should see a "top" feed item containing its image and clickable to open its page
        And I should see a "bottom" feed item containing its image and clickable to open its page
        When I click on the Load More button
        Then I should see extra 14 teasers after loading more
        And I should see a load more feed item containing its image and clickable to open its page

#We don't have subsection on AWWFOOD at the moment.
    #Scenario: Verify the subsection landing page
    #    Given I switch to "mobile" view
    #    When I am currently viewing "travel/destinations"
    #    Then I should see "DESTINATIONS" title
    #    Then I should see "DESTINATIONS" selected as a default in the list
    #    Then I should see the sign up button containing "https://www.womensweeklyfood.com.au/womensweeklyfood-newsletter" url in "mobile" view
    #    Then I should see the main hero item containing its image and clickable to open its page
    #    And I should see a "top" feed item containing its image and clickable to open its page
    #    And I should see a "bottom" feed item containing its image and clickable to open its page
    #    When I click on the Load More button
    #    Then I should see extra 14 teasers after loading more
    #    And I should see a load more feed item containing its image and clickable to open its page

    @awwfoodmobile
    Scenario: Verify the tag landing page
        Given I switch to "mobile" view
        When I am currently viewing "tags/cake"
        Then I should see the main hero item containing its image and clickable to open its page

    @awwfoodmobile
    Scenario: Verify the footer in the "mobile" view
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        * I can see the social icons clickable to open its page in the footer
            |social     |url                                          |
            |Facebook   |https://www.facebook.com/womensweeklyfood/   |
            |Instagram  |https://www.instagram.com/womensweeklyfood/  |
            |Pinterest  |https://www.pinterest.com.au/womensweeklyfood|
            
        * I can see mag buttons clickable to open its page in the footer
        
    @awwfoodmobile
    Scenario: I can see the brand logos in the hamburger menu
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        * I can navigate to all 8 sites in the hamburger navigation menu
            |title                      |url                                     |gtm                        |
            |Now To Love                |https://www.nowtolove.com.au/           |gtm-hamburger-now          |
            |Homes To Love              |https://www.homestolove.com.au/         |gtm-hamburger-homes        |
            |Women's Weekly Food        |https://www.womensweeklyfood.com.au/    |gtm-hamburger-wwfood       |
            |Elle                       |https://www.elle.com.au/                |gtm-hamburger-elle         |
            |Harper's Bazaar            |https://www.harpersbazaar.com.au/       |gtm-hamburger-harpers      |
            |Cosmopolitan               |https://www.cosmopolitan.com.au/        |gtm-hamburger-cosmo        |
            |Dolly                      |http://www.dolly.com.au/                |gtm-hamburger-dolly        |
            |Beauty Heaven              |https://www.beautyheaven.com.au/        |gtm-hamburger-beautyheaven |

    @awwfoodmobile
    Scenario: I can see the 404 error page in the mobile style
        Given I switch to "mobile" view
        When I am currently viewing "404"
        * I should see the error title not empty
        * I should see the site header logo to open homepage and contain "gtm-navbar-australian-womens-weekly-food" class name

    @awwfooddesktop
    Scenario: I can see the site header logo in the desktop style
        Given I switch to "desktop" view
        When I am currently viewing the homepage
        * I should see the site header logo to open homepage and contain "gtm-navbar-australian-womens-weekly-food" class name

    @awwfoodmobile
    Scenario: I can see the GTM container with id "GTM-MHX78ZT"
        When I am currently viewing the homepage
        Then I should see the GTM container id "GTM-MHX78ZT" on the DOM

# We will enable this scenario once we start using the tags of this GA ID on AWWFOOD
#    Scenario: I can see the GA container with id "UA-57795117-12"
#        When I am currently viewing the homepage
#        Then I should see the GA container id "UA-57795117-12" on the DOM

    Scenario: Verify all the doc type items
        Given I switch to "mobile" view
        # -----------------------
        Given Emily just published the "section" doc type item in "awwfood"
        When I navigate to the "section" page in "awwfood"
        Then our readers can enjoy the created "section" page
        # -----------------------
        Given Emily just published the "article" doc type item in "awwfood"
        When I navigate to the "article" page in "awwfood"
        Then our readers can enjoy the created "article" page
        When I navigate to the "amp article" page in "awwfood"
        Then our readers can enjoy the created "amp article" page
        # -----------------------
        Given Emily just published the "gallery" doc type item in "awwfood"
        When I navigate to the "gallery" page in "awwfood"
        Then our readers can enjoy the created "gallery" page
        When I navigate to the "amp gallery" page in "awwfood"
        Then our readers can enjoy the created "amp gallery" page
        # -----------------------
        Given Emily just published the "recipe collection" doc type item in "awwfood"
        When I navigate to the "recipe collection" page in "awwfood"
        Then our readers can enjoy the created "recipe collection" page
        # -----------------------
        Given Emily just published the "recipe" doc type item in "awwfood"
        When I navigate to the "recipe" page in "awwfood"
        Then our readers can enjoy the created "recipe" page
        When I navigate to the "amp recipe" page in "awwfood"
        Then our readers can enjoy the created "amp recipe" page

    Scenario: Verify the RSS feed
        Given I am currently viewing "rss"
        Then I should see "link" tag containing "http://awwfood-site-au.sit.bxm.net.au" value
        * I should see "dc:creator" tag containing "Australian Women's Weekly Food" in CDATA
        * I should see "title" tag containing a value
        * I should see "dc:creator" tag containing a value
        * I should see "content:encoded" tag containing a value
        When I am currently viewing "rss/summary"
        * I should see "title" tag containing a value
        * I should not see "content:encoded" tag
        When I am currently viewing "rss/summary/awwfood"
        * I should see "title" tag containing a value
        When I am currently viewing "rss/info"
        * I should see "rss/summary/awwfood" in json

#The following two scenarios are for the search feature which is enabled on GT only.Scenario:
#If we roll out to the other sites, we can move them to regression test instead of smoke test

    Scenario Outline: Verify the search feature on <page> in <device> (Mobile style)
        Given I switch to "<device>" view
        When I am currently viewing "<pageUrl>"
        * I should see the search icon in the navigation bar
        * I should see the search box after clicking the icon
        * I should still see the search box after scrolling the page down
        * I should be able to search a keyword "beef" on "navigation bar" and see the result page
        * I should not see the search bar on the search result page in mobile version
        @awwfoodmobile
        Examples:
            |device             |page       |pageUrl                                            |
            |mobile             |homepage   |                                                   |

    Scenario Outline: Verify the search feature on <page> in <device> (Desktop style)
        Given I switch to "<device>" view
        When I am currently viewing "<pageUrl>"
        * I should see the search icon in the navigation bar
        * I should see the search box after clicking the icon
        * I should still see the search box after scrolling the page down
        * I should be able to search a keyword "beef" on "navigation bar" and see the result page
        * I should be able to search a keyword "chicken" on "search result page" and see the result page
        @awwfooddesktop
        Examples:
            |device             |page       |pageUrl                                            |
            |desktop            |homepage   |                                                   |

    Scenario Outline: Verify the search feature on <page> in <device> (Desktop style)
        Given I switch to "<device>" view
        When I am currently viewing "<pageUrl>"
        * I should be able to search a keyword "beef" on "navigation bar" and see the result page
        @awwfoodtabletlandscape
        Examples:
            |device             |page       |pageUrl                                            |
            |tablet landscape   |section    |recipes                                            |

    Scenario Outline: Verify the search feature on <page> in <device> (Desktop style)
        Given I switch to "<device>" view
        When I am currently viewing "<pageUrl>"
        * I should be able to search a keyword "beef" on "navigation bar" and see the result page
        @awwfoodtabletportrait
        Examples:
            |device             |page       |pageUrl                                            |
            |tablet portrait    |recipe     |recipes/chefs-recipes/smashed-cucumber-salad-31442 |

    @awwfoodmobile
    Scenario: Verify the commercial tag section
        Given I switch to "mobile" view
        When I am currently viewing "myer"
        Then I should see at least one teaser
        When I am currently viewing "tags/cupcake"
        Then I should not see any teaser

     Scenario Outline: Verify the Homepage top search box "<device>" view
        When I switch to "<device>" view
        Given I am currently viewing the homepage
        * I should see top search box
        * I should see a search bar inside search box
        @awwfoodmobile
        Examples:
            |device|
            |mobile|
        @awwfooddesktop
        Examples:
            |device|
            |desktop|
        @awwfoodtabletportrait
        Examples:
            |device|
            |tablet portrait |
        @awwfoodtabletlandscape
         Examples:
            |device|
            |tablet landscape|
