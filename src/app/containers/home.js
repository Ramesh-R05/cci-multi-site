import React, { Component, PropTypes } from 'react';
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

function mapStateToProps(context) {
    const teaserStore = context.getStore('TeaserStore');
    return {
        heroTeaser: teaserStore.getHeroTeaser(),
        teasers: teaserStore.getLatestTeasers(),
        list: teaserStore.getList(),
        listNextParams: teaserStore.getListNextParams()
    };
}

@connectToStores(['TeaserStore'], mapStateToProps)
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
        const polarLabels = config.polar.details;
        const {
            currentUrl,
            theme,
            heroTeaser,
            teasers,
            list,
            listNextParams
        } = this.props;

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
                                <MustRead />
                            </div>
                            <div className="row">
                                <div className="page__top-container columns">
                                    <div className="row">
                                        <div className="columns large-8 xlarge-9 home-page__teasers-container" ref={(c) => { this.top = c; }}>
                                            <HeroTeaser article={heroTeaser} showPromoted />

                                            <div className="home-page__teasers-title">
                                                <span>what&apos;s happening now</span>
                                            </div>

                                            <TeaserGridView
                                              teasers={teasers.slice(0, 6)}
                                              className="news-feed top-news-feed"
                                              adPosition={8}
                                              adSizes={{ small: 'mrec', medium: ['mrec', 'double-mrec'] }}
                                              adTargets={{ position: 2 }}
                                              nativeAdConfig={{
                                                  slotPositionIndex: polarLabels.homeTopFeed
                                              }}
                                            />
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
                                                      targets={{ position: 1 }}
                                                    />
                                                    <div className="page__get-social-container">
                                                        <span className="page__social-logo">Now To Love</span>
                                                        <SocialContainer socialUrls={config.urls.socialUrls} />
                                                    </div>
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
                      targets={{ position: 2 }}
                    />

                    <Repeatable
                      component={TeaserListView}
                      action={loadList}
                      dataSource={list}
                      nextParams={listNextParams}
                      className="news-feed bottom-news-feed"
                      adTargets={{ position: 3 }}
                      nativeAdConfig={{
                          slotPositionIndex: polarLabels.homeBottomFeed
                      }}
                    />

                    {/* 3rd Leaderboard to show on tablet and up */}
                    <Ad
                      className="ad--section-top-leaderboard"
                      displayFor={['medium', 'large', 'xlarge']}
                      sizes={{
                          banner: 'banner',
                          leaderboard: 'leaderboard',
                          billboard: ['billboard', 'leaderboard'] }}
                      targets={{ position: 3 }}
                    />

                </div>
            </Page>
        );
    }
}
