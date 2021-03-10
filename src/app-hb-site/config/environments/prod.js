export default {
    ads: {
        targets: ''
    },
    gigya: { apiKey: '' },
    site: {
        host: 'http://www.harpersbazaar.com.au',
        protocol: 'https'
    },
    loggly: {
        inputToken: '9b4a2693-dc77-4e7e-a5ee-498845c59793',
        subdomain: 'bauerdigital',
        tags: ['hb', 'live'],
        json: true,
        level: 'info',
        proxy: 'http://proxy.mgmt.local:3128'
    },
    services: {
        remote: {
            entity: 'https://services.prod.bxm.net.au/entity/v1/hb',
            listings: 'https://services.prod.bxm.net.au/listing/v1/hb',
            module: 'https://services.prod.bxm.net.au/module/v1/hb',
            sitemap: 'http://sitemap-service.prod.bxm.net.au/v1/hb',
            tag: 'https://services.prod.bxm.net.au/tag/v1/hb',
            search: 'https://services.prod.bxm.net.au/es-search/v1/hb',
            identity: 'https://live.dmp.aremedia.net.au/federation/api/identity'
        },
        redirect: {
            url: 'http://services.prod.bxm.internal/redirect/v1/hb/301'
        }
    },
    googleNativeAds: {
        targets: {
            env: ''
        }
    }
};
