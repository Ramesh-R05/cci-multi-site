import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import TeaserList from '@bxm/teaser/lib/components/teaserList';
import StickyBlock from '@bxm/behaviour/lib/components/sticky';
import Ad from '@bxm/ad/lib/google/components/ad';
import Teaser from '../../../app/components/teaser/teaser';

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
        showImageBadge: PropTypes.bool,
        tagsToShow: PropTypes.number,
        linesToShow: PropTypes.number
    };

    static defaultProps = {
        showDate: true,
        teasers: [],
        className: '',
        adTargets: {},
        nativeAdConfig: {},
        loadAgain: true,
        showAd: true,
        showImageBadge: false,
        tagsToShow: 0,
        linesToShow: 0
    };

    render() {
        const {
            className,
            items,
            adTargets,
            index,
            nativeAdConfig,
            showDate,
            loadAgain,
            showAd,
            showImageBadge,
            tagsToShow,
            linesToShow
        } = this.props;
        const adProps = {
            className: 'ad--section-mrec',
            displayFor: ['medium', 'large', 'xlarge'],
            sizes: { medium: ['mrec', 'double-mrec'] },
            targets: {
                ...adTargets
            },
            pageLocation: Ad.pos.aside
        };

        if (index) adProps.targets.position += index;

        if (!items || !Array.isArray(items) || !items.length) return null;

        let ad = null;

        if (showAd) {
            ad = items.length > 1 ?
                <StickyBlock carriageYPosition={95} breakpoints={['medium', 'large', 'xlarge']}>
                    <Ad {...adProps} />
                </StickyBlock> : <Ad {...adProps} />;
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
                          imageSizes={{
                              s: { w: 323, h: 242 },
                              m: { w: 452, h: 339 },
                              l: { w: 409, h: 307 },
                              xl: { w: 1010, h: 756 }
                          }}
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
                          showImageBadge={showImageBadge}
                          tagsToShow={tagsToShow}
                          linesToShow={linesToShow}
                        />
                    </div>
                    { ad }
                </div>
            </div>
        );
    }
}
