import React, { Component } from 'react';

import BackToTop from '@bxm/ui/lib/back-to-top/backToTop';
import FooterNavigation from './footerNavigation';
import FooterSubscribe from './footerSubscribe';
import Logos from '../page/logos';
import PropTypes from 'prop-types';
import SocialContainer from '../social/block';
import classNames from 'classnames';

export default class Footer extends Component {
    static propTypes = {
        modifier: PropTypes.string,
        logoList: PropTypes.arrayOf(PropTypes.object).isRequired,
        magCover: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        magCoverImageUrl: PropTypes.string,
        magCoverText: PropTypes.string,
        brand: PropTypes.object,
        isBrandPage: PropTypes.bool
    };

    static defaultProps = {
        magCover: {},
        brand: null,
        magCoverImageUrl: '',
        magCoverText: '',
        isBrandPage: false,
        modifier: null
    };

    static contextTypes = {
        config: PropTypes.object
    };

    shouldComponentUpdate() {
        return false;
    }

    render() {
        const { config } = this.context;
        const { modifier, logoList, magCover, magCoverImageUrl, magCoverText, isBrandPage, brand } = this.props;
        const subscribeContent = config.subscribe;

        const rootClass = classNames('footer', {
            [`footer--${modifier}`]: modifier
        });

        let socialUrls = isBrandPage ? config.brands.site.find(b => b.id === brand.id).socialLinks : config.urls.socialUrls;

        if (config.product.id === 'foodnz') {
            socialUrls = config.urls.socialUrls;
        }

        return (
            <div>
                <footer className={rootClass}>
                    <div className="home-page__get-social-container">
                        <span className="home-page__social-logo">{config.site.name}</span>
                        <SocialContainer socialUrls={socialUrls} />
                    </div>
                    <FooterSubscribe content={{ ...subscribeContent, magCover, magCoverImageUrl, magCoverText }} isDisplayed={magCover !== {}} />

                    {logoList && logoList.length >= 1 ? (
                        <div className="footer__logos">
                            <span className="footer__logos-title">CONTENT SUPPORTED BY</span>
                            <br />
                            <nav className="footer__logos-nav">
                                <Logos className="footer__logos-list" gtmPrefix="footer" openInNewTab logoList={logoList} />
                            </nav>
                        </div>
                    ) : null}

                    <FooterNavigation footerUrls={config.urls.footerUrls} />
                    <div className="footer__copyright">
                        <span className="footer__copyright-bauer">&copy; Copyright {new Date().getFullYear()} Are Media Pty Limited</span>
                        <span className="footer__copyright-rights">All Rights Reserved</span>
                    </div>
                </footer>
                <BackToTop className="button" />
            </div>
        );
    }
}
