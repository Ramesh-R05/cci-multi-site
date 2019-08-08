export default {
    ads: {
        targets: ''
    },
    gigya: { apiKey: '3_gzVo_oseZLARo4_VUUqJBB2Y9zC2eDqp8Puo28P_UsBV1lHkIe8V8WX5-sKKdp56' },
    site: {
        host: 'http://www.elle.com.au',
        protocol: 'https'
    },
    loggly: {
        inputToken: '9b4a2693-dc77-4e7e-a5ee-498845c59793',
        subdomain: 'bauerdigital',
        tags: ['elle', 'live'],
        json: true,
        level: 'info'
    },
    services: {
        remote: {
            entity: 'https://services.prod.bxm.net.au/entity/v1/elle',
            listings: 'https://services.prod.bxm.net.au/listing/v1/elle',
            module: 'https://services.prod.bxm.net.au/module/v1/elle',
            sitemap: 'http://sitemap-service.prod.bxm.net.au/v1/elle',
            tag: 'https://services.prod.bxm.net.au/tag/v1/elle',
            search: 'https://services.prod.bxm.net.au/es-search/v1/elle',
            identity: 'https://live.dmp.bauer-media.net.au/api/identity'
        },
        redirect: {
            url: 'http://services.prod.bxm.internal/redirect/v1/elle/301'
        }
    },
    polar: {
        targets: {
            env: ''
        }
    }
};
