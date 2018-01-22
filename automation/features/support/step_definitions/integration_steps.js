var wait = require('../../../node_modules/@bxm/automation/lib/utils/wait');
var world = require('../world');
var fs = require("fs");
var request = require('request');
var sectionName;
var contentName = {}; //Global Hash variable to collect the value of content name from different doc type e.g. contentName['article'] = 'article-test-xxxx'
var docTypeID = {}; //Global Hash variable to collect the value of random ID from different doc type e.g. docTypeID['article'] = 'xxxx'
var docType;

function randomValue() {
    return Math.floor(Math.random() * 60000) + 50000
}
var randomId = randomValue();

module.exports = function() {

    this.Given(/^Emily just published the "([^"]*)" doc type item in "([^"]*)"$/, function (page, site) {
        var content_json;
        var documentPath;
        docType=page;

        //Specify json file and path
        switch(page) {
            case 'article':
                switch(site) {
                    case 'elle':
                        randomId = randomId + 2;
                        content_json = 'test-article-on-sit-elle.json'; //The data in this json file is from http://dev.umbraco.services.bauer-media.internal/v1/elle/documents/2757
                        documentPath = '-1,1159,'; //Parent nodes in dev CMS
                        break;
                    case 'cosmo':
                        randomId = randomId + 2;
                        content_json = 'test-article-on-sit-cosmo.json'; //The data in this json file is from http://dev.umbraco.services.bauer-media.internal/v1/cosmo/documents/17766
                        documentPath = '-1,1159,'; //Parent nodes in dev CMS
                        break;
                    case 'hb':
                        randomId = randomId + 2;
                        content_json = 'test-article-on-sit-hb.json'; //The data in this json file is from http://dev.umbraco.services.bauer-media.internal/v1/hb/documents/13260
                        documentPath = '-1,1159,'; //Parent nodes in dev CMS
                        break;
                    case 'gt':
                        randomId = randomId + 2;
                        content_json = 'test-article-on-sit-gt.json'; //The data in this json file is from http://dev.umbraco.services.bauer-media.internal/v1/gt/documents/1192
                        documentPath = '-1,1159,'; //Parent nodes in dev CMS
                        break;
                }
                break;
            case 'gallery':
                switch(site) {
                    case 'elle':
                        randomId = randomId + 3;
                        content_json = 'test-gallery-on-sit-elle.json'; //The data in this json file is from http://dev.umbraco.services.bauer-media.internal/v1/elle/documents/9256
                        documentPath = '-1,1159,'; //Parent nodes in dev CMS
                        break;
                    case 'cosmo':
                        randomId = randomId + 3;
                        content_json = 'test-gallery-on-sit-cosmo.json'; //The data in this json file is from http://dev.umbraco.services.bauer-media.internal/v1/cosmo/documents/17630
                        documentPath = '-1,1159,'; //Parent nodes in dev CMS
                        break;
                    case 'hb':
                        randomId = randomId + 3;
                        content_json = 'test-gallery-on-sit-hb.json'; //The data in this json file is from http://dev.umbraco.services.bauer-media.internal/v1/hb/documents/13258
                        documentPath = '-1,1159,'; //Parent nodes in dev CMS
                        break;
                    case 'gt':
                        randomId = randomId + 3;
                        content_json = 'test-gallery-on-sit-gt.json'; //The data in this json file is from http://dev.umbraco.services.bauer-media.internal/v1/gt/documents/1170
                        documentPath = '-1,1159,'; //Parent nodes in dev CMS
                        break;
                }
                break;
            case 'section':
                switch(site) {
                    case 'elle':
                        randomId = randomId;
                        content_json = 'test-section-on-sit-elle.json'; //The data in this json file is from http://dev.umbraco.services.bauer-media.internal/v1/now/documents/34189
                        documentPath = '-1,1159,';  //Parent node in dev CMS
                        break;
                    case 'cosmo':
                        randomId = randomId;
                        content_json = 'test-section-on-sit-cosmo.json'; //The data in this json file is from http://dev.umbraco.services.bauer-media.internal/v1/now/documents/34189
                        documentPath = '-1,1159,';  //Parent node in dev CMS
                        break;
                    case 'hb':
                        randomId = randomId;
                        content_json = 'test-section-on-sit-hb.json'; //The data in this json file is from http://dev.umbraco.services.bauer-media.internal/v1/now/documents/34189
                        documentPath = '-1,1159,';  //Parent node in dev CMS
                        break;
                    case 'gt':
                        randomId = randomId;
                        content_json = 'test-section-on-sit-gt.json'; //The data in this json file is from http://dev.umbraco.services.bauer-media.internal/v1/now/documents/34189
                        documentPath = '-1,1159,';  //Parent node in dev CMS
                        break;
                }
                break;
        }

        //Read Json File and update Title and ID
        var body_content = JSON.parse(fs.readFileSync('../automation/features/support/files/' + content_json , 'utf8'));
        switch(page) {
            case 'article':
            case 'gallery':
                body_content['document']['nodeName'] = docType + " Test"; //e.g. Article Test
                body_content['document']['urlName'] = docType + "-test-" + randomId; //e.g. article-test-xxxx
                body_content['document']['contentTitle'] = docType + " Test " + randomId; //e.g. Article Test xxxx
                body_content['document']['id'] = randomId;
                body_content['document']['path'] = documentPath + docTypeID['section'] + ',' + randomId;
                contentName[page] = body_content['document']['urlName']; //e.g. article-test-xxxx
                docTypeID[page] = randomId;
                break;
            case 'section':
                body_content['document']['nodeName'] = "SectionTest-" + randomId;
                body_content['document']['urlName'] = "sectiontest-" + randomId;
                body_content['document']['contentTitle'] = body_content['document']['nodeName'];
                body_content['document']['id'] = randomId;
                body_content['document']['path'] = documentPath + randomId;
                docTypeID[page] = randomId;
                sectionName = body_content['document']['urlName'];
                console.log("Section random ID is " + docTypeID[page]);
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
                switch (site) {
                    case 'elle':
                        var sitUrl = "http://elle-site-au.sit.bxm.net.au/";
                        elementOnPage = ".article__title";
                        pageURL = sitUrl + sectionName + '/' + contentName[docType];
                        break;
                    case 'cosmo':
                        var sitUrl = "http://cosmo-site-au.sit.bxm.net.au/";
                        elementOnPage = ".article__title";
                        pageURL = sitUrl + sectionName + '/' + contentName[docType];
                        break;
                    case 'hb':
                        var sitUrl = "http://hb-site-au.sit.bxm.net.au/";
                        elementOnPage = ".article__title";
                        pageURL = sitUrl + sectionName + '/' + contentName[docType];
                        break;
                    case 'gt':
                        var sitUrl = "http://gt-site-au.sit.bxm.net.au/";
                        elementOnPage = ".article__title";
                        pageURL = sitUrl + sectionName + '/' + contentName[docType];
                        break;
                }
                break;

            case 'section':
                switch (site) {
                    case 'elle':
                        var sitUrl = "http://elle-site-au.sit.bxm.net.au/";
                        elementOnPage = ".page-title-container .page-title";
                        pageURL = sitUrl + sectionName;
                        break;
                    case 'cosmo':
                        var sitUrl = "http://cosmo-site-au.sit.bxm.net.au/";
                        elementOnPage = ".page-title-container .page-title";
                        pageURL = sitUrl + sectionName;
                        break;
                    case 'hb':
                        var sitUrl = "http://hb-site-au.sit.bxm.net.au/";
                        elementOnPage = ".page-title-container .page-title";
                        pageURL = sitUrl + sectionName;
                        break;
                    case 'gt':
                        var sitUrl = "http://gt-site-au.sit.bxm.net.au/";
                        elementOnPage = ".page-title-container .page-title";
                        pageURL = sitUrl + sectionName;
                        break;
                }
                break;

            case 'amp article':
                switch (site) {
                    case 'elle':
                        var sitUrl = "http://elle-site-au.sit.bxm.net.au/";
                        elementOnPage = ".article__title";
                        pageURL = sitUrl + 'amp/' + sectionName + '/' + contentName['article'];
                        docTypeID[docType] = docTypeID["article"];
                        break;
                    case 'cosmo':
                        var sitUrl = "http://cosmo-site-au.sit.bxm.net.au/";
                        elementOnPage = ".article__title";
                        pageURL = sitUrl + 'amp/' + sectionName + '/' + contentName['article'];
                        docTypeID[docType] = docTypeID["article"];
                        break;
                    case 'hb':
                        var sitUrl = "http://hb-site-au.sit.bxm.net.au/";
                        elementOnPage = ".article__title";
                        pageURL = sitUrl + 'amp/' + sectionName + '/' + contentName['article'];
                        docTypeID[docType] = docTypeID["article"];
                        break;
                    case 'gt':
                        var sitUrl = "http://gt-site-au.sit.bxm.net.au/";
                        elementOnPage = ".article__title";
                        pageURL = sitUrl + 'amp/' + sectionName + '/' + contentName['article'];
                        docTypeID[docType] = docTypeID["article"];
                        break;
                }

        }

        for(var i = 0; i < 20; i++) {
            wait(1000); //add 1 sec wait for every loop to let the document publish
            browser.refresh();
            browser.url(pageURL);
            if(browser.isExisting(elementOnPage) == true){
                console.log("Page Loaded Successfully : ID-" + docTypeID[docType]);
                break;
            } else {
                var page_url = browser.getUrl();
                console.log("Page not created yet, current page url is : " + page_url);
                wait(2000);
            }
        }
    });


    this.Then(/^our readers can enjoy the created "([^"]*)" page$/, function (docType) {
        var ID = docTypeID[docType];
        switch(docType) {
            case 'article':
                browser.waitForExist(".article__title", 30000);
                expect(browser.getText(".article__title").toUpperCase()).toEqual("ARTICLE TEST " + ID);
                break;
            case 'gallery':
                browser.waitForExist(".article__title", 30000);
                expect(browser.getText(".article__title").toUpperCase()).toEqual("GALLERY TEST " + ID);
                break;
            case 'section':
                browser.waitForExist("h1.page-title", 30000);
                console.log("section " + ID);
                expect(browser.getText("h1.page-title")).toEqual("SECTIONTEST-" + ID);
                break;
        }
    });
};
