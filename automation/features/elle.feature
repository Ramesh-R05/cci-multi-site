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

    @BXMA-65
    Scenario: I can see the brand logos in the hamburger menu
        Given I switch to "mobile" view
        When I am currently viewing "fashion/automation-test-article-with-hero-image-3663"
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
