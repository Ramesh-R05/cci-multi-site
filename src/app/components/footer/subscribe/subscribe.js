import React, { Component, PropTypes } from 'react';
import get from 'lodash/object/get';
import SubscribeMagBlock from './subscribeMagBlock';

export default class Subscribe extends Component {
    static propTypes = {
        content: PropTypes.object.isRequired,
        inSideNav: PropTypes.bool
    };

    static defaultProps = {
        inSideNav: false
    };

    static contextTypes = {
        config: PropTypes.object
    };

    fireEvent = () => {
        window.dataLayer.push({ event: 'subscribe.click' });
    };

    getMagCoverWithButtonText(magCover) {
        const { config } = this.context;
        const footerSubscribeButtonText = get(config, 'product.footerSubscribeButtonText', null);
        if (!footerSubscribeButtonText || !Array.isArray(magCover)) return null;

        return magCover.map(cover => {
            const coverRes = { ...cover };
            const buttonConfig = footerSubscribeButtonText.find(button => button.url === coverRes.url);
            coverRes.buttonText = (buttonConfig && buttonConfig.text) || 'Subscribe';
            coverRes.url = cover.url && `https://www.magshop.com.au${cover.url}`;
            return coverRes;
        });
    }

    getMagCovers(magCover) {
        let siteMagCover = {};
        let otherMagCovers = [];
        const AllMagCovers = this.getMagCoverWithButtonText(magCover);
        if (!AllMagCovers) return { siteMagCover, otherMagCovers };
        siteMagCover = AllMagCovers.find(button => button.isSiteMagCover) || {};
        otherMagCovers = AllMagCovers.filter(button => !button.isSiteMagCover);
        return { siteMagCover, otherMagCovers };
    }

    getButtonList(otherMagCovers) {
        if (!Array.isArray(otherMagCovers) || !otherMagCovers.length) {
            return null;
        }

        return otherMagCovers.map(
            buttonItem =>
                buttonItem && (
                    <a
                        className="button button--link button--subscribe button--subscribe--multiple"
                        href={buttonItem.url}
                        target="_blank"
                        key={buttonItem.id}
                        onClick={this.fireEvent}
                    >
                        {buttonItem.buttonText || 'Subscribe'}
                    </a>
                )
        );
    }

    render() {
        const { inSideNav, content } = this.props;
        const { subscribeHeading, magCover, magCoverImageUrl, magCoverText } = content;
        const xLargeGridClass = !inSideNav ? 'xlarge-6' : '';
        const { siteMagCover, otherMagCovers } = this.getMagCovers(magCover);

        return (
            <div className="subscribe">
                <div className="row">
                    {magCoverImageUrl && (
                        <SubscribeMagBlock inSideNav={inSideNav} magCoverUrl={magCoverImageUrl} magCoverList={{ siteMagCover, otherMagCovers }} />
                    )}

                    <div className={`small-12 ${xLargeGridClass} medium-6 columns`}>
                        <div className="subscribe__subscribe">
                            <h4 className="subscribe__heading">{subscribeHeading}</h4>
                            <p className="subscribe__content">{magCoverText}</p>
                            <div className="subscribe__action">
                                <a
                                    className="button button--link button--subscribe"
                                    href={siteMagCover.url || '/subscribe-magazine'}
                                    target="_blank"
                                    onClick={this.fireEvent}
                                >
                                    {siteMagCover.buttonText || 'Subscribe'}
                                </a>
                                {this.getButtonList(otherMagCovers)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
