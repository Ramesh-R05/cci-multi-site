import { shallow } from 'enzyme';
import { betterMockComponentContext } from '@bxm/flux';
const Context = betterMockComponentContext();
const { React } = Context;
import RecipeOverview from '../../../app/components/recipe/recipeOverview';

const createTestProps = () => ({
    overviewDetails: ['50 mins preparation', '40 mins cooking', 'Serves 4 - 6']
});

const context = {
    config: {
        site: {
            host: 'https://someurl.com'
        }
    }
};
const TestWrapper = (props = {}) => shallow(<RecipeOverview {...props} />, { context });

function filterErrors() {
    const consoleErrorCopy = console.error;
    sinon.stub(console, 'error').callsFake((...args) => (args[0].includes('Warning: Failed propType') ? null : consoleErrorCopy(args)));
}

function restoreErrors() {
    console.error.restore();
}

describe('RecipeOverview component', () => {
    describe('rendering', () => {
        describe('with default props', () => {
            let wrapper;

            before(() => {
                wrapper = TestWrapper();
            });

            it('does not render', () => {
                expect(wrapper.find('.recipe-overview')).to.have.length(0);
            });
        });

        describe('with valid props', () => {
            let wrapper;
            let testProps;

            before(() => {
                testProps = createTestProps();
                wrapper = TestWrapper(testProps);
            });

            it('renders a list of details', () => {
                wrapper.find('.recipe-overview__item').forEach((item, i) => {
                    expect(item.text()).to.eq(testProps.overviewDetails[i]);
                });
            });
        });

        describe('with invalid props', () => {
            describe('overDetails as a string', () => {
                let wrapper;

                before(() => {
                    filterErrors();
                    wrapper = TestWrapper({ overviewDetails: 'test string' });
                });

                after(() => {
                    restoreErrors();
                });

                it('does not render', () => {
                    expect(wrapper.find('.recipe-overview')).to.have.length(0);
                });
            });

            describe('overDetails as an object', () => {
                let wrapper;

                before(() => {
                    filterErrors();
                    wrapper = TestWrapper({ overviewDetails: { foo: 'test string' } });
                });

                after(() => {
                    restoreErrors();
                });

                it('does not render', () => {
                    expect(wrapper.find('.recipe-overview')).to.have.length(0);
                });
            });

            describe('overDetails as a function', () => {
                let wrapper;

                before(() => {
                    filterErrors();
                    wrapper = TestWrapper({ overviewDetails: () => {} });
                });

                after(() => {
                    restoreErrors();
                });

                it('does not render', () => {
                    expect(wrapper.find('.recipe-overview')).to.have.length(0);
                });
            });
        });
    });
});
