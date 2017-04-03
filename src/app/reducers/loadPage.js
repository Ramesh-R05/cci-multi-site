export const initialState = {
    error: null,
    footer: {},
    nodeType: '',
    title: '',
    magazineImageUrl: '',
    trendingItems: []
};

export function reducer(state = initialState, payload = {}, eventName = '') {
    const actionType = eventName || payload.type || '';
    switch (actionType) {
    case 'LOAD_CONTENT': {
        const entity = payload.body.entity;
        const trendingItems = payload.body.trendingItems || [];
        const footer = payload.body.footer || {};
        if (!entity) return state;
        return {
            error: null,
            nodeType: entity.nodeType,
            title: entity.title,
            shortTitle: entity.shortTitle,
            summary: entity.summary,
            trendingItems,
            footer,
            magazineImageUrl: entity.imageUrl,
            theme: payload.body.theme,
            magCover: payload.body.magCover
        };
    }
    case 'LOAD_CONTENT_FAILED': {
        const { response } = payload;
        const { footer = {}, magcover = {} } = response.body;
        response.status = response.status || 400;

        return {
            error: response,
            nodeType: '',
            title: '',
            trendingItems: [],
            footer,
            magazineImageUrl: '',
            theme: '',
            magCover: magcover
        };
    }
    default:
        return state;
    }
}
