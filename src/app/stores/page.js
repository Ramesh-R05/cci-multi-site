import { createReducerStore } from 'fluxible-reducer-store';
import { initialState, reducer } from '../reducers/loadPage';

export default createReducerStore({
    storeName: 'PageStore',
    initialState,
    reducer,
    getters: {
        getTitle(state) {
            return state.title;
        },

        getShortTitle(state) {
            return state.shortTitle;
        },

        getSummary(state) {
            return state.summary;
        },

        getErrorStatus(state) {
            return state.error;
        },

        getNodeType(state) {
            return state.nodeType;
        },

        getSubsections(state) {
            return state.subsections;
        },

        getMagazineImageUrl(state) {
            if (!state.magCover) return '';

            if (Array.isArray(state.magCover) && state.magCover.length) {
                const siteMagCover = state.magCover.find(mag => mag.isSiteMagCover);
                return !!siteMagCover && siteMagCover.moduleImageUrl;
            }

            return state.magCover.moduleImageUrl;
        },

        getMagazineText(state) {
            if (!state.magCover) return '';

            if (Array.isArray(state.magCover) && state.magCover.length) {
                const siteMagCover = state.magCover.find(mag => mag.isSiteMagCover);
                return !!siteMagCover && siteMagCover.moduleTitle;
            }

            return state.magCover.moduleTitle;
        },

        getFooter(state) {
            return state.footer;
        },

        getMustReadItems(state) {
            return state.mustRead;
        },

        getModule: (state, module) => {
            if (!module) return [];
            return state[module] || [];
        },

        getComScoreSegmentIds(state) {
            return state.comScoreSegmentIds;
        },

        getHomeSearchBox(state) {
            const enableHomeSearchBox = !!state.enableHomeSearchBox;
            const linkToBackgroundImage = state.linkToBackgroundImage || '';
            const searchDescribeText = state.searchDescribeText || '';
            const searchTagsDetails = state.searchTagsDetails || [];

            return {
                enableHomeSearchBox,
                linkToBackgroundImage,
                searchDescribeText,
                searchTagsDetails
            };
        },

        getEmailLinkTrackingData(state) {
            return state.emailLinkTrackingData;
        }
    }
});
