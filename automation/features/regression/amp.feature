@amp @elle
Feature: Verify AMP page
    As a user
    I should be able to see the relevant content on AMP page

#-------------AMP on article page-------------#
    @article @med
    #@high - Change to high once the amp scenario can be executed via phantomjs
    Scenario: Verify the AMP article page
        When I switch to "mobile" view
        Given I am currently viewing "amp/news/tony-abbott-says-climate-change-good-thing-41699"
        * I can see the long title "automation test article with hero image test title long title"
        * I can see the short teaser "Short Teaser EOM"
        * I can see the created date "FEB 12, 2016"
        * I can see the amp hero image
        * I can see the body paragraph "Test body paragraph"
        * I can see the amp body image
        * I can see the amp body image caption "Photography by"
        * I can see the amp body video
        * I can see the amp body related content
        * I can see the related tags "GOSSIP GIRL," "DOLLY DOCTOR"
        * I can see the facebook share button on amp article page
        * I can see the pinterest share button on amp article page
        * I can see the outbrain on amp article page

    @article @med
    Scenario: Verify the social embeds on AMP article page
        When I switch to "mobile" view
        Given I am currently viewing "amp/fashion/automation-test-article-with-social-embed-3663"
        Then I can see the amp body Twitter embed "697199025729048577"
        * I can see the amp body Facebook embed "https://www.facebook.com/Foodtoloveau/posts/823515874446034"
        * I can see the amp body Youtube embed "https://www.youtube.com/embed/4GpnNxjy6m0"
        * I can see the amp body Vimeo embed "https://player.vimeo.com/video/181027959"

    @article @ad @med
    #@high - Change to high once the amp scenario can be executed via phantomjs
    Scenario: Ads slot elements should have proper class name on AMP article page
        Given I switch to "mobile" view
        And I am currently viewing "amp/news/tony-abbott-says-climate-change-good-thing-41200"
        * I should see the top leaderboard ad under hero image on AMP page
        #* I should see first MREC in the body on AMP page #disable until the disapearring ad issue is fixed in SIT.
        #* I should see second MREC in the body on AMP page #disable until the disapearring ad issue is fixed in SIT.
        * I should see the sticky bottom leaderboard on AMP page

