import React, { PropTypes, Component } from 'react';
import parse from '@bxm/markdown/lib/parse';

export default class RecipeMethod extends Component {

    static propTypes = {
        recipeMethod: PropTypes.array.isRequired
    };

    constructor(props, context) {
        super(props, context);

        this.methodCount = 0;
    }

    render() {
        const { recipeMethod } = this.props;

        return (
            <div className="recipe-method columns small-12 medium-6">
                <h3>Method</h3>
                {recipeMethod.map(recipeData => (
                    <div>
                        <div>
                            {
                                recipeData.heading &&
                                    <div className="recipe-method__heading">{recipeData.heading}</div>
                            }
                        </div>
                        <div>
                            <ul className="recipe-method__list">
                                {
                                    recipeData.methods.map(item => (
                                        <li className="recipe-method__list--item">
                                            <div className="recipe-method__list--item-left">
                                                <span>{this.methodCount += 1}</span>
                                            </div>
                                            <div
                                              className="recipe-method__list--item-right"
                                              dangerouslySetInnerHTML={{ __html: parse(item.method) }}
                                            />
                                        </li>
                                    ))
                            }
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
