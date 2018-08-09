import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import ContentBody from '@bxm/article/lib/components/contentBody/contentBody';
import NewsletterSignup from '@bxm/article/lib/components/article/newsletterSignup';
import Ad from '@bxm/ad/lib/google/components/ad';
import Header from '@bxm/article/lib/components/article/header';
import Footer from '@bxm/article/lib/components/article/footer';
import Recommendations from '@bxm/recommendations/lib/components/recommendations';
import RelatedContentComponent from '@bxm/article/lib/components/article/relatedContent';
import { getFirstTagNameForCategory } from '@bxm/tags/lib/utils';
import StickyAd from '@bxm/ad/lib/google/components/stickyAd';
import BrandLogo from '@bxm/article/lib/components/article/brandLogo';
import Outbrain from '@bxm/article/lib/components/article/outbrain';
import RevContent from '@bxm/article/lib/components/article/revContent';
import FeedCarousel from '@bxm/article/lib/components/article/feedCarousel';
import RecipeAtGlance from './recipeAtGlance';
import RecipeIngredients from './recipeIngredients';
import RecipeMethod from './recipeMethod';
import RecipeNotes from './recipeNotes';

export default class Recipe extends Component {
    static displayName = 'Recipe';

    static propTypes = {
        articleHeaderOrder: PropTypes.array.isRequired,
        authorProfiles: PropTypes.array,
        className: PropTypes.string,
        contentBody: PropTypes.array.isRequired,
        dateCreated: PropTypes.string.isRequired,
        heroItem: PropTypes.object.isRequired,
        contentBodyConfig: PropTypes.object,
        nodeType: PropTypes.string.isRequired,
        pageId: PropTypes.string.isRequired,
        source: PropTypes.string,
        summary: PropTypes.string,
        parentName: PropTypes.string,
        showAd: PropTypes.bool,
        tagsDetails: PropTypes.arrayOf(PropTypes.object).isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        siteUrl: PropTypes.string.isRequired,
        showAdBeforeRecommendations: PropTypes.bool,
        totalGalleryItems: PropTypes.number,
        feedItems: PropTypes.array.isRequired,
        siteName: PropTypes.string.isRequired,
        recipeServings: PropTypes.object.isRequired,
        recipeCookingTime: PropTypes.object.isRequired,
        recipeIngredients: PropTypes.array,
        recipeCookingMethod: PropTypes.array,
        recipeTips: PropTypes.string
    };

    static defaultProps = {
        authorProfiles: [],
        className: null,
        contentBodyConfig: [],
        source: null,
        summary: null,
        parentName: null,
        showAd: false,
        showAdBeforeRecommendations: false,
        totalGalleryItems: null,
        recipeIngredients: [
            {
                heading: null,
                ingredients: []
            }
        ],
        recipeCookingMethod: [
            {
                heading: null,
                methods: []
            }
        ],
        recipeTips: ''
    };

    static contextTypes = {
        config: PropTypes.object
    };

    constructor(props, context) {
        super(props, context);

        this.adMinHeight = 390;
    }

    getAdTargets() {
        const { tagsDetails, source, pageId } = this.props;
        let adKeywords;

        if (tagsDetails) {
            adKeywords = tagsDetails.map(tag => tag.fullName);
        }

        const targets = {
            brand: source,
            keyword: adKeywords,
            pageId
        };

        const kingtag = getFirstTagNameForCategory(tagsDetails, 'Homes navigation');

        if (kingtag) targets.kingtag = kingtag;

        return targets;
    }

    renderAds(adClassName, sticky = false) {
        let adSizes = {
            banner: 'banner',
            leaderboard: 'leaderboard',
            railBanner: 'banner',
            railLeaderboard: 'leaderboard',
            xlarge: ['billboard', 'leaderboard']
        };

        let screenSizes = ['small', 'medium', 'large', 'xlarge'];

        switch (adClassName) {
            case 'ad--article-top':
                screenSizes.shift();
                break;
            case 'ad--article-before-recommendations':
                adSizes = { small: 'mrec' };
                screenSizes = ['small', 'medium'];
                break;
            default:
                break;
        }

        const adProps = {
            className: adClassName,
            displayFor: screenSizes,
            sizes: adSizes,
            pageLocation: Ad.pos.body,
            targets: {
                ...this.getAdTargets()
            }
        };

        if (sticky) {
            return <StickyAd adProps={adProps} minHeight={450} />;
        }
        return <Ad {...adProps} />;
    }

    addToHeaderBefore(exisitingComponent, toAddComponent) {
        const { articleHeaderOrder } = this.props;
        if (!articleHeaderOrder) return null;
        const indexOfExisting = articleHeaderOrder.indexOf(exisitingComponent);
        if (indexOfExisting === -1) return articleHeaderOrder;
        const recipeHeaderOrder = articleHeaderOrder.slice();
        recipeHeaderOrder.splice(indexOfExisting, 0, toAddComponent);
        return recipeHeaderOrder;
    }

    render() {
        const {
            className,
            showAd,
            dateCreated,
            pageId,
            url,
            siteUrl,
            heroItem,
            summary,
            title,
            source,
            parentName,
            authorProfiles,
            contentBody,
            contentBodyConfig,
            showAdBeforeRecommendations,
            nodeType,
            totalGalleryItems,
            siteName,
            feedItems,
            recipeServings,
            recipeCookingTime,
            recipeIngredients,
            recipeCookingMethod,
            recipeTips
        } = this.props;
        const { config } = this.context;
        const showOutbrain = config.isFeatureEnabled('outbrain');
        const showRevContent = config.isFeatureEnabled('revContent');
        const showFeedCarousel = config.isFeatureEnabled('feedCarousel');
        const showRecipeSource = config.isFeatureEnabled('showRecipeSourceAsAttribute');
        const recipeAtGlance = { recipeServings, recipeCookingTime };
        const recipeHeaderOrder = this.addToHeaderBefore('Hero', <RecipeAtGlance recipeAtGlance={recipeAtGlance} />);

        const articleAttributes = {
            className: classNames('article', 'recipe', className)
        };

        if (showRecipeSource && source) {
            articleAttributes['data-recipe-source'] = source;
        }

        return (
            <article {...articleAttributes}>
                {showAd && this.renderAds('ad--article-top')}

                <Header
                    dateCreated={dateCreated}
                    articleHeaderOrder={recipeHeaderOrder}
                    pageId={pageId}
                    url={url}
                    heroItem={heroItem}
                    summary={summary}
                    title={title}
                    source={source}
                    section={parentName}
                    authorProfiles={authorProfiles}
                    totalGalleryItems={totalGalleryItems}
                />

                <ContentBody
                    body={contentBody}
                    siteName={siteName}
                    breakpoints={config.get('breakpoints')}
                    className="article__body article__body--top-border"
                    config={contentBodyConfig}
                    relatedContentComponent={RelatedContentComponent}
                    adTargets={this.getAdTargets()}
                />

                <section className="recipe-details row medium-collapse large-collapse">
                    <RecipeIngredients recipeIngredients={recipeIngredients} />
                    <RecipeMethod recipeMethod={recipeCookingMethod} />
                    <RecipeNotes recipeNotes={recipeTips} />
                </section>

                <NewsletterSignup dateCreated={dateCreated} />

                <Footer {...this.props} />

                {showFeedCarousel && <FeedCarousel items={feedItems} headingText={`The Latest from ${config.site.name}`} />}

                {source && <BrandLogo source={source} position="bottom" />}

                {showAdBeforeRecommendations && this.renderAds('ad--article-before-recommendations')}

                {showAdBeforeRecommendations && <Recommendations nodeType={nodeType} nodeId={pageId} />}

                {showAd && this.renderAds('ad--article-beneath-recommendations', true)}

                {showOutbrain && <Outbrain url={siteUrl + url} />}

                {showRevContent && <RevContent />}
            </article>
        );
    }
}
