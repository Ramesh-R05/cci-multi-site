export default {
    local: 'http://127.0.0.1',
    remote: {
        entity: 'http://dev.entities.services.bauer-media.internal/v1/elle',
        listings: 'http://services.sit.bxm.internal/listing/v1/elle',
        module: 'http://dev.modules.services.bauer-media.internal/v1/elle',
        sitemap: 'http://dev.sitemaps.services.bauer-media.internal/v1/elle',
        trending: 'http://trending.bauer.mg/today?sites=elle.com.au',
        tag: 'http://dev.tags.services.bauer-media.internal/v1/elle'
    },
    endpoints: {
        page: '/api/getPageContent',
        list: '/api/list'
    },
    header: {
        url: 'https://d38h2iiydertbj.cloudfront.net/header/prod/globalheader.json'
    },
    redirect: {
        url: 'http://dev.redirect.services.bauer-media.internal/v1/elle/301'
    },
    faceBookAppID: '373446372845719'
};

