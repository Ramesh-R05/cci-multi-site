import proxyquire, { noCallThru } from 'proxyquire';

import PropTypes from 'prop-types';
import { betterMockComponentContext } from '@bxm/flux';
import googleNativeAdsConfig from '../../mocks/googleNativeAds';
import listingMock from '../../mocks/listing';

const Context = betterMockComponentContext();
const { ReactDOM, TestUtils } = Context;
const items = listingMock.data;
noCallThru();

const TeaserListStub = Context.createStubComponent();
const TeaserStub = Context.createStubComponent();
const AdStub = Context.createStubComponent();
const StickyStub = Context.createStubComponentWithChildren();

const TeaserListView = proxyquire('../../../app/components/teaser/list', {
    '@bxm/teaser/lib/components/teaserList': TeaserListStub,
    '@bxm/behaviour/lib/components/sticky': StickyStub,
    '@bxm/ad/lib/google/components/ad': AdStub,
    './teaser': TeaserStub
}).default;

AdStub.pos = {
    aside: 'rhs',
    outside: 'outside',
    body: 'body',
    wallpaper: 'wallpaper',
    inskin: 'inskin',
    panel: 'panel'
};

describe('TeaserListView', () => {
    const imageSizes = {
        s: { w: 323, h: 200 },
        m: { w: 452, h: 279 },
        l: { w: 409, h: 253 },
        xl: { w: 1010, h: 624 }
    };

    const contextConfigStub = {
        key: 'config',
        type: PropTypes.object,
        value: {
            googleNativeAds: googleNativeAdsConfig.googleNativeAdsSetting
        }
    };

    let reactModule;
    let TeaserListViewComponent;
    let AdComponent;
    let StickyComponent;

    after(Context.cleanup);

    describe('when receiving teasers', () => {
        describe('and there are more than 1', () => {
            beforeEach(() => {
                reactModule = Context.mountComponent(TeaserListView, { items, showDate: false, index: 0 }, [contextConfigStub]);
                TeaserListViewComponent = TestUtils.findRenderedComponentWithType(reactModule, TeaserListStub);
                AdComponent = TestUtils.findRenderedComponentWithType(reactModule, AdStub);
                StickyComponent = TestUtils.findRenderedComponentWithType(reactModule, StickyStub);
            });

            it(`should render the TeaserList component with relevant props`, () => {
                expect(TeaserListViewComponent.props).to.deep.eq({
                    CustomisedTeaser: TeaserStub,
                    listClassName: 'teaser-view-list',
                    articles: items,
                    showDate: false,
                    imageSizes,
                    showSubSection: true,
                    loadAgain: true,
                    adConfig: {
                        className: 'ad--teaser-list',
                        displayFor: 'small',
                        sizes: 'mrec',
                        targets: {},
                        pageLocation: 'body'
                    },
                    AdComponentClass: AdStub,
                    nativeAdConfig: {},
                    adPosition: 4
                });
            });

            it(`should render the Ad component with relevant props, inside a sticky Ad`, () => {
                const adDOM = ReactDOM.findDOMNode(AdComponent);
                const stickyDOM = ReactDOM.findDOMNode(StickyComponent);
                expect(stickyDOM.innerHTML).to.eq(adDOM.outerHTML);
                expect(AdComponent.props).to.deep.eq({
                    className: 'ad--section-mrec',
                    displayFor: ['medium', 'large', 'xlarge'],
                    sizes: { medium: ['mrec', 'double-mrec'] },
                    pageLocation: 'rhs',
                    targets: {}
                });
            });
        });

        describe('and there is only 1', () => {
            beforeEach(() => {
                reactModule = Context.mountComponent(TeaserListView, { items: items.slice(0, 1), index: 0 });
                AdComponent = TestUtils.findRenderedComponentWithType(reactModule, AdStub);
                StickyComponent = TestUtils.scryRenderedComponentsWithType(reactModule, StickyStub);
            });

            it(`should render the Ad component with relevant props, but there should be no sticky block`, () => {
                expect(StickyComponent.length).to.eq(0);
                expect(AdComponent.props).to.deep.eq({
                    className: 'ad--section-mrec',
                    displayFor: ['medium', 'large', 'xlarge'],
                    sizes: { medium: ['mrec', 'double-mrec'] },
                    pageLocation: 'rhs',
                    targets: {}
                });
            });
        });

        describe('and there are 0', () => {
            beforeEach(() => {
                reactModule = Context.mountComponent(TeaserListView, { items: [], index: 0 });
            });

            it(`should not render component`, () => {
                expect(ReactDOM.findDOMNode(reactModule)).to.not.exist;
            });
        });
    });

    describe('when setting the adTargets', () => {
        beforeEach(() => {
            reactModule = Context.mountComponent(TeaserListView, { items, adTargets: { position: 2 }, index: 0 });
            AdComponent = TestUtils.findRenderedComponentWithType(reactModule, AdStub);
        });

        it(`should pass the correct adTargets to the TeaserList component`, () => {
            expect(AdComponent.props).to.deep.eq({
                className: 'ad--section-mrec',
                displayFor: ['medium', 'large', 'xlarge'],
                sizes: { medium: ['mrec', 'double-mrec'] },
                pageLocation: 'rhs',
                targets: reactModule.props.adTargets
            });
        });
    });
});
