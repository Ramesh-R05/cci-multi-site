export default {
    local: 'http://127.0.0.1',
    remote: {
        entity: 'http://services.sit.bxm.internal/entity/v1/elle',
        listings: 'http://services.sit.bxm.internal/listing/v1/elle',
        module: 'http://services.sit.bxm.internal/module/v1/elle',
        sitemap: 'http://sitemap-service.sit.bxm.net.au/v1/elle',
        trending: 'http://trending.bauer.mg/today?sites=elle.com.au',
        tag: 'http://services.sit.bxm.internal/tag/v1/elle'
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

