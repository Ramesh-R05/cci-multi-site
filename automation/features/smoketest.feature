@smoketestsit
Feature: Smoke test for all sites in SIT environment
    As a user
    I should be able to see the SIT sites showing all page types correctly

########## Homepage ##########
    @smoketestlocal
    Scenario Outline: Verify the homepage
        Given I switch to "mobile" view
        When I am currently viewing "homepage" page on "<site>" site
        And I should see 2 must read images and titles which are clickable to open their page
        And I should see the main hero item containing its image and clickable to open its page
        And I should see 2 promoted images and titles which are clickable to open their page
        And I should see a "top" feed item containing its image and clickable to open its page
        And I should see a "bottom" feed item containing its image and clickable to open its page
        When I click on the Load More button
        Then I should see extra 14 teasers after loading more
        And I should see a load more feed item containing its image and clickable to open its page
        Examples:
            | site      |
            | foodnz    |

    Scenario Outline: Verify the sign up element on homepage on "<site>"
        Given I switch to "mobile" view
        When I am currently viewing "homepage" page on "<site>" site
        Then I should see the sign up button containing "<signUpUrl>" url in "mobile" view
    @smoketestelle
        Examples:
            | site  | signUpUrl                                         |
            | elle  | https://www.elle.com.au/elle-newsletter           |
    @smoketesthb @optional
        Examples:
            | site  | signUpUrl                                         |
            | hb    | https://www.harpersbazaar.com.au/hb-newsletter    |
    @smoketestgt @optional
        Examples:
            | site  | signUpUrl                                         |
            | gt    | https://www.gourmettraveller.com.au/gt-newsletter |

    Scenario Outline: Verify the sign up form on homepage on "<site>" site (WWFOOD only)
        Given I switch to "mobile" view
        When I am currently viewing "homepage" page on "<site>" site
        Then I should see the sign up form in "mobile" view
    @smoketestawwfood @awwfoodmobile
        Examples:
            | site      |
            | awwfood   |

    Scenario Outline: Verify the gift card element for GT on "<device>"
        Given I switch to "<device>" view
        When I am currently viewing "homepage" page on "gt" site
        Then I should see the gift card element in "<device>" view
    @smoketestgt
        Examples:
            | device    |
            | mobile    |
            | desktop   |

########## Section landing page ##########
    @smoketestlocal
    Scenario Outline: Verify the section landing page
        Given I switch to "mobile" view
        When I am currently viewing "section" page on "<site>" site
        Then I should see the main hero item containing its image and clickable to open its page
        And I should see a "top" feed item containing its image and clickable to open its page
        And I should see a "bottom" feed item containing its image and clickable to open its page
        When I click on the Load More button
        Then I should see extra 14 teasers after loading more
        And I should see a load more feed item containing its image and clickable to open its page
        Examples:
            | site      |
            | foodnz    |

    Scenario Outline: Verify the sign up element on the section landing page on "<site>"
        Given I switch to "mobile" view
        When I am currently viewing "section" page on "<site>" site
        Then I should see the sign up button containing "<signUpUrl>" url in "mobile" view
    @smoketestelle @optional
        Examples:
            | site  | signUpUrl                                         |
            | elle  | https://www.elle.com.au/elle-newsletter           |
    @smoketesthb
        Examples:
            | site  | signUpUrl                                         |
            | hb    | https://www.harpersbazaar.com.au/hb-newsletter    |
    @smoketestgt @optional
        Examples:
            | site  | signUpUrl                                         |
            | gt    | https://www.gourmettraveller.com.au/gt-newsletter |

    Scenario Outline: Verify the sign up form on section page on "<site>" (WWFOOD only)
        Given I switch to "mobile" view
        When I am currently viewing "section" page on "<site>" site
        Then I should see the sign up form in "mobile" view
    @smoketestawwfood @awwfoodmobile
        Examples:
            | site      |
            | awwfood   |

    Scenario Outline: Verify the subsection list on section on "<site>" (GT only)
        Given I switch to "mobile" view
        When I am currently viewing "section" page on "<site>" site
        Then I should see "SELECT A SUB-SECTION..." selected as a default in the list
    @smoketestgt
        Examples:
            | site  |
            | gt    |

########## Subsection landing page ##########
    @smoketestgt
    Scenario: Verify the subsection landing page (GT only)
        Given I switch to "mobile" view
        When I am currently viewing "subsection" page on "gt" site
        Then I should see "DESTINATIONS" title
        Then I should see "DESTINATIONS" selected as a default in the list
        Then I should see the sign up button containing "https://www.gourmettraveller.com.au/gt-newsletter" url in "mobile" view
        Then I should see the main hero item containing its image and clickable to open its page
        And I should see a "top" feed item containing its image and clickable to open its page
        And I should see a "bottom" feed item containing its image and clickable to open its page
        When I click on the Load More button
        Then I should see extra 14 teasers after loading more
        And I should see a load more feed item containing its image and clickable to open its page

########## Tag landing page ##########
    @smoketestlocal
    Scenario Outline: Verify the tag landing page
        Given I switch to "mobile" view
        When I am currently viewing "tag" page on "<site>" site
        Then I should see the main hero item containing its image and clickable to open its page
        And I should see a "top" feed item containing its image and clickable to open its page
        And I should see a "bottom" feed item containing its image and clickable to open its page
        When I click on the Load More button
        Then I should see extra 14 teasers after loading more
        And I should see a load more feed item containing its image and clickable to open its page
        Examples:
            | site  |
            | elle  |

########## Tag section landing page ##########
    @smoketestawwfood @awwfoodmobile
    #This scenario requires the tag section named 'healthy' and it should contain this tag `food:Meal type:Healthy`
    Scenario: Verify the tag section landing page on WWFOOD only
        Given I switch to "mobile" view
        When I am currently viewing "healthy" url on "awwfood" site
        Then I should see at least one teaser
        And I should see the summary description
        And I should see the hero teaser

########## Commercial tag section landing page ##########
    @smoketestawwfood @awwfoodmobile
    #This scenario requires the commercial tag section named 'myer' and it should contain this tag `food:Dish type:Cupcake`
    Scenario: Verify the commercial tag section landing page on WWFOOD only
        Given I switch to "mobile" view
        When I am currently viewing "myer" url on "awwfood" site
        Then I should see at least one teaser
        And I should see the summary description
        And I should see the hero teaser
        When I am currently viewing "tags/cupcake" url on "awwfood" site
        Then I should not see any teaser

########## Content pages ##########
    @smoketestelle
    Scenario Outline: Verify the "<doctype>" page is up on ELLE
        Given I am currently viewing "<doctype>" page on "elle" site
        Then I should see the "<element>" element
        Examples:
            | doctype       | element       |
            | article       | long title    |
            | amp gallery   | long title    |
    @optional
        Examples:
            | doctype       | element       |
            | gallery       | long title    |
            | amp article   | long title    |

    @smoketesthb
    Scenario Outline: Verify the "<doctype>" page is up on HB
        Given I am currently viewing "<doctype>" page on "hb" site
        Then I should see the "<element>" element
        Examples:
            | doctype       | element       |
            | gallery       | long title    |
            | amp article   | long title    |
    @optional
        Examples:
            | doctype       | element       |
            | article       | long title    |
            | amp gallery   | long title    |

    @smoketestgt
    Scenario Outline: Verify the "<doctype>" page is up on GT
        Given I am currently viewing "<doctype>" page on "gt" site
        Then I should see the "<element>" element
        Examples:
            | doctype               | element       |
            | recipe collection     | long title    |
            | amp recipe            | long title    |
    @optional
        Examples:
            | doctype               | element       |
            | article               | long title    |
            | gallery               | long title    |
            | review                | long title    |
            | recipe                | long title    |
            | amp article           | long title    |
            | amp gallery           | long title    |
            | amp review            | long title    |
            | amp recipe collection | long title    |

    @smoketestawwfood @awwfoodmobile @awwfooddesktop
    Scenario Outline: Verify the "<doctype>" page is up on AWWFOOD
        Given I am currently viewing "<doctype>" page on "awwfood" site
        Then I should see the "<element>" element
        Examples:
            | doctype               | element           |
            | recipe                | more from wwfood  |
            | amp recipe collection | long title        |
    @optional
        Examples:
            | doctype               | element           |
            | article               | more from wwfood  |
            | gallery               | more from wwfood  |
            | recipe collection     | more from wwfood  |
            | amp article           | long title        |
            | amp gallery           | long title        |
            | amp recipe            | long title        |

    @smoketestawwfood @awwfoodmobile
    Scenario: Verify the recipe collection page on AWWFOOD
        Given I switch to "mobile" view
        When I am currently viewing "recipe collection" page on "awwfood" site
#        * I can see the hero image
        * I can see the list of recipes

    @smoketestfoodnz
    Scenario Outline: Verify the "<doctype>" page is up on FOODNZ
        Given I am currently viewing "<doctype>" page on "foodnz" site
        Then I should see the "<element>" element
        Examples:
            | doctype               | element      |
            | recipe                | long title   |
            | amp recipe collection | long title   |
    @optional
        Examples:
            | doctype               | element      |
            | article               | long title   |
            | gallery               | long title   |
            | recipe collection     | long title   |
            | amp article           | long title   |
            | amp gallery           | long title   |
            | amp recipe            | long title   |

    Scenario Outline: Verify the print button is showing on the recipe page on "<site>" on "<device>"
        Given I switch to "<device>" view
        When I am currently viewing "recipe" page on "<site>" site
        Then I should see the recipe print button
    @smoketestgt
        Examples:
            | site    | device            |
            | gt      | desktop           |
    @smoketestawwfood
        Examples:
            | site    | device            |
            | awwfood | tablet landscape  |
    @smoketestfoodnz
        Examples:
            | site    | device            |
            | foodnz  | desktop           |
    @smoketestgt @optional
        Examples:
            | site    | device            |
            | gt      | tablet portrait   |

    Scenario Outline: Verify the print button is not showing on the recipe page on "<site>" on "<device>"
        Given I switch to "<device>" view
        When I am currently viewing "recipe" page on "<site>" site
        Then I should not see the recipe print button
    @smoketestgt
        Examples:
            | site      | device           |
            | gt        | mobile           |
    @smoketestawwfood @optional
        Examples:
            | site      | device           |
            | awwfood   | mobile           |
    @smoketestfoodnz
        Examples:
            | site      | device           |
            | foodnz    | mobile           |


########## Footer ##########
    @smoketestelle @optional
    Scenario: Verify the footer in the "mobile" view on ELLE
        Given I switch to "mobile" view
        When I am currently viewing "homepage" page on "elle" site
        * I can see the social icons clickable to open its page in the footer
            |social     |url                                                |
            |Facebook   |https://www.facebook.com/ELLEaus                   |
            |Twitter    |https://twitter.com/ELLEaus                        |
            |Instagram  |https://www.instagram.com/elleaus                  |
            |Pinterest  |https://www.pinterest.com.au/elle_australia        |
            |YouTube    |https://www.youtube.com/elleaus                    |

    @smoketesthb @optional
    Scenario: Verify the footer in the "mobile" view on HB
        Given I switch to "mobile" view
        When I am currently viewing "section" page on "hb" site
        * I can see the social icons clickable to open its page in the footer
            |social     |url                                                    |
            |Facebook   |https://www.facebook.com/HarpersBAZAARAustralia        |
            |Twitter    |https://twitter.com/BAZAARAustralia                    |
            |Instagram  |http://instagram.com/bazaaraustralia                   |
            |Pinterest  |http://www.pinterest.com/bazaaraustralia/              |
            |YouTube    |https://www.youtube.com/user/BAZAARaustralia           |

    @smoketestgt
    Scenario: Verify the footer in the "mobile" view on GT
        Given I switch to "mobile" view
        When I am currently viewing "article" page on "gt" site
        * I can see the social icons clickable to open its page in the footer
            |social     |url                                          |
            |Facebook   |https://www.facebook.com/gourmettraveller    |
            |Twitter    |https://twitter.com/GourmetTweets            |
            |Instagram  |https://www.instagram.com/gourmettraveller/  |
            |Pinterest  |https://www.pinterest.com.au/gourmetpins/    |
            |GiftCard   |/gift-card                                   |

    @smoketestawwfood @awwfoodmobile @optional
    Scenario: Verify the footer in the "mobile" view on AWWFOOD
        Given I switch to "mobile" view
        When I am currently viewing "recipe" page on "awwfood" site
        * I can see the social icons clickable to open its page in the footer
            |social     |url                                          |
            |Facebook   |https://www.facebook.com/womensweeklyfood/   |
            |Instagram  |https://www.instagram.com/womensweeklyfood/  |
            |Pinterest  |https://www.pinterest.com.au/womensweeklyfood|

#Social URLs need to be updated once they are ready
    @smoketestfoodnz
    Scenario: Verify the footer in the "mobile" view on FOODNZ
        Given I switch to "mobile" view
        When I am currently viewing "gallery" page on "foodnz" site
        * I can see the social icons clickable to open its page in the footer
            |social     |url                                        |
            |Facebook   |https://www.facebook.com/Foodtolove.nz/    |
            |Instagram  |https://www.instagram.com/foodtolovenz/    |
            |Pinterest  |https://www.pinterest.com.au/foodtolovenz/ |
            |Twitter    |https://twitter.com/foodtolovenz           |
        * I can see the brand logos clickable to open its page in the footer
            |brand                          |url                                    |
            |New Zealand Taste              |/brands/new-zealand-taste              |
            |New Zealand Woman's Weekly     |/brands/new-zealand-womans-weekly      |
            |Woman's Day                    |/brands/womans-day                     |
            |The Australian Women's Weekly  |/brands/the-australian-womens-weekly   |
            |Good Health And Wellbeing      |/brands/good-health-and-wellbeing      |
            |Nadia                          |/brands/nadia                          |

########## Hamburger menu ##########
    @smoketestelle
    Scenario Outline: I can see the brand logos in the hamburger menu on "<site>"
        Given I switch to "mobile" view
        When I am currently viewing "homepage" page on "<site>" site
        * I can navigate to all 7 sites in the hamburger navigation menu
            |title                      |url                                     |gtm                        |
            |Now To Love                |https://www.nowtolove.com.au/           |gtm-hamburger-now          |
            |Homes To Love              |https://www.homestolove.com.au/         |gtm-hamburger-homes        |
            |Women's Weekly Food        |https://www.womensweeklyfood.com.au/    |gtm-hamburger-wwfood       |
            |Harper's Bazaar            |https://www.harpersbazaar.com.au/       |gtm-hamburger-harpers      |
            |Gourmet Traveller          |https://www.gourmettraveller.com.au/    |gtm-hamburger-gt           |
            |Dolly                      |http://www.dolly.com.au/                |gtm-hamburger-dolly        |
            |Beauty Heaven              |https://www.beautyheaven.com.au/        |gtm-hamburger-beautyheaven |
    Examples:
        | site  |
        | elle  |

########## 404 page ##########
    Scenario Outline: I can see the 404 error page in the mobile style on "<site>"
        Given I switch to "mobile" view
        When I am currently viewing "404" url on "<site>" site
        * I should see the error title not empty
        * I should see the site header logo to open homepage of "<site>" site and contain "<class>" class name
    @smoketestelle @optional
        Examples:
            | site  | class                 |
            | elle  | gtm-navbar-elle       |
    @smoketesthb @optional
        Examples:
            | site  | class                 |
            | hb    | gtm-navbar-harper     |
    @smoketestgt @optional
        Examples:
            | site  | class                         |
            | gt    | gtm-navbar-gourmet-traveller  |
    @smoketestawwfood @awwfoodmobile @optional
        Examples:
            | site      | class                                     |
            | awwfood   | gtm-navbar-australian-womens-weekly-food  |
    @smoketestfoodnz
        Examples:
            | site     | class                                     |
            | foodnz   | gtm-navbar-food-to-love                   |

########## Navigation bar ##########
    Scenario Outline: I can see the site header logo in the desktop style on "<site>"
        Given I switch to "desktop" view
        When I am currently viewing "homepage" page on "<site>" site
        * I should see the site header logo to open homepage of "<site>" site and contain "<class>" class name
    @smoketestelle @optional
        Examples:
            | site  | class                 |
            | elle  | gtm-navbar-elle       |
    @smoketesthb @optional
        Examples:
            | site  | class                 |
            | hb    | gtm-navbar-harper     |
    @smoketestgt @optional
        Examples:
            | site  | class                         |
            | gt    | gtm-navbar-gourmet-traveller  |
    @smoketestawwfood @optional @awwfoodmobile
        Examples:
            | site      | class                                     |
            | awwfood   | gtm-navbar-australian-womens-weekly-food  |
    @smoketestfoodnz
        Examples:
            | site      | class                                     |
            | foodnz    | gtm-navbar-food-to-love                   |

########## GTM Container ##########
    Scenario Outline: I can see the GTM container with id "<gtm>" on "<site>"
        Given I am currently viewing "homepage" page on "<site>" site
        Then I should see the GTM container id "<gtm>" on the DOM
    @smoketestelle
        Examples:
            | site      | gtm           |
            | elle      | GTM-TXC6CF    |
    @smoketesthb
        Examples:
            | site      | gtm           |
            | hb        | GTM-NX2PKZ    |
    @smoketestgt
        Examples:
            | site      | gtm           |
            | gt        | GTM-P8JPLN    |
    @smoketestawwfood @awwfoodmobile
        Examples:
            | site      | gtm           |
            | awwfood   | GTM-MHX78ZT   |
    #Need to update GTM for foodnz
    @smoketestfoodnz
        Examples:
            | site      | gtm           |
            | foodnz    | GTM-5DSBNK    |

########## GA container  ##########
    Scenario Outline: I can see the GA container with id "<ga>" on "<site>"
        Given I am currently viewing "homepage" page on "<site>" site
        Then I should see the GA container id "<ga>" on the DOM
    @smoketestelle
        Examples:
            | site      | ga            |
            | elle      | UA-42966291-1 |
    @smoketesthb
        Examples:
            | site      | ga            |
            | hb        | UA-8689567-1  |
    @smoketestgt
        Examples:
            | site      | ga            |
            | gt        | UA-8689488-1  |
    @smoketestawwfood @awwfoodmobile
        Examples:
            | site      | ga            |
            | awwfood   | UA-57795117-1 |
##enable and update GA ID once it is ready
#    @smoketestfoodnz
#        Examples:
#            | site      | ga            |
#            | foodnz    | UA-57795117-3 |

########## Page creation ##########
    @smoketestelle
    Scenario: Verify all the doc type items on ELLE
        Given I switch to "mobile" view
        # -----------------------
        Given Emily just published the "section" doc type item in "elle"
        When I navigate to the "section" page in "elle"
        Then our readers can enjoy the created "section" page
        # -----------------------
        Given Emily just published the "article" doc type item in "elle"
        When I navigate to the "article" page in "elle"
        Then our readers can enjoy the created "article" page
        When I navigate to the "amp article" page in "elle"
        Then our readers can enjoy the created "amp article" page
        # -----------------------
        Given Emily just published the "gallery" doc type item in "elle"
        When I navigate to the "gallery" page in "elle"
        Then our readers can enjoy the created "gallery" page
        When I navigate to the "amp gallery" page in "elle"
        Then our readers can enjoy the created "amp gallery" page

    @smoketesthb @optional
    Scenario: Verify all the doc type items on HB
        Given I switch to "mobile" view
        # -----------------------
        Given Emily just published the "section" doc type item in "hb"
        When I navigate to the "section" page in "hb"
        Then our readers can enjoy the created "section" page
        # -----------------------
        Given Emily just published the "article" doc type item in "hb"
        When I navigate to the "article" page in "hb"
        Then our readers can enjoy the created "article" page
        When I navigate to the "amp article" page in "hb"
        Then our readers can enjoy the created "amp article" page
        # -----------------------
        Given Emily just published the "gallery" doc type item in "hb"
        When I navigate to the "gallery" page in "hb"
        Then our readers can enjoy the created "gallery" page
        When I navigate to the "amp gallery" page in "hb"
        Then our readers can enjoy the created "amp gallery" page

    @smoketestgt @optional
    Scenario: Verify all the doc type items on GT
        Given I switch to "mobile" view
        # -----------------------
        Given Emily just published the "section" doc type item in "gt"
        When I navigate to the "section" page in "gt"
        Then our readers can enjoy the created "section" page
        # -----------------------
        Given Emily just published the "subsection" doc type item in "gt"
        When I navigate to the "subsection" page in "gt"
        Then our readers can enjoy the created "subsection" page
        # -----------------------
        Given Emily just published the "article" doc type item in "gt"
        When I navigate to the "article" page in "gt"
        Then our readers can enjoy the created "article" page
        When I navigate to the "amp article" page in "gt"
        Then our readers can enjoy the created "amp article" page
        # -----------------------
        Given Emily just published the "gallery" doc type item in "gt"
        When I navigate to the "gallery" page in "gt"
        Then our readers can enjoy the created "gallery" page
        When I navigate to the "amp gallery" page in "gt"
        Then our readers can enjoy the created "amp gallery" page
        # -----------------------
        Given Emily just published the "review" doc type item in "gt"
        When I navigate to the "review" page in "gt"
        Then our readers can enjoy the created "review" page
        When I navigate to the "amp review" page in "gt"
        Then our readers can enjoy the created "amp review" page
        # -----------------------
        Given Emily just published the "recipe" doc type item in "gt"
        When I navigate to the "recipe" page in "gt"
        Then our readers can enjoy the created "recipe" page
        When I navigate to the "amp recipe" page in "gt"
        Then our readers can enjoy the created "amp recipe" page

    @smoketestawwfood @optional
    Scenario: Verify all the doc type items
        Given I switch to "mobile" view
        # -----------------------
        Given Emily just published the "section" doc type item in "awwfood"
        When I navigate to the "section" page in "awwfood"
        Then our readers can enjoy the created "section" page
        # -----------------------
        Given Emily just published the "article" doc type item in "awwfood"
        When I navigate to the "article" page in "awwfood"
        Then our readers can enjoy the created "article" page
        When I navigate to the "amp article" page in "awwfood"
        Then our readers can enjoy the created "amp article" page
        # -----------------------
        Given Emily just published the "gallery" doc type item in "awwfood"
        When I navigate to the "gallery" page in "awwfood"
        Then our readers can enjoy the created "gallery" page
        When I navigate to the "amp gallery" page in "awwfood"
        Then our readers can enjoy the created "amp gallery" page
        # -----------------------
        Given Emily just published the "recipe collection" doc type item in "awwfood"
        When I navigate to the "recipe collection" page in "awwfood"
        Then our readers can enjoy the created "recipe collection" page
        # -----------------------
        Given Emily just published the "recipe" doc type item in "awwfood"
        When I navigate to the "recipe" page in "awwfood"
        Then our readers can enjoy the created "recipe" page
        When I navigate to the "amp recipe" page in "awwfood"
        Then our readers can enjoy the created "amp recipe" page

    @smoketestfoodnz @optional
    Scenario: Verify all the doc type items
        Given I switch to "mobile" view
        # -----------------------
        Given Emily just published the "section" doc type item in "foodnz"
        When I navigate to the "section" page in "foodnz"
        Then our readers can enjoy the created "section" page
        # -----------------------
        Given Emily just published the "article" doc type item in "foodnz"
        When I navigate to the "article" page in "foodnz"
        Then our readers can enjoy the created "article" page
        When I navigate to the "amp article" page in "foodnz"
        Then our readers can enjoy the created "amp article" page
        # -----------------------
        Given Emily just published the "gallery" doc type item in "foodnz"
        When I navigate to the "gallery" page in "foodnz"
        Then our readers can enjoy the created "gallery" page
        When I navigate to the "amp gallery" page in "foodnz"
        Then our readers can enjoy the created "amp gallery" page
        # -----------------------
        Given Emily just published the "recipe collection" doc type item in "foodnz"
        When I navigate to the "recipe collection" page in "foodnz"
        Then our readers can enjoy the created "recipe collection" page
        # -----------------------
        Given Emily just published the "recipe" doc type item in "foodnz"
        When I navigate to the "recipe" page in "foodnz"
        Then our readers can enjoy the created "recipe" page
        When I navigate to the "amp recipe" page in "foodnz"
        Then our readers can enjoy the created "amp recipe" page

########## RSS feed ##########
    Scenario Outline: Verify the RSS url of "site" is up
        Given I am currently viewing "rss" url on "<site>" site
        Then I should see "link" tag containing "<link>" value
        Examples:
            | site      | link                                  |
            | foodnz    | http://foodnz-site-nz.sit.bxm.net.au  |
    @optional
        Examples:
            | site      | link                                  |
            | elle      | http://elle-site-au.sit.bxm.net.au    |
            | hb        | http://hb-site-au.sit.bxm.net.au      |
            | gt        | http://gt-site-au.sit.bxm.net.au      |
            | awwfood   | http://awwfood-site-au.sit.bxm.net.au |

    @smoketestelle
    Scenario: Verify the RSS feed on ELLE
        Given I am currently viewing "rss" url on "elle" site
        Then I should see "link" tag containing "http://elle-site-au.sit.bxm.net.au" value
        * I should see "dc:creator" tag containing "ELLE" in CDATA
        * I should see "title" tag containing a value
        * I should see "dc:creator" tag containing a value
        * I should see "content:encoded" tag containing a value
        When I am currently viewing "rss/summary" url on "elle" site
        * I should see "title" tag containing a value
        * I should not see "content:encoded" tag
        When I am currently viewing "rss/summary/elle" url on "elle" site
        * I should see "title" tag containing a value
        When I am currently viewing "rss/info" url on "elle" site
        * I should see "rss/summary/elle" in json

    @smoketesthb @optional
    Scenario: Verify the RSS feed on HB
        Given I am currently viewing "rss" url on "hb" site
        Then I should see "link" tag containing "http://hb-site-au.sit.bxm.net.au" value
        * I should see "dc:creator" tag containing "Harper's BAZAAR" in CDATA
        * I should see "title" tag containing a value
        * I should see "dc:creator" tag containing a value
        * I should see "content:encoded" tag containing a value
        When I am currently viewing "rss/summary" url on "hb" site
        * I should see "title" tag containing a value
        * I should not see "content:encoded" tag
        When I am currently viewing "rss/summary/hb" url on "hb" site
        * I should see "title" tag containing a value
        When I am currently viewing "rss/info" url on "hb" site
        * I should see "rss/summary/hb" in json

    @smoketestgt @optional
    Scenario: Verify the RSS feed on GT
        Given I am currently viewing "rss" url on "gt" site
        Then I should see "link" tag containing "http://gt-site-au.sit.bxm.net.au" value
        * I should see "dc:creator" tag containing "Gourmet Traveller" in CDATA
        * I should see "title" tag containing a value
        * I should see "dc:creator" tag containing a value
        * I should see "content:encoded" tag containing a value
        When I am currently viewing "rss/summary" url on "gt" site
        * I should see "title" tag containing a value
        * I should not see "content:encoded" tag
        When I am currently viewing "rss/summary/gt" url on "gt" site
        * I should see "title" tag containing a value
        When I am currently viewing "rss/info" url on "gt" site
        * I should see "rss/summary/gt" in json

    @smoketestawwfood @optional
    Scenario: Verify the RSS feed on AWWFOOD
        Given I am currently viewing "rss" url on "awwfood" site
        Then I should see "link" tag containing "http://awwfood-site-au.sit.bxm.net.au" value
        * I should see "dc:creator" tag containing "Australian Women's Weekly Food" in CDATA
        * I should see "title" tag containing a value
        * I should see "dc:creator" tag containing a value
        * I should see "content:encoded" tag containing a value
        When I am currently viewing "rss/summary" url on "awwfood" site
        * I should see "title" tag containing a value
        * I should not see "content:encoded" tag
        When I am currently viewing "rss/summary/awwfood" url on "awwfood" site
        * I should see "title" tag containing a value
        When I am currently viewing "rss/info" url on "awwfood" site
        * I should see "rss/summary/awwfood" in json

    #dc:creator needs to be updated for foodnz
    @smoketestfoodnz @optional
    Scenario: Verify the RSS feed on FOODNZ
        Given I am currently viewing "rss" url on "foodnz" site
        Then I should see "link" tag containing "http://foodnz-site-nz.sit.bxm.net.au" value
        * I should see "dc:creator" tag containing "Food To Love" in CDATA
        * I should see "title" tag containing a value
        * I should see "dc:creator" tag containing a value
        * I should see "content:encoded" tag containing a value
        When I am currently viewing "rss/summary" url on "foodnz" site
        * I should see "title" tag containing a value
        * I should not see "content:encoded" tag
        When I am currently viewing "rss/summary/foodnz" url on "foodnz" site
        * I should see "title" tag containing a value
        When I am currently viewing "rss/info" url on "foodnz" site
        * I should see "rss/summary/foodnz" in json


########## Search ##########
    @smoketestlocal
    Scenario Outline: Verify the search feature in mobile (Mobile style)
        Given I switch to "mobile" view
        When I am currently viewing "homepage" page on "<site>" site
        * I should see the search icon in the navigation bar
        * I should see the search box after clicking the icon
        * I should still see the search box after scrolling the page down
        * I should be able to search a keyword on "navigation bar" and see the result page on "<site>" site
        * I should not see the search bar on the search result page in mobile version
        Examples:
            | site     |
            | elle     |

    @smoketestlocal
    Scenario Outline: Verify the search feature in desktop (Desktop style)
        Given I switch to "desktop" view
        When I am currently viewing "article" page on "<site>" site
        * I should see the search icon in the navigation bar
        * I should see the search box after clicking the icon
        * I should still see the search box after scrolling the page down
        * I should be able to search a keyword on "navigation bar" and see the result page on "<site>" site
        * I should be able to search a keyword on "search result page" and see the result page on "<site>" site
        Examples:
            | site  |
            | gt    |

    @smoketestawwfood
    Scenario Outline: Verify the Homepage top search box "<device>" view on AWWFOOD
        When I switch to "<device>" view
        Given I am currently viewing "homepage" page on "awwfood" site
        * I should see top search box
        * I should see a search bar inside search box
    @awwfoodmobile
        Examples:
            | device |
            | mobile |
    @awwfooddesktop @optional
        Examples:
            | device  |
            | desktop |
    @awwfoodtabletportrait @optional
        Examples:
            | device          |
            | tablet portrait |
    @awwfoodtabletlandscape @optional
        Examples:
            | device           |
            | tablet landscape |
