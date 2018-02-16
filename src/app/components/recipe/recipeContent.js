import React, { Component, PropTypes } from 'react';
import Feed from '@bxm/article/lib/components/feed/feed';
import StickyAd from '@bxm/ad/lib/google/components/stickyAd';
import Ad from '@bxm/ad/lib/google/components/ad';
import Recipe from './recipe';

export default class RecipeContent extends Component {

    static displayName = 'RecipeContent';

    static propTypes = {
        enableTeads: PropTypes.bool,
        menuSliderClassName: PropTypes.string.isRequired,
        content: PropTypes.object.isRequired,
        hero: PropTypes.object.isRequired,
        feedItemClass: PropTypes.func,
        feedItems: PropTypes.array,
        isSideMenuOpen: PropTypes.bool,
        Footer: PropTypes.object,
        adSpacing: PropTypes.number,
        isVerticalGallery: PropTypes.bool,
        feedTitle: PropTypes.string.isRequired
    };

    static defaultProps = {
        enableTeads: false,
        feedItemClass: null,
        feedItems: [],
        isSideMenuOpen: false,
        Footer: null,
        adSpacing: 0,
        isVerticalGallery: false
    };

    render() {
        const {
            enableTeads,
            menuSliderClassName,
            content,
            hero,
            feedItemClass,
            feedItems,
            isSideMenuOpen,
            Footer,
            adSpacing,
            isVerticalGallery,
            feedTitle
        } = this.props;
        const keyword = content.tagsDetails ? content.tagsDetails.map(tag => tag.fullName) : '';
        const stickyAdProps = {
            className: 'ad--section-bottom-leaderboard',
            displayFor: ['small', 'medium'],
            sizes: {
                banner: 'banner',
                leaderboard: 'leaderboard',
                billboard: ['billboard', 'leaderboard']
            },
            targets: {
                keyword
            },
            lazyLoad: true,
            isVerticalGallery,
            autoRefreshing: {
                interval: 30000,
                idle: 120000
            },
            pageLocation: Ad.pos.outside
        };
        const nonStickyAdProps = {
            className: 'ad--section-bottom-leaderboard',
            displayFor: ['large', 'xlarge'],
            sizes: {
                banner: 'banner',
                leaderboard: 'leaderboard',
                billboard: ['billboard', 'leaderboard']
            },
            targets: {
                keyword
            },
            lazyLoad: true,
            isVerticalGallery,
            pageLocation: Ad.pos.outside
        };

        return (
            <div>
                { enableTeads && <Ad label={{ active: false }} sizes="teads" targets={{ keyword }} pageLocation={Ad.pos.outside} /> }
                <div className={`article-section main-wrapper container row ${menuSliderClassName}`}>
                    <Recipe
                      {...this.props}
                      {...content}
                      heroItem={hero}
                      contentBody={content.body}
                      pageId={content.id}
                    />
                    <Feed
                      showFeedOnRight
                      feedItemClass={feedItemClass}
                      items={feedItems}
                      adSpacing={adSpacing}
                      pageId={content.id}
                      tags={content.tagsDetails}
                      source={content.source}
                      feedTitle={feedTitle}
                      isSideMenuOpen={isSideMenuOpen}
                      isVerticalGallery={isVerticalGallery}
                    />
                </div>

                <StickyAd
                  adProps={stickyAdProps}
                  minHeight={450}
                  stickyAtViewPort="mediumRangeMax"
                  stickyDelay={5500}
                />

                <Ad {...nonStickyAdProps} />

                {Footer ? <Footer /> : null}
            </div>
        );
    }
}
