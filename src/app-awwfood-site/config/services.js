export default {
    local: 'http://127.0.0.1',
    remote: {
        entity: 'http://services.sit.bxm.internal/entity/v1/awwfood',
        listings: 'http://services.sit.bxm.internal/listing/v1/awwfood',
        module: 'http://services.sit.bxm.internal/module/v1/awwfood',
        sitemap: 'http://sitemap-service.sit.bxm.net.au/v1/awwfood',
        tag: 'http://services.sit.bxm.internal/tag/v1/awwfood',
        search: 'http://services.sit.bxm.internal/es-search/v1/awwfood',
        commercialtagsections: 'http://services.sit.bxm.internal/entity/v1/awwfood/commercialtagsections/'
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
        url: 'http://services.sit.bxm.internal/redirect/v1/awwfood/301'
    },
    faceBookAppID: '363188680538038'
};
