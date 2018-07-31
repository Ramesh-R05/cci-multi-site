import React, { Component, PropTypes } from 'react';
import Page from '../../containers/page';

export default class Error extends Component {
    static displayName = 'ErrorPage';

    static propTypes = {
        status: PropTypes.string.isRequired,
        currentUrl: PropTypes.string.isRequired
    };

    static contextTypes = {
        config: PropTypes.object
    };

    render() {
        const { status } = this.props;
        const { config } = this.context;
        const message = config.error[status] || config.error[503];

        const { content, emojiSrc, title, symbol, returnHomeText } = message;

        return (
            <Page currentUrl={this.props.currentUrl} className="error-page" hideLeaderboard headerExpanded>
                <section className="error-page-container container">
                    <h1 className="page-title error-page-container__title">
                        {symbol ? <span className="page-title__symbol">{symbol}</span> : null}
                        <span dangerouslySetInnerHTML={{ __html: title }} />
                    </h1>
                    <a href="/">
                        {content.map((item, i) => (
                            <p className="error-page-container__body-item">
                                {item}{' '}
                                {emojiSrc && i === content.length - 1 ? <img className="emoji emoji--grin" alt="emoji grin" src={emojiSrc} /> : null}
                            </p>
                        ))}
                    </a>
                    <p className="error-page-container__footer">
                        <a
                            href="/"
                            className="gtm-error-goback error-page-container__homepage-link"
                            dangerouslySetInnerHTML={{ __html: returnHomeText }}
                        />
                    </p>
                </section>
            </Page>
        );
    }
}
