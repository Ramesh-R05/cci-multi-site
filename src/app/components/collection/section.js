import React, { Component, PropTypes } from 'react';
import { connectToStores } from '@bxm/flux';
import cx from 'classnames';
import articleStore from '@bxm/article/lib/stores/articleStore';
import CollectionContent from './collectionContent';

class CollectionSection extends Component {
    static displayName = 'CollectionSection';

    static propTypes = {
        content: PropTypes.object.isRequired,
        contentBodyConfig: PropTypes.object.isRequired,
        articleHeaderOrder: PropTypes.array.isRequired,
        collectionRecipeEntities: PropTypes.array.isRequired,
        footerComponentClass: PropTypes.func,
        feedItems: PropTypes.array,
        isSideMenuOpen: PropTypes.bool,
        enableTeads: PropTypes.bool,
        sourceEnabled: PropTypes.bool,
        adSpacing: PropTypes.number,
        showAdBeforeRecommendations: PropTypes.bool,
        moreFrom: PropTypes.object.isRequired
    };

    static defaultProps = {
        feedItems: [],
        enableTeads: false,
        isSideMenuOpen: false,
        sourceEnabled: true,
        footerComponentClass: null,
        adSpacing: 0,
        showAdBeforeRecommendations: false
    };

    static contextTypes = {
        getStore: PropTypes.func,
        executeAction: PropTypes.func
    };

    getHero() {
        const { imageUrl, imageAltText, imageCaption, video } = this.props.content;

        return { imageUrl, imageAltText, imageCaption, video };
    }

    render() {
        const {
            footerComponentClass: Footer,
            isSideMenuOpen,
            feedItems,
            enableTeads,
            contentBodyConfig,
            adSpacing,
            articleHeaderOrder,
            showAdBeforeRecommendations,
            collectionRecipeEntities,
            sourceEnabled
        } = this.props;

        const menuSliderClassName = cx('side-menu-slider', {
            'side-menu-slider--side-menu-open': isSideMenuOpen
        });

        const mergedProps = {
            ...this.props,
            contentBodyConfig,
            articleHeaderOrder,
            adSpacing,
            enableTeads,
            feedItems,
            menuSliderClassName,
            showAdBeforeRecommendations,
            Footer,
            collectionRecipeEntities,
            sourceEnabled,
            hero: this.getHero()
        };

        return <CollectionContent {...mergedProps} />;
    }
}

export default connectToStores(CollectionSection, [articleStore, 'TeaserStore'], context => {
    const article = context.getStore(articleStore);
    const teaser = context.getStore('TeaserStore');

    return {
        content: article.getContent(),
        feedModuleConfig: article.getConfiguration(),
        feedItems: article.getItems(),
        feedTitle: article.getFeedTitle(),
        collectionRecipeEntities: teaser.getCollectionRecipeEntities()
    };
});
