import { betterMockComponentContext } from '@bxm/flux';
import proxyquire, { noCallThru } from 'proxyquire';
import ShallowWrapperFactory from '../../utils/ShallowWrapperFactory';

noCallThru();

const { React, createStubComponent } = betterMockComponentContext();
const SearchBarStub = createStubComponent();
const PageSearchBox = proxyquire('../../../app/components/search/pageSearchBox', {
    react: React,
    './searchBar': SearchBarStub
}).default;

const TestWrapper = new ShallowWrapperFactory(PageSearchBox);

const tagsDetailsListMock = [
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

const selectors = {
    root: '.page-search-box',
    backgroundDiv: '.page-search-box__background',
    inner: '.page-search-box__inner',
    title: '.page-search-box__title-text',
    tagList: '.page-search-box__tag-list',
    listItem: '.page-search-box__tag-item',
    link: '.page-search-box__tag-link'
};

describe('<PageSearchBox/> component', () => {
    describe('rendering', () => {
        describe('with default props', () => {
            let wrapper;

            before(() => {
                [wrapper] = TestWrapper();
            });

            it('does not render', () => {
                expect(wrapper.find(selectors.root).exists()).to.be.false;
            });
        });

        describe('with valid props', () => {
            let wrapper;
            let testProps;

            beforeEach(() => {
                [wrapper, testProps] = TestWrapper({
                    isEnabled: true,
                    imageUrl: 'http://image.com/',
                    titleText: 'Search title',
                    tags: tagsDetailsListMock,
                    usePlaceholder: true
                });
            });

            it('renders the component', () => {
                expect(wrapper.find(selectors.root).exists()).to.be.true;
            });

            it('renders the background div', () => {
                expect(wrapper.find(selectors.backgroundDiv).exists()).to.be.true;
            });

            it('sets the background image on the the background div using the image url prop', () => {
                expect(wrapper.find(selectors.backgroundDiv).props().style).to.deep.eq({
                    backgroundImage: `url("${testProps.imageUrl}?width=600&height=225&mode=crop&quality=75")`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                });
            });

            it('renders a <SearchBar/>', () => {
                expect(wrapper.find(SearchBarStub).exists()).to.be.true;
            });

            it('passes props through a <SearchBar/>', () => {
                expect(wrapper.find(SearchBarStub).props().placeholderText).to.eq(testProps.titleText);
            });

            it('renders the title text with the titleText as the content', () => {
                expect(wrapper.find(selectors.title).text()).to.eq(testProps.titleText);
            });

            it('renders a list of tags', () => {
                expect(wrapper.find(selectors.tagList).exists()).to.be.true;
            });

            it('renders a list item for each tag in the tags prop', () => {
                const listItems = wrapper.find(selectors.listItem);

                expect(listItems).to.have.length(testProps.tags.length);
            });
        });

        describe('with usePlaceholder prop set to false', () => {
            let wrapper;

            before(() => {
                [wrapper] = TestWrapper({
                    isEnabled: true,
                    imageUrl: 'http://image.com/',
                    titleText: 'Search title',
                    tags: tagsDetailsListMock,
                    usePlaceholder: false
                });
            });

            it('renders the component', () => {
                expect(wrapper.find(selectors.root).exists()).to.be.true;
            });

            it('passes undefined to the <SearhBar/> as the placeholderText prop', () => {
                expect(wrapper.find(SearchBarStub).props().placeholderText).to.eq(undefined);
            });
        });

        describe('with valid props and no tags', () => {
            let wrapper;

            before(() => {
                [wrapper] = TestWrapper({
                    isEnabled: true,
                    imageUrl: 'http://image.com/',
                    titleText: 'Search title',
                    tags: [],
                    usePlaceholder: false
                });
            });

            it('renders the component', () => {
                expect(wrapper.find(selectors.root).exists()).to.be.true;
            });

            it('does not render the tags list', () => {
                expect(wrapper.find(selectors.tagList).exists()).to.be.false;
            });
        });

        describe('with valid props no background image url', () => {
            let wrapper;

            before(() => {
                [wrapper] = TestWrapper({
                    isEnabled: true,
                    titleText: 'Search title',
                    tags: [],
                    usePlaceholder: false
                });
            });

            it('renders the component', () => {
                expect(wrapper.find(selectors.root).exists()).to.be.true;
            });

            it('does not apply a style to the background div', () => {
                expect(wrapper.find(selectors.backgroundDiv).props().style).to.be.empty;
            });
        });

        describe('with valid props and isEnabled set to false', () => {
            let wrapper;

            before(() => {
                [wrapper] = TestWrapper({
                    isEnabled: false,
                    titleText: 'Search title',
                    imageUrl: 'http://image.com/',
                    tags: tagsDetailsListMock,
                    usePlaceholder: false
                });
            });

            it('does not render the component', () => {
                expect(wrapper.find(selectors.root).exists()).to.be.false;
            });
        });
    });
});
