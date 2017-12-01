@footer @elle
Feature: Footer
    As a user
    I should be able to see the Footer

    @homepage
    Scenario Outline: Verify the footer in the "<device>" view
        Given I switch to "<device>" view
        When I am currently viewing the homepage
        * I can see the subscription magazine and digital cover
        * I can click both the images
        * I can see the subscription button
        * I can see the social heading in the footer
        * I can navigate to all standard pages in the footer
            |page           |url                                                            |
            |PRIVACY POLICY |http://www.bauer-media.com.au/privacy                          |
            |ADVERTISE      |http://www.bauer-media.com.au/advertising/advertise-with-us    |
            |TERMS OF USE   |http://www.bauer-media.com.au/terms/website-terms              |
            |CONTACT US     |contact-us                                                     |
        * I can see the standard bauer text in the footer as "© COPYRIGHT BAUER MEDIA PTY LTD"
        * I can see the standard copyright text in the footer as "ALL RIGHTS RESERVED"
        @med
        Examples:
            |device            |
            |mobile            |
            |desktop           |

    @homepage
    Scenario Outline: Verify the footer in the tablet view (Test in <device> view)
        Given I switch to "<device>" view
        When I am currently viewing the homepage
        * 	I can see all main elements in the footer
        @low
        Examples:
            |device            |
            |tablet portrait   |
            |tablet landscape  |

    @med
    Scenario Outline: Verify the footer appearing on the "<page>" page
        Given I switch to "desktop" view
        When I am currently viewing "<url>"
        * 	I can see all main elements in the footer
        @section
        Examples:
            |page               |url                                                                |
            |section            |fashion                                                            |
        @article
        Examples:
            |page               |url                                                                |
            |article            |fashion/automation-test-article-with-hero-image-3663               |
        @gallery
        Examples:
            |page               |url                                                                |
            |gallery            |fashion/automation-test-gallery-13302                              |
        @404
        Examples:
            |page               |url                                                                |
            |404                |404                                                                |


