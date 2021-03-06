import proxyquire, { noCallThru } from 'proxyquire';

import { betterMockComponentContext } from '@bxm/flux';
import googleNativeAdsConfig from '../../mocks/googleNativeAds';
import listingMock from '../../mocks/listing';

const Context = betterMockComponentContext();
const { React, ReactDOM, TestUtils } = Context;
const teasers = listingMock.data;
noCallThru();

const TeaserListStub = Context.createStubComponent();
const TeaserStub = Context.createStubComponent();

const TeaserGrid = proxyquire('../../../app/components/teaser/grid', {
    '@bxm/teaser/lib/components/teaserList': TeaserListStub,
    './teaser': TeaserStub
}).default;

const contextConfigStub = {
    key: 'config',
    type: '',
    value: {
        googleNativeAds: googleNativeAdsConfig.googleNativeAdsSetting
    }
};

describe('TeaserGridView', () => {
    const imageSizes = {
        s: { w: 690, h: 427 },
        m: { w: 486, h: 300 },
        l: { w: 624, h: 386 },
        xl: { w: 368, h: 227 }
    };
    let reactModule;
    let TeaserListComponent;

    after(Context.cleanup);

    describe('when receiving teasers', () => {
        beforeEach(() => {
            reactModule = Context.mountComponent(TeaserGrid, { teasers }, [contextConfigStub]);
            TeaserListComponent = TestUtils.findRenderedComponentWithType(reactModule, TeaserListStub);
        });

        it(`should render the TeaserList component with relevant props`, () => {
            expect(TeaserListComponent.props).to.deep.eq({
                listClassName: 'teaser-view-grid',
                articles: teasers,
                imageSizes,
                showDate: true,
                showSubSection: true,
                CustomisedTeaser: TeaserStub,
                nativeAdConfig: {},
                adConfig: {
                    pageLocation: 'body',
                    targets: {}
                }
            });
        });
    });

    describe('when passing through showDate prop as false', () => {
        beforeEach(() => {
            reactModule = Context.mountComponent(TeaserGrid, { teasers, showDate: false }, [contextConfigStub]);
            TeaserListComponent = TestUtils.findRenderedComponentWithType(reactModule, TeaserListStub);
        });

        it(`should pass the value as false to showDate`, () => {
            expect(TeaserListComponent.props.showDate).to.eq(false);
        });
    });

    describe('when setting the adTargets', () => {
        beforeEach(() => {
            reactModule = Context.mountComponent(TeaserGrid, { teasers, adTargets: { position: 2 } }, [contextConfigStub]);
            TeaserListComponent = TestUtils.findRenderedComponentWithType(reactModule, TeaserListStub);
        });
    });
});
