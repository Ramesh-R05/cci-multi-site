import brightcove from '../brightcove';
const playerId = '9d8a1e14-2673-43d9-9260-6ff50b059ad9';

export default {
    brightcove: {
        playerId,
        script: `//players.brightcove.net/${brightcove.accountId}/${playerId}_default/index.min.js`
    },
    services: {
        host: 'http://localhost:3000',
        header: {
            url: 'http://localhost:3001/stub/wn-header'
        }
    },
    site: {
        host: 'http://127.0.0.1:3001'
    }
};
