export default {
    local: 'http://127.0.0.1',
    remote: {
        entity: 'http://services.sit.bxm.internal/entity/v1/hb',
        listings: 'http://services.sit.bxm.internal/listing/v1/hb',
        module: 'http://services.sit.bxm.internal/module/v1/hb',
        sitemap: 'http://sitemap-service.sit.bxm.net.au/v1/hb',
        tag: 'http://services.sit.bxm.internal/tag/v1/hb',
        search: 'http://services.sit.bxm.internal/es-search/v1/hb'
    },
    endpoints: {
        page: '/api/getPageContent',
        list: '/api/list',
        search: '/api/search'
    },
    header: {
        url: 'https://d38h2iiydertbj.cloudfront.net/header/prod/globalheader.json'
    },
    redirect: {
        url: 'http://services.sit.bxm.internal/redirect/v1/hb/301'
    },
    faceBookAppID: '363188680538038'
};

