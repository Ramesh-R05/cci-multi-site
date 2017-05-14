@article @elle
Feature: Article
    As a user
    I should be able to see the article page

# -------- Hero Image and its description on mobile is High priority  ---------------#
    @DDO-46 @DAW-1125
    Scenario Outline: Verify an article page which contains a hero image on mobile
        When I switch to "<device>" view
        Given I am currently viewing "fashion/automation-test-article-with-hero-image-3663"
        * I can see the long title "automation test article with hero image test title long title"
        * I can see the created date "FEB 12, 2016"
        * I can see the author "EMILY KERR"
        * I can see the hero image
        * I should not see the hero image caption
        * I can see the image alt text in the hero image element "Image ALT TEXT"
        * I can see the short teaser "Short Teaser EOM"
        * I can see the body paragraph "Test body paragraph"
        * I can see the body related content
        * I can see the body image
        * I can see the body image caption "PHOTOGRAPHY BY"
        * I can see the body gallery
        * I can see the body video
        * I can see the body tips "body tips body tips eom"
        * I can see the body competition
        * I can see the related tags "GOSSIP GIRL," "DOLLY DOCTOR"
        @high
        Examples:
            |device             |
            |desktop            |
            |mobile             |


# -------- Hero video and its description on tablet portrait is low priority  ---------------#
    @DAW-1125 @low
    Scenario: Verify an article page which contains a hero video on tablet portrait
        When I switch to "tablet portrait" view
        Given I am currently viewing "beauty/automation-test-article-with-hero-video-3664"
        * I can see the long title "automation test article with hero image test title long title"
        * I can see the created date "FEB 12, 2016"
        * I can see the author "EMILY KERR"
        * I can see the hero video instead of the main image
        * I should not see the hero image caption
        * I can see the short teaser "Short Teaser EOM"
        * I can see the body paragraph "Test body paragraph"
        * I can see the body related content
        * I can see the body image
        * I can see the body image caption "PHOTOGRAPHY BY"
        * I can see the body gallery
        * I can see the body video
        * I can see the body tips "body tips body tips eom"
        * I can see the body competition
        * I can see the related tags "GOSSIP GIRL," "DOLLY DOCTOR"


# -------- Verifying LHR on different screen sizes is low priority  ---------------#
    @DDO-160 @DDO-48
    Scenario Outline: Verify LHR on different screen sizes "<device>"
        Given I am currently viewing "fashion/automation-test-article-with-hero-image-3663"
        When I switch to "<device>" view
        * I can see the LHR
        @med
        Examples:
            |device            |
            |desktop           |
        @low
        Examples:
            |device            |
            |tablet landscape  |

# -------- LHR are High as this Helps recirculate users ---------------#
    @BXMA-174 @high
    Scenario: Verify the LHR on an article page
        Given I am currently viewing "fashion/automation-test-article-with-hero-image-3663"
        When I switch to "desktop" view
        * I can see 20 items in the list of items in LHR
        * I can see the 20 images of each item in LHR
        * Image in LHR is clickable to open its page
        * I can see the long title of each item in LHR
        * Long title in LHR is clickable to open its page
        * I can see each item in LHR containing source and date


# -------- Social embed is Medium and low ---------------#
    Scenario Outline: Editorial team can add social feeds to the article body
        Given I switch to "<device>" view
        When I am currently viewing "fashion/automation-test-article-with-hero-image-3663"
        Then I can see the body Twitter embed "697199025729048577"
        * I can see the body Instagram embed with caption "https://www.instagram.com/p/BBda49yyr4J/embed/captioned/"
        * I can see the body Instagram embed without caption "https://www.instagram.com/p/BA4NkZeSr_r/embed/"
        * I can see the body Facebook embed "https://www.facebook.com/Foodtoloveau/posts/823515874446034"
        * I can see the body Playbuzz embed "/cosmopolitanmagazine10/which-harry-styles-is-your-boyfriend"
        * I can see the body Youtube embed "https://www.youtube.com/embed/4GpnNxjy6m0"
        * I can see the body Vimeo embed "https://player.vimeo.com/video/181027959"
        * I can see the body Whooshka embed "https://player.whooshkaa.com/player/episode/id/90704?visual=true"
        * I can see the body Wirewax embed "http://embed.wirewax.com/8040968"
    @med
        Examples:
            | device            |
            | mobile            |
            | desktop           |
    @low
        Examples:
            | device            |
            | tablet portrait   |
            | tablet landscape  |

