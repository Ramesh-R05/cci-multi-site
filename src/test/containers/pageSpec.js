import proxyquire, { noCallThru } from 'proxyquire';

import { betterMockComponentContext } from '@bxm/flux';

const Context = betterMockComponentContext();
const { React, ReactDOM, TestUtils } = Context;
noCallThru();

const OffCanvasStub = Context.createStubComponentWithChildren();
const UniHeaderStub = Context.createStubComponent();
const SiteHeaderStub = Context.createStubComponent();
const SiteFooterStub = Context.createStubComponent();
const NavigationStub = Context.createStubComponent();
const LogosStub = Context.createStubComponent();
const AdStub = Context.createStubComponent();
const StickyAdStub = Context.createStubComponent();
const StandardPageAdsWrapperStub = Context.createStubComponentWithChildren();

let reactModuleInstance;
const toggleMenuStub = sinon.stub();
const PageWrapper = proxyquire('../../app/containers/page', {
    react: React,
    '@bxm/nav/lib/components/hamburgerWrapper': Component => {
        return class extends React.Component {
            render() {
                reactModuleInstance = Component;
                return <Component {...this.props} toggleSideMenu={toggleMenuStub} />;
            }
        };
    },
    '@bxm/nav/lib/components/offcanvas/content': OffCanvasStub,
    '@bxm/site-header': SiteHeaderStub,
    '../components/footer': SiteFooterStub,
    '../components/uniheader': UniHeaderStub,
    '../components/page/logos': LogosStub,
    '@bxm/site-header/lib/components/hamburgerNav': NavigationStub,
    '@bxm/ad/lib/google/components/ad': AdStub,
    '@bxm/ad/lib/google/components/stickyAd': StickyAdStub,
    '@bxm/ad/lib/google/components/standardPageAdsWrapper': StandardPageAdsWrapperStub
}).default;

AdStub.pos = {
    aside: 'rhs',
    outside: 'outside',
    body: 'body',
    wallpaper: 'wallpaper',
    inskin: 'inskin',
    panel: 'panel'
};

const emailLinkTrackingMock = {
    event: 'user_linked_from_email',
    bauer_global_unique_id: 'SBKOJmETMCgmErCswcfVaI9pzo6hgyrb1IRVDX7nRKw=',
    source: 'Sailthru',
    campaign: 'BASE WELCOME template',
    medium: 'email'
};

describe('Page Container', () => {
    const siteName = 'Dolly';
    const brandStubData = {
        site: [],
        network: []
    };
    const contextConfigStub = {
        key: 'config',
        type: '',
        value: {
            brands: brandStubData,
            site: {
                name: siteName
            }
        }
    };
    const headerItems = [{ name: 'Test 1', url: '/test-1' }, { name: 'Test 2', url: '/test-2' }];
    let hamburgerItems = [
        { name: 'Test 1', url: '/test-1' },
        { name: 'Test 2', url: '/test-2' },
        { name: 'Test 3', url: '/test-3' },
        { name: 'Test 4', url: '/test-4' }
    ];
    const magCover = {};
    const isHeaderPinned = false;
    const isHeaderHidden = false;
    const headerHeight = 0;
    let reactModule;
    let offCanvas;
    let uniHeaderStub;
    let siteHeaderStub;
    let siteFooterStub;
    let navigationStub;
    let logosStub;
    let closeButton;
    let currentInstance;
    let adStub;
    let stickyAdStub;

    Context.addStore('NavigationStore', {
        getHeaderItems() {
            return headerItems;
        },

        getHamburgerItems() {
            return hamburgerItems;
        },

        isHeaderPinned() {
            return isHeaderPinned;
        },

        isHeaderHidden() {
            return isHeaderHidden;
        },

        getHeaderHeight() {
            return headerHeight;
        },

        getMagCover() {
            return magCover;
        },

        isSearchPage() {
            return false;
        }
    });

    Context.addStore('articleStore', {
        getContent() {
            return {
                tags: [1, 2, 3],
                source: 'wd',
                pageId: 1234,
                tagsDetails: [
                    {
                        name: 'homes:Topic:Garden planner',
                        fullName: 'homes_Topic_Garden_planner'
                    },
                    {
                        name: 'homes:Homes navigation:Outdoor',
                        fullName: 'homes_Homes_navigation_Outdoor'
                    }
                ]
            };
        }
    });

    Context.addStore('PageStore', {
        getModule(module) {
            if (module === 'magCover') return {};
        },

        getMagazineImageUrl() {
            return '';
        },

        getMagazineText() {
            return '';
        },

        getEmailLinkTrackingData() {
            return emailLinkTrackingMock;
        }
    });

    describe(`when passing all props`, () => {
        const props = {
            className: 'customClass',
            children: <h1>Test Children</h1>,
            headerExpanded: true,
            hideFooter: false,
            menuClasses: 'site-menu',
            currentUrl: '/',
            showUniheader: true,
            hideLeaderboard: false,
            theme: {},
            magCover: {},
            siteAlert: {}
        };

        before(() => {
            window.dataLayer = { push: sinon.stub() };
            reactModule = Context.mountComponent(PageWrapper, props, [contextConfigStub]);
            currentInstance = TestUtils.findRenderedComponentWithType(reactModule, reactModuleInstance);
            offCanvas = TestUtils.findRenderedComponentWithType(reactModule, OffCanvasStub);
            uniHeaderStub = TestUtils.findRenderedComponentWithType(reactModule, UniHeaderStub, [contextConfigStub]);
            siteHeaderStub = TestUtils.findRenderedComponentWithType(reactModule, SiteHeaderStub);
            siteFooterStub = TestUtils.findRenderedComponentWithType(reactModule, SiteFooterStub);
            navigationStub = TestUtils.findRenderedComponentWithType(reactModule, NavigationStub);
            logosStub = TestUtils.findRenderedComponentWithType(reactModule, LogosStub);
            adStub = TestUtils.scryRenderedComponentsWithType(reactModule, AdStub);
            closeButton = TestUtils.findRenderedDOMComponentWithTag(reactModule, 'button');
            stickyAdStub = TestUtils.scryRenderedComponentsWithType(reactModule, StickyAdStub);
        });

        it(`should render`, () => {
            expect(ReactDOM.findDOMNode(reactModule)).to.exist;
        });

        it(`should render with className "page ${props.className}"`, () => {
            const comp = TestUtils.scryRenderedDOMComponentsWithClass(reactModule, `page ${props.className}`);
            expect(ReactDOM.findDOMNode(comp[0])).to.exist;
        });

        it('should push emailTrackingData to datalayer when component mounts', () => {
            expect(window.dataLayer.push).to.be.calledWith(emailLinkTrackingMock);
        });

        it(`should render a wrapped element inside a className ${props.menuClasses}`, () => {
            expect(TestUtils.scryRenderedDOMComponentsWithClass(reactModule, props.menuClasses)[0]).to.exist;
        });

        it(`should render the Uni Header component`, () => {
            expect(ReactDOM.findDOMNode(uniHeaderStub)).to.exist;
        });

        it(`should render the Header component, passing the appropriate props`, () => {
            expect(siteHeaderStub.props).to.deep.eq({
                currentUrl: props.currentUrl,
                isExpanded: props.headerExpanded,
                headerClassName: 'header',
                navItems: headerItems,
                siteName,
                SubHeaderComponent: null,
                subHeaderComponentProps: {},
                toggleMenu: currentInstance.toggleMenu,
                theme: {}
            });
        });

        it(`should render the children and footer inside a content-wrapper div`, () => {
            const wrapper = TestUtils.findRenderedDOMComponentWithClass(reactModule, 'content-wrapper');
            expect(ReactDOM.findDOMNode(wrapper).getElementsByTagName('h1')[0].outerHTML + ReactDOM.findDOMNode(siteFooterStub).outerHTML).to.eq(
                ReactDOM.findDOMNode(wrapper).innerHTML
            );
        });

        it(`should render the offCanvas menu with the appropriate props`, () => {
            expect(ReactDOM.findDOMNode(offCanvas)).to.exist;
            expect(offCanvas.props).to.deep.contain({
                side: 'left',
                toggleSideMenu: currentInstance.toggleMenu
            });
        });

        it(`should render the Logos with the appropriate props`, () => {
            expect(ReactDOM.findDOMNode(logosStub)).to.exist;
            expect(logosStub.props).to.deep.contain({
                className: 'mobile-menu-list',
                openInNewTab: true
            });
        });

        it(`should pass the correct props to the Navigation component`, () => {
            const mobileNav = hamburgerItems.slice();
            mobileNav.unshift({ name: 'Home', url: '/' });

            expect(navigationStub.props).to.deep.eq({
                className: 'mobile-menu',
                items: mobileNav,
                currentUrl: props.currentUrl
            });
        });

        it.skip(`should pass the toggleMenu function to the button as an onClick`, () => {
            expect(buttonEl.onclick).to.eq(currentInstance.toggleMenu);
        });

        it(`should render close button and Navigation component as children of the offCanvas component`, () => {
            const offCanvasInnterHTML = ReactDOM.findDOMNode(offCanvas).innerHTML;
            expect(offCanvasInnterHTML).to.contain(ReactDOM.findDOMNode(navigationStub).outerHTML);
            expect(offCanvasInnterHTML).to.contain(ReactDOM.findDOMNode(closeButton).outerHTML);
        });

        it('should render a top ad banner', () => {
            expect(stickyAdStub[0].props.adProps.className).to.be.equal('ad--section-top-leaderboard');
            expect(stickyAdStub[0].props.adProps.targets).to.deep.eq({ keyword: ['homes_Topic_Garden_planner', 'homes_Homes_navigation_Outdoor'] });
        });

        describe(`when the close button is clicked`, () => {
            before(() => {
                TestUtils.Simulate.click(closeButton);
            });

            it(`should call the toggleSideMenu prop with the argument 'left'`, () => {
                toggleMenuStub.should.have.been.calledWith('left');
            });
        });
    });

    describe(`the current page is not home page`, () => {
        const props = {
            className: 'customClass',
            children: <h1>Test Children</h1>,
            headerExpanded: true,
            hideFooter: false,
            menuClasses: 'site-menu',
            currentUrl: '/page',
            showUniheader: false
        };

        before(() => {
            reactModule = Context.mountComponent(PageWrapper, props, [contextConfigStub]);
            uniHeaderStub = TestUtils.scryRenderedComponentsWithType(reactModule, UniHeaderStub);
        });

        it(`should not render the Brand Component`, () => {
            expect(uniHeaderStub.length).to.eq(0);
        });
    });

    describe(`when hiding the footer`, () => {
        const props = {
            className: 'customClass',
            children: <h1>Test Children</h1>,
            headerExpanded: true,
            hideFooter: true,
            menuClasses: 'site-menu',
            siteName: 'Dolly'
        };

        before(() => {
            reactModule = Context.mountComponent(PageWrapper, props, [contextConfigStub]);
        });

        it(`shouldn't render the footer`, () => {
            const footer = TestUtils.scryRenderedComponentsWithType(reactModule, SiteFooterStub);
            expect(footer.length).to.eq(0);
        });
    });

    describe(`when there is no hamburgerNavItems prop`, () => {
        const props = {
            className: 'customClass',
            children: <h1>Test Children</h1>,
            headerExpanded: true,
            hideFooter: false,
            menuClasses: 'site-menu',
            currentUrl: '/'
        };
        let prevItems;

        before(() => {
            prevItems = [...hamburgerItems];
            hamburgerItems = null;
            reactModule = Context.mountComponent(PageWrapper, props, [contextConfigStub]);
            siteHeaderStub = TestUtils.findRenderedComponentWithType(reactModule, SiteHeaderStub);
            navigationStub = TestUtils.findRenderedComponentWithType(reactModule, NavigationStub);
        });

        after(() => {
            hamburgerItems = prevItems;
        });

        it(`should pass the correct props to the Navigation component, containing the headerNavItems props with a link to the home page`, () => {
            const mobileNav = headerItems.slice();
            mobileNav.unshift({ name: 'Home', url: '/' });

            expect(navigationStub.props).to.deep.eq({
                className: 'mobile-menu',
                items: mobileNav,
                currentUrl: props.currentUrl
            });
        });
    });
});
