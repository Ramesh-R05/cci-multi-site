import proxyquire, { noCallThru } from 'proxyquire';

noCallThru();

const getModuleStub = sinon.stub();
const getLatestTeasersStub = sinon.stub();
const parseEntitiesStub = sinon.stub();

const sectionMiddleware = proxyquire('../../../../app/server/bff/middleware/section', {
    '../api/module': {
        getModule: getModuleStub
    },
    '../api/listing': {
        getLatestTeasers: getLatestTeasersStub
    },
    '../helper/parseEntity': {
        parseEntities: parseEntitiesStub
    }
}).default;

describe('Section middleware', () => {
    const config = {
        site: { host: 'http://site-host.com' },
        product: {
            id: 'foobar'
        },
        brands: {
            site: [
                {
                    id: 'aww',
                    imageUrl: '/assets/images/headerlogos/AWW-logo.svg',
                    url: '/aww',
                    title: "Australian Women's Weekly"
                },
                {
                    id: 'wd',
                    imageUrl: '/assets/images/headerlogos/WD-logo.svg',
                    url: '/womansday',
                    title: "Woman's Day"
                },
                {
                    id: 'gh',
                    imageUrl: '/assets/images/headerlogos/GH-logo.svg',
                    url: '/good-health',
                    title: 'Good Health'
                }
            ]
        },
        services: {
            remote: {
                module: 'http://module.url'
            }
        }
    };
    const validRes = { data: [1, 2], totalCount: 2 };
    const validSection = 'fashion';
    const res = {};
    let next;
    let req;
    let reqBase;
    let rejectedResponse;

    afterEach(() => {
        getModuleStub.reset();
        getLatestTeasersStub.reset();
        parseEntitiesStub.reset();
    });

    describe('when there is a section in the query param and nodeTypeAlias equal to Section', () => {
        before(() => {
            reqBase = {
                app: { locals: { config: { services: { remote: { module: '' } } } } },
                data: { entity: { nodeTypeAlias: 'Section', nodeName: 'travel' } },
                query: { section: 'sec' }
            };
        });

        describe('when the remote returns an error response', () => {
            before(() => {
                rejectedResponse = {
                    body: 'Could not find the article DOLLY-36424',
                    err: 'Error 404',
                    status: 404
                };

                next = sinon.spy();
                req = { ...reqBase };
                getModuleStub.throws(rejectedResponse);
            });

            it('should pass error to next middleware', done => {
                sectionMiddleware(req, res, next)
                    .then(() => {
                        expect(next).to.be.calledWith(rejectedResponse);
                        done();
                    })
                    .catch(done);
            });
        });

        describe('when the remote returns the list of teasers', () => {
            before(() => {
                req = {
                    ...reqBase,
                    app: {
                        locals: {
                            config: {
                                site: { host: 'http://site-host.com' },
                                services: { remote: { module: 'http://module.url' } }
                            }
                        }
                    }
                };
                req.data.headerNav = [1, 2, 3];
                next = sinon.spy();
                getLatestTeasersStub.resolves(validRes);
            });

            it('should store the latest teasers in `req.data`', done => {
                sectionMiddleware(req, res, next)
                    .then(() => {
                        expect(getLatestTeasersStub).to.have.been.calledWith(14, 0, `parentUrl eq %27/${req.query.section}%27`);
                        done();
                    })
                    .catch(done);
            });

            it('should have valid section value in `req.data.list`', done => {
                sectionMiddleware(req, res, next)
                    .then(() => {
                        expect(req.data.list.params.section).to.equal('/sec');
                        done();
                    })
                    .catch(done);
            });
        });

        describe('when a query param of pageNo 2 is passed in', () => {
            before(() => {
                const validLargeRes = { data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], totalCount: 16 };
                req = {
                    ...reqBase,
                    app: {
                        locals: {
                            config: {
                                site: { host: 'http://site-host.com' },
                                services: { remote: { module: 'http://module.url' } }
                            }
                        }
                    }
                };
                req.query.pageNo = 2;
                next = sinon.spy();
                getLatestTeasersStub.resolves(validLargeRes);
            });

            it('should not have a query param in the previous page url', done => {
                sectionMiddleware(req, res, next)
                    .then(() => {
                        expect(req.data.list.previous.url).to.equal('http://site-host.com/sec');
                        done();
                    })
                    .catch(done);
            });
        });
    });

    describe('when there is a section in the query param and nodeTypeAlias equal to CommercialTagSection', () => {
        // TODO - write tests for this functionality
    });

    describe('when there is a page query param and nodeTypeAlias equal to Section', () => {
        before(() => {
            req = { app: { locals: { config } }, data: { entity: { nodeTypeAlias: 'Section' } }, query: { page: 'page' } };
            next = sinon.stub();
        });

        it(`should call next without making a request`, done => {
            sectionMiddleware(req, res, next)
                .then(() => {
                    expect(next).to.have.been.called;
                    expect(getLatestTeasersStub).to.not.have.been.called;
                    done();
                })
                .catch(done);
        });
    });

    describe('when there is a page query param and nodeTypeAlias equal to Subsection', () => {
        before(() => {
            req = { app: { locals: { config } }, data: { entity: { nodeTypeAlias: 'Subsection' } }, query: { page: 'page' } };
            next = sinon.stub();
        });

        it(`should call next without making a request`, done => {
            sectionMiddleware(req, res, next)
                .then(() => {
                    expect(next).to.have.been.called;
                    expect(getLatestTeasersStub).to.not.have.been.called;
                    done();
                })
                .catch(done);
        });
    });

    describe('when there is a page and section query param along with a nodeTypeAlias equal to Section', () => {
        before(() => {
            req = { app: { locals: { config } }, data: { entity: { nodeTypeAlias: 'Section' } }, query: { page: 'page', section: 'section' } };
            next = sinon.stub();
        });

        it(`should call next without making a request`, done => {
            sectionMiddleware(req, res, next)
                .then(() => {
                    expect(next).to.have.been.called;
                    expect(getLatestTeasersStub).to.not.have.been.called;
                    done();
                })
                .catch(done);
        });
    });

    describe('when there is a section in the query param and nodeTypeAlias equal to Article', () => {
        before(() => {
            reqBase = { app: { locals: { config } }, data: { entity: { nodeTypeAlias: 'Article' } }, query: { section: 'section' } };
        });

        // TODO - work out if this test is useful
        describe('and there is a nodeTypeAlias equal Section', () => {
            before(() => {
                req = { ...reqBase, data: { entity: 'Section' } };
                next = sinon.stub();
            });

            it(`should call next without making a request`, done => {
                sectionMiddleware(req, res, next)
                    .then(() => {
                        expect(next).to.have.been.called;
                        expect(getLatestTeasersStub).to.not.have.been.called;
                        done();
                    })
                    .catch(done);
            });
        });
    });

    describe('when there is a brand in the query param and nodeTypeAlias equal to Brand', () => {
        let res = {};
        let next;
        let req;
        let reqBase;

        describe("when source is Australian Women's Weekly", () => {
            before(() => {
                reqBase = {
                    app: { locals: { config } },
                    query: {
                        section: validSection
                    },
                    data: {
                        entity: {
                            nodeTypeAlias: 'Brand',
                            source: "Australian Women's Weekly"
                        }
                    }
                };
                req = { ...reqBase };
                next = sinon.spy();
            });

            it('should set adBrand as aww', done => {
                sectionMiddleware(req, res, next)
                    .then(() => {
                        expect(req.data.entity.adBrand).to.equal('aww');
                        done();
                    })
                    .catch(done);
            });
        });

        describe('when articleSource is undefined', () => {
            before(() => {
                reqBase = {
                    app: { locals: { config } },
                    query: {
                        section: validSection
                    },
                    data: {
                        entity: {
                            nodeTypeAlias: 'Brand'
                        }
                    }
                };
                req = { ...reqBase };
                next = sinon.spy();
            });

            it('should set adBrand as the product id', done => {
                sectionMiddleware(req, res, next)
                    .then(() => {
                        expect(req.data.entity.adBrand).to.equal(config.product.id);
                        done();
                    })
                    .catch(done);
            });
        });

        describe('when the remote returns the list of teasers', () => {
            before(() => {
                reqBase = {
                    app: { locals: { config } },
                    query: {
                        section: validSection
                    },
                    data: {
                        entity: {
                            nodeTypeAlias: 'Brand',
                            source: "Australian Women's Weekly"
                        }
                    }
                };
                req = { ...reqBase };
                next = sinon.spy();
            });

            it('should request for teasers', done => {
                sectionMiddleware(req, res, next)
                    .then(() => {
                        expect(getLatestTeasersStub).to.have.been.calledWith(
                            14,
                            0,
                            `source eq %27Australian Women''s Weekly%27 and nodeTypeAlias ne %27Brand%27`
                        );
                        done();
                    })
                    .catch(done);
            });
        });
    });
});
