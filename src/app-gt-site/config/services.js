export default {
    local: 'http://127.0.0.1',
    remote: {
        entity: 'https://services.sit.bxm.net.au/entity/v1/gt',
        listings: 'https://services.sit.bxm.net.au/listing/v1/gt',
        module: 'https://services.sit.bxm.net.au/module/v1/gt',
        sitemap: 'http://sitemap-service.sit.bxm.net.au/v1/gt',
        tag: 'https://services.sit.bxm.net.au/tag/v1/gt',
        search: 'https://services.sit.bxm.net.au/es-search/v1/gt',
        identity: 'https://dev.dmp.aremedia.net.au/federation/api/identity'
    },
    endpoints: {
        page: '/api/getPageContent',
        list: '/api/list',
        search: '/api/search',
        identity: '/api/identity'
    },
    header: {
        url: 'https://d38h2iiydertbj.cloudfront.net/header/prod/globalheader.json'
    },
    redirect: {
        url: 'http://services.sit.bxm.internal/redirect/v1/gt/301'
    },
    faceBookAppID: '363188680538038'
};
