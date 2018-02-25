import React, { PropTypes } from 'react';
import parse from '@bxm/markdown/lib/parse';

const RecipeNotes = ({ recipeNotes }) => (
    <div className="recipe-notes columns small-12">
        <h3>Notes</h3>
        <p key="test_key" className="recipe-notes__content" dangerouslySetInnerHTML={{ __html: parse(recipeNotes) }} />
    </div>
);

RecipeNotes.propTypes = {
    recipeNotes: PropTypes.string.isRequired
};

export default RecipeNotes;

