import React, { Component, PropTypes } from 'react';
import SubscribeMagBlock from './subscribeMagBlock';

export default class Subscribe extends Component {
    static propTypes = {
        content: PropTypes.object.isRequired,
        inSideNav: PropTypes.bool
    };

    static defaultProps = {
        inSideNav: false
    };

    fireEvent = () => {
        window.dataLayer.push({ event: 'subscribe.click' });
    };

    render() {
        const { inSideNav, content } = this.props;
        const {
            subscribeHeading,
            subscribeText,
            magCover
        } = content;
        const magCoverImageUrl = magCover && magCover.moduleImageUrl;
        const xLargeGridClass = (!inSideNav) ? 'xlarge-6' : '';

        return (
            <div className="subscribe">
                <div className="row">

                    { magCoverImageUrl && <SubscribeMagBlock
                      inSideNav={inSideNav}
                      magCoverUrl={magCoverImageUrl}
                    /> }

                    <div className={`small-12 ${xLargeGridClass} medium-6 columns`}>
                        <div className="subscribe__subscribe">
                            <h4 className="subscribe__heading">{subscribeHeading}</h4>
                            {/* eslint-disable react/no-danger */}
                            <p className="subscribe__content" dangerouslySetInnerHTML={{ __html: subscribeText }} />
                            <div className="subscribe__action">
                                <a
                                  className="button button--link button--subscribe"
                                  href="/subscribe-magazine"
                                  target="_blank"
                                  onClick={this.fireEvent}
                                >
                                    Subscribe
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
