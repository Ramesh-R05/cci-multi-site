import React, { Component, PropTypes } from 'react';
import { connectToStores } from '@bxm/flux';
import Ad from '@bxm/ad/lib/google/components/ad';
import get from 'lodash/object/get';
import StickyAd from '@bxm/ad/lib/google/components/stickyAd';
import Page from './page';
import HeroTeaser from '../components/teaser/hero';
import TeaserGridView from '../components/teaser/grid';
import TeaserListView from '../components/teaser/list';
import Repeatable from '../components/repeatable';
import loadList from '../actions/loadList';
import StickyAndDockAd from '../components/page/stickyAndDockAd';
import SideBlock from '../components/sideBlock/sideBlock';
import SubsectionList from '../components/subsectionList';

function mapStateToProps(context) {
    const pageStore = context.getStore('PageStore');
    const teaserStore = context.getStore('TeaserStore');

    return {
        title: pageStore.getTitle(),
        heroTeaser: teaserStore.getHeroTeaser(),
        teasers: teaserStore.getLatestTeasers(),
        list: teaserStore.getList(),
        listNextParams: teaserStore.getListNextParams(),
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
        subsections: PropTypes.object,
        magazineImageUrl: PropTypes.string,
        summary: PropTypes.string
    };

    static defaultProps = {
        teasers: [],
        curatedHeroTeaser: null,
        theme: {},
        subsections: { data: [], totalCount: 0 },
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
        const { nodeType, teasers, title, currentUrl, theme, subsections, magazineImageUrl, summary, curatedHeroTeaser } = this.props;
        const { topElm, bottomElm } = this.state;
        const isBrandPage = nodeType === 'Brand';
        const brand = isBrandPage ? config.brands.uniheader.find(b => b.url === currentUrl) : config.product;

        // Using first teaser for each section because modules aren't setup for each one in the CMS
        let heroTeaser = teasers[0];
        let firstTeaserList = teasers.slice(1, 7);
        const curatedHeroTeaserEnabled = get(config, 'features.curatedHeroTeaser.enabled', false);

        if (curatedHeroTeaserEnabled && curatedHeroTeaser) {
            heroTeaser = curatedHeroTeaser;
            this.props.list.items[0].unshift(teasers[6]);
            this.props.list.items[0] = [...new Set(this.props.list.items[0])];
            firstTeaserList = teasers.slice(0, 6);
        }

        const keyword = nodeType === 'TagSection' && title ? [title] : [];
        const pageLocation = Ad.pos.outside;
        const giftCardEnabled = get(config, 'features.giftCard.enabled', false);
        const summaryEnabled = get(config, 'features.summary.enabled', false);
        const isBrandDefined = typeof brand !== 'undefined';
        const pageTitle = isBrandPage ? (
            <h1 className="page-title page-title--with-brand-logo">
                <img className="page-title__brand-logo" src={brand.imageUrl} alt={brand.id} />
            </h1>
        ) : (
            <h1 className="page-title">
                <span className="page-title__symbol" />
                {title}
            </h1>
        );

        const polarLabels = this.context.config.polar.details;
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
                                                nativeAdConfig={{ slotPositionIndex: polarLabels.sectionTopFeed }}
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
                                                    showBrandMagazine={isBrandDefined}
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
                        showDate
                        dataSource={this.props.list}
                        nextParams={this.props.listNextParams}
                        className="news-feed bottom-news-feed"
                        adTargets={{ keyword }}
                        nativeAdConfig={{ slotPositionIndex: polarLabels.sectionBottomFeed }}
                    />

                    {/* 3rd Leaderboard to show on tablet and up */}
                    {get(this.props.list, 'items[0].length') ? (
                        <StickyAd adProps={adProps} minHeight={450} stickyAtViewPort="mediumRangeMax" stickyDelay={5500} />
                    ) : null}
                </div>
            </Page>
        );
    }
}
