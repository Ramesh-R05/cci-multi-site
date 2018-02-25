import React from 'react';
import { mount } from 'enzyme';
import RecipeNotes from '../../../app/components/recipe/recipeNotes';

describe('RecipeNotes component with recipeNotes data', () => {

    const recipeNotes = 'Remember to clean the crab before cooking.';

    it('should render notes', () => {
        const wrapper = mount(<RecipeNotes recipeNotes={recipeNotes}/>);
        expect(wrapper.contains(<h3>Notes</h3>)).to.equal(true);
        expect(wrapper.find('.recipe-notes__content').text()).to.equal('Remember to clean the crab before cooking.');
    });
});
