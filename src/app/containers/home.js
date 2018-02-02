import React, { Component, PropTypes } from 'react';

import get from 'lodash/object/get';
import { connectToStores } from '@bxm/flux';
import Ad from '@bxm/ad/lib/google/components/ad';
import SocialContainer from '../components/social/block';
import HeroTeaser from '../components/teaser/hero';
import TeaserGridView from '../components/teaser/grid';
import TeaserListView from '../components/teaser/list';
import Page from './page';
import Repeatable from '../components/repeatable';
import loadList from '../actions/loadList';
import StickyAndDockAd from '../components/page/stickyAndDockAd';
import MustRead from '../components/mustRead/mustRead';
import Promoted from '../components/promoted/promoted';
import BrandMagazine from '../components/brand/brandMagazine';
import StickyAd from '@bxm/ad/lib/google/components/stickyAd';

function mapStateToProps(context) {
    const pageStore = context.getStore('PageStore');
    const teaserStore = context.getStore('TeaserStore');
    return {
        heroTeaser: teaserStore.getHeroTeaser(),
        teasers: teaserStore.getLatestTeasers(),
        list: teaserStore.getList(),
        listNextParams: teaserStore.getListNextParams(),
        magazineImageUrl: pageStore.getMagazineImageUrl()
    };
}

@connectToStores(['PageStore', 'TeaserStore'], mapStateToProps)
export default class Home extends Component {
    static displayName = 'HomePage';

    static propTypes = {
        heroTeaser: PropTypes.object.isRequired,
        list: PropTypes.array.isRequired,
        listNextParams: PropTypes.object.isRequired,
        teasers: PropTypes.array.isRequired,
        currentUrl: PropTypes.string.isRequired,
        theme: PropTypes.object
    };

    static defaultProps = {
        teasers: [],
        theme: {}
    };

    static contextTypes = {
        config: PropTypes.object
    };

    state = {
        bottomElm: null,
        topElm: null
    };

    componentDidMount() {
        this.setState({ // eslint-disable-line react/no-did-mount-set-state
            bottomElm: this.bottom,
            topElm: this.top
        });
    }

    render() {
        const { config } = this.context;
        const brand = config.product;
        const polarLabels = config.polar.details;
        const pageLocation = Ad.pos.outside;
        const { showInsideContainer, showOutsideContainer } = config.features.mustRead;
        const { showBelowHero, showAboveBottomTeasers } = config.features.promoted;
        const {
            currentUrl,
            theme,
            heroTeaser,
            teasers,
            list,
            listNextParams
        } = this.props;

        const adProps = {
            className: 'ad--section-bottom-leaderboard',
            displayFor: ['small', 'medium', 'large', 'xlarge'],
            sizes: {
                banner: 'banner',
                leaderboard: 'leaderboard',
                billboard: ['billboard', 'leaderboard'] },
            pageLocation
        };

        const topListType = get(config, 'features.homePage.topNewsFeedListType', 'grid');
        const showImageBadge = get(config, 'features.homePage.newsFeed.showImageBadge', false);
        const tagsToShow = get(config, 'features.homePage.newsFeed.tagsToShow', 0);
        const linesToShow = get(config, 'features.homePage.newsFeed.linesToShow', 0);

        return (
            <Page
              currentUrl={currentUrl}
              headerExpanded={config.features.headerExpanded}
              showUniheader
              theme={theme}
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
                                        <div className="columns large-8 xlarge-9 home-page__teasers-container" ref={(c) => { this.top = c; }}>
                                            <div className="row">
                                                <MustRead show={showInsideContainer} />
                                            </div>
                                            <HeroTeaser article={heroTeaser} showPromoted={showBelowHero} brand={brand} />
                                            <div className="home-page__teasers-title">
                                                <span>what&apos;s happening now</span>
                                            </div>
                                            {
                                                topListType === 'grid' &&
                                                <TeaserGridView
                                                  teasers={teasers.slice(0, 6)}
                                                  className="news-feed top-news-feed"
                                                  adPosition={8}
                                                  adSizes={{ small: 'mrec', medium: ['mrec', 'double-mrec'] }}
                                                  nativeAdConfig={{
                                                      slotPositionIndex: polarLabels.homeTopFeed
                                                  }}
                                                />
                                            }
                                            {
                                                topListType === 'list' &&
                                                <TeaserListView
                                                  index={null}
                                                  items={teasers.slice(0, 6)}
                                                  className={'news-feed top-news-feed'}
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
                                            }
                                        </div>
                                        <div className="page__social-wrapper columns large-4 xlarge-3">
                                            <div className="columns medium-6 large-12">
                                                <StickyAndDockAd
                                                  offsetTop={95}
                                                  offsetBottom={16}
                                                  customiseBreakpoint={1024}
                                                  bottomElm={this.state.bottomElm}
                                                  topElm={this.state.topElm}
                                                >
                                                    <Ad
                                                      className="ad--section-mrec"
                                                      sizes="mrec"
                                                      displayFor="large"
                                                      pageLocation={Ad.pos.aside}
                                                    />
                                                    { brand ? <BrandMagazine brand={brand} /> :
                                                    <div className="page__get-social-container">
                                                        <span className="page__social-logo">Now To Love</span>
                                                        <SocialContainer socialUrls={config.urls.socialUrls} />
                                                    </div> }
                                                </StickyAndDockAd>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={(c) => { this.bottom = c; }} />

                    <Ad
                      className="ad--section-leaderboard"
                      sizes={{
                          banner: 'banner',
                          leaderboard: 'leaderboard',
                          billboard: ['billboard', 'leaderboard'] }}
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
                    <StickyAd
                      adProps={adProps}
                      minHeight={450}
                      stickyAtViewPort="mediumRangeMax"
                      stickyDelay={5500}
                    />
                </div>
            </Page>
        );
    }
}
