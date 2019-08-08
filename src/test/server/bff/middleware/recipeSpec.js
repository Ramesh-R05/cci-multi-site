import proxyquire, { noCallThru } from 'proxyquire';
import listingMock from '../../../mocks/listing';
noCallThru();

const getLatestTeasersStub = sinon.stub();
const getRecipeOverviewStub = sinon.stub();

const recipeMiddleware = proxyquire('../../../../app/server/bff/middleware/recipe', {
    '../api': {
        getLatestTeasers: getLatestTeasersStub
    },
    '../dataTransforms': {
        getRecipeOverview: getRecipeOverviewStub
    }
}).default;

const createBaseRequest = (
    req = {
        data: {
            entity: { nodeTypeAlias: 'Recipe' }
        }
    }
) => ({
    ...req
});

const mockListingQuery = "nodeTypeAlias eq 'Article' or nodeTypeAlias eq 'Gallery' or nodeTypeAlias eq 'Recipe' or nodeTypeAlias eq 'Review'";

function resetStubs() {
    getLatestTeasersStub.reset();
    getRecipeOverviewStub.reset();
}

describe('Recipe middleware', () => {
    describe('when nodeType is Recipe', () => {
        const nextSpy = sinon.spy();
        const res = {};
        let req;
        const recipeOverviewMock = ['detail 1', 'detail 2', 'detail 3'];

        beforeEach(() => {
            req = createBaseRequest();
            getLatestTeasersStub.withArgs(20, undefined, mockListingQuery).resolves(listingMock);
            getRecipeOverviewStub.withArgs(req.data.entity).returns(recipeOverviewMock);
        });

        afterEach(() => {
            req = {};
        });

        after(() => {
            resetStubs();
        });

        it('should set the request data left hand side', done => {
            recipeMiddleware(req, res, nextSpy).then(() => {
                expect(req.data.leftHandSide).to.deep.eq(listingMock);
                done();
            });
        });

        it('adds the recipeOverview property to the entity', done => {
            recipeMiddleware(req, res, nextSpy).then(() => {
                expect(req.data.entity.recipeOverview).to.deep.eq(recipeOverviewMock);
                done();
            });
        });
        it('should call the next middleware', done => {
            recipeMiddleware(req, res, nextSpy).then(() => {
                expect(nextSpy).to.be.called;
                done();
            });
        });
    });
    describe('when nodeType is not Recipe', () => {
        const nextSpy = sinon.spy();
        const res = {};
        let req;

        beforeEach(() => {
            req = createBaseRequest({
                data: {
                    entity: { nodeTypeAlias: 'Article' }
                }
            });
        });

        it('should not call getLatestTeasers', done => {
            recipeMiddleware(req, res, nextSpy).then(() => {
                expect(getLatestTeasersStub).to.not.be.called;
                done();
            });
        });
        it('should not call getRecipeSummary', done => {
            expect(getRecipeOverviewStub).to.not.be.called;
            done();
        });
        it('should call the next middleware', done => {
            expect(nextSpy).to.be.called;
            done();
        });
    });
});
