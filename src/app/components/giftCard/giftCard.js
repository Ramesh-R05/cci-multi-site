import React, { Component, PropTypes } from 'react';
import InlineSVG from 'react-inlinesvg';
import { canUseDOM } from 'exenv';
import get from 'lodash/object/get';

export default class GiftCard extends Component {

    static displayName = 'GiftCard';

    static propTypes = {
        brand: PropTypes.object.isRequired
    };

    static DEFAULT_URL = 'gift-card-large';
    static DEFAULT_BUTTON_TEXT = 'Buy Now';

    static contextTypes = {
        config: PropTypes.object
    };

    shouldComponentUpdate = () => false;

    render() {
        const { brand } = this.props;
        const url = get(brand, 'giftCard.url', GiftCard.DEFAULT_URL);
        const imageUrl = 'assets/images/gift-card.svg';
        const buttonText = get(brand, 'giftCard.buttonText', GiftCard.DEFAULT_BUTTON_TEXT);
        const img = <img alt="" src={imageUrl} />;

        return (
            <div className="gift-card-container column medium-6 large-12">
                <div className="gift-card-image">
                    { canUseDOM ? <InlineSVG src={imageUrl}>{ img }</InlineSVG> : img }
                </div>
                <div className="gift-card-button">
                    <a className={`gtm-gift-card-${brand.id}`} target="_blank" href={url}>
                        <span className="button button--link">{buttonText}</span>
                    </a>
                </div>
            </div>
        );
    }
}
