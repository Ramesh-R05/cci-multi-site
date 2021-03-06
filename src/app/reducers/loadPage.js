export const initialState = {
    error: null,
    footer: {},
    nodeType: '',
    title: '',
    magazineImageUrl: '',
    magCover: {},
    comScoreSegmentIds: '',
    emailLinkTrackingData: null,
    linkToBackgroundImage: ''
};

export function reducer(state = initialState, payload = {}, eventName = '') {
    const actionType = eventName || payload.type || '';

    switch (actionType) {
        case 'LOAD_CONTENT': {
            const entity = payload.body.entity;
            const footer = payload.body.footer || {};
            const subsections = payload.body.subsectionList;
            const comScoreSegmentIds = payload.body.comScoreSegmentIds;
            const emailLinkTrackingData = payload.body.emailLinkTrackingData;

            if (!entity) {
                return state;
            }

            return {
                error: null,
                nodeType: entity.nodeType,
                title: entity.title,
                shortTitle: entity.shortTitle,
                summary: entity.summary,
                enableHomeSearchBox: entity.enableSearch,
                searchDescribeText: entity.searchDescribeText,
                searchTagsDetails: entity.searchTagsDetails,
                backgroundImageUrl: entity.searchBackgroundImage,
                footer,
                magazineImageUrl: entity.imageUrl,
                theme: payload.body.theme,
                siteAlert: payload.body.siteAlert,
                magCover: payload.body.magCover,
                subsections,
                comScoreSegmentIds,
                emailLinkTrackingData
            };
        }

        case 'LOAD_CONTENT_FAILED': {
            const { response = {} } = payload;
            const { body = {} } = response;
            const footer = body.footer || {};
            const magCover = body.magCover || {};

            response.status = response.status || 400;

            return {
                error: response,
                nodeType: '',
                title: '',
                footer,
                magazineImageUrl: '',
                theme: '',
                magCover,
                comScoreSegmentIds: initialState.comScoreSegmentIds
            };
        }

        default:
            return state;
    }
}
