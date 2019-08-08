export default {
    ads: {
        targets: ''
    },
    gigya: { apiKey: '3_ndX508vHWsiM7qzDEdzblZzzVWxLr0MlPiKpvDO8Jq4jculYO3EgMhKJrQEh3sWr' },
    site: {
        host: 'http://www.cosmopolitan.com.au',
        protocol: 'https'
    },
    loggly: {
        inputToken: '9b4a2693-dc77-4e7e-a5ee-498845c59793',
        subdomain: 'bauerdigital',
        tags: ['cosmo', 'live'],
        json: true,
        level: 'info',
        proxy: 'http://proxy.mgmt.local:3128'
    },
    services: {
        remote: {
            entity: 'https://services.prod.bxm.net.au/entity/v1/cosmo',
            listings: 'https://services.prod.bxm.net.au/listing/v1/cosmo',
            module: 'https://services.prod.bxm.net.au/module/v1/cosmo',
            sitemap: 'http://sitemap-service.prod.bxm.net.au/v1/cosmo',
            tag: 'https://services.prod.bxm.net.au/tag/v1/cosmo',
            search: 'https://services.prod.bxm.net.au/es-search/v1/cosmo',
            identity: 'https://live.dmp.bauer-media.net.au/api/identity'
        },
        redirect: {
            url: 'http://services.prod.bxm.internal/redirect/v1/cosmo/301'
        }
    },
    polar: {
        targets: {
            env: ''
        }
    }
};
