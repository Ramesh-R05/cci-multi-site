import proxyquire, { noCallThru } from 'proxyquire';
import review from '../../../mocks/review';
noCallThru();

const config = {
    features: {
        reviewTitleSuffix: {
            enabled: true,
            titleSuffix: ': Restaurant review'
        }
    }
};

const getLatestTeasersStub = sinon.stub();

const reviewMiddleware = proxyquire('../../../../app/server/bff/middleware/review', {
    '../api': {
        getLatestTeasers: getLatestTeasersStub
    }
}).default;

describe('Review middleware', () => {
    const res = {};
    let next = sinon.spy();

    describe('when nodeTypeAlias is NOT `Review`', () => {
        let req;

        before(() => {
            req = {
                data: { entity: { ...review } }
            };
            req.data.entity.nodeTypeAlias = 'Gallery';
        });

        after(() => {
            req.data.entity.nodeTypeAlias = 'Review';
        });

        it('should not set leftHandSide on `req.data` object', done => {
            reviewMiddleware(req, res, next)
                .then(() => {
                    expect(req.data).to.not.include.keys('leftHandSide');
                    expect(getLatestTeasersStub).to.not.be.called;
                    expect(next).to.be.called;
                    done();
                })
                .catch(done);
        });
    });

    describe('when nodeTypeAlias is `Review`', () => {
        let res = {};
        let req;

        beforeEach(() => {
            req = {
                data: { entity: { ...review } },
                app: {
                    locals: {
                        config
                    }
                }
            };
        });

        it('should call `getLatestTeasers` with correct params', done => {
            reviewMiddleware(req, res, next)
                .then(() => {
                    expect(getLatestTeasersStub).to.be.called;
                    expect(getLatestTeasersStub.getCall(0).args[2]).to.equal("nodeTypeAlias eq 'Article,Gallery,Recipe,Review'");
                    expect(next).to.be.called;
                    done();
                })
                .catch(done);
        });

        it('should update the title', done => {
            reviewMiddleware(req, res, next)
                .then(() => {
                    expect(req.data.entity.pageTitle).to.equal(review.pageTitle + config.features.reviewTitleSuffix.titleSuffix);
                    expect(req.data.entity.contentTitle).to.equal(review.contentTitle + config.features.reviewTitleSuffix.titleSuffix);
                    expect(next).to.be.called;
                    done();
                })
                .catch(done);
        });
    });
});
