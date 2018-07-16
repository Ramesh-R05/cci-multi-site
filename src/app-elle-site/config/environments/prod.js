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
            entity: 'http://services.prod.bxm.internal/entity/v1/elle',
            listings: 'http://services.prod.bxm.internal/listing/v1/elle',
            module: 'http://services.prod.bxm.internal/module/v1/elle',
            sitemap: 'http://sitemap-service.prod.bxm.net.au/v1/elle',
            tag: 'http://services.prod.bxm.internal/tag/v1/elle',
            search: 'http://services.prod.bxm.internal/es-search/v1/elle'
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
