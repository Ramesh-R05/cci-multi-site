export default {
    local: 'http://127.0.0.1',
    remote: {
        entity: 'https://services.sit.bxm.net.au/entity/v1/now',
        listings: 'https://services.sit.bxm.net.au/listing/v1/now',
        module: 'https://services.sit.bxm.net.au/module/v1/now',
        sitemap: 'http://sitemap-service.sit.bxm.net.au/v1/now',
        tag: 'https://services.sit.bxm.net.au/tag/v1/now',
        search: 'https://services.sit.bxm.net.au/es-search/v1/now',
        identity: 'https://dev.dmp.bauer-media.net.au/api/identity'
    },
    endpoints: {
        page: '/api/getPageContent',
        list: '/api/list',
        identity: '/api/identity'
    },
    header: {
        url: 'https://d38h2iiydertbj.cloudfront.net/header/prod/globalheader.json'
    },
    redirect: {
        url: 'http://services.sit.bxm.internal/redirect/v1/now/301'
    },
    faceBookAppID: '373446372845719'
};
