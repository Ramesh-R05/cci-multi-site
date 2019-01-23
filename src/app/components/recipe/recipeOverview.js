import React, { Component, PropTypes } from 'react';

export default class RecipeOverview extends Component {
    static displayName = 'RecipeOverview';

    static propTypes = {
        overviewDetails: PropTypes.arrayOf(PropTypes.string)
    };

    static defaultProps = {
        overviewDetails: []
    };

    handlePrint = event => {
        event.preventDefault();
        window.print();
    };

    render() {
        const { overviewDetails } = this.props;

        const imageUrl = `/assets/images/printer.svg`;

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
                <div className="recipe-overview__print">
                    <img alt="Print" src={imageUrl} onClick={this.handlePrint} />
                </div>
                <div className="recipe-overview__print--text" onClick={this.handlePrint}>
                    Print
                </div>
            </ul>
        );
    }
}
