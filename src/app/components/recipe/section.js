import React, { Component, PropTypes } from 'react';
import { connectToStores } from '@bxm/flux';
import cx from 'classnames';
import articleStore from '@bxm/article/lib/stores/articleStore';
import RecipeContent from './recipeContent';

class Section extends Component {
    static displayName = 'Section';

    static propTypes = {
        content: PropTypes.object.isRequired,
        contentBodyConfig: PropTypes.object.isRequired,
        articleHeaderOrder: PropTypes.array.isRequired,
        footerComponentClass: PropTypes.func,
        feedItems: PropTypes.array,
        isSideMenuOpen: PropTypes.bool,
        enableTeads: PropTypes.bool,
        adSpacing: PropTypes.number,
        showAdBeforeRecommendations: PropTypes.bool,
        sourceEnabled: PropTypes.bool
    };

    static defaultProps = {
        feedItems: [],
        enableTeads: false,
        isSideMenuOpen: false,
        footerComponentClass: null,
        adSpacing: 0,
        showAdBeforeRecommendations: false,
        sourceEnabled: true
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
            sourceEnabled,
            Footer,
            hero: this.getHero()
        };

        return <RecipeContent {...mergedProps} />;
    }
}

export default connectToStores(Section, [articleStore], context => {
    const store = context.getStore(articleStore);

    return {
        content: store.getContent(),
        feedModuleConfig: store.getConfiguration(),
        feedItems: store.getItems(),
        feedTitle: store.getFeedTitle()
    };
});
