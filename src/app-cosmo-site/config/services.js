export default {
    local: 'http://127.0.0.1',
    remote: {
        entity: 'https://services.sit.bxm.net.au/entity/v1/cosmo',
        listings: 'https://services.sit.bxm.net.au/listing/v1/cosmo',
        module: 'https://services.sit.bxm.net.au/module/v1/cosmo',
        sitemap: 'http://sitemap-service.sit.bxm.net.au/v1/cosmo',
        tag: 'https://services.sit.bxm.net.au/tag/v1/cosmo',
        search: 'https://services.sit.bxm.net.au/es-search/v1/cosmo',
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
        url: 'http://services.sit.bxm.internal/redirect/v1/cosmo/301'
    },
    faceBookAppID: '1549758481945731'
};
