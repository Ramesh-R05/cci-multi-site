import PropTypes from 'prop-types';
import React, { Component } from 'react';
import parse from '@bxm/markdown/lib/parse';

class RecipeNotes extends Component {
    render() {
        const { recipeNotes } = this.props;

        if (!recipeNotes) {
            return null;
        }

        return (
            <div className="recipe-notes columns small-12">
                <h3 className="recipe-notes__title">Notes</h3>
                <p className="recipe-notes__content" dangerouslySetInnerHTML={{ __html: parse(recipeNotes) }} />
            </div>
        );
    }
}

RecipeNotes.propTypes = {
    recipeNotes: PropTypes.string.isRequired
};

export default RecipeNotes;
