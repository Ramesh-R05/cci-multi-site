import { betterMockComponentContext } from '@bxm/flux';
const Context = betterMockComponentContext();
const { React, ReactDOM, TestUtils } = Context;
import { shallow } from 'enzyme';
import proxyquire, { noCallThru } from 'proxyquire';
noCallThru();

const ResponsiveImageStub = Context.createStubComponent();

const SubscribeMagBlock = proxyquire('../../../../app/components/footer/subscribe/subscribeMagBlock', {
    '@bxm/ui/lib/common/ResponsiveImage': ResponsiveImageStub
}).default;

describe('SubscribeMagBlock', () => {
    const magCoverUrlStub = 'path/of/image';

    const siteMagCover = {
        id: 'AWWFOOD-31963',
        url: '/site-cover-url',
        moduleName: 'magcover',
        moduleTitle: 'site-cover-module-title',
        moduleImageUrl: '/image-site-cover',
        pageDateCreated: '2018-07-27T05:13:20.00Z',
        isSiteMagCover: true,
        buttonText: 'site-cover-button-text'
    };
    const otherMagCovers = [
        {
            id: 'AWWFOOD-31905',
            url: '/other-mag-url-1',
            moduleName: 'magcover',
            moduleImageUrl: '/other-mag-image-1',
            pageDateCreated: '2018-07-17T00:51:08.00Z',
            isSiteMagCover: false,
            buttonText: 'other-mag-button-text-1'
        },
        {
            id: 'AWWFOOD-31906',
            url: '/other-mag-url-2',
            moduleName: 'magcover',
            moduleImageUrl: '/other-mag-image-2',
            pageDateCreated: '2018-07-17T00:51:08.00Z',
            isSiteMagCover: false,
            buttonText: 'other-mag-button-text-2'
        }
    ];
    const context = {
        config: {
            global: {
                breakpoints: ''
            }
        }
    };

    describe('when inSideNav is false', () => {
        const wrapper = shallow(<SubscribeMagBlock magCoverUrl={magCoverUrlStub} inSideNav={false} />, { context });

        it('should contain responsive image', () => {
            expect(wrapper.find(ResponsiveImageStub).length).to.be.equal(2);
        });
    });

    describe('when inSideNav is true', () => {
        const wrapper = shallow(<SubscribeMagBlock magCoverUrl={magCoverUrlStub} inSideNav />, { context });

        it('should not contain responsive image', () => {
            expect(wrapper.find(ResponsiveImageStub).length).to.be.equal(0);
        });
    });

    describe('when magCoverList prop is passed in', () => {
        const wrapper = shallow(
            <SubscribeMagBlock magCoverUrl={magCoverUrlStub} magCoverList={{ siteMagCover, otherMagCovers }} inSideNav={false} />,
            { context }
        );
        const multipleMags = wrapper.find('.subscription__image--ipad--multiple');
        it('should contain multiple mag images', () => {
            expect(multipleMags.length).to.be.equal(2);
        });

        it('should assign correct link url to multi mag component', () => {
            const expectMagUrl = '/other-mag-url-1';
            expect(multipleMags.first().props().href).to.be.equal(expectMagUrl);
        });
    });
});
