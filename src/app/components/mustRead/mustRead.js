import React, { PropTypes, Component } from 'react';
import { connectToStores } from '@bxm/flux';
import TeaserList from '@bxm/teaser/lib/components/teaserList';
import Teaser from '../teaser/teaser';

class MustRead extends Component {

    static propTypes = {
        mustRead: PropTypes.array.isRequired,
        show: PropTypes.bool.isRequired
    };

    static contextTypes = {
        config: PropTypes.object,
        getStore: PropTypes.func,
        executeAction: PropTypes.func
    };

    static imageSizes = {
        s: { w: 300, h: 170 },
        m: { w: 300, h: 170 },
        l: { w: 300, h: 170 },
        xl: { w: 230, h: 130 }
    };

    render() {
        let { mustRead } = this.props;
        const { show } = this.props;
        const { desktopCount, tabletCount } = this.context.config.features.mustRead;

        if (!show) {
            return null;
        }

        if (!mustRead || mustRead.length < desktopCount) {
            return null;
        }

        mustRead = mustRead.slice(0, desktopCount);
        const listClassName = `small-block-grid-2 medium-block-grid-${tabletCount} large-block-grid-${desktopCount}`;
        const shortenedNameList = this.context.config.brands.shortSources || {};

        // Add gtm class name,
        // mustReadItem.id prop will pass into teaser component and be attached as a gtm class
        const newMustRead = mustRead.map((item, index) => {
            const mustReadItem = { ...item };
            mustReadItem.id = `mustread${index + 1}-homepage`;
            mustReadItem.source = shortenedNameList[mustReadItem.source] || mustReadItem.source;
            return mustReadItem;
        });

        const polarLabels = this.context.config.polar.details;

        return (
            <div className="mustread-teaser-view-grid">
                <div className="home-page__teasers-title">
                    <span>Must Read</span>
                </div>
                <div className="columns xlarge-10">
                    <TeaserList
                      listClassName={listClassName}
                      imageSizes={MustRead.imageSizes}
                      articles={newMustRead}
                      CustomisedTeaser={Teaser}
                      showDate={false}
                      nativeAdConfig={{
                          slotPositionIndex: polarLabels.homeMustRead
                      }}
                      sourceDefault={'SPONSORED'}
                    />
                </div>
            </div>
        );
    }
 }

export default connectToStores(MustRead, ['TeaserStore'], context => ({
    mustRead: context.getStore('TeaserStore').getMustReadItems()
}));
