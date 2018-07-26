@smoketestgt
Feature: Smoke test for GT
    As a user
    I should be able to see the GT site showing correct static data and all pages are working correctly

    Scenario: Verify the homepage
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        Then I should see the sign up button containing "https://www.gourmettraveller.com.au/gt-newsletter" url in "mobile" view
        And I should see 2 must read images and titles which are clickable to open their page
        And I should see the main hero item containing its image and clickable to open its page
        And I should see 2 promoted images and titles which are clickable to open their page
        And I should see a "top" feed item containing its image and clickable to open its page
        And I should see a "bottom" feed item containing its image and clickable to open its page
        When I click on the Load More button
        Then I should see extra 14 teasers after loading more
        And I should see a load more feed item containing its image and clickable to open its page

    Scenario: Verify the section landing page
        Given I switch to "mobile" view
        When I am currently viewing "travel"
        Then I should see "TRAVEL" title
        Then I should see "SELECT A SUB-SECTION..." selected as a default in the list
        Then I should see the sign up button containing "https://www.gourmettraveller.com.au/gt-newsletter" url in "mobile" view
        Then I should see the main hero item containing its image and clickable to open its page
        And I should see a "top" feed item containing its image and clickable to open its page
        And I should see a "bottom" feed item containing its image and clickable to open its page
        When I click on the Load More button
        Then I should see extra 14 teasers after loading more
        And I should see a load more feed item containing its image and clickable to open its page

    Scenario: Verify the subsection landing page
        Given I switch to "mobile" view
        When I am currently viewing "travel/destinations"
        Then I should see "DESTINATIONS" title
        Then I should see "DESTINATIONS" selected as a default in the list
        Then I should see the sign up button containing "https://www.gourmettraveller.com.au/gt-newsletter" url in "mobile" view
        Then I should see the main hero item containing its image and clickable to open its page
        And I should see a "top" feed item containing its image and clickable to open its page
        And I should see a "bottom" feed item containing its image and clickable to open its page
        When I click on the Load More button
        Then I should see extra 14 teasers after loading more
        And I should see a load more feed item containing its image and clickable to open its page

    Scenario: Verify the tag landing page
        Given I switch to "mobile" view
        When I am currently viewing "tags/travel"
        Then I should see the main hero item containing its image and clickable to open its page

    Scenario: Verify the footer in the "mobile" view
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        * I can see the social icons clickable to open its page in the footer
            |social     |url                                          |
            |Facebook   |https://www.facebook.com/gourmettraveller    |
            |Twitter    |https://twitter.com/GourmetTweets            |
            |Instagram  |https://www.instagram.com/gourmettraveller/  |
            |Pinterest  |https://www.pinterest.com.au/gourmetpins/    |
            |GiftCard   |/gift-card                                   |

    Scenario: I can see the brand logos in the hamburger menu
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        * I can navigate to all 8 sites in the hamburger navigation menu
            |title                      |url                                |gtm                        |
            |Now To Love                |http://nowtolove.com.au/           |gtm-hamburger-now          |
            |Homes To Love              |http://homestolove.com.au/         |gtm-hamburger-homes        |
            |Food To Love               |http://foodtolove.com.au/          |gtm-hamburger-food         |
            |Elle                       |http://elle.com.au/                |gtm-hamburger-elle         |
            |Harper's Bazaar            |http://harpersbazaar.com.au/       |gtm-hamburger-harpers      |
            |Cosmopolitan               |http://cosmopolitan.com.au/        |gtm-hamburger-cosmo        |
            |Dolly                      |http://dolly.com.au/               |gtm-hamburger-dolly        |
            |Beauty Heaven              |http://beautyheaven.com.au/        |gtm-hamburger-beautyheaven |

    Scenario: I can see the 404 error page in the mobile style
        Given I switch to "mobile" view
        When I am currently viewing "404"
        * I should see the error title not empty
        * I should see the site header logo to open homepage and contain "gtm-navbar-gourmet" class name

    Scenario: I can see the site header logo in the desktop style
        Given I switch to "desktop" view
        When I am currently viewing the homepage
        * I should see the site header logo to open homepage and contain "gtm-navbar-gourmet" class name

    Scenario: I can see the GTM container with id "GTM-P8JPLN"
        When I am currently viewing the homepage
        Then I should see the GTM container id "GTM-P8JPLN" on the DOM

    Scenario: I can see the GA container with id "UA-8689488-1"
        When I am currently viewing the homepage
        Then I should see the GA container id "UA-8689488-1" on the DOM

    Scenario: Verify all the doc type items
        Given I switch to "mobile" view
        # -----------------------
        Given Emily just published the "section" doc type item in "gt"
        When I navigate to the "section" page in "gt"
        Then our readers can enjoy the created "section" page
        # -----------------------
        Given Emily just published the "subsection" doc type item in "gt"
        When I navigate to the "subsection" page in "gt"
        Then our readers can enjoy the created "subsection" page
        # -----------------------
        Given Emily just published the "article" doc type item in "gt"
        When I navigate to the "article" page in "gt"
        Then our readers can enjoy the created "article" page
        When I navigate to the "amp article" page in "gt"
        Then our readers can enjoy the created "amp article" page
        # -----------------------
        Given Emily just published the "gallery" doc type item in "gt"
        When I navigate to the "gallery" page in "gt"
        Then our readers can enjoy the created "gallery" page
        When I navigate to the "amp gallery" page in "gt"
        Then our readers can enjoy the created "amp gallery" page
        # -----------------------
        Given Emily just published the "review" doc type item in "gt"
        When I navigate to the "review" page in "gt"
        Then our readers can enjoy the created "review" page
        When I navigate to the "amp review" page in "gt"
        Then our readers can enjoy the created "amp review" page

    Scenario: Verify the RSS feed
        Given I am currently viewing "rss"
        Then I should see "link" tag containing "http://gt-site-au.sit.bxm.net.au" value
        * I should see "dc:creator" tag containing "Gourmet Traveller" in CDATA
        * I should see "title" tag containing a value
        * I should see "dc:creator" tag containing a value
        * I should see "content:encoded" tag containing a value
        When I am currently viewing "rss/summary"
        * I should see "title" tag containing a value
        * I should not see "content:encoded" tag
        When I am currently viewing "rss/summary/gt"
        * I should see "title" tag containing a value
        When I am currently viewing "rss/info"
        * I should see "rss/summary/gt" in json

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
        Examples:
            |device             |page       |pageUrl                                            |
            |desktop            |homepage   |                                                   |

    Scenario Outline: Verify the search feature on <page> in <device> (Desktop style)
        Given I switch to "<device>" view
        When I am currently viewing "<pageUrl>"
        * I should be able to search a keyword "beef" on "navigation bar" and see the result page
        Examples:
            |device             |page       |pageUrl                                            |
            |tablet landscape   |section    |recipes                                            |

    Scenario Outline: Verify the search feature on <page> in <device> (Desktop style)
        Given I switch to "<device>" view
        When I am currently viewing "<pageUrl>"
        * I should be able to search a keyword "beef" on "navigation bar" and see the result page
        Examples:
            |device             |page       |pageUrl                                            |
            |tablet portrait    |recipe     |recipes/chefs-recipes/smashed-cucumber-salad-31442 |
