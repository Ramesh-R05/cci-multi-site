const lighthouse = require('lighthouse');
const chromeLauncher = require('lighthouse/chrome-launcher');
const auditConfig = require('lighthouse/lighthouse-core/config/perf.json');

const testLinks = [
    {
        title: 'homepage',
        url: 'https://www.gourmettraveller.com.au/',
        expectedScore: 28
    },
    {
        title: 'section',
        url: 'https://www.gourmettraveller.com.au/recipes/',
        expectedScore: 29
    },
    {
        title: 'article',
        url: 'https://www.gourmettraveller.com.au/news/food-news/josh-niland-danielle-alvarez-and-more-join-ozharvests-2018-ceo-cook-off-15582/',
        expectedScore: 23
    },
    {
        title: 'gallery',
        url: 'https://www.gourmettraveller.com.au/recipes/recipe-collections/fried-rice-15062/',
        expectedScore: 28
    },
    {
        title: 'recipe',
        url: 'https://www.gourmettraveller.com.au/recipes/browse-all/prawn-and-pineapple-tom-yum-with-rice-noodles-11890/',
        expectedScore: 23
    },
    {
        title: 'review',
        url: 'https://www.gourmettraveller.com.au/dining-out/restaurant-reviews/grossi-florentino-6820/',
        expectedScore: 21
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
    describe(`Now To Love site performance testing for ${title} : ${url}`, function loopedTests() {
        this.retries(3);
        this.timeout(60000);
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
