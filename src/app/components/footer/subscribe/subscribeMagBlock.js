import React, { Component, PropTypes } from 'react';
import imageResize from '@bxm/ui/lib/common/ImageResize';
import ResponsiveImage from '@bxm/ui/lib/common/ResponsiveImage';

export default class SubscribeMagBlock extends Component {
    static propTypes = {
        inSideNav: PropTypes.bool.isRequired,
        magCoverUrl: PropTypes.string.isRequired,
        responsiveConfig: PropTypes.object,
        magCoverList: PropTypes.object
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
        magCoverList: {}
    };

    static getOtherMagCovers(otherMagCovers, responsiveConfig, imageSizes, breakpoints, magCoverUrl) {
        if (Array.isArray(otherMagCovers) && otherMagCovers.length) {
            return otherMagCovers.map(cover => (
                <a className="subscription__image--ipad subscription__image--ipad--multiple" href={cover.url} target="itunes_store" key={cover.id}>
                    <ResponsiveImage
                        alt="subscribe ipad"
                        ClassNames="subs-cover--ipad"
                        url={cover.moduleImageUrl}
                        sizes={imageSizes}
                        breakpoints={breakpoints}
                        scale={responsiveConfig.scale}
                        mode={responsiveConfig.mode}
                        anchor={responsiveConfig.anchor}
                        quality={80}
                    />
                </a>
            ));
        }

        return (
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
        );
    }

    render() {
        const { inSideNav, magCoverUrl, responsiveConfig, magCoverList } = this.props;
        const breakpoints = this.context.config.global.breakpoints;
        const { siteMagCover, otherMagCovers } = magCoverList || {};
        const { moduleImageUrl, url } = siteMagCover || {};
        const imageSizes = {
            s: { w: 248 },
            m: { w: 248 },
            l: { w: 248 },
            xl: { w: 248 }
        };

        return inSideNav ? null : (
            <div className="subscription__image small-12 medium-6 columns">
                <a className="subscription__image--mag" href={url || '/subscribe-magazine'} target="_blank">
                    <ResponsiveImage
                        alt="subscribe magazine"
                        ClassNames="subs-cover"
                        url={moduleImageUrl || magCoverUrl}
                        sizes={imageSizes}
                        breakpoints={breakpoints}
                        scale={responsiveConfig.scale}
                        mode={responsiveConfig.mode}
                        anchor={responsiveConfig.anchor}
                        quality={80}
                    />
                </a>
                {SubscribeMagBlock.getOtherMagCovers(otherMagCovers, responsiveConfig, imageSizes, breakpoints, magCoverUrl)}
            </div>
        );
    }
}
