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
            url: 'http://automation.hb-site.bauer-media.net.au/stub/wn-header'
        }
    },
    site: {
        host: 'http://automation.hb-site.bauer-media.net.au/'
    },
    polar: {
        propertyId: 'NA-HARPSBAZACONTPROM-11238618'
    }
};
