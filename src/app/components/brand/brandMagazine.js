import React, { Component, PropTypes } from 'react';
import imageResize from '@bxm/ui/lib/common/ImageResize';
import ResponsiveImage from '@bxm/ui/lib/common/ResponsiveImage';
import SocialContainer from '../social/block';
import get from 'lodash/object/get';
import { connectToStores } from '@bxm/flux';

class BrandMagazine extends Component {
    static propTypes = {
        magazineImageUrl: PropTypes.string.isRequired,
        brand: PropTypes.object.isRequired,
        imageSizes: PropTypes.object,
        responsiveConfig: PropTypes.object
    };

    static contextTypes = {
        config: PropTypes.object
    };

    static defaultProps = {
        responsiveConfig: {
            scale: imageResize.scale.BOTH,
            anchor: imageResize.anchor.TC,
            mode: ''
        },
        imageSizes: {
            s: { w: 175 },
            m: { w: 175 },
            l: { w: 175 },
            xl: { w: 175 }
        }
    };

    static DEFAULT_SUBSCRIBE_URL = 'subscribe-magazine';
    static DEFAULT_SUBSCRIBE_TEXT = 'SUBSCRIBE NOW';

    render() {
        const { imageSizes, responsiveConfig, magazineImageUrl, brand } = this.props;
        const breakpoints = this.context.config.global.breakpoints;
        const { socialLinks, id, title, magazineTitle } = brand;
        const renderSubscribeElements = get(brand, 'renderSubscribeElements', true);
        const buttonText = get(brand, 'subscribeButtonText', BrandMagazine.DEFAULT_SUBSCRIBE_TEXT);
        const buttonUrl = get(brand, 'subscribeButtonUrl', BrandMagazine.DEFAULT_SUBSCRIBE_URL);
        const sizes = get(brand, 'imageSizes', imageSizes);

        return (
            <div>
                <div className="brand--magazine-container">
                    {renderSubscribeElements && <span className="brand--magazine-title">Subscribe to {magazineTitle || title}</span>}
                    <div className="brand--magazine-image">
                        <ResponsiveImage
                          alt=""
                          url={magazineImageUrl}
                          sizes={sizes}
                          breakpoints={breakpoints}
                          scale={responsiveConfig.scale}
                          mode={responsiveConfig.mode}
                          anchor={responsiveConfig.anchor}
                          quality={80}
                        />
                    </div>
                    {renderSubscribeElements &&
                        <a target="_blank" className={`gtm-subscribe-${id}`} href={buttonUrl}>
                            <span className="button button--link button--subscribe">{buttonText}</span>
                        </a>
                    }
                </div>
                <div className="page__get-social-container">
                    <SocialContainer socialUrls={socialLinks} />
                </div>
            </div>
        );
    }
}

export default connectToStores(BrandMagazine, ['PageStore'], context => ({
    magazineImageUrl: context.getStore('PageStore').getMagazineImageUrl()
}));
