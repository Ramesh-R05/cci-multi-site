export default {
    local: 'http://127.0.0.1',
    remote: {
        entity: 'https://services.sit.bxm.net.au/entity/v1/awwfood',
        listings: 'https://services.sit.bxm.net.au/listing/v1/awwfood',
        module: 'https://services.sit.bxm.net.au/module/v1/awwfood',
        sitemap: 'http://sitemap-service.sit.bxm.net.au/v1/awwfood',
        tag: 'https://services.sit.bxm.net.au/tag/v1/awwfood',
        search: 'https://services.sit.bxm.net.au/es-search/v1/awwfood',
        identity: 'https://dev.dmp.bauer-media.net.au/api/identity'
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
        url: 'http://services.sit.bxm.internal/redirect/v1/awwfood/301'
    },
    faceBookAppID: '363188680538038'
};
