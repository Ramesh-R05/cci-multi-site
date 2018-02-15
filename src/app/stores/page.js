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
            return state.magCover.moduleImageUrl;
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
        }
    }
});
