import React, { Component } from 'react';

import Ad from '@bxm/ad/lib/google/components/ad';
import Date from '@bxm/datetime/lib/components/Date';
import GoogleNativeAdTeaser from '@bxm/teaser/lib/components/native/googleNativeAdTeaser';
import PropTypes from 'prop-types';
import TeaserImage from '@bxm/teaser/lib/components/image';
import TeaserSummary from '@bxm/teaser/lib/components/summary';
import TeaserTitle from '@bxm/teaser/lib/components/title';
import { canUseDOM } from 'exenv';
import classNames from 'classnames';
import get from 'lodash/object/get';
import has from 'lodash/object/has';
import imageResize from '@bxm/ui/lib/common/ImageResize';
import teaserContentOverride from '@bxm/teaser/lib/teaserContentOverride';

export default class Teaser extends Component {
    static displayName = 'Teaser';

    constructor(props, context) {
        super(props, context);

        this.adSlotName = `/${get(context, 'config.ads.networkId', '')}/${get(context, 'config.site.adTaggingId', '')}/${get(
            props,
            'googleNativeAds.adUnitPath',
            ''
        )}`;
        this.googleNativeAdUnitPath = get(props, 'googleNativeAds.adUnitPath', null);

        this.state = {
            nativeAdHasContentReady: false,
            nativeAdContent: false
        };
    }

    componentDidMount() {
        if (canUseDOM) {
            this.addEvents();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('message', this.onMessage);
    }

    static propTypes = {
        article: PropTypes.object,
        imageSizes: PropTypes.object,
        showResponsiveImage: PropTypes.bool,
        className: PropTypes.string.isRequired,
        sourceClassName: PropTypes.string,
        onClick: PropTypes.func,
        showDate: PropTypes.bool,
        sourceDefault: PropTypes.string,
        googleNativeAds: PropTypes.oneOfType([
            PropTypes.shape({
                targets: PropTypes.shape({
                    kw: PropTypes.string
                }),
                label: PropTypes.string,
                adUnitPath: PropTypes.string,
                adPositionClassName: PropTypes.string
            }),
            PropTypes.bool
        ]),
        showImageBadge: PropTypes.bool,
        tagsToShow: PropTypes.number,
        linesToShow: PropTypes.number
    };

    static contextTypes = {
        config: PropTypes.object
    };

    static defaultProps = {
        article: {
            dateCreated: null,
            url: null,
            sponsorName: null,
            parentUrl: null,
            parentName: null,
            summaryTitle: null,
            title: null,
            imageUrl: null,
            altText: null,
            id: null
        },
        showDate: true,
        showResponsiveImage: true,
        sourceClassName: 'teaser__source',
        imageSizes: {
            s: { w: 880, h: 710 },
            m: { w: 880, h: 710 },
            l: { w: 880, h: 710 },
            xl: { w: 880, h: 710 }
        },
        onClick: function onClick() {},
        sourceDefault: '',
        googleNativeAds: false,
        showImageBadge: false,
        tagsToShow: 0,
        linesToShow: 0
    };

    addEvents() {
        window.addEventListener('message', this.onMessage);
    }

    onMessage = e => {
        const data = e.data;

        if (data && data.message === 'adContentAvailable' && data.adID === this.adSlotName) {
            this.setState({
                nativeAdHasContentReady: true,
                nativeAdContent: data.content
            });
            window.removeEventListener('message', this.onMessage);
        }
    };

    getGTMClass = () => {
        const article = this.props.article;

        return has(article, 'id') ? `gtm-${article.id}` : '';
    };

    renderImage = () => {
        const { article, imageSizes } = this.props;
        const imageAltText = article.imageAltText || article.summaryTitle || article.title;
        const { config } = this.context;
        const defaultImageUrl = config.defaultImageUrl;
        const breakpoints = get(config, 'global.breakpoints', '');
        const imageAnchor = get(config, 'features.teaserImageAnchorType', imageResize.anchor.TC);

        return (
            <TeaserImage
                gtmClass={this.getGTMClass()}
                link={article.url}
                imageUrl={article.imageUrl}
                defaultImageUrl={defaultImageUrl}
                alt={imageAltText}
                imageSizes={imageSizes}
                breakpoints={breakpoints}
                showResponsiveImage={this.props.showResponsiveImage}
                className={this.getGTMClass()}
                responsiveConfig={{
                    scale: imageResize.scale.BOTH,
                    anchor: imageAnchor,
                    mode: ''
                }}
            />
        );
    };

    getReviewSuffix(title, nodeType) {
        const { config } = this.context;
        const ifReviewSuffixEnabled = get(config, 'features.reviewTitleSuffix.enabled', false);

        if (!ifReviewSuffixEnabled || nodeType !== 'Review') {
            return title;
        }

        const reviewSuffix = get(config, 'features.reviewTitleSuffix.titleSuffix', '');

        return `${title}${reviewSuffix}`;
    }

    render() {
        const { config } = this.context;
        const { className, sourceClassName, showDate, sourceDefault, googleNativeAds, showImageBadge, tagsToShow, linesToShow } = this.props;
        let { article } = this.props;
        const { nativeAdHasContentReady, nativeAdContent } = this.state;

        if (!article) {
            return null;
        }

        article = teaserContentOverride(article);
        const { title, shortTitle, summaryTitle, nodeType, id, teaserIndex } = article;

        const articleTitle =
            (id && id.includes('mustread')) || (id && id.includes('promo'))
                ? shortTitle || summaryTitle || this.getReviewSuffix(title, nodeType)
                : this.getReviewSuffix(shortTitle || summaryTitle || title, nodeType);

        const siteRegionSuffix = get(config, 'site.region', '');
        const showGoogleNativeAds = get(config, 'features.googleNativeAds.enabled', false);
        const siteRegionClass = siteRegionSuffix && `teaser--${siteRegionSuffix.toLowerCase()}`;
        const containerClassNames = classNames(className, 'teaser', siteRegionClass, {
            'teaser--has-video': get(article, 'video.properties.videoConfiguration.statusCode') === 200,
            'teaser--gallery': get(article, 'nodeType', '').toLowerCase() === 'gallery'
        });

        let articleSourceClassName = sourceClassName;

        if (article.source) {
            articleSourceClassName = `${sourceClassName} ${sourceClassName}--${article.source.toLowerCase().replace(/[^A-Z0-9]/gi, '-')}`;
        }

        const sourceName = article.source || 'Now to love';
        let tagsBlock = null;

        if (tagsToShow > 0 && article.tagsDetails && article.tagsDetails.length > 0) {
            const tags = article.tagsDetails.slice(0, tagsToShow).map((tag, i) => (
                <li key={`${article.id}-tag-${i + 1}`}>
                    {!!i && <span>, </span>}
                    <a className={`gtm-taglink ${tag.urlName}`} href={`/tags/${tag.urlName}`} title={tag.displayName}>
                        {tag.displayName}
                    </a>
                </li>
            ));
            tagsBlock = (
                <section className="article__tags">
                    <span className="tags__title">Related: </span>
                    <ul className="related-tags">{tags}</ul>
                </section>
            );
        }

        let teaserTitle = article.parentName;
        const isAlternativeTitleEnabled = get(config, 'features.alternativeTitle.enabled', false);

        if (isAlternativeTitleEnabled) {
            const alternativeTitleMap = get(config, 'alternativeTitleMap', {});
            teaserTitle = alternativeTitleMap[article.nodeType.toLowerCase()] || article.nodeType;
        }

        return (
            <article className={containerClassNames} onClick={this.props.onClick}>
                {!googleNativeAds &&
                    !nativeAdHasContentReady &&
                    !nativeAdContent && (
                        <div className="teaser__inner">
                            {showImageBadge && article.nodeType.toLowerCase() !== 'article' ? (
                                <div>
                                    <div className="teaser__image-caption">
                                        <span>{article.nodeType}</span>
                                    </div>
                                    {this.renderImage()}
                                </div>
                            ) : (
                                this.renderImage()
                            )}

                            <div className="teaser__body">
                                {teaserIndex && <span className="teaser__index">{teaserIndex}</span>}

                                {isAlternativeTitleEnabled ? (
                                    <span className="teaser__section-tag teaser__section-tag--link-disabled">
                                        <span>{teaserTitle}</span>
                                    </span>
                                ) : (
                                    <a href={article.parentUrl} className="teaser__section-tag">
                                        <span>{teaserTitle}</span>
                                    </a>
                                )}

                                <TeaserTitle title={articleTitle} url={article.url} gtmClass={this.getGTMClass()} />

                                <TeaserSummary summary={article.summary} className="teaser__summary" linesToShow={linesToShow} />

                                <p className={articleSourceClassName}>
                                    {sourceDefault || `${sourceName}`}

                                    {showDate && (
                                        <span>
                                            <span className={`${sourceClassName}__breaker`}>|</span>
                                            <Date dateCreated={article.dateCreated} showElapsed />
                                        </span>
                                    )}
                                </p>
                                {tagsBlock}
                            </div>
                        </div>
                    )}

                {showGoogleNativeAds &&
                    googleNativeAds && (
                        <div>
                            <Ad
                                className="ad--slot-google-native"
                                sizes="googleNativeAd"
                                isGoogleNativeAd
                                nativeAdPath={this.googleNativeAdUnitPath}
                                label={googleNativeAds.label}
                                targets={googleNativeAds.targets}
                                pageLocation={Ad.pos.body}
                            />
                        </div>
                    )}

                {showGoogleNativeAds &&
                    googleNativeAds &&
                    nativeAdHasContentReady &&
                    nativeAdContent && (
                        <div id={`GoogleNativeAd-${googleNativeAds.label}`} className="google-native-ad-teaser-container">
                            <GoogleNativeAdTeaser
                                nativeAdContent={nativeAdContent}
                                gtmClassName={this.getGTMClass()}
                                googleNativeAds={googleNativeAds}
                                onClick={this.props.onClick}
                            />
                        </div>
                    )}
            </article>
        );
    }
}
