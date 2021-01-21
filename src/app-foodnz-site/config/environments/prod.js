export default {
    ads: {
        targets: ''
    },
    gigya: { apiKey: '' },
    site: {
        host: 'https://www.foodtolove.co.nz',
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
            entity: 'https://services.prod.bxm.net.au/entity/v1/foodnz',
            listings: 'https://services.prod.bxm.net.au/listing/v1/foodnz',
            module: 'https://services.prod.bxm.net.au/module/v1/foodnz',
            sitemap: 'http://sitemap-service.prod.bxm.net.au/v1/foodnz',
            tag: 'https://services.prod.bxm.net.au/tag/v1/foodnz',
            search: 'https://services.prod.bxm.net.au/es-search/v1/foodnz',
            identity: 'https://live.dmp.bauer-media.net.au/api/identity'
        },
        redirect: {
            url: 'http://services.prod.bxm.internal/redirect/v1/foodnz/301'
        }
    },
    googleNativeAds: {
        targets: {
            env: ''
        }
    },
    oovvuu: {
        scriptUrl: 'http://videos.oovvuu.com/baum/v1/ovu_rec.js'
    }
};
