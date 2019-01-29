import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectToStores } from '@bxm/flux';
import Ad from '@bxm/ad/lib/google/components/ad';
import get from 'lodash/object/get';
import StickyAd from '@bxm/ad/lib/google/components/stickyAd';
import Page from './page';
import TeaserListView from '../components/teaser/list';
import Repeatable from '../components/repeatable';
import loadSearch from '../actions/loadSearch';
import StickyAndDockAd from '../components/page/stickyAndDockAd';
import SideBlock from '../components/sideBlock/sideBlock';
import SearchBar from '../components/search/searchBar';

function mapStateToProps(context) {
    const SearchStore = context.getStore('SearchStore');

    return {
        title: SearchStore.getTitle(),
        listNextParams: SearchStore.getSearchListNextParams(),
        magazineImageUrl: SearchStore.getMagazineImageUrl(),
        searchTotal: SearchStore.getSearchTotal(),
        teasers: SearchStore.getInitialSearchResults(),
        list: SearchStore.getSearchResultsList()
    };
}

@connectToStores(['SearchStore'], mapStateToProps)
export default class Search extends Component {
    static displayName = 'Search';

    static propTypes = {
        nodeType: PropTypes.string.isRequired,
        listNextParams: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired,
        currentUrl: PropTypes.string.isRequired,
        theme: PropTypes.object,
        searchTotal: PropTypes.number.isRequired,
        teasers: PropTypes.array,
        list: PropTypes.object.isRequired,
        magazineImageUrl: PropTypes.string
    };

    static defaultProps = {
        teasers: [],
        theme: {},
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
        const brand = config.product;
        const { nodeType, teasers, title, currentUrl, theme, searchTotal, list, listNextParams, magazineImageUrl } = this.props;
        const keyword = nodeType === 'TagSection' && title ? [title] : [];
        const pageLocation = Ad.pos.outside;
        const giftCardEnabled = get(config, 'features.giftCard.enabled', false);
        const isBrandDefined = typeof brand !== 'undefined';
        const pageTitle = (
            <h1 className="page-title">
                <span className="page-title__symbol" />
                <span>{`${searchTotal} ${title} results`}</span>
            </h1>
        );

        const themeEnabled = !!theme && !!theme.headerSmallBackground && !!theme.headerMediumBackground && !!theme.headerLargeBackground;

        const adProps = {
            className: 'ad--section-bottom-leaderboard',
            displayFor: ['small', 'medium', 'large', 'xlarge'],
            sizes: {
                banner: 'banner',
                leaderboard: 'leaderboard',
                billboard: ['billboard', 'leaderboard']
            },
            pageLocation,
            targets: keyword
        };

        const showImageBadge = get(config, 'features.homePage.newsFeed.showImageBadge', false);
        const tagsToShow = get(config, 'features.homePage.newsFeed.tagsToShow', 0);
        const linesToShow = get(config, 'features.homePage.newsFeed.linesToShow', 0);

        return (
            <Page
                currentUrl={currentUrl}
                headerExpanded={config.features.headerExpanded && themeEnabled}
                pageTitle={pageTitle}
                className="page--section"
                theme={themeEnabled ? theme : {}}
            >
                <div className="section-page search-page">
                    <div className="container">
                        <div className="row">
                            <div className="page__top-container columns">
                                <div className="row">
                                    <div
                                        className="columns large-8 xlarge-9 section-page__teasers-container"
                                        ref={c => {
                                            this.top = c;
                                        }}
                                    >
                                        <SearchBar />

                                        <TeaserListView
                                            index={null}
                                            items={teasers.slice(0, 6)}
                                            className="news-feed top-news-feed"
                                            showDate={false}
                                            loadAgain={false}
                                            showAd={false}
                                            tagsToShow={tagsToShow}
                                            showImageBadge={showImageBadge}
                                            linesToShow={linesToShow}
                                            adTargets={{ keyword }}
                                        />
                                    </div>
                                    <div className="page__social-wrapper columns large-4 xlarge-3">
                                        <div className="columns medium-6 large-12">
                                            {this.state.bottomElm && (
                                                <StickyAndDockAd
                                                    offsetTop={95}
                                                    offsetBottom={16}
                                                    customiseBreakpoint={1024}
                                                    bottomElm={this.state.bottomElm}
                                                    topElm={this.state.topElm}
                                                >
                                                    <Ad className="ad--section-mrec" sizes="mrec" displayFor="large" pageLocation={Ad.pos.aside} />
                                                    <SideBlock
                                                        showBrandMagazine={isBrandDefined}
                                                        showBrandNewsletter={isBrandDefined}
                                                        showGiftCard={giftCardEnabled}
                                                        brand={brand}
                                                        magazineImageUrl={magazineImageUrl}
                                                    />
                                                </StickyAndDockAd>
                                            )}
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

                    {/* 2nd Leaderboard or banner below Gallery of Videos */}
                    {teasers.length ? (
                        <Ad
                            className="ad--section-leaderboard"
                            sizes={{
                                banner: 'banner',
                                leaderboard: 'leaderboard',
                                billboard: ['billboard', 'leaderboard']
                            }}
                            targets={{ keyword }}
                            pageLocation={pageLocation}
                        />
                    ) : null}

                    <Repeatable
                        component={TeaserListView}
                        action={loadSearch}
                        dataSource={list}
                        nextParams={listNextParams}
                        className="news-feed bottom-news-feed"
                        pageLocation={pageLocation}
                        showImageBadge={showImageBadge}
                        tagsToShow={tagsToShow}
                        linesToShow={linesToShow}
                        adTargets={{ keyword }}
                    />

                    {/* 3rd Leaderboard to show on tablet and up */}
                    {get(list, 'items[0].length') ? (
                        <StickyAd adProps={adProps} minHeight={450} stickyAtViewPort="mediumRangeMax" stickyDelay={5500} />
                    ) : null}
                </div>
            </Page>
        );
    }
}
