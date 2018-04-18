const lighthouse = require('lighthouse');
const chromeLauncher = require('lighthouse/chrome-launcher');
const auditConfig = require('lighthouse/lighthouse-core/config/full-config.js');

const testLinks = [
    {
        title: 'homepage',
        url: 'https://www.homestolove.com.au/',
        expectedScore: 100
    },
    {
        title: 'section',
        url: 'https://www.homestolove.com.au/real-homes/',
        expectedScore: 100
    },
    {
        title: 'tags landing page',
        url: 'https://www.homestolove.com.au/tags/renovation/',
        expectedScore: 100
    },
    {
        title: 'article',
        url: 'https://www.homestolove.com.au/6-free-design-apps-you-should-know-about-4174',
        expectedScore: 100
    },
    {
        title: 'gallery',
        url: 'https://www.homestolove.com.au/12-smart-home-offices-3309',
        expectedScore: 100
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
    const lighthouseseoOptions = {
        chromeFlags: ["--headless", "--disable-gpu", "--enable-logging", "--no-sandbox"]
    };
    const { title, url, expectedScore } = testObject;
    describe(`Homes site SEO testing for ${title} : ${url}`, function loopedTests() {
        this.retries(1);
        this.timeout(120000);
        let result;

        beforeEach('Run Lighthouse base test', (done) => {
            lighthouseInit(url, lighthouseseoOptions, auditConfig)
            .then(res => res.reportCategories)
        .then((res) => {
            result = res;
        done();
    })
        .catch((err) => {
            console.log(err);
    });
    });
        it(`should have a SEO score >= ${expectedScore}`, () => {
            const actualScore = result.find(data => data.id === 'seo').score;
        console.log(`current score is => ${Math.round(actualScore)}`);
        assert.isAtLeast(Math.round(actualScore), expectedScore);
    });
    });

}

process.setMaxListeners(12);

testLinks.forEach((doctypeSetting) => {
    lighthouseTests(doctypeSetting);
});
