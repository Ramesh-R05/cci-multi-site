export default {
    ads: {
        targets: ''
    },
    gigya: { apiKey: '' },
    site: {
        host: 'http://www.harpersbazaar.com.au'
    },
    loggly: {
        inputToken: '9b4a2693-dc77-4e7e-a5ee-498845c59793',
        subdomain: 'bauerdigital',
        tags: [
            'hb',
            'live'
        ],
        json: true,
        level: 'info',
        proxy: 'http://proxy.mgmt.local:3128'
    },
    services: {
        remote: {
            entity: 'http://services.prod.bxm.internal/entity/v1/hb',
            listings: 'http://services.prod.bxm.internal/listing/v1/hb',
            module: 'http://services.prod.bxm.internal/module/v1/hb',
            sitemap: 'http://sitemap-service.prod.bxm.net.au/v1/hb',
            tag: 'http://services.prod.bxm.internal/tag/v1/hb'
        },
        redirect: {
            url: 'http://live.redirect.services.bauer-media.internal/v1/hb/301'
        }
    },
    polar: {
        targets: {
            env: ''
        }
    }
};
