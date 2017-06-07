export default {
    local: 'http://127.0.0.1',
    remote: {
        entity: 'http://dev.entities.services.bauer-media.internal/v1/cosmo',
        listings: 'http://dev.listings.services.bauer-media.internal/v1/cosmo',
        module: 'http://dev.modules.services.bauer-media.internal/v1/cosmo',
        sitemap: 'http://dev.sitemaps.services.bauer-media.internal/v1/cosmo',
        trending: 'http://trending.bauer.mg/today?sites=cosmo.com.au',
        tag: 'http://dev.tags.services.bauer-media.internal/v1/cosmo'
    },
    endpoints: {
        page: '/api/getPageContent',
        list: '/api/list'
    },
    header: {
        url: 'https://d38h2iiydertbj.cloudfront.net/header/prod/globalheader.json'
    },
    redirect: {
        url: 'http://dev.redirect.services.bauer-media.internal/v1/cosmo/301'
    },
    faceBookAppID: '1549758481945731'
};
