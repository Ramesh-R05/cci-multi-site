import React, { Component } from 'react';

import Ad from '@bxm/ad/lib/google/components/ad';
import PropTypes from 'prop-types';
import StickyAd from '@bxm/ad/lib/google/components/stickyAd';
import { connectToStores } from '@bxm/flux';
import get from 'lodash/object/get';
import has from 'lodash/object/has';
import HeroTeaser from '../components/teaser/hero';
import MustRead from '../components/mustRead/mustRead';
import Page from './page';
import PageSearchBox from '../components/search/pageSearchBox';
import Promoted from '../components/promoted/promoted';
import Repeatable from '../components/repeatable';
import SideBlock from '../components/sideBlock/sideBlock';
import StickyAndDockAd from '../components/page/stickyAndDockAd';
import TeaserGridView from '../components/teaser/grid';
import TeaserListView from '../components/teaser/list';
import loadList from '../actions/loadList';

function mapStateToProps(context) {
    const pageStore = context.getStore('PageStore');
    const teaserStore = context.getStore('TeaserStore');

    return {
        heroTeaser: teaserStore.getHeroTeaser(),
        teasers: teaserStore.getLatestTeasers(),
        list: teaserStore.getList(),
        listNextParams: teaserStore.getListNextParams(),
        magCover: pageStore.getModule('magCover'),
        magazineImageUrl: pageStore.getMagazineImageUrl(),
        homePageSearchBox: pageStore.getHomeSearchBox()
    };
}

@connectToStores(['PageStore', 'TeaserStore'], mapStateToProps)
export default class Home extends Component {
    static displayName = 'HomePage';

    static propTypes = {
        heroTeaser: PropTypes.object.isRequired,
        list: PropTypes.object.isRequired,
        listNextParams: PropTypes.object.isRequired,
        homePageSearchBox: PropTypes.object.isRequired,
        teasers: PropTypes.array,
        currentUrl: PropTypes.string.isRequired,
        theme: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        siteAlert: PropTypes.object,
        magCover: PropTypes.array,
        magazineImageUrl: PropTypes.string
    };

    static defaultProps = {
        teasers: [],
        theme: {},
        siteAlert: {},
        magCover: [],
        magazineImageUrl: ''
    };

    static contextTypes = {
        config: PropTypes.object
    };

    state = {
        bottomElm: null,
        topElm: null
    };

    componentDidMount() {
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({
            bottomElm: this.bottom,
            topElm: this.top
        });
    }

    render() {
        const { config } = this.context;
        const { currentUrl, theme, heroTeaser, teasers, list, listNextParams, magCover, magazineImageUrl, homePageSearchBox, siteAlert } = this.props;
        const { topElm, bottomElm } = this.state;
        const brand = config.product;
        const polarLabels = config.polar.details;
        const pageLocation = Ad.pos.outside;
        const giftCardEnabled = get(config, 'features.giftCard.enabled', false);
        const usePlaceholderForSearchBoxInput = config.isFeatureEnabled('homeSearchPlaceholderText');
        const { showInsideContainer, showOutsideContainer } = config.features.mustRead;
        const { showBelowHero, showAboveBottomTeasers } = config.features.promoted;

        const adProps = {
            className: 'ad--section-bottom-leaderboard',
            displayFor: ['small', 'medium', 'large', 'xlarge'],
            sizes: {
                banner: 'banner',
                leaderboard: 'leaderboard',
                billboard: ['billboard', 'leaderboard']
            },
            pageLocation
        };

        const topListType = get(config, 'features.homePage.topNewsFeedListType', 'grid');
        const showImageBadge = get(config, 'features.homePage.newsFeed.showImageBadge', false);
        const tagsToShow = get(config, 'features.homePage.newsFeed.tagsToShow', 0);
        const linesToShow = get(config, 'features.homePage.newsFeed.linesToShow', 0);
        const isBrandDefined = typeof brand !== 'undefined';
        const showMagazineDisplay = Array.isArray(magCover) && has(magCover[0], 'moduleImageUrl');

        return (
            <Page
                currentUrl={currentUrl}
                headerExpanded={config.features.headerExpanded}
                showUniheader
                theme={theme}
                siteAlert={siteAlert}
                className="page--home"
            >
                <div className="home-page">
                    {/* 1st Leaderboard or billboard to show on tablet and up */}
                    <div className="stripe-bg">
                        <div className="container">
                            <div className="row">
                                <MustRead show={showOutsideContainer} />
                            </div>
                            <div className="row">
                                <div className="page__top-container columns">
                                    <div className="row">
                                        <div
                                            className="columns large-8 xlarge-9 home-page__teasers-container"
                                            ref={c => {
                                                this.top = c;
                                            }}
                                        >
                                            <div className="row">
                                                <PageSearchBox {...homePageSearchBox} usePlaceholder={usePlaceholderForSearchBoxInput} />
                                            </div>
                                            <div className="row">
                                                <MustRead show={showInsideContainer} />
                                            </div>
                                            <HeroTeaser
                                                article={heroTeaser}
                                                showPromoted={showBelowHero}
                                                brand={brand}
                                                magazineImageUrl={magazineImageUrl}
                                            />
                                            <div className="home-page__teasers-title">
                                                <span>what&apos;s happening now</span>
                                            </div>
                                            {topListType === 'grid' && (
                                                <TeaserGridView
                                                    teasers={teasers.slice(0, 6)}
                                                    className="news-feed top-news-feed"
                                                    adPosition={8}
                                                    adSizes={{ small: 'mrec', medium: ['mrec', 'double-mrec'] }}
                                                    nativeAdConfig={{
                                                        slotPositionIndex: polarLabels.homeTopFeed
                                                    }}
                                                />
                                            )}
                                            {topListType === 'list' && (
                                                <TeaserListView
                                                    index={null}
                                                    items={teasers.slice(0, 6)}
                                                    className="news-feed top-news-feed"
                                                    nativeAdConfig={{
                                                        slotPositionIndex: polarLabels.homeTopFeed
                                                    }}
                                                    showDate={false}
                                                    loadAgain={false}
                                                    showAd={false}
                                                    tagsToShow={tagsToShow}
                                                    showImageBadge={showImageBadge}
                                                    linesToShow={linesToShow}
                                                />
                                            )}
                                        </div>
                                        <div className="page__social-wrapper columns large-4 xlarge-3">
                                            <div className="columns medium-6 large-12" style={{ minHeight: '300px' }}>
                                                <StickyAndDockAd
                                                    offsetTop={95}
                                                    offsetBottom={16}
                                                    customiseBreakpoint={1024}
                                                    bottomElm={bottomElm}
                                                    topElm={topElm}
                                                >
                                                    <Ad className="ad--section-mrec" sizes="mrec" displayFor="large" pageLocation={Ad.pos.aside} />
                                                    <SideBlock
                                                        showBrandMagazine={showMagazineDisplay}
                                                        showBrandNewsletter={isBrandDefined}
                                                        showGiftCard={giftCardEnabled}
                                                        brand={brand}
                                                        magazineImageUrl={magazineImageUrl}
                                                    />
                                                </StickyAndDockAd>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        ref={c => {
                            this.bottom = c;
                        }}
                    />

                    <Ad
                        className="ad--section-leaderboard"
                        sizes={{
                            banner: 'banner',
                            leaderboard: 'leaderboard',
                            billboard: ['billboard', 'leaderboard']
                        }}
                        pageLocation={pageLocation}
                    />

                    <Promoted show={showAboveBottomTeasers} />

                    <Repeatable
                        component={TeaserListView}
                        action={loadList}
                        dataSource={list}
                        nextParams={listNextParams}
                        className="news-feed bottom-news-feed"
                        nativeAdConfig={{
                            slotPositionIndex: polarLabels.homeBottomFeed
                        }}
                        pageLocation={pageLocation}
                        showImageBadge={showImageBadge}
                        tagsToShow={tagsToShow}
                        linesToShow={linesToShow}
                    />

                    {/* 3rd Leaderboard to show on tablet and up */}
                    <StickyAd adProps={adProps} minHeight={450} stickyAtViewPort="mediumRangeMax" stickyDelay={5500} />
                </div>
            </Page>
        );
    }
}
