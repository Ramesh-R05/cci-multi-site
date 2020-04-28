import { betterMockComponentContext, connectToStores } from '@bxm/flux';
import proxyquire, { noCallThru } from 'proxyquire';
const Context = betterMockComponentContext();
const { React, ReactDOM, TestUtils } = Context;
noCallThru();
const ErrorStub = Context.createStubComponent();

const App = proxyquire('../../app/containers/app', {
    'fluxible-router': { handleHistory: Component => Component },
    '@bxm/flux': { provideContext: Component => Component, connectToStores },
    '../components/page/error': ErrorStub
}).default;

const Handler = Context.createStubComponent();

describe('App Component', () => {
    const title = 'Title';
    const nodeType = 'NodeType';
    const themeMock = {
        id: 'NOW-32655',
        dateCreated: '2017-02-07T01:27:43.00Z',
        url: '/modules/hometheme',
        themeName: 'Confetti',
        themeColour: '#31c7ce',
        themeTextColour: '#ffffff',
        themeImage: 'http://dev.assets.cougar.bauer-media.net.au/s3/digital-cougar-assets-dev/Now/2017/02/08/32655/recording-(3).gif',
        themeAlignment: 'center'
    };

    const siteAlertMock = {
        styles: {
            textColor: '#ffffff',
            backgroundColor: '#031424',
            backgroundImage: ''
        },
        primaryText: 'SITE ALERT GOURMET TRAVEL TEST.',
        secondaryText: 'try your favourite food and vote now!',
        link: 'https://aws.amazon.com/blogs/networking-and-content-delivery/continually-enhancing-domain-security-on-amazon-cloudfront/',
        isEnabled: true
    };

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
        },
        getModule() {
            return themeMock;
        },
        getSiteAlert() {
            return siteAlertMock;
        }
    });

    Context.addStore('RouteStore', {
        isNavigateComplete() {
            return true;
        }
    });

    Context.addStore('AdStore', {
        getAdComponents: () => [],
        getAdIds: () => []
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
            reactModule = Context.mountComponent(App, { currentRoute });
            HandlerComponent = TestUtils.findRenderedComponentWithType(reactModule, Handler);
            ErrorComponent = TestUtils.scryRenderedComponentsWithType(reactModule, ErrorStub);
        });

        it(`should pass appropriate props to the Handler Component`, () => {
            expect(HandlerComponent.props).to.deep.eq({ currentUrl: currentRoute.url, nodeType, theme: themeMock, siteAlert: siteAlertMock });
        });

        it(`should not render the Error Component`, () => {
            expect(ErrorComponent.length).to.eq(0);
        });
    });

    describe(`when the error is defined`, () => {
        beforeEach(() => {
            error = { status: 404 };
            reactModule = Context.mountComponent(App, { currentRoute });
            HandlerComponent = TestUtils.scryRenderedComponentsWithType(reactModule, Handler);
            ErrorComponent = TestUtils.findRenderedComponentWithType(reactModule, ErrorStub);
        });

        afterEach(() => {
            error = null;
        });

        it(`should pass appropriate props to the Error Component`, () => {
            expect(ErrorComponent.props).to.deep.eq({ currentUrl: currentRoute.url, status: error.status });
        });

        it(`should pass the error status code to the Error Component`, () => {
            expect(ErrorComponent.props.status).to.eq(error.status);
        });

        it(`should not render the Handler Component`, () => {
            expect(HandlerComponent.length).to.eq(0);
        });
    });
});
