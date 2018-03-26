import React, { Component, PropTypes } from 'react';
import BrandMagazine from '../brand/brandMagazine';
import BrandNewsletter from '../brand/brandNewsletter';
import GiftCard from '../giftCard/giftCard';
import SocialContainer from '../social/block';

export default class SideBlock extends Component {

    static displayName = 'SideBlock';

    static propTypes = {
        showBrandMagazine: PropTypes.bool,
        showBrandNewsletter: PropTypes.bool,
        showGiftCard: PropTypes.bool,
        showSocial: PropTypes.bool,
        brand: PropTypes.object,
        isHero: PropTypes.bool,
        magazineImageUrl: PropTypes.string
    };

    static defaultProps = {
        showBrandMagazine: true,
        showBrandNewsletter: true,
        showGiftCard: false,
        showSocial: true,
        brand: {},
        isHero: false,
        magazineImageUrl: ''
    };

    static contextTypes = {
        config: PropTypes.object
    };

    shouldComponentUpdate = () => false;

    render() {
        const { config } = this.context;
        const { showBrandMagazine, showBrandNewsletter, showGiftCard, showSocial, brand, isHero,
            magazineImageUrl } = this.props;

        return (
            <div className={isHero ? 'hide-for-large-up' : ''}>
                { showBrandMagazine && <BrandMagazine brand={brand} magazineImageUrl={magazineImageUrl} /> }
                { showBrandNewsletter && <BrandNewsletter /> }
                { showGiftCard && <GiftCard brand={brand} /> }
                { showSocial && <div className="page__get-social-container columns medium-6 large-12">
                    <SocialContainer socialUrls={config.urls.socialUrls} />
                </div> }
            </div>
        );
    }
}
