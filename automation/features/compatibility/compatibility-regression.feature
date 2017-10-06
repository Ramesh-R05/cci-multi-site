Feature: Users can navigate the site using a different devices and browsers

    @mobile
    Scenario: Verify sticky ad on article page in different devices
        Given I am currently viewing "fashion/automation-test-article-with-hero-image-3663"
        Then I can see the long title "automation test article with hero image test title long title"
        * I should see the top leaderboard ad under navigation
        * I should see MREC ad above recommendation
        * I should see the bottom leaderboard ad above the footer on article
        * I can see the sticky ad when the top banner disappears from view

    @browser
    Scenario: Verify MREC ad and sticky ad on article page in browser
        Given I am currently viewing "fashion/automation-test-article-with-hero-image-3663"
        Then I can see the long title "automation test article with hero image test title long title"
        * I should see the top leaderboard ad under navigation
        * I should not see MREC ad above recommendation
        * I should see the bottom leaderboard ad above the footer on article

    @mobile
    Scenario: Verify Ads on gallery page in different devices
        Given I am currently viewing "fashion/automation-test-gallery-13302"
        * I should see the top leaderboard ad under navigation
        * I should see native ad below author
        * I should not see MREC ad under the hero image
        * I should see MREC ad above recommendation
        * I should see the bottom leaderboard ad above the footer on article
        * I should see MREC ad between images

    @browser
    Scenario: Verfiy Ads on gallery page in different browser
        Given I am currently viewing "fashion/automation-test-gallery-13302"
        * I should see the top leaderboard ad under navigation
        * I should see native ad below author
        * I should not see MREC ad under the hero image
        * I should not see MREC ad above recommendation
        * I should see the bottom leaderboard ad above the footer on article
        * I should see MREC ad between images
