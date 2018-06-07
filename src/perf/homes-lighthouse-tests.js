const lighthouse = require('lighthouse');
const chromeLauncher = require('lighthouse/chrome-launcher');
const auditConfig = require('lighthouse/lighthouse-core/config/full-config.js');

const testLinks = [
    {
        title: 'homepage',
        url: 'http://homes-site.test.bxm.net.au/',
        expectedScore: 34
    },
    {
        title: 'section',
        url: 'http://homes-site.test.bxm.net.au/real-homes/',
        expectedScore: 33
    },
    {
        title: 'tags landing page',
        url: 'http://homes-site.test.bxm.net.au/tags/luxury-home/',
        expectedScore: 33
    },
    {
        title: 'article',
        url: 'http://homes-site.test.bxm.net.au/automation-test-article-with-hero-image-3193/',
        expectedScore: 21
    },
    {
        title: 'gallery',
        url: 'http://homes-site.test.bxm.net.au/automation-test-gallery-3201/',
        expectedScore: 24
    }
];

function lighthouseInit(url, flags = {}, config = null) {
    return chromeLauncher.launch(flags).then((chrome) => {
            const generatedFlags = {
                port: chrome.port
            };
    return lighthouse(url, generatedFlags, config).then(results =>
        chrome.kill().then(() => results));
});
}

function lighthouseTests(testObject) {
    const lighthouseOptions = {
        chromeFlags: ["--headless", "--disable-gpu", "--enable-logging", "--no-sandbox"]
    };
    const { title, url, expectedScore } = testObject;
    describe(`Homes site performance testing for ${title} : ${url}`, function loopedTests() {
        this.retries(3);
        this.timeout(120000);
        let result;

        beforeEach('Run Lighthouse base test', (done) => {
            lighthouseInit(url, lighthouseOptions, auditConfig)
            .then(res => res.reportCategories)
        .then((res) => {
            result = res;
        done();
    })
        .catch((err) => {
            console.log(err);
    });
    });
        it(`should have a performance score >= ${expectedScore}`, () => {
            const actualScore = result.find(data => data.id === 'performance').score;
        console.log(`current score is => ${Math.round(actualScore)}`);
        assert.isAtLeast(Math.round(actualScore), expectedScore);
    });
    });

}

process.setMaxListeners(12);

testLinks.forEach((doctypeSetting) => {
    lighthouseTests(doctypeSetting);
});
