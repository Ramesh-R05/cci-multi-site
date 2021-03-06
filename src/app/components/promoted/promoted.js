import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connectToStores } from '@bxm/flux';
import TeaserList from '@bxm/teaser/lib/components/teaserList';
import Teaser from '../teaser/teaser';

class Promoted extends Component {
    static displayName = 'Promoted';

    static propTypes = {
        promoted: PropTypes.object.isRequired,
        show: PropTypes.bool.isRequired
    };

    static contextTypes = {
        config: PropTypes.object,
        getStore: PropTypes.func,
        executeAction: PropTypes.func
    };

    static listClassName = 'small-block-grid-2 medium-block-grid-3 large-block-grid-4';

    render() {
        const { promoted, show } = this.props;

        if (!show) {
            return null;
        }

        if (!promoted) {
            return null;
        }

        let promotedItems = promoted.items;

        if (!promotedItems || promotedItems.length === 0 || promotedItems.length < 4) {
            return null;
        }

        const shortenedNameList = this.context.config.brands.shortSources || {};
        const imageSizes = this.context.config.features.promoted.imageSizes || {};
        const promotedTitle = promoted.title || 'WOMEN OF THE YEAR';

        // Add gtm class name,
        // promotedItem.id prop will pass into teaser component and be attached as a gtm class
        promotedItems = promotedItems.slice(0, 4).map((promotedItem, index) => {
            const item = { ...promotedItem };
            item.id = `promo${index + 1}-homepage`;
            item.source = shortenedNameList[item.source] || item.source;

            return item;
        });

        return (
            <div className="promoted-teaser-view-grid">
                <div className="home-page__teasers-title">
                    <span>{promotedTitle}</span>
                </div>

                <TeaserList
                    listClassName={Promoted.listClassName}
                    imageSizes={imageSizes}
                    CustomisedTeaser={Teaser}
                    articles={promotedItems}
                    showDate={false}
                />
            </div>
        );
    }
}

export default connectToStores(Promoted, ['TeaserStore'], context => ({
    promoted: context.getStore('TeaserStore').getPromoted()
}));
