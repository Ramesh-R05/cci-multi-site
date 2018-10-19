import proxyquire, { noCallThru } from 'proxyquire';
noCallThru();

const teaserTitleTransformStub = sinon.stub();

const moreFromMiddleware = proxyquire('../../../../app/server/bff/middleware/moreFrom', {
    '../dataTransforms': { teaserTitleTransformer: teaserTitleTransformStub }
}).default;
const leftHandSideItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const getMockReq = (enabled = false) => ({
    data: {},
    app: {
        locals: {
            config: {
                isFeatureEnabled: () => enabled,
                features: {
                    moreFrom: {
                        title: 'More from X',
                        enabled: true,
                        options: {
                            showTeaserLink: true,
                            showSubSection: true,
                            showTeaserSummary: false,
                            imageSizes: {
                                s: { w: 690, h: 388 },
                                m: { w: 486, h: 404 },
                                l: { w: 624, h: 518 },
                                xl: { w: 368, h: 306 }
                            }
                        }
                    }
                }
            }
        }
    }
});

describe('moreFrom middleware', () => {
    describe('when moreFrom feature is enabled in config', () => {
        describe('and leftHandSide is in request data', () => {
            const res = {};
            let req = {};
            const next = sinon.spy();

            beforeEach(() => {
                teaserTitleTransformStub.reset();
                teaserTitleTransformStub.returnsArg(0);
                req = {
                    ...getMockReq(true),
                    data: { leftHandSide: { data: leftHandSideItems } }
                };
            });

            it('should take the last 4 items from the leftHandSide data', done => {
                const expectedLength = leftHandSideItems.length - 4;

                moreFromMiddleware(req, res, next)
                    .then(() => {
                        expect(req.data.leftHandSide.data).to.have.length(expectedLength);
                        done();
                    })
                    .catch(done);
            });
            it('should add a moreFrom property to request data containing the last 4 items from the leftHandSide data', done => {
                const expectedItems = leftHandSideItems.slice(leftHandSideItems.length - 4, leftHandSideItems.length);

                moreFromMiddleware(req, res, next)
                    .then(() => {
                        expect(req.data.moreFrom.items).to.deep.eq(expectedItems);
                        done();
                    })
                    .catch(done);
            });
            it('should call the teaserTitleTransform on each of the moreFrom items', done => {
                moreFromMiddleware(req, res, next)
                    .then(() => {
                        expect(teaserTitleTransformStub.callCount).to.eq(4);
                        done();
                    })
                    .catch(done);
            });
            it('should add a title property to the moreFrom request data with a title from config', done => {
                moreFromMiddleware(req, res, next)
                    .then(() => {
                        expect(req.data.moreFrom.title).to.deep.eq(req.app.locals.config.features.moreFrom.title);
                        done();
                    })
                    .catch(done);
            });
            it('should add an options property to the moreFrom request data with the options from config', done => {
                moreFromMiddleware(req, res, next)
                    .then(() => {
                        expect(req.data.moreFrom.options).to.deep.eq(req.app.locals.config.features.moreFrom.options);
                        done();
                    })
                    .catch(done);
            });
            it('should call the next middleware', done => {
                moreFromMiddleware(req, res, next)
                    .then(() => {
                        expect(next).to.be.called;
                        done();
                    })
                    .catch(done);
            });
        });
        describe('and leftHandSide is not request data', () => {
            const res = {};
            let req = {};
            const next = sinon.spy();

            beforeEach(() => {
                req = getMockReq(true);
            });

            it('should call the next middleware', done => {
                moreFromMiddleware(req, res, next)
                    .then(() => {
                        expect(next).to.be.called;
                        done();
                    })
                    .catch(done);
            });
        });
    });
    describe('when moreFrom feature is not enabled in config', () => {
        const res = {};
        let req = {};
        const next = sinon.spy();

        beforeEach(() => {
            req = {
                ...getMockReq(false),
                data: { leftHandSide: { data: leftHandSideItems } }
            };
        });

        it('should not modify the leftHandSide data', done => {
            moreFromMiddleware(req, res, next)
                .then(() => {
                    expect(req.data.leftHandSide.data).to.eq(leftHandSideItems);
                    done();
                })
                .catch(done);
        });
        it('should call the next middleware', done => {
            moreFromMiddleware(req, res, next)
                .then(() => {
                    expect(next).to.be.called;
                    done();
                })
                .catch(done);
        });
    });
});
