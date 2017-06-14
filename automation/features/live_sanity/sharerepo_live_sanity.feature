@livesharerepo
Feature: I have an automated sanity for my live environments

    @homepage @BXMA-89
    Scenario: Verify desktop WN header is functional correctly on homepage
        Given I switch to "desktop" view
        When I am currently viewing the homepage
        * I can navigate to all sites in the desktop list on the header
            |title                      |url                                |gtm    |
            |Australian Women's Weekly  |/aww                               |gtm-uniheader-aww    |
            |Woman's Day                |/womansday                         |gtm-uniheader-wd     |
            |Good Health                |/good-health                       |gtm-uniheader-gh     |
            |OK! Magazine               |/okmagazine                        |gtm-uniheader-ok     |
            |SHOP Til You Drop          |/shop-til-you-drop                 |gtm-uniheader-shop   |
            |NW                         |/nw                                |gtm-uniheader-nw     |
            |Take 5                     |/take5mag                          |gtm-uniheader-take5  |
            |Yours                      |/yours                             |gtm-uniheader-yours  |
            |Mother and Baby            |/mother-and-baby                   |gtm-uniheader-mb     |
            |TV WEEK                    |/tvweek                            |gtm-uniheader-tvweek |

    @mustread @BXMA-81
    Scenario Outline: Verify the must read module is functional correctly in "<device>" view
        Given I switch to "<device>" view
        When I am currently viewing the homepage
        * I should see must read header as "MUST READ"
        * I should see <number> must read images and titles which are clickable to open their page
        * I should see each must read items containing gtm
            |no |gtm                    |
            |1  |gtm-mustread1-homepage |
            |2  |gtm-mustread2-homepage |
            |3  |gtm-mustread3-homepage |
            |4  |gtm-mustread4-homepage |
            |5  |gtm-mustread5-homepage |
            |6  |gtm-mustread6-homepage |
        Examples:
            |device             | number |
            | mobile            | 2      |
            | desktop           | 6      |

    @promoted @BXMA-205
    Scenario Outline: Verify the promoted module is functional correctly in "<device>" view
        Given I switch to "<device>" view
        When I am currently viewing the homepage
        * I should see promoted header
        * I should see <number> promoted images and titles which are clickable to open their page
        * I should see each promoted items containing gtm
            |no |gtm                 |
            |1  |gtm-promo1-homepage |
            |2  |gtm-promo2-homepage |
            |3  |gtm-promo3-homepage |
            |4  |gtm-promo4-homepage |
        Examples:
            |device             | number |
            | mobile            | 2      |
            | desktop           | 4      |

    @hero @BXMA-40
    Scenario: Verify the hero teaser element is functional correctly in mobile view
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        * I should see the main hero item containing its image and clickable to open its page
        * I should see the main hero item containing its title and clickable to open its page
        * I should see the main hero item containing source

    @homepagefeed @BXMA-82
    Scenario: Verify the top news feed is functional correctly in mobile view
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        * I should see 6 top half feed
        * I should see each top feed item containing its image and clickable to open its page
        * I should see each top feed item containing its title and clickable to open its page
        * I should see each top feed item containing source and date

    @homepagefeed-bottom @BXMA-60
    Scenario: Verify the bottom news feed is functional correctly in mobile view
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        * I should see 8 bottom half feed
        * I should see each bottom feed item containing its image and clickable to open its page
        * I should see each bottom feed item containing its title and clickable to open its page
        * I should see each bottom feed item containing source and date

    @ad @BXMA-90
    Scenario: Ads on homepage in the desktop view
        Given I switch to "desktop" view
        When I am currently viewing the homepage
        * I should see the top leaderboard ad under navigation
        * I should see sticky MREC ad next to the top news feed
        * I should not see MREC ad under the hero teaser
        * I should see sticky MREC ad next to the bottom news feed
        * I should not see MREC ad in the bottom news feed
        * I should see the middle leaderboard ad under the top news feed
        * I should see the bottom leaderboard ad above the footer

    @ad @BXMA-90
    Scenario: Ads on homepage in the mobile view
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        * I should see the top leaderboard ad under navigation
        * I should see MREC ad under the hero teaser
        * I should see the middle leaderboard ad under the top news feed
        * I should see MREC ad in the bottom news feed
        * I should not see the bottom leaderboard ad above the footer

    @navigation @BXMA-65
    Scenario: I can see the brand logos in the hamburger menu
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        * I can navigate to all sites in the hamburger navigation menu
            |title                      |url                                |gtm                        |
            |Homes To Love              |http://homestolove.com.au/         |gtm-hamburger-homes        |
            |Food To Love               |http://foodtolove.com.au/          |gtm-hamburger-food         |
            |Elle                       |http://elle.com.au/                |gtm-hamburger-elle         |
            |Harper's Bazaar            |http://harpersbazaar.com.au/       |gtm-hamburger-harpers      |
            |Gourmet Traveller          |http://gourmettraveller.com.au/    |gtm-hamburger-gt           |
            |Cosmopolitan               |http://cosmopolitan.com.au/        |gtm-hamburger-cosmo        |
            |Dolly                      |http://dolly.com.au/               |gtm-hamburger-dolly        |
            |Beauty Heaven              |http://beautyheaven.com.au/        |gtm-hamburger-beautyheaven |

    @navigation @BXMA-117
    Scenario: I can see the navigation widget on the homepage desktop
        Given I switch to "desktop" view
        When I am currently viewing the homepage
        * I should see the site header banner
        * I should see the site header logo clickable to open homepage
        * I should see the site navigation links and "gtm-navigation-section nav-item" class name in "header"
        * I should see the site navigation links and "gtm-navigation-section nav-item" class name in "hamburger"

    @navigation @BXMA-117
    Scenario: I can see the navigation widget on the homepage mobile
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        * I should see the site header logo clickable to open homepage
        * I should not see the site navigation links
        * I should see the site navigation links and "gtm-navigation-section nav-item" class name in "hamburger"

    @footer @BXMA-145
    Scenario: Verify the footer in the mobile view
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        * I can see the social heading in the footer
        * I can see the social icons clickable to open its page in the footer
            |social     |url                                    |
            |Facebook   |https://www.facebook.com/nowtolove     |
            |Twitter    |https://twitter.com/NowToLove          |
            |Instagram  |https://www.instagram.com/NowToLove   |
        * I can see the brands title in the footer as "CONTENT SUPPORTED BY"
        * I can navigate to all sites in the footer
            |title                      |url                |gtm                           |
            |Australian Women's Weekly  |/aww               |gtm-footer__logos-list-aww    |
            |Woman's Day                |/womansday         |gtm-footer__logos-list-wd     |
            |Good Health                |/good-health       |gtm-footer__logos-list-gh     |
            |OK! Magazine               |/okmagazine        |gtm-footer__logos-list-ok     |
            |SHOP Til You Drop          |/shop-til-you-drop |gtm-footer__logos-list-shop   |
            |NW                         |/nw                |gtm-footer__logos-list-nw     |
            |Take 5                     |/take5mag          |gtm-footer__logos-list-take5  |
            |Yours                      |/yours             |gtm-footer__logos-list-yours  |
            |Mother and Baby            |/mother-and-baby   |gtm-footer__logos-list-mb     |
            |TV WEEK                    |/tvweek            |gtm-footer__logos-list-tvweek |
        * I can navigate to all standard pages in the footer
            |page           |url                                                            |
            |PRIVACY POLICY |http://www.bauer-media.com.au/privacy                          |
            |ADVERTISE      |http://www.bauer-media.com.au/advertising/advertise-with-us    |
            |TERMS OF USE   |http://www.bauer-media.com.au/terms/website-terms              |
            |CONTACT US     |contact-us                                                     |
        * I can see the standard copyright text in the footer as "COPYRIGHT BAUER MEDIA PTY LTD ALL RIGHTS RESERVED"

    @error @BXMA-139
    Scenario: I can see the 404 error page in the mobile style
        Given I switch to "mobile" view
        When I am currently viewing "404"
        * I should see the site header logo clickable to open homepage
        * I should see the hamburger menu
        * I should see the error title as "Sorry, this page is broken."
        * I should see the error giphy image
        * I should see the text clickable to homepage with gtm "gtm-error-goback"

    @article
    Scenario Outline: Verify an article page on the "<device>" view
        Given I switch to "<device>" view
        When I am currently viewing "how-to/baking-soda-bicarb-soda-baking-powder-what-is-the-difference-15828"
        * I can see the long title "Baking soda, bicarb soda, baking powder. What is the difference?"
        * I can see the created date "SEP 26, 2007 12:00PM"
        * I can see the hero image
        * I should not see the hero image caption
        * I can see the short teaser "Here's the answer to the question you've always wondered about."
        * I can see the body paragraph "What is the difference between baking powder"
        * I can see the body video
        * I can see the related tags "Advice"
        * I can see the "header" source appearing with gtm "gtm-brandlogotop-article"
        * I can see the "bottom" source appearing with gtm "gtm-brandlogobottom-article"
        * I can see the facebook share button on article page
        * I can see the pinterest share button on article page
        Examples:
        |device            |
        |mobile            |
        |desktop           |

    @LHR @BXMA-174
    Scenario: Verify the LHR on an article page
        Given I switch to "desktop" view
        When I am currently viewing "how-to/baking-soda-bicarb-soda-baking-powder-what-is-the-difference-15828"
        * I can see 20 items in the list of items in LHR
        * I can see the 20 images of each item in LHR
        * Image in LHR is clickable to open its page
        * I can see the long title of each item in LHR
        * Long title in LHR is clickable to open its page
        * I can see each item in LHR containing source and date

    @gallery
    Scenario: Verify a gallery page in mobile style on mobile view
        When I switch to "mobile" view
        Given I am currently viewing "celebrity/natalie-portman-is-pregnant-with-second-child-5734"
        * I can see the logo on the gallery header
        * I can click the logo to go to homepage
        * I can see the gallery title containing "Natalie Portman shows off her divine baby bump"
        * I can see an image appearing on the gallery
        * I can see the source appearing on the gallery with gtm "gtm-brandlogotop-gallery"
        * I can see the created date on the gallery "SEP 09, 2016 1:32PM"
        * I can see the gallery description of the gallery containing "The 35-year-old Oscar winner looked radiant"
        * I can see the facebook share button on gallery page
        * I can see the pinterest share button on gallery page
        * I can see the image caption on the gallery containing "Natalie Portman looks radiant"
        When I see the image no "2" on the gallery
        * I can not see the gallery title
        * I can see an image appearing on the gallery
        * I should not see the gallery description on mobile for next image
        * I can see the image caption on the gallery containing "The 35-year-old actress isn't on social media"
        When I see the last image on the gallery
        * I can see an image appearing on the gallery
        When I see the next gallery slide on the gallery on mobile
        * I can see the logo on the gallery header
        * I should not see the gallery description on mobile for next image

    @brand @BXMA-104
    Scenario: Verify the brand landing page is functional correctly in desktop view
        Given I switch to "desktop" view
        When I am currently viewing "aww"
        * I should see the brand title logo on the brand landing page
        * I should see the breadcrumb of "AUSTRALIAN WOMEN'S WEEKLY" on the brand landing page
        * I should see the main hero item containing its image and clickable to open its page
        * I should see the main hero item containing its title and clickable to open its page
        * I should see the main hero item containing "AUSTRALIAN WOMEN'S WEEKLY" source without date
        * I should see 6 top half feed
        * I should see 7 bottom half feed

    @brand @BXMA-104
    Scenario: Verify the brand landing page is functional correctly in mobile view
        Given I switch to "mobile" view
        When I am currently viewing "aww"
        * I should see the brand title logo on the brand landing page
        * I should not see the breadcrumb on the brand landing page
        * I should see the main hero item containing its image and clickable to open its page
        * I should see the main hero item containing its title and clickable to open its page
        * I should see the main hero item containing "AUSTRALIAN WOMEN'S WEEKLY" source without date
        * I should see 6 top half feed
        * I should see 7 bottom half feed

    @brand @BXMA-104
    Scenario Outline: Verify the subscribe now and social icons of "<brand>" landing page in "<device>" view
        Given I switch to "<device>" view
        When I am currently viewing "<brand>"
        * I should see the subscribe element under "<position>" and containing title "<subscribe_title>" and image
        * I should see the follow us element under "<position>"
        Examples:
            |device             |brand          |position   |subscribe_title                |
            |mobile             |aww            |hero teaser|Subscribe to The Weekly        |
            |desktop            |womansday      |MREC       |Subscribe to Woman's Day       |
