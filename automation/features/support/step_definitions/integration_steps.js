var wait = require('../../../node_modules/@bxm/automation/lib/utils/wait');
var world = require('../world');
var fs = require("fs");
var request = require('request');

function randomValue() {
    return Math.floor(Math.random() * 60000) + 50000
}
var randomId = randomValue();

module.exports = function() {

    this.Given(/^Emily just published the "([^"]*)" doc type item in "([^"]*)"$/, function (page, site) {
        var content_json;
        var documentPath;

        //Specify json file and path
        switch(page) {
            case 'article':
                switch(site) {
                    case 'elle':
                        content_json = 'test-article-on-sit-elle.json'; //The data in this json file is from http://dev.umbraco.services.bauer-media.internal/v1/elle/documents/2757
                        documentPath = '-1,1159,1170,2755,2756,'; //Parent nodes in dev CMS
                        break;
                    case 'cosmo':
                        content_json = 'test-article-on-sit-cosmo.json'; //The data in this json file is from http://dev.umbraco.services.bauer-media.internal/v1/cosmo/documents/17766
                        documentPath = '-1,1159,1170,17558,17764,'; //Parent nodes in dev CMS
                        break;
                    case 'hb':
                        content_json = 'test-article-on-sit-hb.json'; //The data in this json file is from http://dev.umbraco.services.bauer-media.internal/v1/hb/documents/13260
                        documentPath = '-1,1159,4723,5367,13259,'; //Parent nodes in dev CMS
                        break;
                }
                break;
            case 'gallery':
                switch(site) {
                    case 'elle':
                        content_json = 'test-gallery-on-sit-elle.json'; //The data in this json file is from http://dev.umbraco.services.bauer-media.internal/v1/elle/documents/9256
                        documentPath = '-1,1159,1170,2755,2756,'; //Parent nodes in dev CMS
                        break;
                    case 'cosmo':
                        content_json = 'test-gallery-on-sit-cosmo.json'; //The data in this json file is from http://dev.umbraco.services.bauer-media.internal/v1/cosmo/documents/17630
                        documentPath = '-1,1159,17518,17612,17613,'; //Parent nodes in dev CMS
                        break;
                    case 'hb':
                        content_json = 'test-gallery-on-sit-hb.json'; //The data in this json file is from http://dev.umbraco.services.bauer-media.internal/v1/hb/documents/13258
                        documentPath = '-1,1159,1172,3857,13250,'; //Parent nodes in dev CMS
                        break;
                }
                break;

        }

        //Read Json File and update Title and ID
        var body_content = JSON.parse(fs.readFileSync('../automation/features/support/files/' + content_json , 'utf8'));
        body_content['document']['contentTitle'] = "INTEGRATION TEST " + randomId;
        body_content['document']['id'] = randomId;
        body_content['document']['path'] = documentPath  + randomId;

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

    this.When(/^I navigate to the "([^"]*)" page$/, function (content_url) {
        console.log(world.Urls.home_page + content_url + '-' + randomId);
        for(var i = 0; i < 15; i++) {
            browser.refresh();
            browser.url(world.Urls.home_page + content_url + '-' + randomId);
            if(browser.isExisting(".article__title") == true){
                console.log("Page Loaded Successfully : ID-" + randomId);
                break;
            } else {
                var page_url = browser.getUrl();
                console.log("Page not created yet, current page url is : " + page_url);
                wait(2000);
            }
        }
    });


    this.Then(/^our readers can enjoy the latest content$/, function () {
        browser.waitForExist(".article__title",30000);
        expect(browser.getText(".article__title")).toEqual("INTEGRATION TEST " + randomId);
    });
};
