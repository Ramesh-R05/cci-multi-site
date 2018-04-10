import React, { Component, PropTypes } from 'react';
import get from 'lodash.get';

export default class Newsletter extends Component {

    static contextTypes = {
        config: PropTypes.object.isRequired
    };

    static DEFAULT_TITLE = 'Get The Newsletter';
    static DEFAULT_TEXT = 'The latest news delivered to your inbox';
    static DEFAULT_BUTTON_TEXT = 'SIGN UP';

    render() {
        const { config } = this.context;
        const url = get(config, 'product.newsletterUrl', false);
        const title = get(config, 'product.newsletterTitle', Newsletter.DEFAULT_TITLE);
        const text = get(config, 'product.newsletterText', Newsletter.DEFAULT_TEXT);
        const buttonText = get(config, 'product.newsletterButtonText', Newsletter.DEFAULT_BUTTON_TEXT);

        return !url ? null : (
            <div className="newsletter-subscribe column medium-6 large-12">
                <div className="newsletter-subscribe__title">{ title }</div>
                <p className="newsletter-subscribe__text">{ text }</p>
                <div className="newsletter-subscribe__button">
                    <a href={ url } className="gtm-subs-homepage" target="_blank">
                        { buttonText }
                    </a>
                </div>
            </div>
        );
    }
}
