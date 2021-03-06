import isUndefined from 'lodash/lang/isUndefined';
import { canUseDOM } from 'exenv';
import { createStore } from '@bxm/flux';
import get from 'lodash/object/get';

/*
* To see the dataLayer in the browser, use these extensions/add-ons:
*
* Chrome: https://chrome.google.com/webstore/detail/dataslayer/ikbablmmjldhamhcldjjigniffkkjgpo
* Firefox: https://addons.mozilla.org/en-US/firefox/addon/gtm-datalayer-watcher/
*
* or just view window.dataLayer with the console.
* */

const dataLayer = canUseDOM && !isUndefined(window.dataLayer) ? window.dataLayer : [];

function getNumAds(items) {
    const adItems = items.filter(item => !isUndefined(item.ad));

    return adItems.length;
}

// ---------------------------------------------------------------------------- action tracking

function trackGalleryOpen(action) {
    const activeItem = action.activeItem;
    const numAds = getNumAds(action.items);

    const data = {
        event: 'galleryOpen',
        eventInfo: {
            galleryName: action.galleryTitle,
            prevImage: '',
            currImage: activeItem.url,
            currImageNo: activeItem.index,
            totalImages: action.totalItems - numAds,
            numAds,
            isAd: !!activeItem.ad
        }
    };
    dataLayer.push(data);
}

// https://jira.bauermedia.net.au/confluence/display/DACRM/Galleries
function trackGalleryItemChanged(action) {
    // dont trigger galleryImageChange if we
    // are on the link to the next gallery or
    // next item index is null
    const newItemIndex = action.newItemIndex;
    const totalItems = action.totalItems;

    if (newItemIndex === null || newItemIndex > totalItems - 1) {
        return;
    }

    const items = action.items;
    const numAds = getNumAds(items);
    const newItem = newItemIndex !== null ? items[newItemIndex] : '';
    const isAd = !!newItem.ad;
    const slideNumber = isAd ? null : newItem.index;

    const data = {
        event: 'galleryImageChange',
        eventInfo: {
            galleryName: action.galleryTitle,
            prevImage: action.activeItem.url,
            currImage: newItem.url,
            currImageNo: slideNumber,
            totalImages: totalItems - numAds,
            numAds,
            isAd: !!newItem.ad
        }
    };
    dataLayer.push(data);
}

function trackVerticalGalleryItemChanged(action) {
    const activeItem = action.activeItem;
    const totalGalleryItems = action.totalGalleryItems;

    // don't trigger galleryImageChange if the item index is 0
    if (activeItem === 0 || (!action.isAd && activeItem === null)) {
        return;
    }

    const data = {
        event: 'galleryImageChange',
        eventInfo: {
            galleryName: action.galleryTitle,
            currImageNo: activeItem,
            totalImages: totalGalleryItems,
            numAds: action.numAds,
            isAd: action.isAd
        }
    };
    dataLayer.push(data);
}

function trackUserDetailSubmitted(action) {
    const data = {
        event: 'newsletter_subscribe',
        eventInfo: {
            bauer_global_unique_id: action.data,
            source: 'sailthru'
        }
    };
    dataLayer.push(data);
}

function trackGalleryComplete(action) {
    const items = action.items;
    const numAds = getNumAds(items);

    const data = {
        event: 'galleryComplete',
        eventInfo: {
            galleryName: action.galleryTitle,
            prevImage: action.activeItem.url,
            totalImages: action.totalItems - numAds,
            numAds,
            isAd: false
        }
    };
    dataLayer.push(data);
}

function trackVerticalGalleryComplete(action) {
    const data = {
        event: 'galleryComplete',
        eventInfo: {
            galleryName: action.galleryTitle,
            totalImages: action.totalGalleryItems,
            numAds: action.numAds
        }
    };
    dataLayer.push(data);
}

function trackFollowOnClick(source) {
    const data = {
        event: 'followOnClick',
        eventInfo: {
            followOnSource: source
        }
    };
    dataLayer.push(data);
}

function trackGalleryChanged() {
    trackFollowOnClick('Next gallery');
}

function trackLoadList(payload) {
    const data = {
        event: 'expandListing',
        eventInfo: {
            listingName: get(payload, 'body.list.listName'),
            pageNo: get(payload, 'body.list.params.pageNo')
        }
    };
    dataLayer.push(data);
}

function trackImageRevealerInteraction(payload) {
    const data = {
        event: 'Image Revealer',
        eventInfo: { ...payload }
    };
    dataLayer.push(data);
}

// ---------------------------------------------------------------------------- store

export default createStore({
    storeName: 'TrackingStore',

    // ------------------------------------------------------------------------ handlers

    handlers: {
        GALLERY_OPENED: 'onGalleryOpened',
        GALLERY_NEXT_ITEM: 'onGalleryNextItem',
        GALLERY_PREVIOUS_ITEM: 'onGalleryPreviousItem',
        VERTICAL_GALLERY_NEXT_ITEM: 'onVerticalGalleryNextItemTrack',
        VERTICAL_GALLERY_PREVIOUS_ITEM: 'onVerticalGalleryPreviousItemTrack',
        GALLERY_COMPLETED: 'onGalleryCompleted',
        VERTICAL_GALLERY_COMPLETED: 'onVerticalGalleryCompleted',
        GALLERY_NEXT_GALLERY: 'onNextGallery',
        LOAD_LIST: 'onLoadList',
        IMAGE_REVEALER_INTERACTION: 'onImageRevealerInteraction',
        NEWSLETTER_SUBMITTED: 'onNewsletterSubmitted'
    },

    onGalleryOpened: payload => {
        trackGalleryOpen(payload);
    },

    onGalleryNextItem: payload => {
        trackGalleryItemChanged(payload);
    },

    onGalleryPreviousItem: payload => {
        trackGalleryItemChanged(payload);
    },

    onVerticalGalleryNextItemTrack: payload => {
        trackVerticalGalleryItemChanged(payload);
    },

    onVerticalGalleryPreviousItemTrack: payload => {
        trackVerticalGalleryItemChanged(payload);
    },

    onGalleryCompleted: payload => {
        trackGalleryComplete(payload);
    },

    onNewsletterSubmitted: payload => {
        trackUserDetailSubmitted(payload);
    },

    onVerticalGalleryCompleted: payload => {
        trackVerticalGalleryComplete(payload);
    },

    onNextGallery: payload => {
        trackGalleryChanged(payload);
    },

    onLoadList: payload => {
        trackLoadList(payload);
    },

    onImageRevealerInteraction: payload => {
        trackImageRevealerInteraction(payload);
    }
});
