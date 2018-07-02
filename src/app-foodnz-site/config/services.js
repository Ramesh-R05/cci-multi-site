export default {
    local: 'http://127.0.0.1',
    remote: {
        entity: 'http://services.sit.bxm.internal/entity/v1/gt',
        listings: 'http://services.sit.bxm.internal/listing/v1/gt',
        module: 'http://services.sit.bxm.internal/module/v1/gt',
        sitemap: 'http://sitemap-service.sit.bxm.net.au/v1/gt',
        tag: 'http://services.sit.bxm.internal/tag/v1/gt',
        search: 'http://services.sit.bxm.internal/es-search/v1/gt'
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
        url: 'http://services.sit.bxm.internal/redirect/v1/gt/301'
    },
    faceBookAppID: '363188680538038'
};
