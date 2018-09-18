@smoketestcosmo
Feature: Smoke test for COSMO
    As a user
    I should be able to see the COSMO site showing correct static data and all pages are working correctly

    Scenario: Verify the homepage
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        Then I should see the sign up button containing "https://www.cosmopolitan.com.au/cosmo-newsletter" url in "mobile" view
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
        When I am currently viewing "fashion"
        Then I should see the sign up button containing "https://www.cosmopolitan.com.au/cosmo-newsletter" url in "mobile" view
        Then I should see the main hero item containing its image and clickable to open its page
        And I should see a "top" feed item containing its image and clickable to open its page
        And I should see a "bottom" feed item containing its image and clickable to open its page
        When I click on the Load More button
        Then I should see extra 14 teasers after loading more
        And I should see a load more feed item containing its image and clickable to open its page

    Scenario: Verify the tag landing page
        Given I switch to "mobile" view
        When I am currently viewing "tags/reality-television"
        Then I should see the main hero item containing its image and clickable to open its page

    Scenario: Verify the footer in the "mobile" view
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        * I can see the social icons clickable to open its page in the footer
            |social     |url                                           |
            |Facebook   |https://www.facebook.com/cosmoaustralia       |
            |Twitter    |https://twitter.com/cosmoaustralia            |
            |Instagram  |https://www.instagram.com/cosmoaustralia      |
            |Pinterest  |https://au.pinterest.com/cosmoaustralia       |
            |YouTube    |https://www.youtube.com/cosmoaustralia        |

    Scenario: I can see the brand logos in the hamburger menu
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        * I can navigate to all 8 sites in the hamburger navigation menu
            |title                      |url                                |gtm                        |
            |Now To Love                |http://nowtolove.com.au/           |gtm-hamburger-now          |
            |Homes To Love              |http://homestolove.com.au/         |gtm-hamburger-homes        |
            |Womens Weekly Food         |http://womensweeklyfood.com.au/    |gtm-hamburger-wwfood       |
            |Elle                       |http://elle.com.au/                |gtm-hamburger-elle         |
            |Harper's Bazaar            |http://harpersbazaar.com.au/       |gtm-hamburger-harpers      |
            |Gourmet Traveller          |http://gourmettraveller.com.au/    |gtm-hamburger-gt           |
            |Dolly                      |http://dolly.com.au/               |gtm-hamburger-dolly        |
            |Beauty Heaven              |http://beautyheaven.com.au/        |gtm-hamburger-beautyheaven |

    Scenario: I can see the 404 error page in the mobile style
        Given I switch to "mobile" view
        When I am currently viewing "404"
        * I should see the error title not empty
        * I should see the site header logo to open homepage and contain "gtm-navbar-cosmo" class name
#        * I should see the Big Banner logo to open homepage and contain "gtm-navbar-cosmo" class name

    Scenario: I can see the site header logo in the desktop style
        Given I switch to "desktop" view
        When I am currently viewing the homepage
        * I should see the site header logo to open homepage and contain "gtm-navbar-cosmo" class name

    Scenario: I can see the GTM container with id "GTM-K774C2"
        When I am currently viewing the homepage
        Then I should see the GTM container id "GTM-K774C2" on the DOM

    Scenario: I can see the GA container with id "UA-8689462-1"
        When I am currently viewing the homepage
        Then I should see the GA container id "UA-8689462-1" on the DOM

    Scenario: Verify all the doc type items
        Given I switch to "mobile" view
        # -----------------------
        Given Emily just published the "section" doc type item in "cosmo"
        When I navigate to the "section" page in "cosmo"
        Then our readers can enjoy the created "section" page
        # -----------------------
        Given Emily just published the "article" doc type item in "cosmo"
        When I navigate to the "article" page in "cosmo"
        Then our readers can enjoy the created "article" page
        When I navigate to the "amp article" page in "cosmo"
        Then our readers can enjoy the created "amp article" page
        # -----------------------
        Given Emily just published the "gallery" doc type item in "cosmo"
        When I navigate to the "gallery" page in "cosmo"
        Then our readers can enjoy the created "gallery" page
        When I navigate to the "amp gallery" page in "cosmo"
        Then our readers can enjoy the created "amp gallery" page

    Scenario: Verify the RSS feed
        Given I am currently viewing "rss"
        Then I should see "link" tag containing "http://cosmo-site-au.sit.bxm.net.au" value
        * I should see "dc:creator" tag containing "Cosmopolitan" in CDATA
        * I should see "title" tag containing a value
        * I should see "dc:creator" tag containing a value
        * I should see "content:encoded" tag containing a value
        When I am currently viewing "rss/summary"
        * I should see "title" tag containing a value
        * I should not see "content:encoded" tag
        When I am currently viewing "rss/summary/cosmo"
        * I should see "title" tag containing a value
        When I am currently viewing "rss/info"
        * I should see "rss/summary/cosmo" in json


    Scenario Outline: Verify the search feature on <page> in <device> (Mobile style)
        Given I switch to "<device>" view
        When I am currently viewing "<pageUrl>"
        * I should see the search icon in the navigation bar
        * I should see the search box after clicking the icon
        * I should still see the search box after scrolling the page down
        * I should be able to search a keyword "baby" on "navigation bar" and see the result page
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
        * I should be able to search a keyword "baby" on "navigation bar" and see the result page
        * I should be able to search a keyword "name" on "search result page" and see the result page
        Examples:
            |device             |page       |pageUrl                                            |
            |desktop            |homepage   |                                                   |

    Scenario Outline: Verify the search feature on <page> in <device> (Desktop style)
        Given I switch to "<device>" view
        When I am currently viewing "<pageUrl>"
        * I should be able to search a keyword "baby" on "navigation bar" and see the result page
        Examples:
            |device             |page       |pageUrl   |
            |tablet landscape   |section    |celebrity |

    Scenario Outline: Verify the search feature on <page> in <device> (Desktop style)
        Given I switch to "<device>" view
        When I am currently viewing "<pageUrl>"
        * I should be able to search a keyword "baby" on "navigation bar" and see the result page
        Examples:
            |device             |page       |pageUrl                                                 |
            |tablet portrait    |article    |celebrity/khloe-kardashian-baby-name-true-meaning-18282 |
