import { teaserTitleTransformer } from '../../../../app/server/bff/dataTransforms';
import teaserDataMock from '../../../mocks/article';

const createConfig = enabled => ({
    isFeatureEnabled: () => enabled
});

describe('TeaserTitle transform function', () => {
    describe('alternativeTitle feature toggle', () => {
        describe('when feature is enabled', () => {
            describe('and config has an alternative title map and teaser is valid', () => {
                describe('and teaserTitleMap has a match', () => {
                    let returnedTeaser;

                    before(() => {
                        const config = {
                            ...createConfig(true),
                            alternativeTitleMap: {
                                article: 'short read'
                            }
                        };
                        returnedTeaser = teaserTitleTransformer(teaserDataMock, config);
                    });

                    it('returns transformed teaser data', () => {
                        expect(returnedTeaser.parentName).to.eq('short read');
                    });
                });

                describe('and teaserTitleMap has no match', () => {
                    let returnedTeaser;

                    before(() => {
                        const config = {
                            ...createConfig(true),
                            alternativeTitleMap: {
                                gallery: 'picture set'
                            }
                        };
                        returnedTeaser = teaserTitleTransformer(teaserDataMock, config);
                    });

                    it('it sets the parentName to the nodeTypeAlias', () => {
                        expect(returnedTeaser.parentName).to.deep.eq(teaserDataMock.nodeTypeAlias);
                    });
                });
            });

            describe('and config has an alternative title map and teaser is invalid', () => {
                let returnedTeaser;

                before(() => {
                    const config = {
                        ...createConfig(true),
                        alternativeTitleMap: {
                            gallery: 'picture set'
                        }
                    };
                    returnedTeaser = teaserTitleTransformer({}, config);
                });

                it('returns the passed value', () => {
                    expect(returnedTeaser).to.deep.eq({});
                });
            });

            describe('and config does not have an alternative title map', () => {
                let returnedTeaser;

                before(() => {
                    const config = {
                        ...createConfig(true)
                    };
                    returnedTeaser = teaserTitleTransformer(teaserDataMock, config);
                });

                it('returns the original teaser', () => {
                    expect(returnedTeaser).to.deep.eq(teaserDataMock);
                });
            });
        });
        describe('when feature is disabled', () => {
            it('returns the original teaser', () => {
                let returnedTeaser;

                before(() => {
                    const config = {
                        ...createConfig(false)
                    };
                    returnedTeaser = teaserTitleTransformer(teaserDataMock, config);
                });

                it('returns the original teaser', () => {
                    expect(returnedTeaser).to.deep.eq(teaserDataMock);
                });
            });
        });
    });
});
