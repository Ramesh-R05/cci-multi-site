//compose URL base on ENV variables
var nconf = require('nconf');
nconf.argv().env();
var site_domain = nconf.get('APP_KEY');
var exportedObject = {
    //Generic config
    tags: null,
    screenshotsOnError: true,
    captureAllStepScreenshots: false,
    saveScreenshotsToReport: false,
    screenshotsPath: 'screenshots',
    saveScreenshotsToDisk: true,
    webdriverio: {
        desiredCapabilities: {}
    }
};

// Ensure APP_KEY is specified
if (typeof site_domain === 'undefined'){
    throw new Error('APP_KEY environment variable not set');
} else {
    var tag_id = site_domain.split('-');
    exportedObject['tags'] = '@'+tag_id[0];
}

module.exports = exportedObject;
