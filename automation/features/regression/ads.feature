@ad @elle
Feature: Ad
    As a user
    I should be able to see the relevant Ads on the site

    @high @BXMA-499 @must
    Scenario Outline: Add sticky bottom leaderboard to bottom of the <page>
        Given I switch to "tablet portrait" view
        When I am currently viewing "<pageUrl>"
        Then I can see the sticky ad when the top banner disappears from view
        Examples:
            |page              |pageUrl                                                        |
            |homepage          |                                                              |
            |article           |fashion/automation-test-article-with-hero-image-3663           |
            |gallery           |fashion/automation-test-gallery-13302                          |
            |Section           |fashion                                                        |
            |brand             |aww                                                            |

    @DAW-1070 @BXMA-498 @high @must
    Scenario Outline: Add sticky mobile banner to bottom of the <page>
        Given I switch to "mobile portrait" view
        When I am currently viewing "<pageUrl>"
        Then I can see the sticky ad when the top banner disappears from view
        Examples:
            |page              |pageUrl                                                                   |
            |article           |fashion/automation-test-article-with-hero-image-3663                      |
            |gallery           |fashion/automation-test-gallery-13302                                     |
            |section           |fashion                                                                   |
            |homepage          |                                                                         |

# -------- Homepage Ads on desktop and mobile are High as this is an area with Commercial Value ---------------
    @homepage @BXMA-90 @high
    Scenario Outline: Ads on homepage in the desktop view
        Given I switch to "<device>" view
        When I am currently viewing the homepage
        * I should see the top leaderboard ad under navigation
        * I should see sticky MREC ad next to the top news feed
        * I should not see MREC ad under the hero teaser
        * I should see sticky MREC ad next to the bottom news feed
        * I should not see MREC ad in the bottom news feed
        * I should see the middle leaderboard ad under the top news feed
        * I should see the bottom leaderboard ad above the footer
    @high
        Examples:
            |device             |
            |desktop            |
    @med
        Examples:
            |device             |
            |tablet landscape   |

    @homepage @BXMA-90 @med
    Scenario: Ads on homepage in the tablet portrait view
        Given I switch to "tablet portrait" view
        When I am currently viewing the homepage
        * I should see the top leaderboard ad under navigation
        * I should see MREC ad under the hero teaser
        * I should see sticky MREC ad next to the bottom news feed
        * I should not see MREC ad in the bottom news feed
        * I should see the middle leaderboard ad under the top news feed
        * I should see the bottom leaderboard ad above the footer

    @homepage @BXMA-90 @high
    Scenario: Ads on homepage in the mobile view
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        * I should see the top leaderboard ad under navigation
        * I should see MREC ad under the hero teaser
        * I should see the middle leaderboard ad under the top news feed
        * I should see MREC ad in the bottom news feed
        * I should see the bottom leaderboard ad above the footer


# -------- Section Page Ads on desktop and mobile are High as this are areas with Commercial Value ---------------
    @section @BXMA-34
    Scenario Outline: Ads on section landing page in the desktop view
        Given I switch to "<device>" view
        When I am currently viewing "fashion"
        * I should see the top leaderboard ad under navigation
        * I should see sticky MREC ad next to the top news feed
        * I should not see MREC ad under the hero teaser
        * I should see sticky MREC ad next to the bottom news feed
        * I should see the middle leaderboard ad under the top news feed
        * I should see the bottom leaderboard ad above the footer
    @high
        Examples:
            |device             |
            |desktop            |
    @med
        Examples:
            |device             |
            |tablet landscape   |

    @section @BXMA-34 @med
    Scenario: Ads on section landing page in the tablet portrait view
        Given I switch to "tablet portrait" view
        When I am currently viewing "fashion"
        * I should see the top leaderboard ad under navigation
        * I should see MREC ad under the hero teaser
        * I should see sticky MREC ad next to the bottom news feed
        * I should not see MREC ad in the bottom news feed
        * I should see the middle leaderboard ad under the top news feed
        * I should see the bottom leaderboard ad above the footer

    @section @BXMA-34 @high
    Scenario: Ads on section landing page in the mobile view
        Given I switch to "mobile" view
        When I am currently viewing "fashion"
        * I should see the top leaderboard ad under navigation
        * I should see MREC ad under the hero teaser
        * I should see the middle leaderboard ad under the top news feed
        * I should see MREC ad in the bottom news feed
        * I should see the bottom leaderboard ad above the footer

# -------- Gallery Page Ads on desktop and mobile are High as this is an area with Commercial Value ---------------
    @gallery @BXMA-©32
    Scenario Outline: Ads on gallery page in the desktop view
        Given I switch to "<device>" view
        When I am currently viewing "fashion/automation-test-gallery-13302"
        * I should see the top leaderboard ad under navigation
        * I should see the bottom leaderboard ad above the footer on article
        * I should see four MREC ads in the RHR feed
        * I should not see MREC ad under the hero image
        * I should not see MREC ad above recommendation
        * I should see MREC ad between images
    @high
        Examples:
            |device             |
            |desktop            |
    @med
        Examples:
            |device             |
            |tablet landscape   |

    @gallery @BXMA-132 @med
    Scenario: Ads on gallery page in the tablet portrait view
        Given I switch to "tablet portrait" view
        When I am currently viewing "fashion/automation-test-gallery-13302"
        * I should see the top leaderboard ad under navigation
        * I should see MREC ad above recommendation
        * I should see the bottom leaderboard ad above the footer on article
        * I should not see MREC ad under the hero image
        * I should see MREC ad between images

    @gallery @BXMA-132 @high
    Scenario: Ads on gallery page in the mobile view
        Given I switch to "mobile" view
        When I am currently viewing "fashion/automation-test-gallery-13302"
        * I should see the top leaderboard ad under navigation
        * I should not see MREC ad under the hero image
        * I should see MREC ad above recommendation
        * I should see the bottom leaderboard ad above the footer on article
        * I should see MREC ad between images


# -------- Article Page Ads on desktop and mobile are High as this is an area with Commercial Value ---------------
    @article @BXMA-326 @high
    Scenario Outline: Ads on article page in the desktop view
        Given I switch to "<device>" view
        When I am currently viewing "fashion/automation-test-article-with-hero-image-3663"
        * I should see the top leaderboard ad under navigation
        * I should see the bottom leaderboard ad above the footer on article
        * I should see four MREC ads in the RHR feed
        * I should not see MREC ad under the hero image
        * I should not see MREC ad above recommendation
    @high
        Examples:
            |device             |
            |desktop            |
    @med
        Examples:
            |device             |
            |tablet landscape   |

    @article @BXMA-326 @med
    Scenario: Ads on article page in the tablet portrait view
        Given I switch to "tablet portrait" view
        When I am currently viewing "fashion/automation-test-article-with-hero-image-3663"
        * I should see the top leaderboard ad under navigation
        * I should see MREC ad above recommendation
        * I should see the bottom leaderboard ad above the footer on article
        * I should not see MREC ad under the hero image

    @article @BXMA-326 @high
    Scenario: Ads on article page in the mobile view
        Given I switch to "mobile" view
        When I am currently viewing "fashion/automation-test-article-with-hero-image-3663"
        * I should see the top leaderboard ad under navigation
        * I should see MREC ad under the hero image
        * I should see MREC ad above recommendation
        * I should see the bottom leaderboard ad above the footer on article

# -------- Wall Paper Ads are High and Medium as this is an area with Commercial Value ---------------
    @BXMA-156 @high
    Scenario Outline: Wallpaper ad and side panel ad should appear on "<page>" page in the desktop view
        Given I switch to "desktop" view
        When I am currently viewing "<url>"
        * I should "see" the wallpaper ad slot on "<page>"
        * I should "see" the left and right side ad slot on "<page>"
        Examples:
            |page       |url                                                     |
            |section    |fashion                                                 |
            |article    |fashion/automation-test-article-with-hero-image-3663    |
            |gallery    |fashion/automation-test-gallery-13302                   |


# -------- Inskin Ads on desktop are High as this is an area with Commercial Value ---------------
    @BXMA-156 @manual
    Scenario Outline: Out of page (Inskin) ad should appear on "<page>" page in the "<device>" view
        Given I switch to "<device>" view
        When I am currently viewing "<url>"
        * I should "see" the out of page ad slot on "<page>"
        Examples:
            |device             |page       |url                                                    |
            |desktop            |section    |beauty                                                 |
            |tablet landscape   |article    |beauty/automation-test-article-with-hero-video-3664    |
            |tablet portrait    |gallery    |beauty/automation-test-gallery-inskin-13303            |
