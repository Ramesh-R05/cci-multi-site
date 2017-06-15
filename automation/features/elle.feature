@smoketestelle
Feature: Smoke test for ELLE
    As a user
    I should be able to see the ELLE site showing correct static data

    Scenario: Verify the footer in the "mobile" view
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        * I can see the social icons clickable to open its page in the footer
            |social     |url                                    |
            |Facebook   |https://www.facebook.com/ELLEaus       |
            |Twitter    |https://twitter.com/ELLEaus            |
            |Instagram  |https://www.instagram.com/elleaus      |
            |Pinterest  |https://au.pinterest.com/elleaus       |
            |YouTube    |https://www.youtube.com/elleaus        |

    Scenario: I can see the brand logos in the hamburger menu
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        * I can navigate to all sites in the hamburger navigation menu
            |title                      |url                                |gtm                        |
            |Now To Love                |http://nowtolove.com.au/           |gtm-hamburger-now          |
            |Homes To Love              |http://homestolove.com.au/         |gtm-hamburger-homes        |
            |Food To Love               |http://foodtolove.com.au/          |gtm-hamburger-food         |
            |Harper's Bazaar            |http://harpersbazaar.com.au/       |gtm-hamburger-harpers      |
            |Gourmet Traveller          |http://gourmettraveller.com.au/    |gtm-hamburger-gt           |
            |Cosmopolitan               |http://cosmopolitan.com.au/        |gtm-hamburger-cosmo        |
            |Dolly                      |http://dolly.com.au/               |gtm-hamburger-dolly        |
            |Beauty Heaven              |http://beautyheaven.com.au/        |gtm-hamburger-beautyheaven |

    Scenario: I can see the 404 error page in the mobile style
        Given I switch to "mobile" view
        When I am currently viewing "404"
        * I should see the error title as "Oops, we don't have the page you're looking for."
        * I should see the site header logo to open homepage and contain "gtm-navbar-elle" class name
#        * I should see the Big Banner logo to open homepage and contain "gtm-navbar-elle" class name

    Scenario: I can see the site header logo in the desktop style
        Given I switch to "desktop" view
        When I am currently viewing the homepage
        * I should see the site header logo to open homepage and contain "gtm-navbar-elle" class name

    Scenario: I can see the GTM container with id "GTM-TXC6CF"
        When I am currently viewing the homepage
        Then I should see the GTM container id "GTM-TXC6CF" on the DOM

    Scenario: I can see the GA container with id "UA-42966291-1"
        When I am currently viewing the homepage
        Then I should see the GA container id "UA-42966291-1" on the DOM
