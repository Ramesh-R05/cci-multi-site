import { betterMockComponentContext } from '@bxm/flux';
const Context = betterMockComponentContext();
const { React, ReactDOM, TestUtils } = Context;
import proxyquire, { noCallThru } from 'proxyquire';
noCallThru();

const BrandNewsletterStub = Context.createStubComponent();
const BrandMagazineStub = Context.createStubComponent();
const GiftCardStub = Context.createStubComponent();
const SocialContainerStub = Context.createStubComponent();

const SideBlock = proxyquire('../../../app/components/sideBlock/sideBlock', {
    '../brand/brandMagazine': BrandMagazineStub,
    '../brand/brandNewsletter': BrandNewsletterStub,
    '../giftCard/giftCard': GiftCardStub,
    '../social/block': SocialContainerStub
}).default;

const brandPropStub = {
    id: 'aww',
    title: "Australian Women's Weekly",
    magazineTitle: 'The Weekly',
    imageUrl: '/assets/images/headerlogos/AWW-logo.svg',
    url: '/aww',
    socialLinks: {
        facebookUrl: 'https://www.facebook.com/WomensWeeklyMag',
        twitterUrl: 'https://twitter.com/womensweeklymag',
        instagramUrl: 'http://instagram.com/womensweeklymag'
    }
};

const contextConfigStub = {
    key: 'config',
    type: '',
    value: {
        global: {
            breakpoints: ''
        },
        urls: {
            socialUrls: {
                facebookUrl: 'https://www.facebook.com/WomensWeeklyMag',
                instagramUrl: 'http://instagram.com/womensweeklymag',
                twitterUrl: 'https://twitter.com/womensweeklymag'
            }
        }
    }
};

describe(`SideBlock`, () => {
    let reactModule;
    let giftCardStub;
    let socialContainerStub;
    let brandMagazineStub;

    describe('when passing in /aww as the brand prop', () => {
        before(() => {
            reactModule = Context.mountComponent(SideBlock, { brand: brandPropStub }, [contextConfigStub]);
            socialContainerStub = TestUtils.findRenderedComponentWithType(reactModule, SocialContainerStub);
        });

        it('should render the SocialContainer component with the AWW social link props', () => {
            expect(socialContainerStub.props).to.deep.eq({
                socialUrls: brandPropStub.socialLinks
            });
        });
    });

    describe(`when passing in a prop that sets showGiftCard to true`, () => {
        before(() => {
            reactModule = Context.mountComponent(SideBlock, { showGiftCard: true, brand: brandPropStub }, [contextConfigStub]);
            giftCardStub = TestUtils.findRenderedComponentWithType(reactModule, GiftCardStub);
        });

        it(`should render the GiftCard component`, () => {
            expect(ReactDOM.findDOMNode(giftCardStub)).to.exist;
        });
    });

    describe(`when passing in showBrandMagazine prop as true`, () => {
        before(() => {
            reactModule = Context.mountComponent(SideBlock, { showBrandMagazine: true, brand: brandPropStub }, [contextConfigStub]);
            brandMagazineStub = TestUtils.findRenderedComponentWithType(reactModule, BrandMagazineStub);
        });

        it(`should render the GiftCard component`, () => {
            expect(ReactDOM.findDOMNode(brandMagazineStub)).to.exist;
        });
    });
});
