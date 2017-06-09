export default {
    local: 'http://127.0.0.1',
    remote: {
        entity: 'http://services.sit.bxm.internal/entity/v1/hb',
        listings: 'http://services.sit.bxm.internal/listing/v1/hb',
        module: 'http://services.sit.bxm.internal/module/v1/hb',
        sitemap: 'http://dev.sitemaps.services.bauer-media.internal/v1/hb',
        trending: 'http://trending.bauer.mg/today?sites=harpersbazaar.com.au',
        tag: 'http://dev.tags.services.bauer-media.internal/v1/hb'
    },
    endpoints: {
        page: '/api/getPageContent',
        list: '/api/list'
    },
    header: {
        url: 'https://d38h2iiydertbj.cloudfront.net/header/prod/globalheader.json'
    },
    redirect: {
        url: 'http://dev.redirect.services.bauer-media.internal/v1/hb/301'
    },
    faceBookAppID: '363188680538038'
};

