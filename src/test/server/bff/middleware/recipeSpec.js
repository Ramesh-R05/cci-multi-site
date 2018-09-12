import proxyquire, { noCallThru } from 'proxyquire';
import article from '../../../mocks/article';
import listing from '../../../mocks/listing';
noCallThru();

let getLatestTeasersStub = () => {};

const recipeMiddleware = proxyquire('../../../../app/server/bff/middleware/recipe', {
    '../api/listing': {
        getLatestTeasers: () => {
            return getLatestTeasersStub();
        }
    }
}).default;

describe('Recipe middleware', () => {
    const res = {};
    const validNodeType = article.nodeTypeAlias;
    const validSectionId = article.sectionId;
    const validSection = 'fashion';
    const validSubsection = 'models';
    const validPageName = 'kendall-jenners-skin-doctor-tells-us-what-mistake';
    const validPageId = 3640;
    const validPage = `${validPageName}-${validPageId}`;
    let next;
    let req;

    describe('when nodeTypeAlias is NOT `Recipe`', () => {
        before(() => {
            req = {
                data: { entity: article }
            };
            next = sinon.spy();
            getLatestTeasersStub = sinon.stub().resolves(listing);
            req.data.entity.nodeTypeAlias = 'Gallery';
        });

        after(() => {
            req.data.entity.nodeTypeAlias = validNodeType;
        });

        it('should not set leftHandSide on `req.data` object', done => {
            recipeMiddleware(req, res, next)
                .then(() => {
                    expect(req.data).to.not.include.keys('leftHandSide');
                    expect(next).to.be.called;
                    done();
                })
                .catch(done);
        });
    });

    describe('when nodeTypeAlias is `Recipe`', () => {
        let res = {};
        let next;
        let req;
        let reqBase;

        describe('when articleSource is Good Health', () => {
            before(() => {
                reqBase = {
                    query: {
                        section: validSection,
                        subsection: validSubsection,
                        page: validPage
                    },
                    data: {
                        entity: {
                            url: article.url,
                            sectionId: article.sectionId,
                            nodeTypeAlias: 'Article',
                            articleSource: 'Good Health'
                        }
                    }
                };
                req = { ...reqBase };
                next = sinon.spy();
                getLatestTeasersStub = sinon.stub().resolves(listing);
            });
        });

        describe('when articleSource is undefined', () => {
            before(() => {
                reqBase = {
                    query: {
                        section: validSection,
                        subsection: validSubsection,
                        page: validPage
                    },
                    data: {
                        entity: {
                            url: article.url,
                            sectionId: article.sectionId,
                            nodeTypeAlias: 'Article'
                        }
                    }
                };
                req = { ...reqBase };
                next = sinon.spy();
                getLatestTeasersStub = sinon.stub().resolves(listing);
            });
        });

        describe('when sectionId has a value', () => {
            before(() => {
                reqBase = {
                    query: {
                        section: validSection,
                        subsection: validSubsection,
                        page: validPage
                    },
                    data: {
                        entity: {
                            url: article.url,
                            sectionId: article.sectionId,
                            nodeTypeAlias: 'Recipe',
                            articleSource: 'Good Health'
                        }
                    }
                };
                req = { ...reqBase };
                next = sinon.spy();
                getLatestTeasersStub = sinon.stub().resolves(listing);
            });

            it('should set leftHandSide in req.data with `getLatestTeasers` response', done => {
                recipeMiddleware(req, res, next)
                    .then(() => {
                        expect(req.data).to.include.keys('leftHandSide');
                        expect(req.data.leftHandSide).to.equal(listing);
                        expect(next).to.be.called;
                        done();
                    })
                    .catch(done);
            });
        });
    });
});