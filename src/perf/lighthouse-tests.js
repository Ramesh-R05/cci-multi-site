const lighthouse = require('lighthouse');
const chromeLauncher = require('lighthouse/chrome-launcher');
const auditConfig = require('lighthouse/lighthouse-core/config/full-config.js');

const testLinks = [
    {
        title: 'homepage',
        url: 'http://multi-site.test.bxm.net.au/',
        expectedScore: 38
    },
    {
        title: 'section',
        url: 'http://multi-site.test.bxm.net.au/fashion/',
        expectedScore: 43
    },
    {
        title: 'article',
        url: 'http://multi-site.test.bxm.net.au/fashion/automation-test-article-with-hero-image-3663/',
        expectedScore: 32
    },
    {
        title: 'gallery',
        url: 'http://multi-site.test.bxm.net.au/fashion/automation-test-gallery-13302/',
        expectedScore: 36
    },
    {
        title: 'recipe',
        url: 'http://multi-site.test.bxm.net.au/recipes/automation-test-recipe-2127/',
        expectedScore: 41
    },
    {
        title: 'review',
        url: 'http://multi-site.test.bxm.net.au/restaurant-reviews/bar-rochford-restaurant-review-1713/',
        expectedScore: 37
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
    describe(`Multi site (GT) performance testing for ${title} : ${url}`, function loopedTests() {
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
