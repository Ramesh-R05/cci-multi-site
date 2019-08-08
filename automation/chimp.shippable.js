const path = require('path');
require('dotenv').config({
    path: path.resolve(process.cwd(), '../src/.sit.env')
});

const path = require('path');
require('dotenv').config({
    path: path.resolve(process.cwd(), '../src/.sit.env')
});


module.exports = {

    featurePath: './features/regression',
    //Generic config
    screenshotsOnError: false,
    captureAllStepScreenshots: false,
    saveScreenshotsToReport: false,
    webdriverio: {
        desiredCapabilities: {}
    }
};
