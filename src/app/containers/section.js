import React, { Component } from 'react';

import Ad from '@bxm/ad/lib/google/components/ad';
import PropTypes from 'prop-types';
import StickyAd from '@bxm/ad/lib/google/components/stickyAd';
import { connectToStores } from '@bxm/flux';
import get from 'lodash/object/get';
import has from 'lodash/object/has';
import HeroTeaser from '../components/teaser/hero';
import Page from './page';
import Repeatable from '../components/repeatable';
import SideBlock from '../components/sideBlock/sideBlock';
import StickyAndDockAd from '../components/page/stickyAndDockAd';
import SubsectionList from '../components/subsectionList';
import TeaserGridView from '../components/teaser/grid';
import TeaserListView from '../components/teaser/list';
import loadList from '../actions/loadList';

function mapStateToProps(context) {
    const pageStore = context.getStore('PageStore');
    const teaserStore = context.getStore('TeaserStore');

    return {
        title: pageStore.getTitle(),
        heroTeaser: teaserStore.getHeroTeaser(),
        teasers: teaserStore.getLatestTeasers(),
        siteAlert: pageStore.getSiteAlert(),
        list: teaserStore.getList(),
        listNextParams: teaserStore.getListNextParams(),
        magCover: pageStore.getModule('magCover'),
        magazineImageUrl: pageStore.getMagazineImageUrl(),
        subsections: pageStore.getSubsections(),
        summary: pageStore.getSummary(),
        curatedHeroTeaser: teaserStore.getCuratedHeroTeaser()
    };
}

@connectToStores(['PageStore', 'TeaserStore'], mapStateToProps)
export default class Section extends Component {
    static displayName = 'Section';

    static propTypes = {
        nodeType: PropTypes.string.isRequired,
        list: PropTypes.object.isRequired,
        listNextParams: PropTypes.object.isRequired,
        teasers: PropTypes.array,
        curatedHeroTeaser: PropTypes.object,
        title: PropTypes.string.isRequired,
        currentUrl: PropTypes.string.isRequired,
        theme: PropTypes.object,
        siteAlert: PropTypes.object,
        subsections: PropTypes.object,
        magCover: PropTypes.object,
        magazineImageUrl: PropTypes.string,
        summary: PropTypes.string
    };

    static defaultProps = {
        teasers: [],
        curatedHeroTeaser: null,
        theme: {},
        siteAlert: {},
        subsections: { data: [], totalCount: 0 },
        magCover: [],
        magazineImageUrl: '',
        summary: ''
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
        const {
            nodeType,
            teasers,
            title,
            currentUrl,
            theme,
            siteAlert,
            subsections,
            magCover,
            magazineImageUrl,
            summary,
            curatedHeroTeaser,
            list,
            listNextParams
        } = this.props;
        const { topElm, bottomElm } = this.state;
        const isBrandPage = nodeType === 'Brand';
        const brand = isBrandPage ? config.brands.site.find(b => b.url === currentUrl) : config.product;

        // Using first teaser for each section because modules aren't setup for each one in the CMS
        let heroTeaser = teasers[0];
        let firstTeaserList = teasers.slice(1, 7);
        const curatedHeroTeaserEnabled = get(config, 'features.curatedHeroTeaser.enabled', false);

        if (curatedHeroTeaserEnabled && curatedHeroTeaser) {
            heroTeaser = curatedHeroTeaser;

            if (teasers && teasers[6]) {
                list.items[0].unshift(teasers[6]);
            }

            list.items[0] = [...new Set(list.items[0])];
            firstTeaserList = teasers.slice(0, 6);
        }

        const keyword = nodeType === 'TagSection' && title ? [title] : [];
        const pageLocation = Ad.pos.outside;
        const giftCardEnabled = get(config, 'features.giftCard.enabled', false);
        const summaryEnabled = get(config, 'features.summary.enabled', false);
        const showMagazineDisplay = Array.isArray(magCover) && has(magCover[0], 'moduleImageUrl');
        const isBrandDefined = typeof brand !== 'undefined';
        const pageTitle = isBrandPage ? (
            <h1 className="page-title page-title--with-brand-logo">
                <img className="page-title__brand-logo" src={brand.imageUrl} alt={brand.id} />
            </h1>
        ) : (
            <h1 className="page-title">
                <span className="page-title__symbol" />
                <span>{title}</span>
            </h1>
        );

        const googleNativeAdLabels = this.context.config.googleNativeAds.details;
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

        const topListType = get(config, 'features.sectionPage.topNewsFeedListType', 'grid');
        const showImageBadge = get(config, 'features.sectionPage.newsFeed.showImageBadge', false);
        const tagsToShow = get(config, 'features.sectionPage.newsFeed.tagsToShow', 0);
        const linesToShow = get(config, 'features.sectionPage.newsFeed.linesToShow', 0);

        return (
            <Page
                currentUrl={currentUrl}
                headerExpanded={config.features.headerExpanded && themeEnabled}
                pageTitle={pageTitle}
                className="page--section"
                theme={themeEnabled ? theme : {}}
                siteAlert={siteAlert}
            >
                <div className="section-page">
                    <div className="container">
                        {summaryEnabled &&
                            summary && (
                                <div className="row">
                                    {' '}
                                    <div className="columns">
                                        {' '}
                                        <div className="summary-description">
                                            {' '}
                                            <p>{summary}</p>{' '}
                                        </div>{' '}
                                    </div>{' '}
                                </div>
                            )}
                        <div className="row">
                            <div className="page__top-container columns">
                                <div className="row">
                                    <div
                                        className="columns large-8 xlarge-9 section-page__teasers-container"
                                        ref={c => {
                                            this.top = c;
                                        }}
                                    >
                                        {subsections.totalCount > 1 && <SubsectionList subsections={subsections.data} currentUrl={currentUrl} />}

                                        <HeroTeaser showDate article={heroTeaser} brand={brand} magazineImageUrl={magazineImageUrl} />

                                        {topListType === 'grid' && (
                                            <TeaserGridView
                                                teasers={firstTeaserList}
                                                showDate
                                                className="news-feed top-news-feed"
                                                adPosition={8}
                                                adTargets={{ keyword }}
                                                nativeAdConfig={{ slotPositionIndex: googleNativeAdLabels.sectionTopFeed }}
                                            />
                                        )}
                                        {topListType === 'list' && (
                                            <TeaserListView
                                                index={null}
                                                items={teasers.slice(0, 6)}
                                                className="news-feed top-news-feed"
                                                nativeAdConfig={{
                                                    slotPositionIndex: googleNativeAdLabels.homeTopFeed
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
                                        <div className="columns medium-6 large-12">
                                            <StickyAndDockAd
                                                offsetTop={95}
                                                offsetBottom={16}
                                                customiseBreakpoint={1024}
                                                bottomElm={bottomElm}
                                                topElm={topElm}
                                            >
                                                <Ad className="ad--section-mrec" sizes="mrec" displayFor="large" pageLocation={Ad.pos.aside} />
                                                <SideBlock
                                                    isBrandPage={isBrandPage}
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
                        action={loadList}
                        currentUrl={currentUrl}
                        showDate
                        dataSource={list}
                        nextParams={listNextParams}
                        className="news-feed bottom-news-feed"
                        adTargets={{ keyword }}
                        nativeAdConfig={{ slotPositionIndex: googleNativeAdLabels.sectionBottomFeed }}
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
