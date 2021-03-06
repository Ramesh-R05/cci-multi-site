import PropTypes from 'prop-types';
import React, { Component } from 'react';
import get from 'lodash/object/get';

export default class GiftCard extends Component {
    static displayName = 'GiftCard';

    static propTypes = {
        brand: PropTypes.object.isRequired
    };

    static contextTypes = {
        config: PropTypes.object
    };

    static DEFAULT_URL = 'gift-card-large';

    static DEFAULT_BUTTON_TEXT = 'Buy Now';

    static DEFAULT_IMAGE = 'gift-card.png';

    shouldComponentUpdate() {
        return false;
    }

    render() {
        const { config } = this.context;
        const { brand } = this.props;

        const assetImagePath = `${config.site.host}/assets/images`;
        const url = get(brand, 'giftCard.url', GiftCard.DEFAULT_URL);
        const buttonText = get(brand, 'giftCard.buttonText', GiftCard.DEFAULT_BUTTON_TEXT);
        const giftCardImage = get(brand, 'giftCard.image', GiftCard.DEFAULT_IMAGE);
        const imageUrl = `${assetImagePath}/${giftCardImage}`;

        return (
            <div className="gift-card-container column medium-6 large-12">
                <div className="gift-card-image">
                    <img alt="Gift Card" src={imageUrl} />
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
