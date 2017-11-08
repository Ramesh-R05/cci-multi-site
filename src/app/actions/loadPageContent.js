import pageService from '../services/page';

export default function loadPageContent(context, payload) {
    const params = { ...payload.params, hostname: payload.navigate.hostname };
    params.pageNo = payload.query.pageNo;
    return pageService.read(params).then(
        (content) => {
            if (content instanceof Error) context.dispatch('LOAD_CONTENT_FAILED', content);
            else context.dispatch('LOAD_CONTENT', { ...content, request: { payload } });
        },
        error => context.dispatch('LOAD_CONTENT_FAILED', error)
    );
}
