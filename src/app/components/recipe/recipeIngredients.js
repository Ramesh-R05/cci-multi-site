import PropTypes from 'prop-types';
import React from 'react';
import parse from '@bxm/markdown/lib/parse';

const RecipeIngredients = ({ recipeIngredients }) => (
    <div className="recipe-ingredients columns small-12 medium-6">
        <h3 className="recipe-ingredients__title">Ingredients</h3>
        {recipeIngredients.map(ingredientData => (
            <div className="recipe-ingredients__content">
                <div className="recipe-ingredients__heading-container">
                    {ingredientData.heading && <div className="recipe-ingredients__heading">{ingredientData.heading}</div>}
                </div>

                <ul className="recipe-ingredients__list">
                    {ingredientData.ingredients.map(item => {
                        const combinedIngredients = `${item.quantity} ${item.measure} ${item.ingredient}`;

                        return <li className="recipe-ingredients__list-item" dangerouslySetInnerHTML={{ __html: parse(combinedIngredients) }} />;
                    })}
                </ul>
            </div>
        ))}
    </div>
);

RecipeIngredients.propTypes = {
    recipeIngredients: PropTypes.array.isRequired
};

export default RecipeIngredients;
