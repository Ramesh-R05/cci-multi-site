export default {
    local: 'http://127.0.0.1',
    remote: {
        entity: 'http://services.sit.bxm.internal/entity/v1/cosmo',
        listings: 'http://services.sit.bxm.internal/listing/v1/cosmo',
        module: 'http://services.sit.bxm.internal/module/v1/cosmo',
        sitemap: 'http://sitemap-service.sit.bxm.net.au/v1/cosmo',
        tag: 'http://services.sit.bxm.internal/tag/v1/cosmo',
        search: 'http://services.sit.bxm.internal/es-search/v1/cosmo'
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
        url: 'http://services.sit.bxm.internal/redirect/v1/cosmo/301'
    },
    faceBookAppID: '1549758481945731'
};

