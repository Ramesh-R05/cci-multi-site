import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

export default class Logos extends Component {
    static propTypes = {
        logoList: PropTypes.array.isRequired,
        className: PropTypes.string.isRequired,
        gtmPrefix: PropTypes.string.isRequired,
        openInNewTab: PropTypes.bool
    };

    static defaultProps = {
        openInNewTab: false
    };

    render() {
        const { logoList, className, gtmPrefix } = this.props;

        if (!logoList || logoList.length <= 0) {
            return null;
        }

        const html = logoList.map(({ id, url, title, imageUrl }) => {
            const classes = {
                root: classNames({ [`${className}__list-item`]: className }),
                anchor: classNames(`${className}__link`, `gtm-${gtmPrefix || className}-${id}`),
                img: classNames(
                    `${className}__logo`,
                    `${className}__logo--${id}`
                        .replace(/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g, '')
                        .replace(/ /g, '-')
                        .toLowerCase()
                )
            };

            return (
                <li key={id} className={classes.root}>
                    <a href={url} target={this.props.openInNewTab ? '_blank' : '_self'} title={title} className={classes.anchor}>
                        <img src={imageUrl} alt={title} className={classes.img} />
                    </a>
                </li>
            );
        });

        return <ul className={this.props.className}>{html}</ul>;
    }
}
