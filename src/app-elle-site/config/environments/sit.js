import brightcove from '../brightcove';
const playerId = 'VkuyApojl';

export default {
    site: {
        host: 'http://elle-site-au.sit.bxm.net.au'
    },
    brightcove: {
        playerId,
        script: `//players.brightcove.net/${brightcove.accountId}/${playerId}_default/index.min.js`
    },
    loggly: {
        inputToken: '9b4a2693-dc77-4e7e-a5ee-498845c59793',
        subdomain: 'bauerdigital',
        tags: ['elle', 'dev'],
        json: true,
        level: 'info'
    },
    services: {
        faceBookAppID: '520578108132544'
    },
    features: {
        jwPlayer: {
            enabled: true
        }
    }
};
