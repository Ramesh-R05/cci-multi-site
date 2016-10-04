import {betterMockComponentContext, connectToStores} from '@bxm/flux';
const Context = betterMockComponentContext();
const {React, ReactDOM, TestUtils} = Context;
import proxyquire, {noCallThru} from 'proxyquire';
noCallThru();
const ErrorStub = Context.createStubComponent();
const platformStub = {
    set() {}
};
const App = proxyquire('../../app/components/app', {
    'fluxible-router': { handleHistory: Component => Component },
    '@bxm/flux': { provideContext: Component => Component, connectToStores },
    './page/error': ErrorStub,
    '@bxm/ui/lib/common/platform': platformStub
}).default;

const Handler = Context.createStubComponent();

describe('App Component', () => {
    const title = 'Title';
    const siteName = 'Dolly';
    const nodeType = 'NodeType';
    let error = null;

    Context.addStore('PageStore', {
        getErrorStatus() {
            return error;
        },
        getTitle() {
            return title;
        },
        getNodeType() {
            return nodeType;
        }
    });

    Context.addStore('RouteStore', {
        isNavigateComplete() {
            return true
        }
    });

    const currentRoute = {
        handler: Handler,
        url: '/url'
    };
    let ErrorComponent;
    let HandlerComponent;
    let reactModule;

    afterEach(Context.cleanup);

    describe(`when error is not defined`, () => {
        beforeEach(() => {
            platformStub.set = sinon.stub();
            reactModule = Context.mountComponent(App, {currentRoute});
            HandlerComponent = TestUtils.findRenderedComponentWithType(reactModule, Handler);
            ErrorComponent = TestUtils.scryRenderedComponentsWithType(reactModule, ErrorStub)
        });

        it(`should have called platform.set()`, () => {
            platformStub.set.should.have.been.called;
        });

        it(`should pass appropriate props to the Handler Component`, () => {
            expect(HandlerComponent.props).to.deep.eq({ currentUrl: currentRoute.url, nodeType })
        });

        it(`should not render the Error Component`, () => {
            expect(ErrorComponent.length).to.eq(0);
        });
    });

    describe(`when the error is defined`, () => {
        beforeEach(() => {
            error = {status: 404};
            reactModule = Context.mountComponent(App, {currentRoute});
            HandlerComponent = TestUtils.scryRenderedComponentsWithType(reactModule, Handler);
            ErrorComponent = TestUtils.findRenderedComponentWithType(reactModule, ErrorStub)
        });

        afterEach(() => {
            error = null;
        });

        it(`should pass appropriate props to the Error Component`, () => {
            expect(ErrorComponent.props).to.deep.eq({ currentUrl: currentRoute.url, status: error.status })
        });

        it(`should pass the error status code to the Error Component`, () => {
            expect(ErrorComponent.props.status).to.eq(error.status);
        });

        it(`should not render the Handler Component`, () => {
            expect(HandlerComponent.length).to.eq(0);
        });
    });
});
