import React, {PropTypes, Component} from 'react';
import classNames from 'classnames';
import TeaserList from '@bxm/teaser/lib/components/teaserList';
import StickyBlock from '@bxm/behaviour/lib/components/sticky';
import Ad from '@bxm/ad/lib/google/components/ad';
import Teaser from './teaser';

export default class TeaserListView extends Component {
    static props = {
        items: PropTypes.array.isRequired,
        className: PropTypes.string,
        adTargets: PropTypes.object
    };

    static defaultProps = {
        teasers: [],
        className: "",
        adTargets: { position: 1 }
    };

    render() {
        const {className, items, adTargets, index} = this.props;
        const adProps = {
            className: "ad--section-mrec",
            displayFor: ['medium', 'large', 'xlarge'],
            sizes: { medium: ['mrec', 'double-mrec'] },
            targets: {
                ...adTargets
            }
        };

        if (index) adProps.targets.position += index;

        if (!items || !Array.isArray(items) || !items.length) return null;

        return (
            <div className={classNames('container', className)}>
                <div className="row">
                    <div className="teaser-view-container teaser-view-list-container">
                        <TeaserList
                            listClassName="teaser-view-list"
                            CustomisedTeaser={Teaser}
                            articles={items}
                            showSubSection={true}
                            imageSizes={{
                                s: { w: 323, h: 269 },
                                m: { w: 452, h: 254 },
                                l: { w: 409, h: 230 },
                                xl: { w: 1010, h: 478 }
                            }}
                            adPosition={4}
                            adConfig={{
                                className: 'ad--teaser-list',
                                displayFor: 'small',
                                sizes: 'mrec',
                                targets: adProps.targets
                            }}
                        />
                    </div>
                    { items.length > 1 ?
                        <StickyBlock breakpoints={['medium','large','xlarge']}>
                            <Ad {...adProps} />
                        </StickyBlock> : <Ad {...adProps} /> }
                </div>
            </div>
        );
    }
}
