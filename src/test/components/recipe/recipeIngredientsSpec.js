import React from 'react';
import { shallow } from 'enzyme';
import RecipeIngredients from '../../../app/components/recipe/recipeIngredients';

describe('RecipeIngredients component', () => {
    describe('with both heading and ingredients data', () => {
        const recipeIngredients = [
            {
                heading: 'Heading',
                ingredients: [
                    {
                        measure: 'tsp',
                        quantity: '1/2',
                        ingredient: 'cornflour'
                    },
                    {
                        measure: '',
                        quantity: '10',
                        ingredient: 'long red chillies, finely chopped'
                    }
                ]
            },
            {
                heading: 'Heading2',
                ingredients: [
                    {
                        measure: 'tsp',
                        quantity: '1/2',
                        ingredient: 'cornflour'
                    },
                    {
                        measure: '',
                        quantity: '10',
                        ingredient: 'long red chillies, finely chopped'
                    }
                ]
            }
        ];

        it('should render heading and ingredients items', () => {
            const wrapper = shallow(<RecipeIngredients recipeIngredients={recipeIngredients} />);
            expect(wrapper.contains(<h3 className="recipe-ingredients__title">Ingredients</h3>)).to.equal(true);
            expect(wrapper.contains(<div className="recipe-ingredients__heading">Heading</div>)).to.equal(true);
            expect(wrapper.contains(<div className="recipe-ingredients__heading">Heading2</div>)).to.equal(true);
            expect(wrapper.find('.recipe-ingredients__heading').length).to.equal(2);
            expect(wrapper.find('.recipe-ingredients__list-item').length).to.equal(4);
        });
    });

    describe('with only ingredients data', () => {
        const recipeIngredients = [
            {
                ingredients: [
                    {
                        measure: 'tsp',
                        quantity: '1/2',
                        ingredient: 'cornflour'
                    },
                    {
                        measure: '',
                        quantity: '10',
                        ingredient: 'long red chillies, finely chopped'
                    }
                ]
            }
        ];

        it('should not render heading', () => {
            const wrapper = shallow(<RecipeIngredients recipeIngredients={recipeIngredients} />);
            expect(wrapper.find('.recipe-ingredients__heading').length).to.equal(0);
        });
    });
});
