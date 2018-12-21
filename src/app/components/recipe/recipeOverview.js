import React, { Component, PropTypes } from 'react';

export default class RecipeOverview extends Component {
    static displayName = 'RecipeOverview';

    static propTypes = {
        overviewDetails: PropTypes.arrayOf(PropTypes.string)
    };

    static defaultProps = {
        overviewDetails: []
    };

    render() {
        const { overviewDetails } = this.props;

        if (!Array.isArray(overviewDetails) || overviewDetails.length === 0) {
            return null;
        }

        return (
            <ul className="recipe-overview">
                {overviewDetails.map((detail, id) => (
                    <li className="recipe-overview__item" key={id.toString()}>
                        {detail}
                    </li>
                ))}
            </ul>
        );
    }
}
