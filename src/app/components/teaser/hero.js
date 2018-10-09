import React, { Component, PropTypes } from 'react';
import Ad from '@bxm/ad/lib/google/components/ad';
import Teaser from './teaser';
import Promoted from '../promoted/promoted';
import SideBlock from '../sideBlock/sideBlock';

export default class HeroTeaser extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        imageSizes: PropTypes.object,
        showPromoted: PropTypes.bool,
        brand: PropTypes.object,
        showDate: PropTypes.bool,
        magazineImageUrl: PropTypes.string
    };

    static defaultProps = {
        showDate: true,
        imageSizes: {
            s: { w: 700, h: 583 },
            m: { w: 619, h: 515 },
            l: { w: 810, h: 456 },
            xl: { w: 619, h: 515 }
        },
        showPromoted: false,
        brand: null,
        magazineImageUrl: ''
    };

    static contextTypes = {
        config: PropTypes.object.isRequired
    };

    render() {
        if (!this.props.article) return null;
        const { config } = this.context;
        const { article, imageSizes, showPromoted, brand, showDate, magazineImageUrl } = this.props;
        const pageLocation = Ad.pos.outside;
        const hasBrand = brand !== null;
        const showRecipeSource = config.isFeatureEnabled('showRecipeSourceAsAttribute');
        const showGiftCard = config.isFeatureEnabled('giftCard');
        const containerAttributes = {
            className: 'hero-wrapper'
        };

        if (article.nodeType === 'Recipe' && showRecipeSource && article.source) {
            containerAttributes['data-recipe-source'] = article.source;
        }

        return (
            <div {...containerAttributes}>
                <Teaser sourceClassName="hero-teaser__source" className="hero-teaser" showDate={showDate} article={article} imageSizes={imageSizes} />

                <Ad displayFor={['small', 'medium']} className="ad--section-top-mrec" sizes="mrec" pageLocation={pageLocation} />

                {showPromoted && <Promoted show />}

                <SideBlock
                    showBrandMagazine={hasBrand}
                    showBrandNewsletter={hasBrand}
                    showGiftCard={showGiftCard}
                    brand={brand}
                    isHero
                    magazineImageUrl={magazineImageUrl}
                />
            </div>
        );
    }
}
