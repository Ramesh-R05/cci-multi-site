import brightcove from '../brightcove';
const playerId = 'a4036d2c-73e9-4a21-adba-2a623142d6c4';

export default {
    brightcove: {
        playerId,
        script: `//players.brightcove.net/${brightcove.accountId}/${playerId}_default/index.min.js`
    },
    services: {
        host: 'http://localhost:3000',
        header: {
            url: 'http://automation.gt-site.bauer-media.net.au/stub/wn-header'
        }
    },
    site: {
        host: 'http://automation.gt-site.bauer-media.net.au/'
    },
    polar: {
        propertyId: 'NA-GOURTRAVCONTPROM-11238617'
    },
    ads: {
        iasAds: false
    }
};
