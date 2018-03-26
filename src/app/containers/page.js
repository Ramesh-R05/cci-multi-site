import React, { Component, PropTypes } from 'react';
import { connectToStores } from '@bxm/flux';
import hamburgerWrapper from '@bxm/nav/lib/components/hamburgerWrapper';
import MobileOffCanvas from '@bxm/nav/lib/components/offcanvas/content';
import Header from '@bxm/site-header';
import Footer from '../components/footer';
import UniHeader from '../components/uniheader';
import Logos from '../components/page/logos';
import HamburgerNav from '@bxm/site-header/lib/components/hamburgerNav';
import classnames from 'classnames';
import Ad from '@bxm/ad/lib/google/components/ad';
import StandardPageAdsWrapper from '@bxm/ad/lib/google/components/standardPageAdsWrapper';
import StickyAd from '@bxm/ad/lib/google/components/stickyAd';

function mapStateToProps(context) {
    const NavigationStore = context.getStore('NavigationStore');
    const articleStore = context.getStore('articleStore');
    const PageStore = context.getStore('PageStore');

    return {
        headerNavItems: NavigationStore.getHeaderItems(),
        hamburgerNavItems: NavigationStore.getHamburgerItems(),
        content: articleStore.getContent(),
        magCover: PageStore.getModule('magCover'),
        searchMagCover: NavigationStore.getMagCover(),
        isSearchPage: NavigationStore.isSearchPage()
    };
}

@connectToStores(['NavigationStore', 'articleStore', 'PageStore'], mapStateToProps)
@hamburgerWrapper
export default class Page extends Component {
    static displayName = 'Page';

    static propTypes = {
        className: PropTypes.string.isRequired,
        children: PropTypes.oneOfType([
            PropTypes.element, PropTypes.array
        ]).isRequired,
        content: PropTypes.array.isRequired,
        headerExpanded: PropTypes.bool.isRequired,
        hideFooter: PropTypes.bool.isRequired,
        menuClasses: PropTypes.string.isRequired,
        headerNavItems: PropTypes.array.isRequired,
        hamburgerNavItems: PropTypes.array.isRequired,
        toggleSideMenu: PropTypes.func.isRequired,
        currentUrl: PropTypes.string.isRequired,
        showUniheader: PropTypes.bool.isRequired,
        hideLeaderboard: PropTypes.bool,
        pageTitle: PropTypes.string.isRequired,
        headerClassName: PropTypes.string,
        theme: PropTypes.object,
        magCover: PropTypes.object,
        searchMagCover: PropTypes.object,
        isSearchPage: PropTypes.bool
    };

    static contextTypes = {
        config: PropTypes.object
    };

    static defaultProps = {
        hideLeaderboard: false,
        headerClassName: '',
        theme: {},
        magCover: {},
        searchMagCover: {},
        isSearchPage: false
    };

    toggleMenu = () => {
        this.props.toggleSideMenu('left');
    };

    static allowAdExchange = (content, config) => {
        const blocked = (config.ads && config.ads.blocked) || null;
        let result = null;

        if (blocked) {
            result = true;

            if (content && content.nodeType) {
                const sections = blocked.sections || [];

                switch (content.nodeType.toLowerCase()) {
                case 'section':
                case 'tagsection':
                    if (content.title) {
                        for (let i = 0, sectionsLength = sections.length; i < sectionsLength; i++) {
                            if (content.title.toLowerCase().startsWith(sections[i].toLowerCase())) {
                                result = false;
                                break;
                            }
                        }
                    }
                    break;
                default:
                    if (content.parentName) {
                        for (let i = 0, sectionsLength = sections.length; i < sectionsLength; i++) {
                            if (content.parentName.toLowerCase() === sections[i].toLowerCase()) {
                                result = false;
                                break;
                            }
                        }
                    }
                }
            }

            if (result) {
                const tags = (content && content.tagsDetails) || [];
                const blockedTags = blocked.tags || [];

                for (let i = 0, blockedTagsLength = blockedTags.length; i < blockedTagsLength && result; i++) {
                    for (let j = 0, tagsLength = tags.length; j < tagsLength; j++) {
                        if (tags[j].name && blockedTags[i].toLowerCase() === tags[j].name.toLowerCase()) {
                            result = false;
                            break;
                        }
                    }
                }
            }
        }

        return result;
    };

    render() {
        const {
            headerNavItems,
            hamburgerNavItems,
            showUniheader,
            currentUrl,
            headerExpanded,
            hideFooter,
            hideLeaderboard,
            pageTitle,
            headerClassName,
            content,
            theme,
            menuClasses,
            magCover,
            searchMagCover,
            isSearchPage
        } = this.props;

        const pageLocation = Ad.pos.outside;
        const { config } = this.context;
        const mobileNav = hamburgerNavItems ? hamburgerNavItems.slice() : headerNavItems.slice();
        const footerMagCover = isSearchPage ? searchMagCover : magCover;
        const pageClassName = classnames('page', this.props.className);
        const allowAdExchange = Page.allowAdExchange(content, config);
        const customAdParams = {};
        let keyword;

        mobileNav.unshift({
            name: 'Home',
            url: '/'
        });

        if (content) {
            const tags = content.tagsDetails;
            keyword = tags ? tags.map(tag => tag.fullName) : '';
        }

        if (typeof allowAdExchange === 'boolean') {
            customAdParams.allow_adx = allowAdExchange;
        }

        const stickyAdProps = {
            className: 'ad--section-top-leaderboard',
            displayFor: ['small', 'medium', 'large', 'xlarge'],
            sizes: {
                banner: 'banner',
                leaderboard: 'leaderboard',
                billboard: ['billboard', 'leaderboard']
            },
            targets: {
                keyword
            },
            pageLocation,
            customParams: customAdParams
        };

        return (
            <div className={pageClassName}>
                <div className={menuClasses}>

                    {showUniheader && <UniHeader className="uniheader" logoList={config.brands.uniheader} />}

                    <Header
                      currentUrl={currentUrl}
                      isExpanded={headerExpanded}
                      navItems={headerNavItems}
                      siteName={config.site.name}
                      toggleMenu={this.toggleMenu}
                      headerClassName={headerClassName}
                      theme={theme}
                    />

                    {!hideLeaderboard && <StickyAd
                      adProps={stickyAdProps}
                      minHeight={450}
                      stickyAtViewPort="largeRangeMax"
                      stickyDelay={2000}
                      isStickyTemporary
                      stickyDuration={3500}
                    />}

                    {pageTitle && <div className="page-title-container"> { pageTitle } </div>}

                    <StandardPageAdsWrapper customParams={customAdParams}>
                        <div className="content-wrapper">
                            { this.props.children }
                            { !hideFooter && <Footer magCover={footerMagCover} logoList={config.brands.uniheader} />}
                        </div>
                    </StandardPageAdsWrapper>

                    <MobileOffCanvas side="left" toggleSideMenu={this.toggleMenu}>
                        <div className="off-canvas-content-wrapper">
                            <button
                              className="close-btn"
                              onClick={this.toggleMenu}
                                /* eslint-disable max-len, react/no-danger */
                              dangerouslySetInnerHTML={{ __html: `
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="22" height="22" viewBox="0 0 22 22">
                            <path d="M12.757,10.979 C12.757,10.979 21.608,19.830 21.608,19.830 C22.099,20.321 22.099,21.117 21.608,21.607 C21.117,22.098 20.322,22.098 19.831,21.607 C19.831,21.607 10.980,12.756 10.980,12.756 C10.980,12.756 2.129,21.607 2.129,21.607 C1.639,22.098 0.843,22.098 0.352,21.607 C-0.138,21.117 -0.138,20.321 0.352,19.830 C0.352,19.830 9.203,10.979 9.203,10.979 C9.203,10.979 0.352,2.129 0.352,2.129 C-0.138,1.638 -0.138,0.843 0.352,0.351 C0.843,-0.139 1.639,-0.139 2.129,0.351 C2.129,0.351 10.980,9.202 10.980,9.202 C10.980,9.202 19.831,0.351 19.831,0.351 C20.322,-0.139 21.117,-0.139 21.608,0.351 C22.099,0.843 22.099,1.638 21.608,2.129 C21.608,2.129 12.757,10.979 12.757,10.979 Z" id="path-1" class="cls-2" fill-rule="evenodd"></path>
                        </svg>
                    ` }}
                            />
                            <HamburgerNav className="mobile-menu" items={mobileNav} currentUrl={currentUrl} />
                            <Logos className="mobile-menu-list" gtmPrefix="hamburger" openInNewTab logoList={config.brands.hamburgers} />
                        </div>
                    </MobileOffCanvas>

                </div>
            </div>
        );
    }
}
