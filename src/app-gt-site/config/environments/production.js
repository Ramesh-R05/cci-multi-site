export default {
    ads: {
        targets: ''
    },
    gigya: { apiKey: '' },
    site: {
        host: 'http://www.gourmettraveller.com.au',
        protocol: 'https'
    },
    loggly: {
        inputToken: '9b4a2693-dc77-4e7e-a5ee-498845c59793',
        subdomain: 'bauerdigital',
        tags: [
            'gt',
            'live'
        ],
        json: true,
        level: 'info',
        proxy: 'http://proxy.mgmt.local:3128'
    },
    services: {
        remote: {
            entity: 'http://services.prod.bxm.internal/entity/v1/gt',
            listings: 'http://services.prod.bxm.internal/listing/v1/gt',
            module: 'http://services.prod.bxm.internal/module/v1/gt',
            sitemap: 'http://sitemap-service.prod.bxm.net.au/v1/gt',
            tag: 'http://services.prod.bxm.internal/tag/v1/gt'
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
