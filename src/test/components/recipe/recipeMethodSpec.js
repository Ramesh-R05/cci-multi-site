import React from 'react';
import { shallow } from 'enzyme';
import RecipeMethod from '../../../app/components/recipe/recipeMethod';

describe('RecipeMethod component', () => {
    describe('with both heading and methods data', () => {
        const recipeMethod = [
            {
                heading: 'Heading',
                methods: [
                    {
                        method:
                            'Whisk [cornflour](https://www.nowtolove.com.au|target="_blank") and 200ml water in a small bowl to combine and set aside.'
                    },
                    {
                        method: 'Process chilli and onion in a ***food processor*** until a paste forms and set aside.'
                    }
                ]
            },
            {
                heading: 'Heading2',
                methods: [
                    {
                        method:
                            'Whisk [cornflour](https://www.nowtolove.com.au|target="_blank") and 200ml water in a small bowl to combine and set aside.'
                    },
                    {
                        method: 'Process chilli and onion in a ***food processor*** until a paste forms and set aside.'
                    }
                ]
            }
        ];

        it('should render heading and ingredients items', () => {
            const wrapper = shallow(<RecipeMethod recipeMethod={recipeMethod} />);
            expect(wrapper.contains(<h3 className="recipe-method__title-text">Method</h3>)).to.equal(true);
            expect(wrapper.contains(<div className="recipe-method__heading">Heading</div>)).to.equal(true);
            expect(wrapper.contains(<div className="recipe-method__heading">Heading2</div>)).to.equal(true);
            expect(wrapper.find('.recipe-method__heading').length).to.equal(2);
            expect(wrapper.find('.recipe-method__list-item').length).to.equal(4);
        });
    });

    describe('with only methods data', () => {
        const recipeMethod = [
            {
                methods: [
                    {
                        method:
                            'Whisk [cornflour](https://www.nowtolove.com.au|target="_blank") and 200ml water in a small bowl to combine and set aside.'
                    },
                    {
                        method: 'Process chilli and onion in a ***food processor*** until a paste forms and set aside.'
                    }
                ]
            }
        ];

        it('should not render heading', () => {
            const wrapper = shallow(<RecipeMethod recipeMethod={recipeMethod} />);
            expect(wrapper.find('.recipe-method__heading').length).to.equal(0);
        });
    });
});
