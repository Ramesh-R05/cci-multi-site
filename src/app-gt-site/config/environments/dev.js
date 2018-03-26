import brightcove from '../brightcove';
const playerId = '9d8a1e14-2673-43d9-9260-6ff50b059ad9';

export default {
    site: {
        host: 'http://gt-site-au.sit.bxm.net.au'
    },
    brightcove: {
        playerId,
        script: `//players.brightcove.net/${brightcove.accountId}/${playerId}_default/index.min.js`
    },
    loggly: {
        inputToken: '9b4a2693-dc77-4e7e-a5ee-498845c59793',
        subdomain: 'bauerdigital',
        tags: [
            'gt',
            'dev'
        ],
        json: true,
        level: 'info',
        proxy: 'http://proxy.mgmt.local:3128'
    },
    services: {
        faceBookAppID: '363188680538038'
    }
};
