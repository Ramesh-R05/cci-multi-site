import proxyquire, { noCallThru } from 'proxyquire';
import article from '../../../mocks/article';
import listing from '../../../mocks/listing';
noCallThru();

const getLatestTeasersStub = sinon.stub();

const articleMiddleware = proxyquire('../../../../app/server/bff/middleware/article', {
    '../api': {
        getLatestTeasers: getLatestTeasersStub
    }
}).default;

describe('Article middleware', () => {
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

    describe('when nodeTypeAlias is NOT `Article`', () => {
        before(() => {
            req = {
                data: { entity: article }
            };
            next = sinon.spy();
            getLatestTeasersStub.resolves(listing);
            req.data.entity.nodeTypeAlias = 'Gallery';
        });

        after(() => {
            req.data.entity.nodeTypeAlias = validNodeType;
        });

        it('should not set leftHandSide on `req.data` object', done => {
            articleMiddleware(req, res, next)
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
            articleMiddleware(req, res, next)
                .then(() => {
                    expect(req.data).to.include.keys('leftHandSide');
                    expect(next).to.be.called;
                    done();
                })
                .catch(done);
        });
    });

    describe('when nodeTypeAlias is `Article`', () => {
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
                getLatestTeasersStub.resolves(listing);
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
                getLatestTeasersStub.resolves(listing);
            });
        });

        describe('when it belongs to a section that has a alternate newsletter signup iframe', () => {
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
                    },
                    app: {
                        locals: {
                            config: {
                                urls: {
                                    alternateNewsletterSignupIframeForArticle: {
                                        fashion: 'http://testIframeurl.com.au'
                                    }
                                }
                            }
                        }
                    }
                };
                req = { ...reqBase };
                next = sinon.spy();
                getLatestTeasersStub.resolves(listing);
            });

            it('Should have a the custom value as req.data.altArticleNewsLetterSignupUrl', done => {
                articleMiddleware(req, res, next)
                    .then(() => {
                        expect(req.data).to.include.keys('altArticleNewsLetterSignupUrl');
                        expect(req.data.altArticleNewsLetterSignupUrl).to.equal(
                            req.app.locals.config.urls.alternateNewsletterSignupIframeForArticle.fashion
                        );
                        expect(next).to.be.called;
                        done();
                    })
                    .catch(done);
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
                            nodeTypeAlias: 'Article',
                            articleSource: 'Good Health'
                        }
                    }
                };
                req = { ...reqBase };
                next = sinon.spy();
                getLatestTeasersStub.resolves(listing);
            });

            it('should set leftHandSide in req.data with `getLatestTeasers` response', done => {
                articleMiddleware(req, res, next)
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
