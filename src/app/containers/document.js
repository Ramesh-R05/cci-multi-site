import React, { Component } from 'react';

import Ad from '@bxm/ad/lib/google/components/ad';
import Article from '@bxm/article/lib/article';
import PropTypes from 'prop-types';
import VerticalGallery from '@bxm/article/lib/gallery';
import { connectToStores } from '@bxm/flux';
import CollectionSection from '../components/collection/section';
import Page from './page';
import RecipeSection from '../components/recipe/section';
import Teaser from '../components/teaser/teaser';

function mapStateToProps(context) {
    return {
        content: context.getStore('articleStore').getContent(),
        moreFrom: context.getStore('articleStore').getMoreFrom()
    };
}

@connectToStores(['articleStore'], mapStateToProps)
export default class Document extends Component {
    static displayName = 'Document';

    static propTypes = {
        content: PropTypes.object.isRequired,
        moreFrom: PropTypes.object.isRequired,
        currentUrl: PropTypes.string.isRequired,
        nodeType: PropTypes.string.isRequired,
        theme: PropTypes.object,
        siteAlert: PropTypes.object
    };

    static defaultProps = {
        theme: {},
        siteAlert: {}
    };

    static contextTypes = {
        config: PropTypes.object
    };

    static articleContentBodyConfig = {
        disableAds: true,
        inlineImage: {
            imageSizes: {
                s: { w: 690 },
                m: { w: 963 },
                l: { w: 922 },
                xl: { w: 640 }
            }
        },
        relatedContent: {
            headingText: 'Read this next',
            imageSizes: {
                s: { w: 384, h: 216 },
                m: { w: 375, h: 211 },
                l: { w: 329, h: 185 },
                xl: { w: 296, h: 166 }
            }
        }
    };

    static headerAdConfig = {
        className: 'ad--beneath-hero',
        displayFor: 'small',
        sizes: 'mrec',
        targets: {}
    };

    render() {
        const { content, moreFrom, currentUrl, nodeType, theme, siteAlert } = this.props;
        const { config } = this.context;
        let sourceEnabled = true;

        if (config.product.id === 'awwfood') {
            sourceEnabled = false;
        }

        const headerAd = {
            type: 'Ad',
            config: Document.headerAdConfig
        };

        const tags = content.tagsDetails;
        const keyword = tags ? tags.map(tag => tag.fullName) : '';

        headerAd.config.targets.keyword = keyword;
        headerAd.config.pageLocation = Ad.pos.body;

        const socialShare = {
            facebook: true,
            pinterest: true
        };

        const themeEnabled = !!theme && !!theme.headerSmallBackground && !!theme.headerMediumBackground && !!theme.headerLargeBackground;

        if (nodeType === 'Gallery') {
            return (
                <Page
                    currentUrl={currentUrl}
                    headerExpanded={config.features.headerExpanded && themeEnabled}
                    hideFooter={false}
                    theme={themeEnabled ? theme : {}}
                    siteAlert={siteAlert}
                >
                    <VerticalGallery
                        articleHeaderOrder={['Source', 'Title', 'Summary', 'Date', 'Author', 'ImageCount', 'NativeAd', 'Hero']}
                        contentBodyConfig={Document.articleContentBodyConfig}
                        enableTeads
                        CustomisedTeaser={Teaser}
                        showAdBeforeRecommendations
                        showSocialShare
                        socialShare={socialShare}
                        theme={theme}
                        sourceEnabled={sourceEnabled}
                        moreFrom={moreFrom}
                    />
                </Page>
            );
        }

        if (nodeType === 'Recipe') {
            return (
                <Page
                    currentUrl={currentUrl}
                    headerExpanded={config.features.headerExpanded && themeEnabled}
                    hideFooter={false}
                    theme={themeEnabled ? theme : {}}
                    siteAlert={siteAlert}
                >
                    <RecipeSection
                        articleHeaderOrder={['Source', 'Section', 'Title', 'Summary', 'Date', 'Author', 'NativeAd', 'Hero', headerAd]}
                        contentBodyConfig={Document.articleContentBodyConfig}
                        enableTeads
                        CustomisedTeaser={Teaser}
                        showAdBeforeRecommendations
                        showSocialShare
                        socialShare={socialShare}
                        theme={theme}
                        adSpacing={6}
                        sourceEnabled={sourceEnabled}
                        moreFrom={moreFrom}
                    />
                </Page>
            );
        }

        if (nodeType === 'RecipeCollection') {
            return (
                <Page
                    currentUrl={currentUrl}
                    headerExpanded={config.features.headerExpanded && themeEnabled}
                    hideFooter={false}
                    theme={themeEnabled ? theme : {}}
                    siteAlert={siteAlert}
                >
                    <CollectionSection
                        articleHeaderOrder={['Source', 'Section', 'Title', 'Summary', 'Date', 'Author', 'NativeAd', 'Hero', headerAd]}
                        contentBodyConfig={Document.articleContentBodyConfig}
                        enableTeads
                        CustomisedTeaser={Teaser}
                        showAdBeforeRecommendations
                        showSocialShare
                        socialShare={socialShare}
                        theme={theme}
                        adSpacing={6}
                        sourceEnabled={sourceEnabled}
                        moreFrom={moreFrom}
                    />
                </Page>
            );
        }

        return (
            <Page
                currentUrl={currentUrl}
                headerExpanded={config.features.headerExpanded && themeEnabled}
                hideFooter={false}
                theme={themeEnabled ? theme : {}}
                siteAlert={siteAlert}
            >
                <Article
                    articleHeaderOrder={['Source', 'Section', 'Title', 'Summary', 'Date', 'Author', 'NativeAd', 'Hero', headerAd]}
                    contentBodyConfig={Document.articleContentBodyConfig}
                    enableTeads
                    CustomisedTeaser={Teaser}
                    showAdBeforeRecommendations
                    showSocialShare
                    socialShare={socialShare}
                    theme={theme}
                    sourceEnabled={sourceEnabled}
                />
            </Page>
        );
    }
}
