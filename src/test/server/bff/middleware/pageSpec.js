import proxyquire, { noCallThru } from 'proxyquire';
import entity from '../../../mocks/article';
noCallThru();

const getEntityStub = sinon.stub();
const getPageIDStub = sinon.stub();

const pageMiddleware = proxyquire('../../../../app/server/bff/middleware/page', {
    '../api': { getEntity: getEntityStub },
    '../helper/getPageID': getPageIDStub
}).default;

describe('Page middleware', () => {
    const config = {
        services: { remote: { entity: 'http://entitiesUrl.com/' } }
    };
    const res = {};
    const validSection = 'fashion';
    const validSubsection = 'models';
    const validPageName = 'kendall-jenners-skin-doctor-tells-us-what-mistake';
    const validPageId = 3640;
    const validPage = `${validPageName}`;
    let next;
    let req;

    afterEach(() => {
        getEntityStub.reset();
        getPageIDStub.reset();
    });

    describe('when the path does not contain an ID number in the slug', () => {
        before(() => {
            req = {
                app: { locals: { config } },
                query: { section: validSection, subsection: validSubsection, page: validPage },
                params: {}
            };
            next = sinon.spy();
            getPageIDStub.returns(undefined);
        });

        it('should pass error to next middleware', done => {
            pageMiddleware(req, res, next)
                .then(() => {
                    expect(next).to.be.calledWith({
                        status: 404,
                        message: 'Invalid page ID',
                        section: validSection,
                        page: validPage
                    });
                    done();
                })
                .catch(done);
        });
    });

    describe(`when the req already contains 'data.entity'`, () => {
        before(() => {
            req = {
                app: { locals: { config } },
                data: { entity: {} },
                query: { section: validSection, page: validPage },
                paramas: {}
            };
            next = sinon.spy();
        });

        it('should pass error to next middleware', done => {
            pageMiddleware(req, res, next)
                .then(() => {
                    expect(next).to.be.calledWith();
                    expect(getPageIDStub).to.not.have.been.called;
                    expect(getEntityStub).to.not.have.been.called;
                    done();
                })
                .catch(done);
        });
    });

    describe('when the remote returns an error response', () => {
        let rejectedResponse;

        before(() => {
            req = {
                app: { locals: { config } },
                query: { section: validSection, page: validPage, id: validPageId },
                paramas: {}
            };
            rejectedResponse = {
                body: 'Could not find the article DOLLY-36424',
                err: 'Error 404',
                status: 404
            };
            next = sinon.spy();
            getEntityStub.throws(rejectedResponse);
            getPageIDStub.returns('DOLLY-36424');
        });

        it('should pass error to next middleware', done => {
            pageMiddleware(req, res, next)
                .then(() => {
                    expect(next).to.be.calledWith(rejectedResponse);
                    done();
                })
                .catch(done);
        });
    });

    describe(`when the req is a preview page`, () => {
        before(() => {
            req = {
                app: { locals: { config } },
                query: { section: validSection, page: validPage, preview: 'preview' },
                params: {}
            };
            next = sinon.spy();
            getEntityStub.resolves(entity);
            getPageIDStub.returns('DOLLY-3640');
        });

        it('should call getEntityStub with saved data', done => {
            pageMiddleware(req, res, next)
                .then(() => {
                    expect(getEntityStub).to.have.been.calledWith('DOLLY-3640?saved=true');
                    done();
                })
                .catch(done);
        });
    });

    describe('when the remote returns an entity in the response and is not a preview page', () => {
        describe('and the url does not match the url in response', () => {
            beforeEach(() => {
                req = {
                    app: { locals: { config } },
                    query: { section: validSection, subsection: validSubsection, page: validPage },
                    params: {}
                };
                next = sinon.spy();
                getEntityStub.resolves(entity);
                getPageIDStub.returns('DOLLY-3640');
            });

            it('should call getEntityStub without saved data', done => {
                req.query.section = 'anotherSection';
                pageMiddleware(req, res, next)
                    .then(() => {
                        expect(getEntityStub).to.have.been.calledWith('DOLLY-3640?saved=false');
                        done();
                    })
                    .catch(done);
            });

            it('should return an error when section does not match remote', done => {
                req.query.section = 'anotherSection';
                req.query.subsection = 'anotherSubsection';
                pageMiddleware(req, res, next)
                    .then(() => {
                        expect(next).to.be.calledWith(
                            sinon.match(err => {
                                return err.message === `Path /anotherSection/anotherSubsection/${validPage} does not match page`;
                            })
                        );
                        done();
                    })
                    .catch(done);
            });

            it('should return an error when the page does not match remote', done => {
                req.query.page = `another-page-${validPageId}`;
                pageMiddleware(req, res, next)
                    .then(() => {
                        expect(next).to.be.calledWith(
                            sinon.match(err => {
                                return err.message === `Path /${validSection}/${validSubsection}/another-page-${validPageId} does not match page`;
                            })
                        );
                        done();
                    })
                    .catch(done);
            });
        });

        describe('and the url matches the data.url of the response', () => {
            beforeEach(() => {
                req = {
                    app: { locals: { config } },
                    query: {
                        section: validSection,
                        subsection: validSubsection,
                        page: validPage,
                        id: validPageId
                    }
                };
                next = sinon.spy();
                getEntityStub.resolves(entity);
                getPageIDStub.returns('DOLLY-3640');
            });

            it('should store the entity in `req.data`', done => {
                pageMiddleware(req, res, next)
                    .then(() => {
                        expect(req.data.entity).to.deep.equal(entity);
                        done();
                    })
                    .catch(done);
            });

            it('should store the section in `req.data`', done => {
                pageMiddleware(req, res, next)
                    .then(() => {
                        expect(req.data.section).to.deep.equal({ id: entity.sectionId, name: 'fashion', urlName: 'fashion' });
                        expect(req.data.subsection).to.deep.equal({ name: 'models', urlName: 'models' });
                        done();
                    })
                    .catch(done);
            });
        });
    });

    describe('when the request contains existing data', () => {
        before(() => {
            req = {
                data: { header: 'Test' },
                app: { locals: { config } },
                query: { section: validSection, page: validPage },
                params: {}
            };
            next = sinon.spy();
            getEntityStub.resolves(entity);
            getPageIDStub.returns('DOLLY-3640');
        });

        it(`should keep the existing header data in 'req.data'`, done => {
            pageMiddleware(req, res, next)
                .then(() => {
                    expect(req.data.header).to.equal(req.data.header);
                    done();
                })
                .catch(done);
        });
    });
});
