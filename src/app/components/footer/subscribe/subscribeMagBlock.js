import React, { Component, PropTypes } from 'react';
import imageResize from '@bxm/ui/lib/common/ImageResize';
import ResponsiveImage from '@bxm/ui/lib/common/ResponsiveImage';

export default class SubscribeMagBlock extends Component {

    static propTypes = {
        inSideNav: PropTypes.bool.isRequired,
        magCoverUrl: PropTypes.string.isRequired,
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
        }
    };

    render() {
        const { inSideNav, magCoverUrl, responsiveConfig } = this.props;
        const breakpoints = this.context.config.global.breakpoints;
        const imageSizes = {
            s: { w: 175 },
            m: { w: 175 },
            l: { w: 175 },
            xl: { w: 175 }
        };

        return inSideNav ? null : (
            <div className="subscription__image small-12 medium-6 columns">
                <a className="subscription__image--mag" href="/subscribe-magazine" target="_blank">
                    <ResponsiveImage
                      alt="subscribe magazine"
                      ClassNames="subs-cover"
                      url={magCoverUrl}
                      sizes={imageSizes}
                      breakpoints={breakpoints}
                      scale={responsiveConfig.scale}
                      mode={responsiveConfig.mode}
                      anchor={responsiveConfig.anchor}
                      quality={80}
                    />
                </a>
                <a className="subscription__image--ipad" href="/subscribe-digital" target="itunes_store">
                    <ResponsiveImage
                      alt="subscribe ipad"
                      ClassNames="subs-cover--ipad"
                      url={magCoverUrl}
                      sizes={imageSizes}
                      breakpoints={breakpoints}
                      scale={responsiveConfig.scale}
                      mode={responsiveConfig.mode}
                      anchor={responsiveConfig.anchor}
                      quality={80}
                    />
                </a>
            </div>
        );
    }
}
