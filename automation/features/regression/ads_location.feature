@ad @elle @BXMA-469 @med
Feature: Ads Location
    As a user
    I should see each ad slot containing correct class name which is a adLocation parameter in the ad call.

#--Start testing in desktop view--
    @homepage
    Scenario: Ads slot elements should have proper class name on home page in desktop view
        Given I switch to "desktop" view
        When I am currently viewing the homepage
        Then I should see each outside ad slot element containing proper class name
            |ad                 |class-name        |
            |Top Leaderboard    |home_outside_1    |
            |Middle Leaderboard |home_outside_3    |
            |Bottom Leaderboard |home_outside_4    |
        And I should see each RHS ad slot element containing proper class name
            |ad              |class-name    |
            |Top MREC RHS    |home_rhs_1    |
            |Bottom MREC RHS |home_rhs_2    |
        And I should see each additional ad slot element containing proper class name
            |ad                 |class-name        |
            |Out Of Page        |home_outofpage_1  |
            |Left Side Panel    |home_panel_1      |
            |Right Side Panel   |home_panel_2      |
            |Wallpaper          |home_wallpaper_1  |
        And I should see each polar ad slot element containing proper class name
            |ad                         |class-name  |
            |Polar in Must Read 2       |home_body_1 |
            |Polar in Top Teaser 1      |home_body_2 |
            |Polar in Top Teaser 6      |home_body_3 |
            |Polar in Bottom Teaser 2   |home_body_4 |
            |Polar in Bottom Teaser 6   |home_body_6 |
        When I click on the Load More button
        Then I should see each load more ad slot element containing proper class name
            |ad                  |class-name   |
            |Load More MREC RHS  |home_rhs_3   |
            |Polar in Load More 2|home_body_7  |
            |Polar in Load More 6|home_body_9  |

    @section
    Scenario: Ads slot elements should have proper class name on index page in desktop view
        Given I switch to "desktop" view
        When I am currently viewing "fashion"
        Then I should see each outside ad slot element containing proper class name
            |ad                 |class-name        |
            |Top Leaderboard    |index_outside_1   |
            |Middle Leaderboard |index_outside_3   |
            |Bottom Leaderboard |index_outside_4   |
        And I should see each RHS ad slot element containing proper class name
            |ad              |class-name    |
            |Top MREC RHS    |index_rhs_1   |
            |Bottom MREC RHS |index_rhs_2   |
        And I should see each additional ad slot element containing proper class name
            |ad                 |class-name        |
            |Out Of Page        |index_outofpage_1 |
            |Left Side Panel    |index_panel_1     |
            |Right Side Panel   |index_panel_2     |
            |Wallpaper          |index_wallpaper_1 |
        And I should see each polar ad slot element containing proper class name
            |ad                         |class-name   |
            |Polar in Top Teaser 1      |index_body_1 |
            |Polar in Top Teaser 6      |index_body_2 |
            |Polar in Bottom Teaser 2   |index_body_3 |
            |Polar in Bottom Teaser 6   |index_body_5 |
        When I click on the Load More button
        Then I should see each load more ad slot element containing proper class name
            |ad                 |class-name     |
            |Load More MREC RHS |index_rhs_3    |
            |Polar in Load More 2|index_body_6  |
            |Polar in Load More 6|index_body_8  |

    @gallery
    Scenario: Ads slot elements should have proper class name on gallery page in desktop view
        Given I switch to "desktop" view
        When I am currently viewing "fashion/automation-test-gallery-13302"
        Then I should see each outside ad slot element containing proper class name
            |ad                 |class-name        |
            |Top Leaderboard    |gallery_outside_1 |
            |Teads              |gallery_outside_2 |
            |Native             |gallery_outside_3 |
            |Bottom Leaderboard |gallery_outside_5 |
        And I should see each RHS ad slot element containing proper class name
            |ad              |class-name     |
            |MREC RHS 1      |gallery_rhs_2  |
            |MREC RHS 2      |gallery_rhs_4  |
            |MREC RHS 3      |gallery_rhs_6  |
            |MREC RHS 4      |gallery_rhs_8  |
            |Sticky MREC RHS |gallery_rhs_9  |
        And I should see each additional ad slot element containing proper class name
            |ad                 |class-name          |
            |Out Of Page        |gallery_outofpage_1 |
            |Left Side Panel    |gallery_panel_1     |
            |Right Side Panel   |gallery_panel_2     |
            |Wallpaper          |gallery_wallpaper_1 |
        And I should see each polar ad slot element containing proper class name
            |ad                                     |class-name    |
            |Polar in Related Content In Body       |gallery_body_1 |
            |Polar in Related Content After Slide 7 |gallery_body_4 |
            |Polar in RHS 2                         |gallery_rhs_1 |
            |Polar in RHS 5                         |gallery_rhs_3 |
            |Polar in RHS 9                         |gallery_rhs_5 |
            |Polar in RHS 14                        |gallery_rhs_7 |

    @article
    Scenario: Ads slot elements should have proper class name on article page in desktop view
        Given I switch to "desktop" view
        When I am currently viewing "fashion/automation-test-article-with-hero-image-3663"
        Then I should see each outside ad slot element containing proper class name
            |ad                 |class-name        |
            |Top Leaderboard    |article_outside_1 |
            |Teads              |article_outside_2 |
            |Native             |article_outside_3 |
            |Bottom Leaderboard |article_outside_5 |
        And I should see each RHS ad slot element containing proper class name
            |ad              |class-name     |
            |MREC RHS 1      |article_rhs_2  |
            |MREC RHS 2      |article_rhs_4  |
            |MREC RHS 3      |article_rhs_6  |
            |MREC RHS 4      |article_rhs_8  |
            |Sticky MREC RHS |article_rhs_9  |
        And I should see each additional ad slot element containing proper class name
            |ad                 |class-name          |
            |Out Of Page        |article_outofpage_1 |
            |Left Side Panel    |article_panel_1     |
            |Right Side Panel   |article_panel_2     |
            |Wallpaper          |article_wallpaper_1 |
        And I should see each polar ad slot element containing proper class name
            |ad                               |class-name    |
            |Polar in Related Content In Body |article_body_2 |
            |Polar in RHS 2                   |article_rhs_1 |
            |Polar in RHS 5                   |article_rhs_3 |
            |Polar in RHS 9                   |article_rhs_5 |
            |Polar in RHS 14                  |article_rhs_7 |

    @review
    Scenario: Ads slot elements should have proper class name on review page in desktop view
        Given I switch to "desktop" view
        When I am currently viewing "test/bar-rochford-restaurant-review-1713"
        Then I should see each outside ad slot element containing proper class name
            |ad                 |class-name       |
            |Top Leaderboard    |review_outside_1 |
            |Teads              |review_outside_2 |
            |Native             |review_outside_3 |
            |Bottom Leaderboard |review_outside_5 |
        And I should see each RHS ad slot element containing proper class name
            |ad              |class-name    |
            |MREC RHS 1      |review_rhs_2  |
            |MREC RHS 2      |review_rhs_4  |
            |MREC RHS 3      |review_rhs_6  |
            |MREC RHS 4      |review_rhs_8  |
            |Sticky MREC RHS |review_rhs_9  |
        And I should see each additional ad slot element containing proper class name
            |ad                 |class-name         |
            |Out Of Page        |review_outofpage_1 |
            |Left Side Panel    |review_panel_1     |
            |Right Side Panel   |review_panel_2     |
            |Wallpaper          |review_wallpaper_1 |
        And I should see each polar ad slot element containing proper class name
            |ad                               |class-name    |
            |Polar in Related Content In Body |review_body_2 |
            |Polar in RHS 2                   |review_rhs_1  |
            |Polar in RHS 5                   |review_rhs_3  |
            |Polar in RHS 9                   |review_rhs_5  |
            |Polar in RHS 14                  |review_rhs_7  |

    @recipe_collection
    Scenario: Ads slot elements should have proper class name on recipe collection page in desktop view
        Given I switch to "desktop" view
        When I am currently viewing "test/comforting-slow-cooker-recipes-31166"
        Then I should see each outside ad slot element containing proper class name
            |ad                 |class-name                 |
            |Top Leaderboard    |recipecollection_outside_1 |
            |Teads              |recipecollection_outside_2 |
            |Native             |recipecollection_outside_3 |
            |Bottom Leaderboard |recipecollection_outside_5 |
        And I should see each RHS ad slot element containing proper class name
            |ad              |class-name                |
            |MREC RHS 1      |recipecollection_rhs_2    |
            |MREC RHS 2      |recipecollection_rhs_4    |
            |MREC RHS 3      |recipecollection_rhs_6    |
            |MREC RHS 4      |recipecollection_rhs_8    |
            |Sticky MREC RHS |recipecollection_rhs_9    |
        And I should see each additional ad slot element containing proper class name
            |ad                 |class-name                     |
            |Out Of Page        |recipecollection_outofpage_1   |
            |Left Side Panel    |recipecollection_panel_1       |
            |Right Side Panel   |recipecollection_panel_2       |
            |Wallpaper          |recipecollection_wallpaper_1   |
        And I should see each polar ad slot element containing proper class name
            |ad                               |class-name               |
            |Polar in Related Content In Body |recipecollection_body_2  |
            |Polar in RHS 2                   |recipecollection_rhs_1   |
            |Polar in RHS 5                   |recipecollection_rhs_3   |
            |Polar in RHS 9                   |recipecollection_rhs_5   |
            |Polar in RHS 14                  |recipecollection_rhs_7   |

    @recipe
    Scenario: Ads slot elements should have proper class name on recipe page in desktop view
        Given I switch to "desktop" view
        When I am currently viewing "test/automation-test-recipe-2127"
        Then I should see each outside ad slot element containing proper class name
            |ad                 |class-name       |
            |Top Leaderboard    |recipe_outside_1 |
            |Teads              |recipe_outside_2 |
            |Native             |recipe_outside_3 |
            |Bottom Leaderboard |recipe_outside_5 |
        And I should see each RHS ad slot element containing proper class name
            |ad              |class-name      |
            |MREC RHS 1      |recipe_rhs_2    |
            |MREC RHS 2      |recipe_rhs_4    |
            |MREC RHS 3      |recipe_rhs_6    |
            |MREC RHS 4      |recipe_rhs_8    |
            |Sticky MREC RHS |recipe_rhs_9    |
        And I should see each additional ad slot element containing proper class name
            |ad                 |class-name           |
            |Out Of Page        |recipe_outofpage_1   |
            |Left Side Panel    |recipe_panel_1       |
            |Right Side Panel   |recipe_panel_2       |
            |Wallpaper          |recipe_wallpaper_1   |
        And I should see each polar ad slot element containing proper class name
            |ad                               |class-name     |
            |Polar in Related Content In Body |recipe_body_2  |
            |Polar in RHS 2                   |recipe_rhs_1   |
            |Polar in RHS 5                   |recipe_rhs_3   |
            |Polar in RHS 9                   |recipe_rhs_5   |
            |Polar in RHS 14                  |recipe_rhs_7   |

    @tag
    Scenario: Ads slot elements should have proper class name on tag landing page in desktop view
        Given I switch to "desktop" view
        When I am currently viewing "tags/video"
        Then I should see each outside ad slot element containing proper class name
            |ad                 |class-name        |
            |Top Leaderboard    |index_outside_1   |
            |Middle Leaderboard |index_outside_3   |
            |Bottom Leaderboard |index_outside_4   |
        And I should see each RHS ad slot element containing proper class name
            |ad              |class-name    |
            |Top MREC RHS    |index_rhs_1   |
            |Bottom MREC RHS |index_rhs_2   |
        And I should see each additional ad slot element containing proper class name
            |ad                 |class-name        |
            |Out Of Page        |index_outofpage_1 |
            |Left Side Panel    |index_panel_1     |
            |Right Side Panel   |index_panel_2     |
            |Wallpaper          |index_wallpaper_1 |
        And I should see each polar ad slot element containing proper class name
            |ad                         |class-name   |
            |Polar in Top Teaser 1      |index_body_1 |
            |Polar in Top Teaser 6      |index_body_2 |
            |Polar in Bottom Teaser 2   |index_body_3 |
            |Polar in Bottom Teaser 6   |index_body_5 |
        When I click on the Load More button
        Then I should see each load more ad slot element containing proper class name
            |ad                    |class-name    |
            |Load More MREC RHS    |index_rhs_3   |
            |Polar in Load More 2  |index_body_6  |
            |Polar in Load More 6  |index_body_8  |

    @commercial_tag_section
    Scenario: Ads slot elements should have proper class name on commercial tag section landing page in desktop view
        Given I switch to "desktop" view
        When I am currently viewing "xmas"
        Then I should see each outside ad slot element containing proper class name
            |ad                 |class-name        |
            |Top Leaderboard    |commercialtagsection_outside_1   |
            |Middle Leaderboard |commercialtagsection_outside_3   |
            |Bottom Leaderboard |commercialtagsection_outside_4   |
        And I should see each RHS ad slot element containing proper class name
            |ad              |class-name    |
            |Top MREC RHS    |commercialtagsection_rhs_1   |
            |Bottom MREC RHS |commercialtagsection_rhs_2   |
        And I should see each additional ad slot element containing proper class name
            |ad                 |class-name        |
            |Out Of Page        |commercialtagsection_outofpage_1 |
            |Left Side Panel    |commercialtagsection_panel_1     |
            |Right Side Panel   |commercialtagsection_panel_2     |
            |Wallpaper          |commercialtagsection_wallpaper_1 |
        And I should see each polar ad slot element containing proper class name
            |ad                         |class-name   |
            |Polar in Top Teaser 1      |commercialtagsection_body_1 |
            |Polar in Top Teaser 6      |commercialtagsection_body_2 |
            |Polar in Bottom Teaser 2   |commercialtagsection_body_3 |
            |Polar in Bottom Teaser 6   |commercialtagsection_body_5 |
        When I click on the Load More button
        Then I should see each load more ad slot element containing proper class name
            |ad                    |class-name    |
            |Load More MREC RHS    |commercialtagsection_rhs_3   |
            |Polar in Load More 2  |commercialtagsection_body_6  |
            |Polar in Load More 6  |commercialtagsection_body_8  |

#--Start testing in mobile view--#
    @homepage
    Scenario: Ads slot elements should have proper class name on home page in mobile view
        Given I switch to "mobile" view
        When I am currently viewing the homepage
        Then I should see each outside ad slot element containing proper class name
            |ad                     |class-name        |
            |Top Leaderboard        |home_outside_1    |
            |MREC Under Hero Teaser |home_outside_2    |
            |Middle Leaderboard     |home_outside_3    |
        And I should see each body ad slot element containing proper class name
            |ad                   |class-name  |
            |MREC In Bottom Feed  |home_body_5 |
        And I should see each additional ad slot element containing proper class name
            |ad                 |class-name        |
            |Out Of Page        |home_outofpage_1  |
        And I should see each polar ad slot element containing proper class name
            |ad                         |class-name  |
            |Polar in Must Read 2       |home_body_1 |
            |Polar in Top Teaser 1      |home_body_2 |
            |Polar in Top Teaser 6      |home_body_3 |
            |Polar in Bottom Teaser 2   |home_body_4 |
            |Polar in Bottom Teaser 6   |home_body_6 |
        When I click on the Load More button
        Then I should see each load more ad slot element containing proper class name
            |ad                            |class-name   |
            |Load More MREC In Bottom Feed |home_body_8  |
            |Polar in Load More 2          |home_body_7  |
            |Polar in Load More 6          |home_body_9  |

    @section
    Scenario: Ads slot elements should have proper class name on index page in mobile view
        Given I switch to "mobile" view
        When I am currently viewing "fashion"
        Then I should see each outside ad slot element containing proper class name
            |ad                     |class-name        |
            |Top Leaderboard        |index_outside_1   |
            |MREC Under Hero Teaser |index_outside_2   |
            |Middle Leaderboard     |index_outside_3   |
        And I should see each body ad slot element containing proper class name
            |ad                   |class-name  |
            |MREC In Bottom Feed  |index_body_4|
        And I should see each additional ad slot element containing proper class name
            |ad                 |class-name        |
            |Out Of Page        |index_outofpage_1 |
        And I should see each polar ad slot element containing proper class name
            |ad                         |class-name   |
            |Polar in Top Teaser 1      |index_body_1 |
            |Polar in Top Teaser 6      |index_body_2 |
            |Polar in Bottom Teaser 2   |index_body_3 |
            |Polar in Bottom Teaser 6   |index_body_5 |
        When I click on the Load More button
        Then I should see each load more ad slot element containing proper class name
            |ad                            |class-name    |
            |Load More MREC In Bottom Feed |index_body_7  |
            |Polar in Load More 2          |index_body_6  |
            |Polar in Load More 6          |index_body_8  |

    @gallery
    Scenario: Ads slot elements should have proper class name on gallery page in mobile view
        Given I switch to "mobile" view
        When I am currently viewing "fashion/automation-test-gallery-13302"
        Then I should see each outside ad slot element containing proper class name
            |ad                 |class-name        |
            |Top Leaderboard    |gallery_outside_1 |
            |Teads              |gallery_outside_2 |
            |Native             |gallery_outside_3 |
            |Bottom Leaderboard |gallery_outside_4 |
        And I should see each body ad slot element containing proper class name
            |ad                         |class-name     |
            |MREC After Slide 3         |gallery_body_2 |
            |MREC After Slide 7         |gallery_body_3 |
            |MREC Before Recommendation |gallery_body_6 |
        And I should see each additional ad slot element containing proper class name
            |ad                 |class-name          |
            |Out Of Page        |gallery_outofpage_1 |
        And I should see each polar ad slot element containing proper class name
            |ad                                 |class-name     |
            |Polar in Related Content In Body   |gallery_body_1 |
            |Polar in Carousel Feed             |gallery_body_5 |

    @article
    Scenario: Ads slot elements should have proper class name on article page in mobile view
        Given I switch to "mobile" view
        When I am currently viewing "fashion/automation-test-article-with-hero-image-3663"
        Then I should see each outside ad slot element containing proper class name
            |ad                 |class-name        |
            |Top Leaderboard    |article_outside_1 |
            |Teads              |article_outside_2 |
            |Native             |article_outside_3 |
            |Bottom Leaderboard |article_outside_4 |
        And I should see each body ad slot element containing proper class name
            |ad                         |class-name     |
            |MREC Under Hero Image      |article_body_1 |
            |MREC Before Recommendation |article_body_4 |
        And I should see each additional ad slot element containing proper class name
            |ad                 |class-name          |
            |Out Of Page        |article_outofpage_1 |
        And I should see each polar ad slot element containing proper class name
            |ad                                 |class-name     |
            |Polar in Related Content In Body   |article_body_2 |
            |Polar in Carousel Feed             |article_body_3 |

    @review
    Scenario: Ads slot elements should have proper class name on review page in mobile view
        Given I switch to "mobile" view
        When I am currently viewing "test/bar-rochford-restaurant-review-1713"
        Then I should see each outside ad slot element containing proper class name
            |ad                 |class-name       |
            |Top Leaderboard    |review_outside_1 |
            |Teads              |review_outside_2 |
            |Native             |review_outside_3 |
            |Bottom Leaderboard |review_outside_4 |
        And I should see each body ad slot element containing proper class name
            |ad                         |class-name    |
            |MREC Under Hero Image      |review_body_1 |
            |MREC Before Recommendation |review_body_4 |
        And I should see each additional ad slot element containing proper class name
            |ad                 |class-name          |
            |Out Of Page        |review_outofpage_1  |
        And I should see each polar ad slot element containing proper class name
            |ad                                 |class-name     |
            |Polar in Related Content In Body   |review_body_2  |
            |Polar in Carousel Feed             |review_body_3  |

    @recipe_collection
    Scenario: Ads slot elements should have proper class name on recipe collection page in mobile view
        Given I switch to "mobile" view
        When I am currently viewing "test/comforting-slow-cooker-recipes-31166"
        Then I should see each outside ad slot element containing proper class name
            |ad                 |class-name                 |
            |Top Leaderboard    |recipecollection_outside_1 |
            |Teads              |recipecollection_outside_2 |
            |Native             |recipecollection_outside_3 |
            |Bottom Leaderboard |recipecollection_outside_4 |
        And I should see each body ad slot element containing proper class name
            |ad                         |class-name                 |
            |MREC Under Hero Image      |recipecollection_body_1    |
            |MREC After Recipe 3        |recipecollection_body_3    |
            |MREC Before Recommendation |recipecollection_body_5    |
        And I should see each additional ad slot element containing proper class name
            |ad                 |class-name                     |
            |Out Of Page        |recipecollection_outofpage_1   |
        And I should see each polar ad slot element containing proper class name
            |ad                                 |class-name                 |
            |Polar in Related Content In Body   |recipecollection_body_2    |
            |Polar in Carousel Feed             |recipecollection_body_4    |

    @recipe
    Scenario: Ads slot elements should have proper class name on recipe page in mobile view
        Given I switch to "mobile" view
        When I am currently viewing "test/automation-test-recipe-2127"
        Then I should see each outside ad slot element containing proper class name
            |ad                 |class-name       |
            |Top Leaderboard    |recipe_outside_1 |
            |Teads              |recipe_outside_2 |
            |Native             |recipe_outside_3 |
            |Bottom Leaderboard |recipe_outside_4 |
        And I should see each body ad slot element containing proper class name
            |ad                         |class-name       |
            |MREC Under Hero Image      |recipe_body_1    |
            |MREC Before Recommendation |recipe_body_4    |
        And I should see each additional ad slot element containing proper class name
            |ad                 |class-name           |
            |Out Of Page        |recipe_outofpage_1   |
        And I should see each polar ad slot element containing proper class name
            |ad                                 |class-name       |
            |Polar in Related Content In Body   |recipe_body_2    |
            |Polar in Carousel Feed             |recipe_body_3    |

    @tag
    Scenario: Ads slot elements should have proper class name on tag landing page in mobile view
        Given I switch to "mobile" view
        When I am currently viewing "tags/video"
        Then I should see each outside ad slot element containing proper class name
            |ad                     |class-name        |
            |Top Leaderboard        |index_outside_1   |
            |MREC Under Hero Teaser |index_outside_2   |
            |Middle Leaderboard     |index_outside_3   |
        And I should see each body ad slot element containing proper class name
            |ad                   |class-name  |
            |MREC In Bottom Feed  |index_body_4|
        And I should see each additional ad slot element containing proper class name
            |ad                 |class-name        |
            |Out Of Page        |index_outofpage_1 |
        And I should see each polar ad slot element containing proper class name
            |ad                         |class-name   |
            |Polar in Top Teaser 1      |index_body_1 |
            |Polar in Top Teaser 6      |index_body_2 |
            |Polar in Bottom Teaser 2   |index_body_3 |
            |Polar in Bottom Teaser 6   |index_body_5 |
        When I click on the Load More button
        Then I should see each load more ad slot element containing proper class name
            |ad                            |class-name    |
            |Load More MREC In Bottom Feed |index_body_7  |
            |Polar in Load More 2          |index_body_6  |
            |Polar in Load More 6          |index_body_8  |

    @commercial_tag_section
    Scenario: Ads slot elements should have proper class name on commercial tag section page in mobile view
        Given I switch to "mobile" view
        When I am currently viewing "xmas"
        Then I should see each outside ad slot element containing proper class name
            |ad                     |class-name                       |
            |Top Leaderboard        |commercialtagsection_outside_1   |
            |MREC Under Hero Teaser |commercialtagsection_outside_2   |
            |Middle Leaderboard     |commercialtagsection_outside_3   |
        And I should see each body ad slot element containing proper class name
            |ad                   |class-name                  |
            |MREC In Bottom Feed  |commercialtagsection_body_4 |
        And I should see each additional ad slot element containing proper class name
            |ad                 |class-name                       |
            |Out Of Page        |commercialtagsection_outofpage_1 |
        And I should see each polar ad slot element containing proper class name
            |ad                         |class-name                  |
            |Polar in Top Teaser 1      |commercialtagsection_body_1 |
            |Polar in Top Teaser 6      |commercialtagsection_body_2 |
            |Polar in Bottom Teaser 2   |commercialtagsection_body_3 |
            |Polar in Bottom Teaser 6   |commercialtagsection_body_5 |
        When I click on the Load More button
        Then I should see each load more ad slot element containing proper class name
            |ad                            |class-name                   |
            |Load More MREC In Bottom Feed |commercialtagsection_body_7  |
            |Polar in Load More 2          |commercialtagsection_body_6  |
            |Polar in Load More 6          |commercialtagsection_body_8  |
