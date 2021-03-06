Feature: CMS Smoke Test
    As an editor
    I should be able to use CMS to create and update content

    @cms
    Scenario: Create the Article item
        Given I am logging in CMS
        When I am currently viewing the create form
        * I should be able to select "Article" doc type
        * I should be able to add the name
        * I should be able to click the create button
        * I should see the item is created
        When I am currently viewing "editContent.aspx?id=" of "Article"
        * I should be able to add content in the item
            | field         | tab               |
            | Long Title    | Editorial         |
            | Short Teaser  | Editorial         |
            | Image         | Editorial         |
            | Body Paragraph| Editorial         |
            | Body Heading  | Editorial         |
            | Page Title    | Search and Social |
            | Created at    | Properties        |
#           | Disable AMP   | Search and Social |  #We want to test the page with amp so we don't need to set this field.
            | Video         | Editorial         |
            | Body Video    | Editorial         |
            | Content Tags  | Page              |
        * I should be able to publish the item
        * I should be able to see the "preview" URL
        * I should be able to see the "live" URL
        * I should be able to visit the live URL
        * I should see the amp page is active

    @cms
    Scenario: Validate the link in the body paragraph
        Given I am logging in CMS
        When I am currently viewing the create form
        * I should be able to select "Article" doc type
        * I should be able to add the name
        * I should be able to click the create button
        * I should see the item is created
        When I am currently viewing "editContent.aspx?id=" of "Article"
        * I should be able to add content in the item
            | field         | tab               |
            | Long Title    | Editorial         |
            | Created at    | Properties        |
        * I should be able to add link in body paragraph to validate
            | link                                                                       |
            | [URL Only](https://www.google.com.au/)                                     |
            | [URL with target only](http://www.google.com\|target="_blank")             |
            | [URL with target and rel](http://test.com\|target="_blank"\|rel="nofollow")|
        * I should be able to publish the item

    @cms
    Scenario: Create the Gallery item
        Given I am logging in CMS
        When I am currently viewing the create form
        * I should be able to select "Gallery" doc type
        * I should be able to add the name
        * I should be able to click the create button
        * I should see the item is created
        When I am currently viewing "editContent.aspx?id=" of "Gallery"
        * I should be able to add content in the item
            | field         | tab               |
            | Long Title    | Editorial         |
            | Short Teaser  | Editorial         |
            | Image         | Editorial         |
            | Body Paragraph| Editorial         |
            | Body Heading  | Editorial         |
            | Page Title    | Search and Social |
            | Created at    | Properties        |
            | Video         | Editorial         |
            | Body Video    | Editorial         |
            | Content Tags  | Gallery           |
        * I should be able to publish the item
        * I should be able to see the "preview" URL
        * I should be able to see the "live" URL
        * I should be able to visit the live URL
        * I should see the amp page is inactive

    @gtcms @awwfoodcms @foodnzcms
    Scenario: Create the Recipe item
        Given I am logging in CMS
        When I am currently viewing the create form
        * I should be able to select "Recipe" doc type
        * I should be able to add the name
        * I should be able to click the create button
        * I should see the item is created
        When I am currently viewing "editContent.aspx?id=" of "Recipe"
        * I should be able to add content in the item
            | field                      | tab               |
            | Long Title                 | Editorial         |
            | Short Teaser               | Editorial         |
            | Image                      | Editorial         |
            | Body Paragraph             | Editorial         |
            | Body Heading               | Editorial         |
            | Page Title                 | Search and Social |
            | Created at                 | Properties        |
#           | Disable AMP                | Search and Social |  #We want to test the page with amp so we don't need to set this field.
            | Video                      | Editorial         |
            | Body Video                 | Editorial         |
            | Recipe Servings            | Recipe            |
            | Cooking Time               | Recipe            |
            | Ingredients                | Recipe            |
            | Cooking Method             | Recipe            |
            | Recipe Tips                | Recipe            |
            | Content Tags (recipe)      | Page              |
        * I should be able to publish the item
        * I should be able to see the "preview" URL
        * I should be able to see the "live" URL
        * I should be able to visit the live URL
        * I should see the amp page is active

    @gtcms
    Scenario: Create the Review item
        Given I am logging in CMS
        When I am currently viewing the create form
        * I should be able to select "Review" doc type
        * I should be able to add the name
        * I should be able to click the create button
        * I should see the item is created
        When I am currently viewing "editContent.aspx?id=" of "Review"
        * I should be able to add content in the item
            | field             | tab               |
            | Long Title        | Editorial         |
            | Short Teaser      | Editorial         |
            | Image             | Editorial         |
            | Body Paragraph    | Editorial         |
            | Body Heading      | Editorial         |
            | Page Title        | Search and Social |
            | Created at        | Properties        |
#           | Disable AMP       | Search and Social |  #We want to test the page with amp so we don't need to set this field.
            | Video             | Editorial         |
            | Body Video        | Editorial         |
            | Magazine Issue    | Editorial         |
            | Styling           | Editorial         |
            | Address           | Editorial         |
            | Hours             | Editorial         |
            | Prices            | Editorial         |
            | Content Tags      | Page              |
        * I should be able to publish the item
        * I should be able to see the "preview" URL
        * I should be able to see the "live" URL
        * I should be able to visit the live URL
        * I should see the amp page is active

    #This scenario won't be run in phantomjs because we haven't found a solution to work with the alert popup
    @manual
    Scenario Outline: Unpublish the <doctype> item
        Given I am logging in CMS
        When I am currently viewing "editContent.aspx?id=" of "<doctype>"
        * I should be able to unpublish the item

        Examples:
            | doctype    |
            | Article    |
        #The other doc type will be tested in the deletion scenario

    #This scenario won't be run in phantomjs because we haven't found a solution to work with the alert popup
    #Also we need a solution to select a menu from the right click popup in phantomjs
    @manual
    Scenario Outline: Search and delete the <doctype> item
        Given I am logging in CMS
        When I am currently viewing "#content"
        * I should be able to find the "<doctype>" in the LHR list
        * I should be able to delete the item

        Examples:
            | doctype    |
            | Gallery    |
