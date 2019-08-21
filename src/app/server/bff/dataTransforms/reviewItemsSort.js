import reviewsSort from '../helper/reviewsSort';

const reviewItemsSort = (itemList, section, config) => {
    const siteName = 'Gourmet Traveller';
    const chars = '~*!@_.()#^&%-=+01234567989abcdefghijklmnopqrstuvwxyz';
    const navSection = 'dining-out/restaurant-guide';

    if (itemList && Array.isArray(itemList) && config.site.name === siteName && section === navSection) {
        const sorter = reviewsSort(chars);
        itemList.sort(sorter);
    }

    return itemList;
};

export default reviewItemsSort;
