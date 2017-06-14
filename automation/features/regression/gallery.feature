@gallery @BXMA-33 @BXMA-132 @BXMA-133 @elle
Feature: Gallery
    As a user
    I should be able to see the gallery page

    @high
    Scenario: Verify a gallery page in mobile style on mobile view
        When I switch to "mobile" view
        Given I am currently viewing "fashion/automation-test-gallery-13302"
        * I can see the logo on the gallery header
        * I can click the logo to go to homepage
        * I can see the gallery title containing "Automation Test Gallery"
        * I can see an image appearing on the gallery
        * I can see the created date on the gallery "DEC 15, 2016"
        * I can see the gallery description of the gallery containing "Test the second paragraph"
        * I can see the image number "1" of total "8" on the gallery
        * I can see the image caption on the gallery containing "Fresh-faced beauty"
        When I see the video ID "3976804555001" on the gallery
        * I can see the play button and click on it

    @med
    Scenario: Verify a gallery page in desktop style on desktop view
        When I switch to "desktop" view
        Given I am currently viewing "fashion/automation-test-gallery-13302"
        * I can see the logo on the gallery header
        * I can click the logo to go to homepage
        * I can see the gallery title containing "Automation Test Gallery"
        * I can see an image appearing on the gallery
        * I can see the created date on the gallery "DEC 15, 2016"
        * I can see the gallery description of the gallery containing "Test the second paragraph"
        * I can see the image number "1" of total "8" on the gallery
        * I can see the image caption on the gallery containing "Fresh-faced beauty"
        When I see the video ID "3976804555001" on the gallery
        * I can see the play button and click on it

    @low
    Scenario: Verify a gallery page in mobile style on tablet portrait view
        When I switch to "tablet portrait" view
        Given I am currently viewing "fashion/automation-test-gallery-13302"
        * I can click the right arrow on the gallery to check the next image
        * I should not see the gallery description on mobile for next image

    @low
    Scenario: Verify a gallery page in desktop style on tablet landscape view
        When I switch to "tablet landscape" view
        Given I am currently viewing "fashion/automation-test-gallery-13302"
        * I can see the gallery description of the gallery containing "Test the second paragraph"
        * I can click the right arrow on the gallery to check the next image

#    @BXMA-155
#    Scenario Outline: Verify the share buttons on a gallery page in "<device>" view
#        When I switch to "<device>" view
#        Given I am currently viewing "fashion/automation-test-gallery-13302"
#        * I can see the facebook share button on gallery page
#        * I can see the pinterest share button on gallery page
#        @high
#        Examples:
#            | device            |
#            | mobile            |
#            | desktop           |
#        @med
#        Examples:
#            | device            |
#            | tablet portrait   |
#            | tablet landscape  |
