Feature: Users can navigate the site using a different devices and browsers

    @mobile
    Scenario: Verify Ads on article page in different devices
        Given I am currently viewing "fashion/automation-test-article-with-hero-image-3663"
        * I should see the top leaderboard ad under navigation
        * I should see native ad below author
        * I should see MREC ad under the hero image
        * I should see MREC ad above recommendation
        * I can see the sticky ad when the top banner disappears from view

    @mobile
    Scenario: Verify Ads on gallery page in different devices
        Given I am currently viewing "fashion/automation-test-gallery-13302"
        * I should see the top leaderboard ad under navigation
        * I should see native ad below author
        * I should see MREC ad above recommendation
        * I can see the sticky ad when the top banner disappears from view

    @mobile
    Scenario: Verify the ads on AMP enabled page
        Given I am currently viewing "amp/news/tony-abbott-says-climate-change-good-thing-41699"
        * I should see the top leaderboard ad under hero image on AMP page
#        * I should see first MREC in the body on AMP page #disable until the disapearring ad issue is fixed in SIT.
#        * I should see second MREC in the body on AMP page #disable until the disapearring ad issue is fixed in SIT.
        * I should see the sticky bottom leaderboard on AMP page

    @browser
    Scenario: Verify Ads on article page in different browsers
        Given I am currently viewing "fashion/automation-test-article-with-hero-image-3663"
        * I should see the top leaderboard ad under navigation
        * I should see native ad below author
        * I should see the bottom leaderboard ad above the footer on article

    @browser
    Scenario: Verify Ads on gallery page in different browsers
        Given I am currently viewing "fashion/automation-test-gallery-13302"
        * I should see the top leaderboard ad under navigation
        * I should see native ad below author
        * I should see the bottom leaderboard ad above the footer on article
