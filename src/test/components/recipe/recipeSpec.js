import { betterMockComponentContext } from '@bxm/flux';
import recipeMock from '../../mocks/recipe';
import breakpoints from '../../mocks/breakpoints';
import feedDataMock from '../../mocks/feed';
import moreFromMock from '../../mocks/moreFrom';

const Context = betterMockComponentContext();
const { React, ReactDOM, TestUtils } = Context;
const proxyquire = require('proxyquire').noCallThru();
const AdStub = Context.createStubComponent();
const StickyAdStub = Context.createStubComponent();
const NativeAdStub = Context.createStubComponent();
const HeaderStub = Context.createStubComponent();
const FooterStub = Context.createStubComponent();
const ContentBody = Context.createStubComponent();
const BrandLogoStub = Context.createStubComponent();
const RecommendationsStub = Context.createStubComponent();
const RelatedContentComponentStub = Context.createStubComponent();
const OutbrainStub = Context.createStubComponent();
const FeedCarouselStub = Context.createStubComponent();
const RecipeAtGlanceStub = Context.createStubComponent();
const RecipeIngredientsStub = Context.createStubComponent();
const RecipeMethodStub = Context.createStubComponent();
const RecipeNotesStub = Context.createStubComponent();
const MoreFromStub = Context.createStubComponent();

const staticConfigurationStoreStub = { getBreakpoints: sinon.spy };
const keywords = ['homes_Topic_Garden_planner', 'homes_Homes_navigation_Outdoor'];
const kingtag = 'Outdoor';

let outbrain = true;
const contextConfigStub = {
    key: 'config',
    type: '',
    value: {
        get: () => breakpoints,
        isFeatureEnabled: function() {
            return outbrain;
        },
        site: {
            name: 'Site Name'
        },
        urls: {
            newsletterSignupInBodyCopy: 'https://cb.sailthru.com/for-site'
        },
        features: {
            newsletterSignupInBodyCopy: {
                enabled: true
            }
        },
        brands: {
            uniheader: []
        },
        product: {
            id: 'awwfood'
        }
    }
};

const Recipe = proxyquire('../../../app/components/recipe/recipe', {
    react: React,
    'react/addons': React,
    '@bxm/article/lib/components/article/header': HeaderStub,
    '@bxm/article/lib/components/article/footer': FooterStub,
    '@bxm/article/lib/components/article/brandLogo': BrandLogoStub,
    '@bxm/article/lib/components/article/outbrain': OutbrainStub,
    '@bxm/article/lib/components/article/feedCarousel': FeedCarouselStub,
    '@bxm/recommendations/lib/components/recommendations': RecommendationsStub,
    '@bxm/ad/lib/google/components/ad': AdStub,
    '@bxm/ad/lib/google/components/nativeAd': NativeAdStub,
    '@bxm/article/lib/components/contentBody/contentBody': ContentBody,
    '@bxm/ui/lib/to-love/stores/staticConfigurationStore': staticConfigurationStoreStub,
    '@bxm/article/lib/components/article/relatedContent': RelatedContentComponentStub,
    '@bxm/article/lib/components/article/moreFrom': MoreFromStub,
    '@bxm/ad/lib/google/components/stickyAd': StickyAdStub,
    './recipeAtGlance': RecipeAtGlanceStub,
    './recipeIngredients': RecipeIngredientsStub,
    './recipeMethod': RecipeMethodStub,
    './recipeNotes': RecipeNotesStub
}).default;

AdStub.pos = {
    aside: 'rhs',
    outside: 'outside',
    body: 'body',
    wallpaper: 'wallpaper',
    inskin: 'inskin',
    panel: 'panel',
    outOfPage: 'outOfPage'
};

describe(`Recipe Component`, () => {
    const imageUrl = 'http://www.imageUrl.com/image.jpg';
    const dateCreated = 'today';
    const articleClassName = `article`;
    const title = recipeMock.title;
    const contentBody = recipeMock.contentBody;
    const contentBodyClass = `article__body article__body--top-border`;
    const source = recipeMock.source;
    const pageId = recipeMock.id;
    const footerMetaClass = Context.createStubComponent();
    const summary = recipeMock.summary;
    const tagsDetails = recipeMock.tagsDetails;
    const adKeywords = keywords;
    const className = `test-article`;
    const authorProfiles = recipeMock.authorProfiles;
    const contentBodyConfig = { foo: `bar` };
    const heroItem = {
        imageUrl: recipeMock.imageUrl,
        imageAltText: recipeMock.imageAltText,
        imageCaption: recipeMock.imageCaption
    };
    const feedItems = feedDataMock;
    const articleHeaderOrder = ['Source', 'Something'];

    let reactModule;

    afterEach(Context.cleanup);

    describe(`when passing all props`, () => {
        let adStub;
        let topAdStub;
        let middleAdStub;
        let bottomAdStub;
        let nativeAdStub;
        let headerSub;
        let contentBodySub;
        let footerSub;
        let recommendationsStub;
        let outbrainStub;
        let feedCarouselStub;
        let recipeIngredientsStub;
        let recipeMethodStub;
        let recipeNotesStub;

        before(`rendering component`, () => {
            reactModule = Context.mountComponent(
                Recipe,
                {
                    articleHeaderOrder,
                    authorProfiles,
                    className,
                    contentBodyConfig,
                    contentBody,
                    dateCreated,
                    imageUrl,
                    heroItem,
                    footerMetaClass,
                    source,
                    summary,
                    tagsDetails,
                    title,
                    pageId,
                    feedItems,
                    showAd: false,
                    showAdBeforeRecommendations: true,
                    showOutbrain: true,
                    outbrainConfig: {},
                    showFeedCarousel: true,
                    moreFrom: moreFromMock
                },
                [contextConfigStub]
            );

            const adStubs = TestUtils.scryRenderedComponentsWithType(reactModule, AdStub);
            const StickyAdStubStubs = TestUtils.scryRenderedComponentsWithType(reactModule, StickyAdStub);
            topAdStub = adStubs[0];
            middleAdStub = adStubs[1];
            bottomAdStub = StickyAdStubStubs[0];
            headerSub = TestUtils.findRenderedComponentWithType(reactModule, HeaderStub);
            contentBodySub = TestUtils.findRenderedComponentWithType(reactModule, ContentBody);
            footerSub = TestUtils.findRenderedComponentWithType(reactModule, FooterStub);
            recommendationsStub = TestUtils.findRenderedComponentWithType(reactModule, RecommendationsStub);
            outbrainStub = TestUtils.findRenderedComponentWithType(reactModule, OutbrainStub);
            feedCarouselStub = TestUtils.findRenderedComponentWithType(reactModule, FeedCarouselStub);
            recipeIngredientsStub = TestUtils.findRenderedComponentWithType(reactModule, RecipeIngredientsStub);
            recipeMethodStub = TestUtils.findRenderedComponentWithType(reactModule, RecipeMethodStub);
            recipeNotesStub = TestUtils.findRenderedComponentWithType(reactModule, RecipeNotesStub);
        });

        it(`should render the component with class "${articleClassName}"`, () => {
            const classNames = ReactDOM.findDOMNode(reactModule).className.split(/\s+/);
            expect(classNames).to.contain(articleClassName);
        });

        it(`should render the component with class "${className}"`, () => {
            const classNames = ReactDOM.findDOMNode(reactModule).className.split(/\s+/);
            expect(classNames).to.contain(className);
        });

        it(`should render the key recipe sub-components on the page`, () => {
            expect(headerSub).to.exist;
            expect(contentBodySub).to.exist;
            expect(recommendationsStub).to.exist;
        });

        it(`should render the recipe details components on the page`, () => {
            expect(recipeIngredientsStub).to.exist;
            expect(recipeMethodStub).to.exist;
            expect(recipeNotesStub).to.exist;
        });

        describe(`Header sub-component`, () => {
            it(`should have heroItem object`, () => {
                expect(headerSub.props.heroItem).to.eq(heroItem);
            });

            it(`should have summary "${summary}"`, () => {
                expect(headerSub.props.summary).to.eq(summary);
            });

            it(`should have title "${title}"`, () => {
                expect(headerSub.props.title).to.eq(title);
            });
        });

        describe(`ContentBody sub-component`, () => {
            it(`should have body array`, () => {
                expect(contentBodySub.props.body).to.eq(contentBody);
            });

            it(`should have breakpoints object`, () => {
                expect(contentBodySub.props.breakpoints).to.eq(breakpoints);
            });

            it(`should have class "${contentBodyClass}"`, () => {
                expect(contentBodySub.props.className).to.eq(contentBodyClass);
            });

            it(`should get the context config"`, () => {
                expect(contentBodySub.props.config).to.deep.eq({ foo: `bar` });
            });

            it(`should pass the relatedContentComponent prop`, () => {
                expect(contentBodySub.props.relatedContentComponent).to.eq(RelatedContentComponentStub);
            });
        });

        describe(`Footer sub-component`, () => {
            it(`should have authorProfiles object`, () => {
                expect(footerSub.props.authorProfiles).to.eq(authorProfiles);
            });

            it(`should have footerMetaClass prop`, () => {
                expect(footerSub.props.footerMetaClass).to.deep.eq(footerMetaClass);
            });

            it(`should have tags array`, () => {
                expect(footerSub.props.tagsDetails).to.eq(tagsDetails);
            });
        });

        describe('moreFrom sub component', () => {
            it('should render to the page', () => {
                expect(MoreFromStub).to.exist;
            });

            it('should be passed the moreFrom data as props', () => {
                expect(MoreFromStub.props).to.deep.eq(...moreFromMock);
            });
        });

        describe('when source prop is not present', () => {
            before(() => {
                reactModule = Context.mountComponent(
                    Recipe,
                    {
                        contentBody
                    },
                    [contextConfigStub]
                );
            });

            it('should not render BrandLogo Component', () => {
                const output = TestUtils.scryRenderedComponentsWithType(reactModule, BrandLogoStub);
                expect(output.length).to.be.equal(0);
            });
        });

        describe('when source prop is present', () => {
            before(() => {
                reactModule = Context.mountComponent(
                    Recipe,
                    {
                        source: 'test',
                        contentBody
                    },
                    [contextConfigStub]
                );
            });

            it('should render BrandLogo Component', () => {
                TestUtils.scryRenderedComponentsWithType(reactModule, BrandLogoStub);
            });
        });

        describe(`when articleHeaderOrder prop contains "Hero"`, () => {
            before(() => {
                reactModule = Context.mountComponent(
                    Recipe,
                    {
                        articleHeaderOrder: [...articleHeaderOrder, 'Hero'],
                        heroItem,
                        contentBody
                    },
                    [contextConfigStub]
                );
            });

            it(`should present RecipeAtGlanceStub as an array element in the articleHeaderOrder prop of Header Component `, () => {
                headerSub = TestUtils.findRenderedComponentWithType(reactModule, HeaderStub);
                const indexOfHero = headerSub.props.articleHeaderOrder.indexOf('Hero');
                expect(headerSub.props.articleHeaderOrder[indexOfHero - 1].type).to.equal(RecipeAtGlanceStub);
            });
        });
        // TODO - Cleanup ad tests
        // describe(`Top ad sub-component`, () => {
        //     const className = 'ad--article-top';
        //     const displayFor = ['medium', 'large', 'xlarge'];
        //     const sizes = {
        //         banner: 'banner',
        //         leaderboard: 'leaderboard',
        //         railBanner: 'banner',
        //         railLeaderboard: 'leaderboard',
        //         xlarge: ['billboard', 'leaderboard']
        //     };
        //     const targets = {
        //         brand: source,
        //         keyword: adKeywords,
        //         kingtag: kingtag,
        //         pageId
        //     };
        //
        //     it(`should have className "${className}"`, () => {
        //         expect(topAdStub.props.className).to.eq(className);
        //     });
        //
        //     it(`should have displayFor array`, () => {
        //         expect(topAdStub.props.displayFor).to.eql(displayFor);
        //     });
        //
        //     it(`should have sizes object`, () => {
        //         console.log('-----------------');
        //         console.log(topAdStub.props.sizes)
        //         expect(topAdStub.props.sizes).to.eql(sizes);
        //     });
        //
        //     it(`should have targets object "${targets}"`, () => {
        //         expect(topAdStub.props.targets).to.eql(targets);
        //     });
        // });
        //
        // describe(`Middle ad sub-component`, () => {
        //     const className = 'ad--article-before-recommendations';
        //     const displayFor = ['small', 'medium'];
        //     const sizes = {
        //         small: 'mrec'
        //     };
        //     const targets = {
        //         brand: source,
        //         keyword: adKeywords,
        //         kingtag: kingtag,
        //         pageId
        //     };
        //
        //     it(`should have className "${className}"`, () => {
        //         expect(middleAdStub.props.className).to.eq(className);
        //     });
        //
        //     it(`should have displayFor array`, () => {
        //         expect(middleAdStub.props.displayFor).to.eql(displayFor);
        //     });
        //
        //     it(`should have sizes object`, () => {
        //         expect(middleAdStub.props.sizes).to.eql(sizes);
        //     });
        //
        //     it(`should have targets object "${targets}"`, () => {
        //         expect(middleAdStub.props.targets).to.eql(targets);
        //     });
        // });
        //
        // describe(`Bottom ad sub-component`, () => {
        //     const className = 'ad--article-beneath-recommendations';
        //     const displayFor = ['small', 'medium', 'large', 'xlarge'];
        //     const sizes = {
        //         banner: 'banner',
        //         leaderboard: 'leaderboard',
        //         railBanner: 'banner',
        //         railLeaderboard: 'leaderboard',
        //         xlarge: ['billboard', 'leaderboard']
        //     };
        //     const targets = {
        //         brand: source,
        //         keyword: adKeywords,
        //         kingtag: kingtag,
        //         pageId
        //     };
        //
        //     it(`should have className "${className}"`, () => {
        //         expect(bottomAdStub.props.adProps.className).to.eq(className);
        //     });
        //
        //     it(`should have displayFor array`, () => {
        //         expect(bottomAdStub.props.adProps.displayFor).to.eql(displayFor);
        //     });
        //
        //     it(`should have sizes object`, () => {
        //         expect(bottomAdStub.props.adProps.sizes).to.eql(sizes);
        //     });
        //
        //     it(`should have targets obj "${targets}"`, () => {
        //         expect(bottomAdStub.props.adProps.targets).to.eql(targets);
        //     });
        // });

        it('should render out ad component', () => {
            adStub = TestUtils.scryRenderedComponentsWithType(reactModule, AdStub);
            recommendationsStub = TestUtils.scryRenderedComponentsWithType(reactModule, RecommendationsStub);
            expect(adStub.length).to.equal(1);
            expect(recommendationsStub.length).to.equal(1);
        });
    });

    describe(`when passing showAdBeforeRecommendations prop as false`, () => {
        let adStub;
        let recommendationsStub;
        before(() => {
            reactModule = Context.mountComponent(
                Recipe,
                {
                    showAd: false,
                    showAdBeforeRecommendations: false,
                    contentBody
                },
                [contextConfigStub]
            );
        });

        it('should not render out ad component', () => {
            adStub = TestUtils.scryRenderedComponentsWithType(reactModule, AdStub);
            recommendationsStub = TestUtils.scryRenderedComponentsWithType(reactModule, RecommendationsStub);
            expect(adStub.length).to.equal(0);
            expect(recommendationsStub.length).to.equal(0);
        });
    });

    describe(`when passing no props`, () => {
        let adStubs;

        before(`rendering component`, () => {
            reactModule = Context.mountComponent(Recipe, { contentBody }, [contextConfigStub]);
            adStubs = TestUtils.scryRenderedComponentsWithType(reactModule, AdStub);
        });

        it(`should render the component with class "${articleClassName}"`, () => {
            const classNames = ReactDOM.findDOMNode(reactModule).className.split(/\s+/);
            expect(classNames).to.contain(articleClassName);
        });
    });
});
