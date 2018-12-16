export const initialState = {
    heroTeaser: null,
    curatedHeroTeaser: null,
    latestTeasers: [],
    videoGalleryTeasers: [],
    mustRead: [],
    promoted: { title: '', items: [] },
    collectionRecipeEntities: [],
    list: {}
};

export function reducer(state = initialState, payload = { body: {} }, eventName = '') {
    const actionType = eventName || payload.type || '';

    switch (actionType) {
        case 'LOAD_CONTENT': {
            const {
                heroTeaser = null,
                latestTeasers = [],
                curatedHeroTeaser = null,
                videoGalleryTeasers = [],
                list = {},
                mustRead = [],
                promoted = { title: '', items: [] }
            } = payload.body;

            const collectionRecipeEntities = payload.body.entity.contentRecipeEntities || [];

            return {
                heroTeaser,
                latestTeasers,
                curatedHeroTeaser,
                videoGalleryTeasers,
                mustRead,
                promoted,
                list,
                collectionRecipeEntities
            };
        }

        case 'LOAD_CONTENT_FAILED': {
            return {
                heroTeaser: null,
                curatedHeroTeaser: null,
                latestTeasers: [],
                videoGalleryTeasers: [],
                mustRead: [],
                promoted: { title: '', items: [] },
                list: {},
                collectionRecipeEntities: []
            };
        }

        case 'LOAD_LIST': {
            return {
                ...state,
                list: {
                    ...payload.body.list,
                    items: [...state.list.items, ...payload.body.list.items]
                }
            };
        }

        default:
            return state;
    }
}
