import proxyquire, { noCallThru } from 'proxyquire';

noCallThru();

const getEntityStub = sinon.stub();
const getLatestTeasersStub = sinon.stub();
const parseEntitiesStub = sinon.stub();

const homeMiddleware = proxyquire('../../../../app/server/bff/middleware/home', {
    '../api': {
        getEntity: getEntityStub,
        getLatestTeasers: getLatestTeasersStub
    },

    '../helper/parseEntity': {
        parseEntities: parseEntitiesStub
    }
}).default;

describe('Home middleware', () => {
    const config = {
        site: { host: 'http://site-host.com' }
    };
    const latestTeasers = { data: ['Teaser 1', 'Teaser 2'], totalCount: 2 };
    const teaserResponse = { data: [], totalCount: 0 };
    const entity = {
        id: 'DOLLY-ID'
    };
    const res = {};
    let next;

    afterEach(() => {
        getEntityStub.reset();
        getLatestTeasersStub.reset();
        parseEntitiesStub.reset();
    });

    describe('when the remote returns an error response', () => {
        const rejectedResponse = {
            body: 'Could not find the article DOLLY-36424',
            err: 'Error 404',
            status: 404
        };
        const req = { app: { locals: { config } }, data: { excludeTagQuery: '' } };

        before(() => {
            next = sinon.spy();
            getEntityStub.withArgs('homepage').throws(rejectedResponse);
            getLatestTeasersStub.resolves(teaserResponse);
        });

        it('should pass error to next middleware', done => {
            homeMiddleware(req, res, next)
                .then(() => {
                    expect(next).to.be.calledWith(rejectedResponse);
                    done();
                })
                .catch(done);
        });
    });

    describe('when the remote returns an entity in the response', () => {
        describe('and getLatestTeasers returns the teasers and video gallery teasers', () => {
            const req = { app: { locals: { config } }, data: { excludeTagQuery: '' } };

            beforeEach(() => {
                next = sinon.spy();
                getEntityStub.withArgs('homepage').resolves(entity);
                getLatestTeasersStub.resolves(latestTeasers);
            });

            it('should store the entity in `req.data`', done => {
                homeMiddleware(req, res, next)
                    .then(() => {
                        expect(req.data.entity).to.deep.equal(entity);
                        done();
                    })
                    .catch(done);
            });

            it('should store the section in `req.data`', done => {
                homeMiddleware(req, res, next)
                    .then(() => {
                        expect(req.data.section).to.deep.equal({ id: entity.id, name: 'Home', urlName: 'home' });
                        done();
                    })
                    .catch(done);
            });

            it('should store the latestTeasers in `req.data`', done => {
                homeMiddleware(req, res, next)
                    .then(() => {
                        expect(req.data.latestTeasers).to.deep.equal(latestTeasers.data);
                        done();
                    })
                    .catch(done);
            });
        });
    });

    describe('when the request contains existing data', () => {
        const req = { data: { header: 'Test', excludeTagQuery: '' }, app: { locals: { config } } };

        before(() => {
            next = sinon.spy();
            getEntityStub.withArgs('homepage').resolves(entity);
            getLatestTeasersStub.onFirstCall().returns(latestTeasers);
        });

        it(`should keep the existing header data in 'req.data'`, done => {
            homeMiddleware(req, res, next)
                .then(() => {
                    expect(req.data.header).to.equal(req.data.header);
                    done();
                })
                .catch(done);
        });
    });

    describe('when there is a query param', () => {
        const req = { app: { locals: { config } }, query: {}, data: { excludeTagQuery: '' } };
        const skippedQueries = ['page', 'section', 'tag'];
        after(() => {
            req.query = {};
        });

        skippedQueries.map(query => {
            describe(`and it contains a ${query} value`, () => {
                before(() => {
                    next = sinon.stub();
                    req.query[query] = query.toUpperCase();
                });

                it(`should call next without making a request`, done => {
                    homeMiddleware(req, res, next)
                        .then(() => {
                            expect(next).to.have.been.called;
                            expect(getEntityStub).to.not.have.been.called;
                            done();
                        })
                        .catch(done);
                });
            });
        });
    });

    describe('when a query param of pageNo 2 is passed in', () => {
        const req = { app: { locals: { config } }, query: { pageNo: 2 }, data: { excludeTagQuery: '' } };
        before(() => {
            next = sinon.stub();
            getEntityStub.withArgs('homepage').resolves(entity);
            getLatestTeasersStub.onFirstCall().resolves(latestTeasers);
        });

        it('should not have a query param in the previous page url', done => {
            homeMiddleware(req, res, next)
                .then(() => {
                    expect(req.data.list.previous.url).to.equal('http://site-host.com/');
                    done();
                })
                .catch(done);
        });
    });
});
