import React, { Component, PropTypes } from 'react';
import Teaser from './teaser';
import Ad from '@bxm/ad/lib/google/components/ad';
import Promoted from '../promoted/promoted';
import SideBlock from '../sideBlock/sideBlock';

export default class HeroTeaser extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        imageSizes: PropTypes.object,
        showPromoted: PropTypes.bool,
        brand: PropTypes.object,
        showDate: PropTypes.bool
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
        brand: null
    };

    render() {
        if (!this.props.article) return null;
        const { article, imageSizes, showPromoted, brand, showDate } = this.props;
        const pageLocation = Ad.pos.outside;
        const isBrandDefined = Object.prototype.toString.call(brand).indexOf('Object') !== -1;

        return (
            <div className="hero-wrapper">
                <Teaser
                  sourceClassName="hero-teaser__source"
                  className="hero-teaser"
                  showDate={showDate}
                  article={article}
                  imageSizes={imageSizes}
                />

                <Ad
                  displayFor={['small', 'medium']}
                  className="ad--section-top-mrec"
                  sizes="mrec"
                  pageLocation={pageLocation}
                />

                { showPromoted && <Promoted show /> }

                <SideBlock
                  showBrandMagazine={isBrandDefined}
                  showBrandNewsletter={isBrandDefined}
                  brand={brand}
                  isHero
                />
            </div>
        );
    }
}
