import proxyquire, { noCallThru } from 'proxyquire';
import gallery from '../../../mocks/gallery';
import listing from '../../../mocks/listing';
noCallThru();

const getLatestTeasersStub = sinon.stub();

const galleryMiddleware = proxyquire('../../../../app/server/bff/middleware/gallery', {
    '../api': {
        getLatestTeasers: getLatestTeasersStub
    }
}).default;

describe('Gallery middleware', () => {
    const res = {};
    const validNodeType = gallery.nodeTypeAlias;
    const validSectionId = gallery.sectionId;
    const validSection = 'fashion';
    const validSubsection = 'models';
    const validPageName = 'kendall-jenners-skin-doctor-tells-us-what-mistake';
    const validPageId = 3640;
    const validPage = `${validPageName}-${validPageId}`;
    let next;
    let req;

    afterEach(() => {
        getLatestTeasersStub.reset();
    });

    describe('when nodeTypeAlias is NOT `Gallery`', () => {
        before(() => {
            req = {
                data: { entity: gallery }
            };
            next = sinon.spy();
            req.data.entity.nodeTypeAlias = 'Article';
            getLatestTeasersStub.resolves(listing);
        });

        after(() => {
            req.data.entity.nodeTypeAlias = validNodeType;
        });

        it('should not set leftHandSide on `req.data` object', done => {
            galleryMiddleware(req, res, next)
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
            galleryMiddleware(req, res, next)
                .then(() => {
                    expect(req.data).to.include.keys('leftHandSide');
                    expect(next).to.be.called;
                    done();
                })
                .catch(done);
        });
    });

    describe('when nodeTypeAlias is `Gallery`', () => {
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
                            url: gallery.url,
                            sectionId: gallery.sectionId,
                            nodeTypeAlias: 'Gallery',
                            source: 'Good Health'
                        }
                    }
                };
                req = { ...reqBase };
                next = sinon.spy();
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
                            url: gallery.url,
                            sectionId: gallery.sectionId,
                            nodeTypeAlias: 'Gallery'
                        }
                    }
                };
                req = { ...reqBase };
                next = sinon.spy();
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
                            url: gallery.url,
                            sectionId: gallery.sectionId,
                            nodeTypeAlias: 'Gallery',
                            source: 'Good Health'
                        }
                    }
                };
                req = { ...reqBase };
                next = sinon.spy();
                getLatestTeasersStub.resolves(listing);
            });

            it('should set leftHandSide in req.data with `getLatestTeasers` response', done => {
                galleryMiddleware(req, res, next)
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
