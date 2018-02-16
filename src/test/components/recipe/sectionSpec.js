import {betterMockComponentContext} from '@bxm/flux';
import articleMock from '../../mocks/article';
import feedMock from '../../mocks/feed';

const Context = betterMockComponentContext();
const {React, TestUtils} = Context;

const proxyquire = require('proxyquire').noCallThru();
const RecipeContentStub = Context.createStubComponent();

const feedConfigMock = {};
const getPageMock = () => {};
const RecipeSection = proxyquire('../../../app/components/recipe/section', {
    'react': React,
    '@bxm/article/lib/actions/getArticleFeed': { getArticleFeed: getPageMock },
    './recipeContent': RecipeContentStub
}).default;

Context.addStore('articleStore', {
    getContent() {
        return articleMock;
    },
    getConfiguration() {
        return feedConfigMock;
    },
    getItems() {
        return feedMock;
    },
    getFeedTitle() {
        return 'Which Car';
    }
});

describe(`RecipeSection Component`, () => {
    let reactModule;
    const localDataMock = {iframeUrl: ''};
    const contextConfigStub = {
        key: 'config',
        type: '',
        value: { get: (key) => key === 'localeData' ? localDataMock : {} }
    };

    describe(`When content alignment is not specified`, () => {
        before(() => {
            reactModule = Context.mountComponent(RecipeSection, {}, [contextConfigStub]);
        });

        it('should render the content left', () => {
            TestUtils.findRenderedComponentWithType(reactModule, RecipeContentStub);
        });
    });
});
