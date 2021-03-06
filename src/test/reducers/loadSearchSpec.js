import { initialState, reducer } from '../../app/reducers/loadSearch';

describe(`loadSearch Reducer`, () => {
    const DEFAULT_MAGCOVER = {
        moduleImageUrl: '/path/to/magCover.jpg',
        moduleTitle: 'Subscribe Now'
    };
    let body;
    let payload;

    describe(`on LOAD_SEARCH`, () => {
        beforeEach(() => {
            body = {
                footer: {},
                magCover: DEFAULT_MAGCOVER,
                search: {
                    total: 8,
                    initialResults: [1, 2, 3, 4],
                    resultsList: [1, 2, 3, 4, 5, 6, 7, 8]
                },
                list: {
                    items: [[5, 6, 7, 8]],
                    params: {
                        pageNo: 1
                    }
                },
                headerMetaData: {
                    title: 'Title'
                }
            };
            payload = {
                type: 'LOAD_SEARCH',
                body
            };
        });

        describe(`when the payload contains the search data within the body object`, () => {
            it(`should return the new items`, () => {
                expect(reducer(initialState, payload)).to.contain.all.keys({
                    error: null,
                    footer: payload.body.footer,
                    title: payload.body.headerMetaData.title,
                    magazineImageUrl: payload.body.magCover.moduleImageUrl,
                    magCover: payload.body.magCover,
                    search: {
                        total: 8,
                        initialResults: [1, 2, 3, 4],
                        resultsList: [1, 2, 3, 4, 5, 6, 7, 8]
                    },
                    list: {
                        items: [[5, 6, 7, 8]]
                    }
                });
            });
        });

        describe(`when the payload is empty`, () => {
            it(`should return the initalState`, () => {
                expect(reducer()).to.deep.eq(initialState);
            });
        });

        describe(`when the payload does not contain search`, () => {
            it(`should return the initalState`, () => {
                delete payload.body.search;
                expect(reducer(initialState, payload)).to.deep.eq(initialState);
            });
        });
    });

    describe(`on LOAD_SEARCH_FAILED`, () => {
        let response;

        beforeEach(() => {
            response = {
                msg: 'Error Message',
                status: 404,
                body: {
                    magCover: DEFAULT_MAGCOVER
                }
            };
            payload = {
                type: 'LOAD_SEARCH_FAILED',
                response
            };
        });

        it(`should set the error and make nodeType and title empty`, () => {
            expect(reducer(initialState, payload)).to.deep.eq({
                error: response,
                footer: {},
                title: '',
                theme: {},
                siteAlert: {},
                magazineImageUrl: '',
                magCover: DEFAULT_MAGCOVER,
                list: {
                    items: []
                },
                latestTeasers: [],
                search: {
                    total: 0,
                    initialResults: [],
                    resultsList: []
                }
            });
        });

        it(`should set the error status to 400 if it is not set in response`, () => {
            delete response.status;
            expect(reducer(initialState, payload)).to.deep.eq({
                error: {
                    ...response,
                    status: 400
                },
                footer: {},
                title: '',
                magazineImageUrl: '',
                theme: {},
                siteAlert: {},
                magCover: DEFAULT_MAGCOVER,
                list: {
                    items: []
                },
                latestTeasers: [],
                search: {
                    total: 0,
                    initialResults: [],
                    resultsList: []
                }
            });
        });
    });

    describe(`on RANDOM_ACTION`, () => {
        before(() => {
            body = {};
            payload = {
                type: 'RANDOM_ACTION',
                body
            };
        });

        it(`should return the initialState`, () => {
            expect(reducer(initialState, payload)).to.deep.eq(initialState);
        });
    });
});
