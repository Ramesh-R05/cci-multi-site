const lighthouseTests = require('../node_modules/@bxm/automation/lib/execution/lighthouseTests');

const testLinks = [
    {
        title: 'Mutli-homepage',
        url: 'http://multi-site.test.bxm.net.au/',
        expectedScore: 0.19
    },
    {
        title: 'Mutli-section',
        url: 'http://multi-site.test.bxm.net.au/fashion/',
        expectedScore: 0.21
    },
    {
        title: 'Mutli-article',
        url: 'http://multi-site.test.bxm.net.au/fashion/automation-test-article-with-hero-image-3663/',
        expectedScore: 0.21
    },
    {
        title: 'Mutli-gallery',
        url: 'http://multi-site.test.bxm.net.au/fashion/automation-test-gallery-13302/',
        expectedScore: 0.23
    },
    {
        title: 'Mutli-recipe',
        url: 'http://multi-site.test.bxm.net.au/recipes/automation-test-recipe-2127/',
        expectedScore: 0.23
    },
    {
        title: 'Mutli-review',
        url: 'http://multi-site.test.bxm.net.au/restaurant-reviews/bar-rochford-restaurant-review-1713/',
        expectedScore: 0.23
    }
];

testLinks.forEach((doctypeSetting) => {
    lighthouseTests(doctypeSetting, 'performance');
});
