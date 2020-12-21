import proxyquire, { noCallThru } from 'proxyquire';

import { betterMockComponentContext } from '@bxm/flux';
import googleNativeAdsConfig from '../mocks/googleNativeAds';

const Context = betterMockComponentContext();
const { React, ReactDOM, TestUtils } = Context;
noCallThru();

const PageStub = Context.createStubComponentWithChildren();
const AdStub = Context.createStubComponent();
const HeroTeaserStub = Context.createStubComponent();
const TeaserGridViewStub = Context.createStubComponent();
const TeaserListViewStub = Context.createStubComponent();
const SocialLinks = Context.createStubComponent();
const RepeatableStub = Context.createStubComponent();
const StickyAndDockStub = Context.createStubComponent();
const PromotedStub = Context.createStubComponent();
const MustReadStub = Context.createStubComponent();
const StickyAdStub = Context.createStubComponent();
const PageSearchBoxStub = Context.createStubComponent();

const HomeContainer = proxyquire('../../app/containers/home', {
    '@bxm/ad/lib/google/components/ad': AdStub,
    '@bxm/ad/lib/google/components/stickyAd': StickyAdStub,
    './page': PageStub,
    '../components/teaser/hero': HeroTeaserStub,
    '../components/teaser/grid': TeaserGridViewStub,
    '../components/teaser/list': TeaserListViewStub,
    '../components/repeatable': RepeatableStub,
    '../components/social/block': SocialLinks,
    '../components/page/stickyAndDockAd': StickyAndDockStub,
    '../components/promoted/promoted': PromotedStub,
    '../components/mustRead/mustRead': MustReadStub,
    '../components/search/pageSearchBox': PageSearchBoxStub
}).default;

AdStub.pos = {
    aside: 'rhs',
    outside: 'outside',
    body: 'body',
    wallpaper: 'wallpaper',
    inskin: 'inskin',
    panel: 'panel'
};

describe('Home Container', () => {
    let reactModule;

    const contextConfigStub = {
        key: 'config',
        type: '',
        value: {
            googleNativeAds: googleNativeAdsConfig.googleNativeAdsSetting,
            urls: {
                socialUrls: {
                    facebookUrl: 'https://www.facebook.com/nowtolovenz',
                    twitterUrl: 'https://twitter.com/NowToLovenz',
                    instagramUrl: 'https://www.instagram.com/NowToLovenz'
                }
            },
            features: {
                headerExpanded: true,
                mustRead: {
                    showOutsideContainer: true,
                    showInsideContainer: false
                },
                promoted: {
                    showBelowHero: false,
                    showAboveBottomTeasers: true
                }
            },
            isFeatureEnabled: () => {}
        }
    };

    Context.addStore('PageStore', {
        getModule() {
            return [];
        },

        promotedItems() {
            return [];
        },

        getMustReadItems() {
            return [];
        },
        getMagazineImageUrl() {
            return 'http://stubbedimages.biz/content.jpg';
        },
        getHomeSearchBox() {
            return {};
        }
    });

    Context.addStore('TeaserStore', {
        getHeroTeaser() {
            return { id: 'HERO-TEASER' };
        },

        getLatestTeasers() {
            return [1, 2, 3, 4, 5, 6, 7];
        },

        getList() {
            return [8, 9, 10, 11, 12, 13, 14];
        },

        getListPrevParams() {
            return {};
        },

        getListNextParams() {
            return {};
        },

        getPromoted() {
            return {};
        }
    });

    after(Context.cleanup);

    it(`should render 1 normal ad in total`, () => {
        const reactModule = Context.mountComponent(HomeContainer, {}, [contextConfigStub]);
        const AdComponents = TestUtils.scryRenderedComponentsWithType(reactModule, AdStub);
        expect(AdComponents.length).to.eq(1);
    });

    it(`should render 1 sticky ad in total`, () => {
        const reactModule = Context.mountComponent(HomeContainer, {}, [contextConfigStub]);
        const AdComponents = TestUtils.scryRenderedComponentsWithType(reactModule, StickyAdStub);
        expect(AdComponents.length).to.eq(1);
    });
});
