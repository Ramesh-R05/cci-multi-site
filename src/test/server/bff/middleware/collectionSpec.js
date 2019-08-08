import proxyquire, { noCallThru } from 'proxyquire';
import collection from '../../../mocks/collection';
import listing from '../../../mocks/listing';
noCallThru();

const getLatestTeasersStub = sinon.stub();

const collectionMiddleware = proxyquire('../../../../app/server/bff/middleware/collection', {
    '../api': {
        getLatestTeasers: getLatestTeasersStub
    }
}).default;

describe('Collection middleware', () => {
    const res = {};
    const validNodeType = collection.nodeTypeAlias;
    const validSectionId = collection.sectionId;
    const validSection = 'fashion';
    const validSubsection = 'models';
    const validPageName = 'kendall-jenners-skin-doctor-tells-us-what-mistake';
    const validPageId = 3640;
    const validPage = `${validPageName}-${validPageId}`;
    let next;
    let req;

    describe('when nodeTypeAlias is NOT `RecipeCollection`', () => {
        before(() => {
            req = {
                data: { entity: collection }
            };
            next = sinon.spy();
            getLatestTeasersStub.resolves(listing);
            req.data.entity.nodeTypeAlias = 'Gallery';
        });

        after(() => {
            req.data.entity.nodeTypeAlias = validNodeType;
        });

        it('should not set leftHandSide on `req.data` object', done => {
            collectionMiddleware(req, res, next)
                .then(() => {
                    expect(req.data).to.not.include.keys('leftHandSide');
                    expect(next).to.be.called;
                    done();
                })
                .catch(done);
        });
    });

    describe('when there is no sectionId', () => {
        before(() => {
            delete req.data.entity.sectionId;
        });

        after(() => {
            req.data.entity.sectionId = validSectionId;
        });

        it('should set leftHandSide on `req.data` object', done => {
            collectionMiddleware(req, res, next)
                .then(() => {
                    expect(req.data).to.include.keys('leftHandSide');
                    expect(next).to.be.called;
                    done();
                })
                .catch(done);
        });
    });

    describe('when nodeTypeAlias is `RecipeCollection`', () => {
        let res = {};
        let next;
        let req;
        let reqBase;

        describe('when collectionSource is Good Health', () => {
            before(() => {
                reqBase = {
                    query: {
                        section: validSection,
                        subsection: validSubsection,
                        page: validPage
                    },
                    data: {
                        entity: {
                            url: collection.url,
                            sectionId: collection.sectionId,
                            nodeTypeAlias: 'RecipeCollection',
                            collectionSource: 'Good Health'
                        }
                    }
                };
                req = { ...reqBase };
                next = sinon.spy();
                getLatestTeasersStub.resolves(listing);
            });
        });

        describe('when collectionSource is undefined', () => {
            before(() => {
                reqBase = {
                    query: {
                        section: validSection,
                        subsection: validSubsection,
                        page: validPage
                    },
                    data: {
                        entity: {
                            url: collection.url,
                            sectionId: collection.sectionId,
                            nodeTypeAlias: 'RecipeCollection'
                        }
                    }
                };
                req = { ...reqBase };
                next = sinon.spy();
                getLatestTeasersStub.resolves(listing);
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
                            url: collection.url,
                            sectionId: collection.sectionId,
                            nodeTypeAlias: 'RecipeCollection',
                            collectionSource: 'Good Health'
                        }
                    }
                };
                req = { ...reqBase };
                next = sinon.spy();
                getLatestTeasersStub.resolves(listing);
            });

            it('should set leftHandSide in req.data with `getLatestTeasers` response', done => {
                collectionMiddleware(req, res, next)
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
