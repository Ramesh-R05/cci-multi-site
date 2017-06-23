
import React, { Component, PropTypes } from 'react';
import { connectToStores } from '@bxm/flux';
import Page from './page';
import Ad from '@bxm/ad/lib/google/components/ad';
import HeroTeaser from '../components/teaser/hero';
import TeaserGridView from '../components/teaser/grid';
import TeaserListView from '../components/teaser/list';
import Repeatable from '../components/repeatable';
import loadList from '../actions/loadList';
import SocialContainer from '../components/social/block';
import StickyAndDockAd from '../components/page/stickyAndDockAd';
import BrandMagazine from '../components/brand/brandMagazine';
import get from 'lodash/object/get';
import StickyAd from '@bxm/ad/lib/google/components/stickyAd';

function mapStateToProps(context) {
    const pageStore = context.getStore('PageStore');
    const teaserStore = context.getStore('TeaserStore');
    return {
        title: pageStore.getTitle(),
        teasers: teaserStore.getLatestTeasers(),
        list: teaserStore.getList(),
        listNextParams: teaserStore.getListNextParams(),
        magazineImageUrl: pageStore.getMagazineImageUrl()
    };
}

@connectToStores(['PageStore', 'TeaserStore'], mapStateToProps)
export default class Section extends Component {
    static displayName = 'Section';

    static propTypes = {
        nodeType: PropTypes.array.isRequired,
        list: PropTypes.array.isRequired,
        listNextParams: PropTypes.object.isRequired,
        teasers: PropTypes.array.isRequired,
        title: PropTypes.array.isRequired,
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
        const { nodeType, teasers, title, currentUrl, theme } = this.props;
        const heroTeaser = teasers[0];
        const firstTeaserList = teasers.slice(1, 7);
        const keyword = (nodeType === 'TagSection' && title) ? [title] : [];
        const pageLocation = Ad.pos.outside;
        const { config } = this.context;
        const brand = config.product;
        const headerClassName = '';
        const pageTitle = (
            <h1 className="page-title">
                <span className="page-title__symbol" />
                {title}
            </h1>
        );
        const polarLabels = this.context.config.polar.details;

        const themeEnabled = !!theme && !!theme.headerSmallBackground && !!theme.headerMediumBackground && !!theme.headerLargeBackground;

        const adProps = {
            className: 'ad--section-top-leaderboard',
            displayFor: ['small', 'medium', 'large', 'xlarge'],
            sizes: {
                banner: 'banner',
                leaderboard: 'leaderboard',
                billboard: ['billboard', 'leaderboard'] },
            pageLocation,
            targets: keyword
        };

        return (
            <Page
              currentUrl={currentUrl}
              headerExpanded={config.features.headerExpanded && themeEnabled}
              pageTitle={pageTitle}
              className="page--section"
              headerClassName={headerClassName}
              theme={themeEnabled ? theme : {}}
            >
                <div className="section-page">
                    <div className="container">
                        <div className="row">
                            <div className="page__top-container columns">
                                <div className="row">
                                    <div
                                      className="columns large-8 xlarge-9 section-page__teasers-container"
                                      ref={(c) => { this.top = c; }}
                                    >
                                        <HeroTeaser showDate article={heroTeaser} brand={brand} />

                                        <TeaserGridView
                                          teasers={firstTeaserList}
                                          showDate
                                          className="news-feed top-news-feed"
                                          adPosition={8}
                                          adTargets={{ keyword }}
                                          nativeAdConfig={{ slotPositionIndex: polarLabels.sectionTopFeed }}
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
                                                  pageLocation={Ad.pos.aside}
                                                />
                                                { brand ? <BrandMagazine brand={brand} /> :
                                                <div className="page__get-social-container">
                                                    <span className="page__social-logo">Now To Love</span>
                                                    <SocialContainer socialUrls={this.context.config.urls.socialUrls} />
                                                </div> }
                                            </StickyAndDockAd>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={(c) => { this.bottom = c; }} />

                    {/* 2nd Leaderboard or banner below Gallery of Videos */}
                    { teasers.length ? <Ad
                      className="ad--section-leaderboard"
                      sizes={{
                          banner: 'banner',
                          leaderboard: 'leaderboard',
                          billboard: ['billboard', 'leaderboard'] }}
                      targets={{ keyword }}
                      pageLocation={pageLocation}
                    /> : null }

                    <Repeatable
                      component={TeaserListView}
                      action={loadList}
                      showDate
                      dataSource={this.props.list}
                      nextParams={this.props.listNextParams}
                      className="news-feed bottom-news-feed"
                      adTargets={{ keyword }}
                      nativeAdConfig={{ slotPositionIndex: polarLabels.sectionBottomFeed }}
                    />

                    {/* 3rd Leaderboard to show on tablet and up */}
                    { get(this.props.list, 'items[0].length') ? <StickyAd
                      adProps={adProps}
                      minHeight={450}
                      stickyAtViewPort="mediumRangeMax"
                    /> : null }
                </div>
            </Page>
        );
    }
}
