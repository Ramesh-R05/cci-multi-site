import React, { PropTypes, Component } from 'react';
import parse from '@bxm/markdown/lib/parse';

export default class RecipeMethod extends Component {
    static displayName = 'RecipeMethod';

    static propTypes = {
        recipeMethod: PropTypes.array.isRequired
    };

    shouldComponentUpdate() {
        return false;
    }

    render() {
        const { recipeMethod } = this.props;
        let methodCount = 0;

        return (
            <div className="recipe-method columns small-12 medium-6">
                <h3 className="recipe-method__title-text">Method</h3>
                {recipeMethod.map(recipeData => (
                    <div className="recipe-method__group">
                        {recipeData.heading && <div className="recipe-method__heading">{recipeData.heading}</div>}

                        <ul className="recipe-method__list">
                            {recipeData.methods.map(item => (
                                <li className="recipe-method__list-item">
                                    <div className="recipe-method__step-container">
                                        <span className="recipe-method__step-count">{(methodCount += 1)}</span>
                                    </div>
                                    <div className="recipe-method__step-description" dangerouslySetInnerHTML={{ __html: parse(item.method) }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    }
}
