export default {
    ads: {
        targets: ''
    },
    gigya: { apiKey: '' },
    site: {
        host: 'https://www.gourmettraveller.com.au',
        protocol: 'https'
    },
    loggly: {
        inputToken: '9b4a2693-dc77-4e7e-a5ee-498845c59793',
        subdomain: 'bauerdigital',
        tags: ['gt', 'live'],
        json: true,
        level: 'info',
        proxy: 'http://proxy.mgmt.local:3128'
    },
    services: {
        remote: {
            entity: 'https://services.prod.bxm.net.au/entity/v1/gt',
            listings: 'https://services.prod.bxm.net.au/listing/v1/gt',
            module: 'https://services.prod.bxm.net.au/module/v1/gt',
            sitemap: 'http://sitemap-service.prod.bxm.net.au/v1/gt',
            tag: 'https://services.prod.bxm.net.au/tag/v1/gt',
            search: 'https://services.prod.bxm.net.au/es-search/v1/gt',
            identity: 'https://live.dmp.bauer-media.net.au/api/identity'
        },
        redirect: {
            url: 'http://services.prod.bxm.internal/redirect/v1/gt/301'
        }
    },
    polar: {
        targets: {
            env: ''
        }
    }
};
