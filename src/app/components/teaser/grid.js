import React, { Component } from 'react';

import Ad from '@bxm/ad/lib/google/components/ad';
import PropTypes from 'prop-types';
import TeaserList from '@bxm/teaser/lib/components/teaserList';
import classNames from 'classnames';
import Teaser from './teaser';

export default class TeaserGridView extends Component {
    static propTypes = {
        teasers: PropTypes.array,
        className: PropTypes.string,
        nativeAdConfig: PropTypes.shape({
            slotPositionIndex: PropTypes.array,
            targets: PropTypes.shape({
                kw: PropTypes.string
            })
        }),
        adTargets: PropTypes.object,
        showDate: PropTypes.bool
    };

    static defaultProps = {
        teasers: [],
        className: '',
        showDate: true,
        nativeAdConfig: {},
        adTargets: {}
    };

    render() {
        const { className, teasers, nativeAdConfig, showDate, adTargets } = this.props;

        if (!teasers || !Array.isArray(teasers) || !teasers.length) {
            return null;
        }

        return (
            <div className={classNames('container', className)}>
                <div className="row">
                    <div className="columns teaser-view-container teaser-view-grid-container">
                        <TeaserList
                            listClassName="teaser-view-grid"
                            CustomisedTeaser={Teaser}
                            showDate={showDate}
                            articles={teasers}
                            showSubSection
                            imageSizes={{
                                s: { w: 690, h: 427 },
                                m: { w: 486, h: 300 },
                                l: { w: 624, h: 386 },
                                xl: { w: 368, h: 227 }
                            }}
                            nativeAdConfig={nativeAdConfig}
                            adConfig={{
                                targets: adTargets,
                                pageLocation: Ad.pos.body
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
