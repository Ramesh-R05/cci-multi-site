import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import TeaserTitle from '@bxm/teaser/lib/components/title';
import TeaserImage from '@bxm/teaser/lib/components/image';
import TeaserSummary from '@bxm/teaser/lib/components/summary';
import Date from '@bxm/datetime/lib/components/Date';
import teaserContentOverride from '@bxm/teaser/lib/teaserContentOverride';
import has from 'lodash/object/has';
import get from 'lodash/object/get';
import Ad from '@bxm/ad/lib/google/components/ad';
import imageResize from '@bxm/ui/lib/common/ImageResize';

export default class Teaser extends Component {

    static displayName = 'Teaser';

    static propTypes = {
        article: PropTypes.object.isRequired,
        imageSizes: PropTypes.object,
        showResponsiveImage: PropTypes.bool,
        className: PropTypes.string.isRequired,
        sourceClassName: PropTypes.string,
        onClick: PropTypes.func,
        showDate: PropTypes.bool,
        sourceDefault: PropTypes.string,
        polar: PropTypes.oneOfType([
            PropTypes.shape({
                targets: PropTypes.shape({
                    kw: PropTypes.string
                }),
                label: PropTypes.string
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
            altText: null
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
        polar: false,
        showImageBadge: false,
        tagsToShow: 0,
        linesToShow: 0
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
        const breakpoints = config.global.breakpoints;
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

    render() {
        const { config } = this.context;
        const { className, sourceClassName, showDate, sourceDefault, polar, showImageBadge, tagsToShow, linesToShow } = this.props;
        let { article } = this.props;

        if (!article) return null;

        article = teaserContentOverride(article);

        const articleTitle = article.shortTitle || article.summaryTitle || article.title;

        const siteRegionSuffix = get(config, 'site.region', '');
        const siteRegionClass = siteRegionSuffix && `teaser--${siteRegionSuffix.toLowerCase()}`;
        const containerClassNames = classNames(className, 'teaser', siteRegionClass, {
            'teaser--has-video': get(article, 'video.properties.videoConfiguration.statusCode') === 200,
            'teaser--gallery': get(article, 'nodeType', '').toLowerCase() === 'gallery'
        });

        let articleSourceClassName = sourceClassName;
        if (article.source) {
            articleSourceClassName = `${sourceClassName} ${sourceClassName}--${article.source.toLowerCase().replace(/[^A-Z0-9]/ig, '-')}`;
        }

        const sourceName = article.source || 'Now to love';
        let tagsBlock = null;

        if (tagsToShow > 0 && article.tagsDetails && article.tagsDetails.length > 0) {
            const tags = article.tagsDetails
                .slice(0, tagsToShow)
                .map((tag, i) => (
                    <li key={`${article.id}-tag-${i + 1}`}>
                        {!!i && <span>, </span>}
                        <a className={`gtm-taglink ${tag.urlName}`} href={`tags/${tag.urlName}`} title={tag.displayName}>{tag.displayName}</a>
                    </li>
                    ));
            tagsBlock = (
                <section className="article__tags">
                    <span className="tags__title">Related: </span>
                    <ul className="related-tags">{tags}</ul>
                </section>
            );
        }

        return (
            <article className={containerClassNames} onClick={this.props.onClick}>
                <div className="teaser__inner">

                    {
                        showImageBadge && article.nodeType.toLowerCase() !== 'article' ?
                            <div>
                                <div className="teaser__image-caption"><span>{article.nodeType}</span></div>
                                {this.renderImage()}
                            </div> :
                            this.renderImage()
                    }

                    <div className="teaser__body">

                        <a href={article.parentUrl} className="teaser__section-tag"><span>{article.parentName}</span></a>

                        <TeaserTitle title={articleTitle} url={article.url} gtmClass={this.getGTMClass()} />

                        <TeaserSummary summary={article.summary} className="teaser__summary" linesToShow={linesToShow} />

                        <p className={articleSourceClassName}>
                            {sourceDefault || `${sourceName}`}

                            { showDate && (<span>
                                <span className={`${sourceClassName}__breaker`}>|</span><Date dateCreated={article.dateCreated} showElapsed />
                            </span>)
                            }

                        </p>
                        {tagsBlock}
                    </div>
                </div>

                {polar && (
                    <Ad
                      sizes={'nativeAdTeaser'}
                      label={polar.label}
                      targets={polar.targets}
                      nativeAd
                      pageLocation={Ad.pos.body}
                    />
                )}

            </article>
        );
    }
}
