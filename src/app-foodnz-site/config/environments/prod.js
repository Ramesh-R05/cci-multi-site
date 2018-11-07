export default {
    ads: {
        targets: ''
    },
    gigya: { apiKey: '' },
    site: {
        host: 'https://www.womensweeklyfood.com.au',
        protocol: 'https'
    },
    loggly: {
        inputToken: '9b4a2693-dc77-4e7e-a5ee-498845c59793',
        subdomain: 'bauerdigital',
        tags: ['foodnz', 'live'],
        json: true,
        level: 'info',
        proxy: 'http://proxy.mgmt.local:3128'
    },
    services: {
        remote: {
            entity: 'http://services.prod.bxm.internal/entity/v1/foodnz',
            listings: 'http://services.prod.bxm.internal/listing/v1/foodnz',
            module: 'http://services.prod.bxm.internal/module/v1/foodnz',
            sitemap: 'http://sitemap-service.prod.bxm.net.au/v1/foodnz',
            tag: 'http://services.prod.bxm.internal/tag/v1/foodnz',
            search: 'http://services.prod.bxm.internal/es-search/v1/foodnz',
            identity: 'https://live.dmp.bauer-media.net.au/api/identity'
        },
        redirect: {
            url: 'http://services.prod.bxm.internal/redirect/v1/foodnz/301'
        }
    },
    polar: {
        targets: {
            env: ''
        }
    }
};
