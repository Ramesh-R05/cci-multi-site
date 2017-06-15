@smoketestcosmo
Feature: Smoke test for COSMO
    As a user
    I should be able to see the COSMO site showing correct static data

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
        * I can navigate to all sites in the hamburger navigation menu
            |title                      |url                                |gtm                        |
            |Now To Love                |http://nowtolove.com.au/           |gtm-hamburger-now          |
            |Homes To Love              |http://homestolove.com.au/         |gtm-hamburger-homes        |
            |Food To Love               |http://foodtolove.com.au/          |gtm-hamburger-food         |
            |Harper's Bazaar            |http://harpersbazaar.com.au/       |gtm-hamburger-harpers      |
            |Gourmet Traveller          |http://gourmettraveller.com.au/    |gtm-hamburger-gt           |
            |Elle                       |http://elle.com.au/                |gtm-hamburger-elle         |
            |Dolly                      |http://dolly.com.au/               |gtm-hamburger-dolly        |
            |Beauty Heaven              |http://beautyheaven.com.au/        |gtm-hamburger-beautyheaven |

    Scenario: I can see the 404 error page in the mobile style
        Given I switch to "mobile" view
        When I am currently viewing "404"
        * I should see the error title as "*COUGH* I CAN'T LOAD UP, I'M SICK!"
        * I should see the site header logo to open homepage and contain "gtm-navbar-cosmo" class name
#        * I should see the Big Banner logo to open homepage and contain "gtm-navbar-cosmo" class name

    Scenario: I can see the site header logo in the desktop style
        Given I switch to "desktop" view
        When I am currently viewing the homepage
        * I should see the site header logo to open homepage and contain "gtm-navbar-cosmo" class name

#### -> below GTM and GA tags need to change as this are from ELLE

    Scenario: I can see the GTM container with id "GTM-TXC6CF"
        When I am currently viewing the homepage
        Then I should see the GTM container id "GTM-TXC6CF" on the DOM

    Scenario: I can see the GA container with id "UA-42966291-1"
        When I am currently viewing the homepage
        Then I should see the GA container id "UA-42966291-1" on the DOM
