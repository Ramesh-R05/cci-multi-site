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
});
