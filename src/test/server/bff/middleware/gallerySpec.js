import proxyquire, { noCallThru } from 'proxyquire';
import gallery from '../../../mocks/gallery'
import moreGalleries from '../../../mocks/moreGalleries'
noCallThru();

let getMoreGalleriesStub = () => {};

const galleryMiddleware = proxyquire('../../../../app/server/bff/middleware/gallery', {
    '../api/listing': {
        getMoreGalleries: () => { return getMoreGalleriesStub() }
    }
}).default;

describe('Gallery middleware', () => {
    const config = {
        brands: {
            uniheader: [
                {
                    "id": "aww",
                    "imageUrl": "/assets/images/headerlogos/AWW-logo.svg",
                    "url": "/aww",
                    "title": "Australian Women's Weekly"
                },
                {
                    "id": "wd",
                    "imageUrl": "/assets/images/headerlogos/WD-logo.svg",
                    "url": "/womansday",
                    "title": "Woman's Day"
                },
                {
                    "id": "gh",
                    "imageUrl": "/assets/images/headerlogos/GH-logo.svg",
                    "url": "/good-health",
                    "title": "Good Health"
                }
            ]
        }
    };
    const res = {};
    const validNodeType = gallery.nodeTypeAlias;
    const validSection = 'fashion';
    const validSubsection = 'models';
    const validPageName = 'kendall-jenners-skin-doctor-tells-us-what-mistake';
    const validPageId = 3640;
    const validPage = `${validPageName}-${validPageId}`;
    let next;
    let req;

    describe('when nodeTypeAlias is NOT `Gallery`', () => {

        before(() => {
            req = {
                data: { entity: gallery }
            };
            next = sinon.spy();
            req.data.entity.nodeTypeAlias = 'Article';
            getMoreGalleriesStub = sinon.stub().resolves(moreGalleries);
        });

        after(() => {
            req.data.entity.nodeTypeAlias = validNodeType;
        });

        it('should not set moreGalleries on `req.data` object', (done) => {
            galleryMiddleware(req, res, next).then(() => {
                expect(req.data).to.not.include.keys('moreGalleries');
                expect(next).to.be.called;
                done();
            }).catch(done);
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
                    app: { config },
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
                getMoreGalleriesStub = sinon.stub().resolves(moreGalleries);
            });

            it('should set adBrand as gh', (done) => {
                galleryMiddleware(req, res, next).then(() => {
                    expect(req.data.entity.adBrand).to.equal('gh');
                    done();
                }).catch(done);
            });
        });

        describe('when articleSource is undefined', () => {
            before(() => {
                reqBase = {
                    app: { config },
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
                getMoreGalleriesStub = sinon.stub().resolves(moreGalleries);
            });

            it('should set adBrand as ntl', (done) => {
                galleryMiddleware(req, res, next).then(() => {
                    expect(req.data.entity.adBrand).to.equal('ntl');
                    done();
                }).catch(done);

            });
        });

        describe('when moreGalleries is called', () => {

            before(() => {
                reqBase = {
                    app: { config },
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
                getMoreGalleriesStub = sinon.stub().resolves(moreGalleries);
            });

            it('should set moreGalleries in req.data with `getMoreGalleries` response', (done) => {
                galleryMiddleware(req, res, next).then(() => {
                    expect(req.data).to.include.keys('moreGalleries');
                    expect(req.data.moreGalleries).to.equal(moreGalleries);
                    expect(next).to.be.called;
                    done();
                }).catch(done);
            });
        });
    });
});
