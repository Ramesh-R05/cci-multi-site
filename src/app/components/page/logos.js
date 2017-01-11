import React, {PropTypes, Component} from 'react';

export default class Logos extends Component {
    static propTypes = {
        currentUrl: PropTypes.string,
        logoList: PropTypes.array,
        className: PropTypes.string,
        gtmPrefix: PropTypes.string,
        openInNewTab: PropTypes.bool
    };

    render() {
        if(!this.props.logoList || this.props.logoList.length <= 0) return null;

        const html = this.props.logoList.map((item, i) => {
            const gtmClassName = `gtm-${this.props.gtmPrefix || this.props.className}-${item.gtmClass}`;

            const imgClassName = `${this.props.className}__logo--${item.title}`
                .replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '')
                .replace(/ /g, '-')
                .toLowerCase();

            if (this.props.openInNewTab) {
                return (
                    <li>
                        <a key={i} href={item.url} target="_blank" title={item.title} className={gtmClassName}>
                            <img src={item.imageUrl} alt={item.title} className={imgClassName} />
                        </a>
                    </li>
                );
            } else {
                return (
                    <li>
                        <a key={i} href={item.url} title={item.title} className={gtmClassName}>
                            <img src={item.imageUrl} alt={item.title} className={imgClassName} />
                        </a>
                    </li>
                );
            }
        });

        return (<ul className={this.props.className}>{html}</ul>);
    }
}
