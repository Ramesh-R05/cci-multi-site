import React, { PropTypes } from 'react';
import parse from '@bxm/markdown/lib/parse';

const RecipeIngredients = ({ recipeIngredients }) => (
    <div className="recipe-ingredients columns small-12 medium-6">
        <h3>Ingredients</h3>
        {recipeIngredients.map(ingredientData => (
            <div>
                <div>
                    {
                        ingredientData.heading &&
                            <div className="recipe-ingredients__heading">{ingredientData.heading}</div>
                    }
                </div>
                <div>
                    <ul className="recipe-ingredients__list">
                        {
                            ingredientData.ingredients.map((item) => {
                                const combinedIngredients = `${item.quantity} ${item.measure} ${item.ingredient}`;
                                return (<li
                                  className="recipe-ingredients__list--item"
                                  dangerouslySetInnerHTML={{ __html: parse(combinedIngredients) }}
                                />);
                            })
                        }
                    </ul>
                </div>
            </div>
        ))}
    </div>
);

RecipeIngredients.propTypes = {
    recipeIngredients: PropTypes.array.isRequired
};

export default RecipeIngredients;

