var wait = require('../../../node_modules/@bxm/automation/lib/utils/wait');
var world = require('../world');
var fs = require("fs");
var request = require('request');
var sectionName;
var subsectionName;
var contentName = {}; //Global Hash variable to collect the value of content name from different doc type e.g. contentName['article'] = 'article-test-xxxx'
var docTypeID = {}; //Global Hash variable to collect the value of random ID from different doc type e.g. docTypeID['article'] = 'xxxx'
var docType;
var sitUrls = {
    'cosmo': 'http://cosmo-site-au.sit.bxm.net.au/',
    'elle': 'http://elle-site-au.sit.bxm.net.au/',
    'gt': 'http://gt-site-au.sit.bxm.net.au/',
    'hb': 'http://hb-site-au.sit.bxm.net.au/',
    'awwfood': 'http://awwfood-site-au.sit.bxm.net.au/'
};

function randomValue() {
    return Math.floor(Math.random() * 60000) + 50000
}
var randomId = randomValue();

module.exports = function() {

    this.Given(/^Emily just published the "([^"]*)" doc type item in "([^"]*)"$/, function (page, site) {

        var content_json;
        var documentPath = '-1,1159,'; //Parent nodes in dev CMS
        docType = page;

        //Specify json file and path
        switch (page) {
            case 'article':
                randomId += 2;
                switch (site) {
                    case 'elle':
                        content_json = 'test-article-on-sit-elle.json'; // http://dev.umbraco.services.bauer-media.internal/v1/elle/documents/2757
                        break;
                    case 'cosmo':
                        content_json = 'test-article-on-sit-cosmo.json'; // http://dev.umbraco.services.bauer-media.internal/v1/cosmo/documents/17766
                        break;
                    case 'hb':
                        content_json = 'test-article-on-sit-hb.json'; // http://dev.umbraco.services.bauer-media.internal/v1/hb/documents/13260
                        break;
                    case 'gt':
                        content_json = 'test-article-on-sit-gt.json'; // http://dev.umbraco.services.bauer-media.internal/v1/gt/documents/1192
                        break;
                    case 'awwfood':
                        content_json = 'test-article-on-sit-awwfood.json'; // http://dev.umbraco.services.bauer-media.internal/v1/awwfood/documents/2455
                        break;
                }
                break;
            case 'gallery':
                randomId += 3;
                switch (site) {
                    case 'elle':
                        content_json = 'test-gallery-on-sit-elle.json'; // http://dev.umbraco.services.bauer-media.internal/v1/elle/documents/9256
                        break;
                    case 'cosmo':
                        content_json = 'test-gallery-on-sit-cosmo.json'; // http://dev.umbraco.services.bauer-media.internal/v1/cosmo/documents/17630
                        break;
                    case 'hb':
                        content_json = 'test-gallery-on-sit-hb.json'; // http://dev.umbraco.services.bauer-media.internal/v1/hb/documents/13258
                        break;
                    case 'gt':
                        content_json = 'test-gallery-on-sit-gt.json'; // http://dev.umbraco.services.bauer-media.internal/v1/gt/documents/1170
                        break;
                    case 'awwfood':
                        content_json = 'test-gallery-on-sit-awwfood.json'; // http://dev.umbraco.services.bauer-media.internal/v1/awwfood/documents/31151
                        break;
                }
                break;
            case 'section':
                switch (site) {
                    case 'elle':
                        content_json = 'test-section-on-sit-elle.json'; // http://dev.umbraco.services.bauer-media.internal/v1/now/documents/34189
                        break;
                    case 'cosmo':
                        content_json = 'test-section-on-sit-cosmo.json'; // http://dev.umbraco.services.bauer-media.internal/v1/now/documents/34189
                        break;
                    case 'hb':
                        content_json = 'test-section-on-sit-hb.json'; // http://dev.umbraco.services.bauer-media.internal/v1/now/documents/34189
                        break;
                    case 'gt':
                        content_json = 'test-section-on-sit-gt.json'; // http://dev.umbraco.services.bauer-media.internal/v1/now/documents/34189
                        break;
                    case 'awwfood':
                        content_json = 'test-section-on-sit-awwfood.json'; // http://dev.umbraco.services.bauer-media.internal/v1/awwfood/documents/1191
                        break;
                }
                break;
            case 'subsection':
                randomId += 1;
                switch (site) {
                    case 'gt':
                        content_json = 'test-subsection-on-sit-gt.json'; // http://dev.umbraco.services.bauer-media.internal/v1/gt/documents/1528
                        break;
                }
                break;
            case 'review':
                randomId += 4;
                switch (site) {
                    case 'gt':
                        content_json = 'test-review-on-sit-gt.json'; // http://dev.umbraco.services.bauer-media.internal/v1/gt/documents/6564
                        break;
                }
                break;
            case 'recipe collection':
                randomId += 5;
                switch (site) {
                    case 'awwfood':
                        content_json = 'test-recipe-collection-on-sit-awwfood.json'; // http://dev.umbraco.services.bauer-media.internal/v1/awwfood/documents/31902
                        break;
                }
                break;
            case 'recipe':
                randomId += 6;
                switch (site) {
                    case 'gt':
                        content_json = 'test-recipe-on-sit-gt.json'; // http://dev.umbraco.services.bauer-media.internal/v1/gt/documents/31895
                        break;
                    case 'awwfood':
                        content_json = 'test-recipe-on-sit-awwfood.json'; // http://dev.umbraco.services.bauer-media.internal/v1/awwfood/documents/3979
                        break;
                }
                break;
        }

        //Read Json File and update Title and ID
        var body_content = JSON.parse(fs.readFileSync('../automation/features/support/files/' + content_json , 'utf8'));

        switch (page) {
            case 'article':
            case 'gallery':
            case 'review':
            case 'recipe collection':
                switch (site) {
                    case 'cosmo':
                    case 'elle':
                    case 'hb':
                        body_content.document.nodeName = docType + " Test"; //e.g. Article Test
                        body_content.document.urlName = docType + "-test-" + randomId; //e.g. article-test-xxxx
                        body_content.document.contentTitle = docType + " Test " + randomId; //e.g. Article Test xxxx
                        body_content.document.id = randomId;
                        body_content.document.path = documentPath + docTypeID['section'] + ',' + randomId;
                        contentName[page] = body_content.document.urlName; //e.g. article-test-xxxx
                        docTypeID[page] = randomId;
                        break;
                    case 'gt':
                        body_content.document.nodeName = docType + " Test"; //e.g. Article Test
                        body_content.document.urlName = docType + "-test-"  + randomId; //e.g. article-test-xxxx
                        body_content.document.contentTitle = docType + " Test " + randomId; //e.g. Article Test xxxx
                        body_content.document.id = randomId;
                        body_content.document.path = documentPath + docTypeID['section'] + ',' + docTypeID['subsection'] + ',' + randomId;
                        body_content.document.parentID = docTypeID['subsection'];
                        contentName[page] = body_content.document.urlName; //e.g. article-test-xxxx
                        docTypeID[page] = randomId;
                        break;
                    case 'awwfood':
                        body_content.document.nodeName = docType + " Test"; //e.g. Article Test
                        body_content.document.urlName = docType.replace(" ", "-") + "-test-"  + randomId; //e.g. article-test-xxxx
                        body_content.document.contentTitle = docType + " Test " + randomId; //e.g. Article Test xxxx
                        body_content.document.id = randomId;
                        body_content.document.path = documentPath + '1215,1257,1258,2273,' + randomId;
                        contentName[page] = body_content.document.urlName; //e.g. article-test-xxxx
                        docTypeID[page] = randomId;
                        break;
                }
                break;
            case 'section':
                body_content.document.nodeName = "SectionTest-" + randomId + '-PAGE';
                body_content.document.urlName = "sectiontest-" + randomId + '-page';
                body_content.document.contentTitle = body_content.document.nodeName;
                body_content.document.id = randomId;
                body_content.document.path = documentPath + randomId;
                docTypeID[page] = randomId;
                sectionName = body_content.document.urlName;
                break;
            case 'subsection':
                body_content.document.nodeName = "SubsectionTest-" + randomId + '-PAGE';
                body_content.document.urlName = "subsectiontest-" + randomId + '-page';
                body_content.document.contentTitle = body_content.document.nodeName;
                body_content.document.id = randomId;
                body_content.document.path = documentPath + docTypeID['section'] + ',' + randomId;
                body_content.document.parentID = docTypeID['section'];
                subsectionName = body_content.document.urlName;
                docTypeID[page] = randomId;
                break;
            case 'recipe':
                switch (site) {
                    case 'gt':
                        body_content.document.nodeName = docType + " Test"; //e.g. Recipe Test
                        body_content.document.urlName = docType + "-test-" + randomId; //e.g. recipe-test-xxxx
                        body_content.document.contentTitle = docType + " Test " + randomId; //e.g. Recipe Test xxxx
                        body_content.document.id = randomId;
                        body_content.document.path = documentPath + docTypeID['section'] + ',' + docTypeID['subsection'] + ',' + randomId;
                        contentName[page] = body_content.document.urlName; //e.g. recipe-test-xxxx
                        docTypeID[page] = randomId;
                        break;
                    case 'awwfood':
                        body_content.document.nodeName = docType + " Test"; //e.g. Recipe Test
                        body_content.document.urlName = docType + "-test-" + randomId; //e.g. recipe-test-xxxx
                        body_content.document.contentTitle = docType + " Test " + randomId; //e.g. Recipe Test xxxx
                        body_content.document.id = randomId;
                        body_content.document.path = documentPath + docTypeID['section'] + ',' + randomId;
                        contentName[page] = body_content.document.urlName; //e.g. recipe-test-xxxx
                        docTypeID[page] = randomId;
                        break;
                }
                break;
        }

        // Post File to PUBLISHING BR0KER
        var options = { method: 'POST',
            url: 'http://services.sit.bxm.internal/publishing-broker/',
            json: true,
            headers: {
                'postman-token': '98215063-b20d-eb89-4865-35af75c73e11',
                'content-type': 'application/json'
            },
            body: body_content
        };
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            console.log(body);
        });

    });

    this.When(/^I navigate to the "([^"]*)" page in "([^"]*)"$/, function (docType, site) {

        var elementOnPage;
        var pageURL;

        switch (docType) {
            case 'article':
            case 'gallery':
            case 'review':
            case 'recipe collection':
                elementOnPage = '.article__title';
                switch (site) {
                    case 'awwfood':
                        pageURL = sitUrls[site] + contentName[docType];
                        break;
                    default:
                        pageURL = sitUrls[site] + sectionName + '/' + (site === 'gt' ? subsectionName + '/' : '') + contentName[docType];
                        break;
                }
                break;

            case 'recipe':
                switch (site) {
                    case 'gt':
                    case 'awwfood':
                        elementOnPage = ".article__title";
                        pageURL = sitUrls[site] + sectionName + '/' + (site === 'gt' ? subsectionName + '/' : '') + contentName[docType];
                        break;
                }
                break;

            case 'section':
                elementOnPage = '.page-title-container .page-title';
                pageURL = sitUrls[site] + sectionName;
                break;

            case 'subsection':
                switch (site) {
                    case 'gt':
                        elementOnPage = ".page-title-container .page-title";
                        pageURL = sitUrls[site] + sectionName + '/' + subsectionName ;
                        break;
                }
                break;

            case 'amp article':
                elementOnPage = ".article__title";
                switch (site) {
                    case 'awwfood':
                        pageURL = sitUrls[site] + 'amp/' + contentName['article'];
                        break;
                    default:
                        pageURL = sitUrls[site] + 'amp/' + sectionName + '/' + (site === 'gt' ? subsectionName + '/' : '') + contentName['article'];
                        break;
                }
                docTypeID[docType] = docTypeID["article"];
                break;

            case 'amp gallery':
                elementOnPage = ".article__title";
                switch (site) {
                    case 'awwfood':
                        pageURL = sitUrls[site] + 'amp/' + contentName['gallery'];
                        break;
                    default:
                        pageURL = sitUrls[site] + 'amp/' + sectionName + '/' + (site === 'gt' ? subsectionName + '/' : '') + contentName['gallery'];
                        break;
                }
                docTypeID[docType] = docTypeID["gallery"];
                break;

            case 'amp review':
                switch (site) {
                    case 'gt':
                        elementOnPage = ".article__title";
                        pageURL = sitUrls[site] + 'amp/' + sectionName + '/' + subsectionName + '/' + contentName['review'];
                        docTypeID[docType] = docTypeID["review"];
                        break;
                }
                break;

            case 'amp recipe':
                switch (site) {
                    case 'gt':
                        elementOnPage = ".article__title";
                        pageURL = sitUrls[site] + 'amp/' + sectionName + '/' + subsectionName + '/' + contentName['recipe'];
                        break;
                    case 'awwfood':
                        elementOnPage = ".article__title";
                        pageURL = sitUrls[site] + 'amp/recipes/' + contentName['recipe'];
                        break;
                };
                docTypeID[docType] = docTypeID["recipe"];
                break;
        }

        for (var i = 0; i < 20; i++) {
            wait(1000); //add 1 sec wait for every loop to let the document publish
            browser.refresh();
            browser.url(pageURL);
            if (browser.isExisting(elementOnPage) == true){
                console.log("Page Loaded Successfully: ID-" + docTypeID[docType] + ": " + pageURL);
                break;
            } else {
                console.log("Page not created yet, current page url is: " + browser.getUrl());
                wait(2000);
            }
        }
    });


    this.Then(/^our readers can enjoy the created "([^"]*)" page$/, function (docType) {
        var ID = docTypeID[docType];
        switch(docType) {
            case 'article':
            case 'amp article':
                browser.waitForVisible(".article__title", 30000);
                expect(browser.getText(".article__title").toUpperCase()).toEqual("ARTICLE TEST " + ID);
                break;
            case 'gallery':
            case 'amp gallery':
                browser.waitForVisible(".article__title", 30000);
                expect(browser.getText(".article__title").toUpperCase()).toEqual("GALLERY TEST " + ID);
                break;
            case 'section':
                browser.waitForVisible("h1.page-title", 30000);
                expect(browser.getText("h1.page-title")).toEqual("SECTIONTEST-" + ID + "-PAGE");
                break;
            case 'subsection':
                browser.waitForVisible("h1.page-title", 30000);
                expect(browser.getText("h1.page-title")).toEqual("SUBSECTIONTEST-" + ID + "-PAGE");
                break;
            case 'review':
            case 'amp review':
                browser.waitForVisible(".article__title", 30000);
                expect(browser.getText(".article__title").toUpperCase()).toEqual("REVIEW TEST " + ID + ": RESTAURANT REVIEW");
                break;
            case 'recipe collection':
                browser.waitForVisible(".article__title", 30000);
                expect(browser.getText(".article__title").toUpperCase()).toEqual("RECIPE COLLECTION TEST " + ID);
                break;
            case 'recipe':
            case 'amp recipe':
                browser.waitForVisible(".article__title", 30000);
                expect(browser.getText(".article__title").toUpperCase()).toEqual("RECIPE TEST " + ID);
                break;
        }
    });
};
