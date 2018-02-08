import React, { Component, PropTypes } from 'react';

export default class Newsletter extends Component {

    static contextTypes = {
        config: PropTypes.object.isRequired
    };

    render() {
        const productInfo = this.context.config.product;
        const newsletterUrl = productInfo.newsletterUrl || false;
        const newsletterText = productInfo.newsletterText || 'The latest news delivered to your inbox';

        if (!newsletterUrl) {
            return null;
        }

        return (
            <div className="newsletter-subscribe column medium-6 large-12">
                <div className="newsletter-subscribe__title">Get The Newsletter</div>
                <p className="newsletter-subscribe__text">{newsletterText}</p>
                <div className={'newsletter-subscribe__button'}>
                    <a href={`${newsletterUrl}`} className={'gtm-subs-homepage'} target="_blank">
                        SIGN UP
                    </a>
                </div>
            </div>
        );
    }
}
