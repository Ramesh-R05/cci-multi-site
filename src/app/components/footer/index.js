import React, { Component, PropTypes } from 'react';
import BackToTop from '@bxm/ui/lib/back-to-top/backToTop';
import SocialContainer from '../social/block';
import FooterNavigation from './footerNavigation';
import Logos from '../page/logos';
import FooterSubscribe from './footerSubscribe';

export default class Footer extends Component {
    static propTypes = {
        modifier: PropTypes.string.isRequired,
        logoList: PropTypes.arrayOf(PropTypes.element).isRequired,
        magCover: PropTypes.object
    };

    static defaultProps = {
        magCover: {}
    };

    static contextTypes = {
        config: PropTypes.object
    };

    render() {
        const { config } = this.context;
        const { modifier, logoList, magCover } = this.props;
        const subscribeContent = config.subscribe;
        let classNames = 'footer';

        // Only show the brand logos and title, if the array list has items.
        const brandLogos =
            logoList.length === 0 ? null : (
                <div className="footer__logos">
                    <span className="footer__logos-title">CONTENT SUPPORTED BY</span>
                    <br />
                    <nav className="footer__logos-nav">
                        <Logos className="footer__logos-list" openInNewTab logoList={logoList} />
                    </nav>
                </div>
            );

        if (modifier) {
            classNames += ` footer--${modifier}`;
        }

        return (
            <div>
                <footer className={classNames}>
                    <div className="home-page__get-social-container">
                        <span className="home-page__social-logo">{config.site.name}</span>
                        <SocialContainer socialUrls={config.urls.socialUrls} />
                    </div>
                    <FooterSubscribe content={{ ...subscribeContent, magCover }} isDisplayed={magCover !== {}} />

                    {brandLogos}

                    <FooterNavigation footerUrls={config.urls.footerUrls} />
                    <div className="footer__copyright">
                        <span className="footer__copyright-bauer">&copy; Copyright Bauer Media Pty Ltd</span>
                        <span className="footer__copyright-rights">All Rights Reserved</span>
                    </div>
                </footer>
                <BackToTop className="button" />
            </div>
        );
    }
}
