const lighthouse = require('lighthouse');
const chromeLauncher = require('lighthouse/chrome-launcher');
const auditConfig = require('lighthouse/lighthouse-core/config/full-config.js');

const testLinks = [
    {
        title: 'homepage',
        url: 'https://www.gourmettraveller.com.au/',
        expectedScore: 100
    },
    {
        title: 'section',
        url: 'https://www.gourmettraveller.com.au/recipes/',
        expectedScore: 100
    },
    {
        title: 'article',
        url: 'https://www.gourmettraveller.com.au/news/food-news/josh-niland-danielle-alvarez-and-more-join-ozharvests-2018-ceo-cook-off-15582/',
        expectedScore: 100
    },
    {
        title: 'gallery',
        url: 'https://www.gourmettraveller.com.au/recipes/recipe-collections/fried-rice-15062/',
        expectedScore: 100
    },
    {
        title: 'recipe',
        url: 'https://www.gourmettraveller.com.au/recipes/browse-all/prawn-and-pineapple-tom-yum-with-rice-noodles-11890/',
        expectedScore: 100
    },
    {
        title: 'review',
        url: 'https://www.gourmettraveller.com.au/dining-out/restaurant-reviews/grossi-florentino-6820/',
        expectedScore: 90
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
    describe(`Multi site (GT) SEO testing for ${title} : ${url}`, function loopedTests() {
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
