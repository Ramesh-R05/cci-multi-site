//compose URL base on ENV variables
var nconf = require('nconf');
nconf.argv().env();
var run_env = nconf.get('APP_ENV');
var site_domain = nconf.get('APP_KEY');
var baseUrl = nconf.get('URL');
var domain_sufx = '.bauer-media.net.au/';
let isBrowserStack = false;

if (typeof baseUrl === 'string' && baseUrl !== ''){
    //Ensure valid URL path has been specified
    var rx = /^http(s)?:\/\/([a-z0-9-_]{1,61})(:(\d+))?(.*?)$/i;
    var index = 5;
    var matches = baseUrl.match(rx);

    if (matches.length > index && matches[index] === ''){
        var oldUrl = baseUrl;
        baseUrl += '/';
        console.log('Found invalid url path (' + oldUrl + '), patching to ' + baseUrl);
        nconf.set('URL', baseUrl);
    }

    if (!baseUrl.endsWith('/')) {
        baseUrl += '/';
        nconf.set('URL', baseUrl);
    }
}

console.log('running on url: ' + baseUrl);
console.log('APP_KEY: ' + site_domain);

//To identify if this test is on Browser Stack to decide to user browser.getLocationInView instead of browser.scroll
if (site_domain != null){
    if (site_domain.includes('-mobile') || site_domain.includes('-desktop') || site_domain.includes('-tablet') ) {
        isBrowserStack = true;
    }
}

module.exports = {
    Urls: {
        'home_page': baseUrl,
        'appKey': site_domain,
        'site': site_domain.split('-')[0],
        'isBrowserStack': isBrowserStack
    }
};
