import React, { Component, PropTypes } from 'react';

export default class SubscribeMagBlock extends Component {

    static propTypes = {
        inSideNav: PropTypes.bool.isRequired,
        magCoverUrl: PropTypes.string.isRequired
    };

    render() {
        const { inSideNav, magCoverUrl } = this.props;

        return inSideNav ? null : (
            <div className="subscription__image small-12 medium-6 columns">
                <a className="subscription__image--mag" href="/subscribe-magazine" target="_blank">
                    <img className="subs-cover" src={magCoverUrl} alt="subscribe magazine" />
                </a>
                <a className="subscription__image--ipad" href="/subscribe-digital" target="itunes_store">
                    <img className="subs-cover--ipad" src={magCoverUrl} alt="subscribe ipad" />
                </a>
            </div>
        );
    }
}
