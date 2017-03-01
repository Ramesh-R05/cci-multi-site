import isUndefined from 'lodash/lang/isUndefined';
import { canUseDOM } from 'exenv';
import { createStore } from '@bxm/flux';
import get from 'lodash/object/get';

const dataLayer = canUseDOM && !isUndefined(window.dataLayer) ? window.dataLayer : [];

function dataLayerPush(data) {
    // Use dataslaayer to view data: https://chrome.google.com/webstore/detail/dataslayer/ikbablmmjldhamhcldjjigniffkkjgpo
    dataLayer.push(data);
}

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
    dataLayerPush(data);
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

    const data = {
        event: 'galleryImageChange',
        eventInfo: {
            galleryName: action.galleryTitle,
            prevImage: action.activeItem.url,
            currImage: newItem.url,
            currImageNo: newItem.index,
            totalImages: totalItems - numAds,
            numAds,
            isAd: !!newItem.ad
        }
    };
    dataLayerPush(data);
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
    dataLayerPush(data);
}

function trackFollowOnClick(source) {
    const data = {
        event: 'followOnClick',
        eventInfo: {
            followOnSource: source
        }
    };
    dataLayerPush(data);
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
    dataLayerPush(data);
}

// ---------------------------------------------------------------------------- store

module.exports = createStore({

    storeName: 'TrackingStore',

    // ------------------------------------------------------------------------ handlers

    handlers: {
        GALLERY_OPENED: 'onGalleryOpened',
        GALLERY_NEXT_ITEM: 'onGalleryNextItem',
        GALLERY_PREVIOUS_ITEM: 'onGalleryPreviousItem',
        GALLERY_COMPLETED: 'onGalleryCompleted',
        GALLERY_NEXT_GALLERY: 'onNextGallery',
        LOAD_LIST: 'onLoadList'
    },

    onGalleryOpened: (payload) => {
        trackGalleryOpen(payload);
    },

    onGalleryNextItem: (payload) => {
        trackGalleryItemChanged(payload);
    },

    onGalleryPreviousItem: (payload) => {
        trackGalleryItemChanged(payload);
    },

    onGalleryCompleted: (payload) => {
        trackGalleryComplete(payload);
    },

    onNextGallery: (payload) => {
        trackGalleryChanged(payload);
    },

    onLoadList: (payload) => {
        trackLoadList(payload);
    }
});
