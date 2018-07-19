import { betterMockComponentContext } from '@bxm/flux';
const Context = betterMockComponentContext();
const { React, ReactDOM, TestUtils } = Context;
import proxyquire, { noCallThru } from 'proxyquire';
noCallThru();

const searchBarStub = Context.createStubComponent();

const PageSearchBox = proxyquire('../../../app/components/search/pageSearchBox', {
    react: React,
    './searchBar': searchBarStub
}).default;

const tagDetailsList = [
    {
        name: "food:Occasion:Father's Day",
        displayName: "Father's Day",
        urlName: 'fathers-day',
        fullName: 'food_Occasion_Fathers_Day'
    },
    {
        name: "food:Occasion:Mother's Day",
        displayName: "Mother's Day",
        urlName: 'mothers-day',
        fullName: 'food_Occasion_Mothers_Day'
    }
];

const propsMaker = (enableHomeSearchBox = true, linkToBackgroundImage = '', searchDescribeText = '', searchTagsDetails = []) => ({
    enableHomeSearchBox,
    linkToBackgroundImage,
    searchDescribeText,
    searchTagsDetails
});

describe(`Page Search Box`, () => {
    let reactModule;
    let searchBar;
    let searchDescribeText;
    let searchTagList;

    it('should not render PageSearchBox, if not enabled', () => {
        reactModule = Context.mountComponent(PageSearchBox, propsMaker(false));
        const wrapper = TestUtils.scryRenderedDOMComponentsWithClass(reactModule, 'page-search-box');
        searchBar = TestUtils.scryRenderedComponentsWithType(reactModule, searchBarStub);
        expect(wrapper.length).to.equal(0);
        expect(searchBar.length).to.equal(0);
    });

    it('should render PageSearchBox, if enabled', () => {
        reactModule = Context.mountComponent(PageSearchBox, propsMaker(true));
        const wrapper = TestUtils.scryRenderedDOMComponentsWithClass(reactModule, 'page-search-box');
        searchBar = TestUtils.scryRenderedComponentsWithType(reactModule, searchBarStub);
        expect(wrapper.length).to.equal(1);
        expect(searchBar.length).to.equal(1);
    });

    it('should render search background image, if provided', () => {
        reactModule = Context.mountComponent(PageSearchBox, propsMaker(true, 'background image', ''));
        const searchBg = TestUtils.findRenderedDOMComponentWithClass(reactModule, 'page-search-box__bg');
        expect(searchBg).to.exist;
        expect(searchBg.props.style).to.deep.equal({
            backgroundImage: 'url("background image")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        });
    });

    it('should not render background image, if not provided', () => {
        reactModule = Context.mountComponent(PageSearchBox, propsMaker(true, '', ''));
        const searchBg = TestUtils.findRenderedDOMComponentWithClass(reactModule, 'page-search-box__bg');
        expect(searchBg).to.exist;
        expect(searchBg.props.style).to.deep.equal({});
    });

    it('should render search text, if provided', () => {
        reactModule = Context.mountComponent(PageSearchBox, propsMaker(true, '', 'search describe text'));
        searchDescribeText = TestUtils.findRenderedDOMComponentWithClass(reactModule, 'page-search-box__text');
        expect(searchDescribeText).to.exist;
        expect(ReactDOM.findDOMNode(searchDescribeText).innerHTML).to.equal('search describe text');
    });

    it('should not render search text, if not provided', () => {
        reactModule = Context.mountComponent(PageSearchBox, propsMaker(true, '', ''));
        searchDescribeText = TestUtils.scryRenderedDOMComponentsWithClass(reactModule, 'page-search-box__text');
        expect(searchDescribeText.length).to.equal(0);
    });

    describe('when search tag list is provided', () => {
        let listItems;
        beforeEach(() => {
            reactModule = Context.mountComponent(PageSearchBox, propsMaker(true, '', '', tagDetailsList));
            searchTagList = TestUtils.findRenderedDOMComponentWithClass(reactModule, 'page-search-box__tag-list');
            listItems = TestUtils.scryRenderedDOMComponentsWithTag(reactModule, 'li');
        });
        it('should render search tag list', () => {
            expect(searchDescribeText).to.exist;
        });

        it(`should render ${tagDetailsList.length} list items`, () => {
            expect(listItems.length).to.equal(tagDetailsList.length);
        });

        it('list item should has correct link name and href', () => {
            const link = ReactDOM.findDOMNode(listItems[0]).getElementsByTagName('a')[0];
            expect(link.innerHTML).to.equal(tagDetailsList[0].displayName);
            expect(link.href).to.equal(`/tags/${tagDetailsList[0].urlName}`);
        });
    });

    it('should not render search tag list, if not provided', () => {
        reactModule = Context.mountComponent(PageSearchBox, propsMaker(true));
        searchTagList = TestUtils.scryRenderedDOMComponentsWithClass(reactModule, 'page-search-box__tag-list');
        expect(searchTagList.length).to.equal(0);
    });
});
