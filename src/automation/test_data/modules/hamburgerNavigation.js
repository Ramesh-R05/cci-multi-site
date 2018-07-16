import DataManager from '../class/DataManager';

const hamburgerNavigation = {
    items: [
        {
            id: 'NOW-1168',
            name: 'Celebrity',
            dateCreated: '2016-11-23T02:25:42.00Z',
            nodeType: 'Section',
            url: '/celebrity'
        },
        {
            id: 'NOW-1172',
            name: 'News',
            dateCreated: '2016-11-23T02:25:43.00Z',
            nodeType: 'Section',
            url: '/news'
        },
        {
            id: 'NOW-1186',
            name: 'Lifestyle',
            dateCreated: '2016-11-23T02:25:46.00Z',
            imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/AWW/2016/08/17/28455/Beach-house-art.jpg',
            nodeType: 'Section',
            url: '/lifestyle'
        },
        {
            id: 'NOW-1195',
            name: 'Travel',
            dateCreated: '2016-11-23T02:25:48.00Z',
            nodeType: 'Section',
            url: '/travel'
        },
        {
            id: 'NOW-1206',
            name: 'Fashion',
            dateCreated: '2016-11-23T02:25:50.00Z',
            nodeType: 'Section',
            url: '/fashion'
        },
        {
            id: 'NOW-1210',
            name: 'Beauty',
            dateCreated: '2016-11-23T02:25:51.00Z',
            nodeType: 'Section',
            url: '/beauty'
        }
    ]
};

export default new DataManager(hamburgerNavigation);
