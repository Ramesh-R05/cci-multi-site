import React, { Component } from 'react';

import Ad from '@bxm/ad/lib/google/components/ad';
import PropTypes from 'prop-types';
import StickyBlock from '@bxm/behaviour/lib/components/sticky';
import TeaserList from '@bxm/teaser/lib/components/teaserList';
import classNames from 'classnames';
import get from 'lodash/object/get';
import Teaser from './teaser';

export default class TeaserListView extends Component {
    static displayName = 'TeaserListView';

    static propTypes = {
        index: PropTypes.number.isRequired,
        items: PropTypes.array.isRequired,
        className: PropTypes.string,
        adTargets: PropTypes.object,
        nativeAdConfig: PropTypes.shape({
            slotPositionIndex: PropTypes.array,
            targets: PropTypes.shape({
                kw: PropTypes.string
            })
        }),
        showDate: PropTypes.bool,
        loadAgain: PropTypes.bool,
        showAd: PropTypes.bool,
        teasers: PropTypes.array
    };

    static defaultProps = {
        showDate: true,
        teasers: [],
        className: '',
        adTargets: {},
        nativeAdConfig: {},
        loadAgain: true,
        showAd: true
    };

    static contextTypes = {
        config: PropTypes.object
    };

    render() {
        const { config } = this.context;
        const { className, items, adTargets, index, nativeAdConfig, showDate, loadAgain, showAd } = this.props;
        const adProps = {
            className: 'ad--section-mrec',
            displayFor: ['medium', 'large', 'xlarge'],
            sizes: { medium: ['mrec', 'double-mrec'] },
            targets: {
                ...adTargets
            },
            pageLocation: Ad.pos.aside
        };
        const sizes = get(config, 'features.teaserImageSizes', {
            s: { w: 323, h: 200 },
            m: { w: 452, h: 279 },
            l: { w: 409, h: 253 },
            xl: { w: 1010, h: 624 }
        });

        if (index) {
            adProps.targets.position += index;
        }

        if (!items || !Array.isArray(items) || !items.length) {
            return null;
        }

        let ad = null;

        if (showAd) {
            ad =
                items.length > 1 ? (
                    <StickyBlock carriageYPosition={95} breakpoints={['medium', 'large', 'xlarge']}>
                        <Ad {...adProps} />
                    </StickyBlock>
                ) : (
                    <Ad {...adProps} />
                );
        }

        return (
            <div className={classNames('container', className)}>
                <div className="row">
                    <div className="teaser-view-container teaser-view-list-container">
                        <TeaserList
                            listClassName="teaser-view-list"
                            CustomisedTeaser={Teaser}
                            showDate={showDate}
                            articles={items}
                            showSubSection
                            AdComponentClass={Ad}
                            imageSizes={sizes}
                            adPosition={4}
                            adConfig={{
                                className: 'ad--teaser-list',
                                displayFor: 'small',
                                sizes: 'mrec',
                                targets: adProps.targets,
                                pageLocation: Ad.pos.body
                            }}
                            nativeAdConfig={nativeAdConfig}
                            loadAgain={loadAgain}
                        />
                    </div>
                    {ad}
                </div>
            </div>
        );
    }
}
