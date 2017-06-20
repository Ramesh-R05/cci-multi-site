
import { betterMockComponentContext } from '@bxm/flux';
const Context = betterMockComponentContext();
const { React, ReactDOM, TestUtils } = Context;
import brandNewsletter from '../../app/components/brand/brandNewsletter';

describe(`brandNewsletter`, () => {
    let reactModule;

    const contextConfigStub = {
        key: 'config',
        type: '',
        value: {
            product: {
                id: 'product',
                newsletterUrl: '/product-newsletter/',
            }
        }
    };

    describe('when passing in brandPropStub', () => {
        before(() => {
            reactModule = Context.mountComponent(brandNewsletter, { }, [contextConfigStub]);
        });

        it('should render a component with a class of newsletter-subscribe__button', () => {
            const div = TestUtils.findRenderedDOMComponentWithClass(reactModule, 'newsletter-subscribe__button');
            expect(div).to.exist;
        });

        it('should render a component with a class of gtm-subs-homepage', () => {
            const div = TestUtils.findRenderedDOMComponentWithClass(reactModule, 'gtm-subs-homepage');
            expect(div).to.exist;
        });

        it('should render an anchor with a src of product newsletterUrl', () => {
            const a = TestUtils.findRenderedDOMComponentWithTag(reactModule, 'a');
            expect(a.href).to.eq("/product-newsletter/");
        });
    });

});
