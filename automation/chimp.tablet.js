//compose URL base on ENV variables
var nconf = require('nconf');
nconf.argv().env();
var run_device = nconf.get('DEVICE');
var run_deviceOrientation = nconf.get('DeviceOrientation');

module.exports = {

    featurePath: './features/compatibility',
    tags: '@tablet',
    offline: false,
    screenshotsOnError: false,
    captureAllStepScreenshots: false,
    saveScreenshotsToReport: false,

    // - - - - SELENIUM  - - - -
    user: 'bxmdeveloper1',
    key: '1kJpPSX3sEHzdWANDNqJ',
    port: 80,
    host: 'hub-cloud.browserstack.com',

    webdriverio: {
        desiredCapabilities: {
            "project": 'Multi Repo',
            "device": run_device,
            "realMobile": true,
            "browserstack.debug": true,
            "deviceOrientation" : run_deviceOrientation
        }
    }
};
