import { betterMockComponentContext } from '@bxm/flux';
import { shallow } from 'enzyme';
import teaserMock from '../../mocks/teaser';

const Context = betterMockComponentContext();
const { React } = Context;
const ImageStub = Context.createStubComponent();
const TeaserTitleStub = Context.createStubComponent();
const DateStub = Context.createStubComponent();
const AdStub = Context.createStubComponent();

AdStub.pos = {
    aside: 'rhs',
    outside: 'outside',
    body: 'body',
    wallpaper: 'wallpaper',
    inskin: 'inskin',
    panel: 'panel'
};

const context = {
    config: {
        isFeatureEnabled: () => true,
        features: {
            googleNativeAds: {
                enabled: true
            }
        },
        defaultImageUrl: '',
        global: {
            breakpoints: ''
        },
        alternativeTitleMap: {}
    }
};
const contextNZ = {
    context: {
        config: {
            defaultImageUrl: '',
            global: {
                breakpoints: ''
            },
            site: {
                region: 'nz'
            },
            alternativeTitleMap: {}
        }
    }
};
const suffix = 'suffix';
const suffixContext = {
    config: {
        defaultImageUrl: '',
        global: {
            breakpoints: ''
        },
        features: {
            reviewTitleSuffix: {
                enabled: true,
                titleSuffix: suffix
            },
            alternativeTitle: {
                enabled: true
            }
        }
    }
};

const googleNativeAdsMock = {
    index: 0,
    label: 'home_top_feed_1',
    targets: {
        kw: 'home_top_feed_1',
        adUnitPath: 'sponsored/HomeTopNewsFeed1',
        adPositionClassName: 'google-native-ad-home-top-news-feed-1'
    }
};
const nativeAdContentMock = {
    link:
        'https://www.sportingnews.com/au/nba/news/2020-21-nba-schedule-cant-miss-matchups-missed-out-on-durant-lebron-kawhi-curry-irving-lillard-wall/vxp7emul2sj318jpyes7zrzoe',
    image: 'https://tpc.googlesyndication.com/simgad/9565448443628806830?',
    headline: 'The biggest head-to-head matchups',
    sponsor: 'NBA'
};

const proxyquire = require('proxyquire').noCallThru();
const Teaser = proxyquire('../../../app/components/teaser/teaser', {
    react: React,
    '@bxm/teaser/lib/components/image': ImageStub,
    '@bxm/teaser/lib/components/title': TeaserTitleStub,
    '@bxm/datetime/lib/components/Date': DateStub,
    '@bxm/ad/lib/google/components/ad': AdStub
}).default;

describe('Component', () => {
    describe('Teaser', () => {
        const wrapper = shallow(
            <Teaser article={teaserMock.stores.homepageHeroItems.items[0]} sourceClassName="hero-teaser__source" className="hero-teaser" />,
            { context }
        );

        it('it should contain source detail', () => {
            expect(wrapper.find('p.hero-teaser__source').length).to.be.equal(1);
        });

        it('it should display default source now to love', () => {
            expect(wrapper.find('p.hero-teaser__source').text()).to.contain('Now to love');
        });

        it('it should container teaser image', () => {
            expect(wrapper.find(ImageStub).length).to.be.equal(1);
        });

        it('it should container teaser title', () => {
            expect(wrapper.find(TeaserTitleStub).length).to.be.equal(1);
        });

        it('it should container date component', () => {
            expect(wrapper.find(DateStub).length).to.be.equal(1);
        });

        it('it should use short title', () => {
            expect(wrapper.find(TeaserTitleStub).prop('title')).to.be.equal("George Clooney's wife takes name -- short");
        });

        describe('when not googleNativeAds and not nativeAdHasContentReady and not nativeAdContent', () => {
            const wrapper = shallow(
                <Teaser article={teaserMock.stores.homepageHeroItems.items[0]} sourceClassName="hero-teaser__source" className="hero-teaser" />,
                { context }
            );

            it('it should render regular teaser', () => {
                const elm = wrapper.find('.teaser__inner');
                expect(elm.length).to.be.equal(1);
            });
        });

        describe('when showGoogleNativeAds and googleNativeAds', () => {
            const wrapper = shallow(<Teaser article={teaserMock.stores.homepageHeroItems.items[0]} googleNativeAds={googleNativeAdsMock} />, {
                context
            });

            it('it should render ad slot', () => {
                const elm = wrapper.find('.ad--slot-google-native');
                expect(elm.length).to.be.equal(1);
            });
        });

        describe('when showGoogleNativeAds and googleNativeAds and nativeAdHasContentReady and nativeAdContent', () => {
            const wrapper = shallow(
                <Teaser
                    article={teaserMock.stores.homepageHeroItems.items[0]}
                    googleNativeAds={googleNativeAdsMock}
                    nativeAdHasContentReady={true}
                    nativeAdContent={nativeAdContentMock}
                />,
                { context }
            );
            wrapper.setState({ nativeAdHasContentReady: true, nativeAdContent: nativeAdContentMock });

            it('it should render google native ad teaser container', () => {
                const elm = wrapper.find('.google-native-ad-teaser-container');
                expect(elm.length).to.be.equal(1);
                expect(wrapper.state('nativeAdHasContentReady')).to.equal(true);
                expect(wrapper.state('nativeAdContent')).to.equal(nativeAdContentMock);
            });
        });

        describe('when there is source field in the article', () => {
            const wrapper = shallow(
                <Teaser
                    article={{ ...teaserMock.stores.homepageHeroItems.items[0], source: "Australian women's weekly" }}
                    sourceClassName="hero-teaser__source"
                    className="hero-teaser"
                />,
                { context }
            );

            it('it should find source with correct className to style', () => {
                const elm = wrapper.find('.hero-teaser__source--australian-women-s-weekly');
                expect(elm.length).to.be.equal(1);
                expect(elm.text()).to.contain("Australian women's weekly");
            });
        });

        describe('when it is nz site', () => {
            const wrapper = shallow(<Teaser article={teaserMock.stores.homepageHeroItems.items[0]} />, contextNZ);

            it('it should has proper teaser classname for nz site', () => {
                expect(wrapper.prop('className')).to.equal('teaser teaser--nz');
            });
        });

        describe('when teaser suffix enabled', () => {
            describe('when shortTitle is present', () => {
                const reviewTeaserMock = Object.assign({}, teaserMock.stores.homepageHeroItems.items[0]);
                reviewTeaserMock.nodeType = 'Review';
                const shortTitle = reviewTeaserMock.shortTitle;

                const wrapper = shallow(<Teaser article={{ ...reviewTeaserMock }} />, { context: suffixContext });

                it('should append suffix to teaser short title', () => {
                    expect(wrapper.find(TeaserTitleStub).prop('title')).to.be.equal(`${shortTitle}${suffix}`);
                });
            });

            describe('when shortTitle is not present', () => {
                const reviewTeaserMock = Object.assign({}, teaserMock.stores.homepageHeroItems.items[0]);
                reviewTeaserMock.nodeType = 'Review';
                reviewTeaserMock.shortTitle = '';
                const longTitle = reviewTeaserMock.title;

                const wrapper = shallow(<Teaser article={{ ...reviewTeaserMock }} />, { context: suffixContext });

                it('should append suffix to teaser long title', () => {
                    expect(wrapper.find(TeaserTitleStub).prop('title')).to.be.equal(`${longTitle}${suffix}`);
                });
            });

            describe('when it is mustread or promo component', () => {
                const reviewTeaserMock = Object.assign({}, teaserMock.stores.homepageHeroItems.items[0]);
                reviewTeaserMock.nodeType = 'Review';
                reviewTeaserMock.id = 'mustreadhome-123';
                const shortTitle = reviewTeaserMock.shortTitle;

                const wrapper = shallow(<Teaser article={{ ...reviewTeaserMock }} />, { context: suffixContext });

                describe('if shortTitle present', () => {
                    it('should not append suffix to teaser short title', () => {
                        expect(wrapper.find(TeaserTitleStub).prop('title')).to.be.equal(shortTitle);
                    });
                });

                describe('if shortTitle not present', () => {
                    const reviewTeaserMock = Object.assign({}, teaserMock.stores.homepageHeroItems.items[0]);
                    reviewTeaserMock.nodeType = 'Review';
                    reviewTeaserMock.id = 'mustreadhome-123';
                    reviewTeaserMock.shortTitle = '';

                    const longTitle = reviewTeaserMock.title;
                    const wrapper = shallow(<Teaser article={{ ...reviewTeaserMock }} />, { context: suffixContext });

                    it('should append suffix to teaser long title', () => {
                        expect(wrapper.find(TeaserTitleStub).prop('title')).to.be.equal(`${longTitle}${suffix}`);
                    });
                });
            });
        });
    });
});
