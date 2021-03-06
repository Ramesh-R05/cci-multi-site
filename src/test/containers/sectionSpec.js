import proxyquire, { noCallThru } from 'proxyquire';

import { betterMockComponentContext } from '@bxm/flux';
import googleNativeAdsConfig from '../mocks/googleNativeAds';

const Context = betterMockComponentContext();
const { React, ReactDOM, TestUtils } = Context;
noCallThru();

const PageStub = Context.createStubComponentWithChildren();
const AdStub = Context.createStubComponent();
const StickyAdStub = Context.createStubComponent();
const HeroTeaserStub = Context.createStubComponent();
const TeaserGridViewStub = Context.createStubComponent();
const TeaserListViewStub = Context.createStubComponent();
const TitleStub = Context.createStubComponent();
const RepeatableStub = Context.createStubComponent();
const SocialLinks = Context.createStubComponent();
const StickyAndDockStub = Context.createStubComponent();
const BrandTitleStub = Context.createStubComponent();
const SubsectionsListStub = Context.createStubComponent();

const SectionContainer = proxyquire('../../app/containers/section', {
    '@bxm/ad/lib/google/components/ad': AdStub,
    '@bxm/ad/lib/google/components/stickyAd': StickyAdStub,
    '../components/teaser/grid': TeaserGridViewStub,
    '../components/teaser/list': TeaserListViewStub,
    './page': PageStub,
    '../components/repeatable': RepeatableStub,
    '../components/teaser/hero': HeroTeaserStub,
    '../components/social/block': SocialLinks,
    '../components/page/stickyAndDockAd': StickyAndDockStub,
    '../components/brand/brandTitle': BrandTitleStub,
    '../components/subsectionList': SubsectionsListStub
}).default;

AdStub.pos = {
    aside: 'rhs',
    outside: 'outside',
    body: 'body',
    wallpaper: 'wallpaper',
    inskin: 'inskin',
    panel: 'panel'
};

const contextConfigStub = {
    key: 'config',
    type: '',
    value: {
        urls: {
            socialUrls: {}
        },
        brands: {
            site: [
                {
                    id: 'aww',
                    title: "Australian Women's Weekly",
                    magazineTitle: 'The Weekly',
                    imageUrl: '/assets/images/headerlogos/AWW-logo.svg',
                    url: '/aww',
                    socialLinks: {
                        facebookUrl: 'https://www.facebook.com/WomensWeeklyMag',
                        twitterUrl: 'https://twitter.com/womensweeklymag',
                        instagramUrl: 'https://www.instagram.com/womensweeklymag'
                    }
                }
            ]
        },
        features: {
            headerExpanded: true
        },
        googleNativeAds: googleNativeAdsConfig.googleNativeAdsSetting
    }
};

describe('Section Container', () => {
    Context.addStore('PageStore', {
        getModule() {
            return [];
        },

        getTitle() {
            return 'Title';
        },
        getShortTitle() {
            return 'Short Title';
        },
        getSummary() {
            return 'Summary';
        },
        getMagazineImageUrl() {
            return 'http://stubbedimages.biz/content.jpg';
        },
        getSubsections() {
            return {};
        },
        getSiteAlert() {
            return {};
        }
    });

    Context.addStore('TeaserStore', {
        getHeroTeaser() {
            return {};
        },

        getLatestTeasers() {
            return [1, 2, 3, 4, 5, 6, 7];
        },

        getCuratedHeroTeaser() {
            return null;
        },

        getList() {
            return {
                items: [[8, 9, 10, 11, 12, 13, 14]]
            };
        },

        getListPrevParams() {
            return {};
        },

        getListNextParams() {
            return {};
        }
    });

    after(Context.cleanup);

    it(`should render 1 normal ad in total`, () => {
        const reactModule = Context.mountComponent(SectionContainer, {}, [contextConfigStub]);
        const AdComponents = TestUtils.scryRenderedComponentsWithType(reactModule, AdStub);
        expect(AdComponents.length).to.eq(1);
    });

    it(`should render 1 sticky ad in total`, () => {
        const reactModule = Context.mountComponent(SectionContainer, {}, [contextConfigStub]);
        const AdComponents = TestUtils.scryRenderedComponentsWithType(reactModule, StickyAdStub);
        expect(AdComponents.length).to.eq(1);
    });

    it('should render a hero teaser', () => {
        const reactModule = Context.mountComponent(SectionContainer, {}, [contextConfigStub]);
        const HeroTeaserComponent = TestUtils.scryRenderedComponentsWithType(reactModule, HeroTeaserStub);
        expect(HeroTeaserComponent.length).to.eq(1);
    });

    it('should render a teaser grid', () => {
        const reactModule = Context.mountComponent(SectionContainer, {}, [contextConfigStub]);
        const TeaserGridViewComponent = TestUtils.scryRenderedComponentsWithType(reactModule, TeaserGridViewStub);
        expect(TeaserGridViewComponent.length).to.eq(1);
    });
});
