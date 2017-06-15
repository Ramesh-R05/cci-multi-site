@smoketesthb
Feature: Smoke test for HB
    As a user
    I should be able to see the HB site showing correct static data

    Scenario: Verify the footer in the "mobile" view
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        * I can see the social icons clickable to open its page in the footer
            |social     |url                                                    |
            |Facebook   |https://www.facebook.com/HarpersBAZAARAustralia        |
            |Twitter    |https://twitter.com/BAZAARAustralia                    |
            |Instagram  |http://instagram.com/bazaaraustralia                   |
            |Pinterest  |http://www.pinterest.com/bazaaraustralia/              |
            |YouTube    |https://www.youtube.com/user/BAZAARaustralia           |

    Scenario: I can see the brand logos in the hamburger menu
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        * I can navigate to all sites in the hamburger navigation menu
            |title                      |url                                |gtm                        |
            |Now To Love                |http://nowtolove.com.au/           |gtm-hamburger-now          |
            |Homes To Love              |http://homestolove.com.au/         |gtm-hamburger-homes        |
            |Food To Love               |http://foodtolove.com.au/          |gtm-hamburger-food         |
            |Elle                       |http://elle.com.au/                |gtm-hamburger-elle         |
            |Gourmet Traveller          |http://gourmettraveller.com.au/    |gtm-hamburger-gt           |
            |Cosmopolitan               |http://cosmopolitan.com.au/        |gtm-hamburger-cosmo        |
            |Dolly                      |http://dolly.com.au/               |gtm-hamburger-dolly        |
            |Beauty Heaven              |http://beautyheaven.com.au/        |gtm-hamburger-beautyheaven |

    Scenario: I can see the 404 error page in the mobile style
        Given I switch to "mobile" view
        When I am currently viewing "404"
        * I should see the error title as "WHOOPS! LOOKS LIKE WE DON'T HAVE THE PAGE YOU’RE LOOKING FOR."
        * I should see the site header logo to open homepage and contain "gtm-navbar-harper" class name
#        * I should see the Big Banner logo to open homepage and contain "gtm-navbar-harpers" class name

    Scenario: I can see the site header logo in the desktop style
        Given I switch to "desktop" view
        When I am currently viewing the homepage
        * I should see the site header logo to open homepage and contain "gtm-navbar-harper" class name

    Scenario: I can see the GTM container with id "GTM-NX2PKZ"
        When I am currently viewing the homepage
        Then I should see the GTM container id "GTM-NX2PKZ" on the DOM


    Scenario: I can see the GA container with id "UA-8689567-1"
        When I am currently viewing the homepage
        Then I should see the GA container id "UA-8689567-1" on the DOM
