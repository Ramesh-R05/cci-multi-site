import PropTypes from 'prop-types';
import React, { Component } from 'react';
import get from 'lodash.get';
import { SignupForm } from '@bxm/newsletter';

export default class Newsletter extends Component {
    static contextTypes = {
        config: PropTypes.object.isRequired
    };

    static propTypes = {
        isBrandPage: PropTypes.bool,
        brandId: PropTypes.string
    };

    static defaultProps = {
        isBrandPage: false,
        brandId: ''
    };

    static DEFAULT_TITLE = 'Get The Newsletter';

    static DEFAULT_TEXT = 'The latest news delivered to your inbox';

    static DEFAULT_BUTTON_TEXT = 'SIGN UP';

    render() {
        const { isBrandPage, brandId } = this.props;
        const { config } = this.context;

        const brandConfigPath = isBrandPage && brandId ? config.brands.site.find(b => b.id === brandId) : config;

        const url = get(brandConfigPath, isBrandPage ? 'newsletterUrl' : 'product.newsletterUrl', false);
        const title = get(brandConfigPath, isBrandPage ? 'newsletterTitle' : 'product.newsletterTitle', Newsletter.DEFAULT_TITLE);
        const text = get(brandConfigPath, isBrandPage ? 'newsletterText' : 'product.newsletterText', Newsletter.DEFAULT_TEXT);
        const buttonText = get(
            brandConfigPath,
            isBrandPage ? 'newsletterButtonText' : 'product.newsletterButtonText',
            Newsletter.DEFAULT_BUTTON_TEXT
        );
        const sailthruSource = get(brandConfigPath, 'sailthru.source.sidebar', '');
        const sailthruList = get(brandConfigPath, 'sailthru.list', '');

        return !url ? null : (
            <div className="newsletter-subscribe column medium-6 large-12">
                <div className="newsletter-subscribe__title">{title}</div>
                <p className="newsletter-subscribe__text">{text}</p>
                {sailthruSource && sailthruList ? (
                    <SignupForm source={sailthruSource} />
                ) : (
                    <div className="newsletter-subscribe__button">
                        <a href={url} className="gtm-subs-homepage" target="_blank">
                            {buttonText}
                        </a>
                    </div>
                )}
            </div>
        );
    }
}
