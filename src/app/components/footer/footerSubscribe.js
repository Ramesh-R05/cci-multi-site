import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Subscribe from './subscribe/subscribe';

export default class FooterSubscribe extends Component {
    static propTypes = {
        content: PropTypes.object.isRequired,
        isDisplayed: PropTypes.bool
    };

    static defaultProps = {
        isDisplayed: false
    };

    render() {
        const { content, isDisplayed } = this.props;

        return isDisplayed ? (
            <div id="footer-sign-up" className="row">
                <Subscribe content={content} />
            </div>
        ) : null;
    }
}
