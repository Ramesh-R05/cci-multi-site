import brightcove from '../brightcove';
const playerId = '9d8a1e14-2673-43d9-9260-6ff50b059ad9';

export default {
    site: {
        host: 'http://localhost:3001'
    },
    brightcove: {
        playerId,
        script: `//players.brightcove.net/${brightcove.accountId}/${playerId}_default/index.min.js`
    },
    services: {
        faceBookAppID: '363188680538038'
    }
};
