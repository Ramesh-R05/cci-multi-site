import React, { Component } from 'react';
import { connectToStores, provideContext } from '@bxm/flux';

import AdManager from '@bxm/ad/lib/google/components/adManager';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import canUseDOM from 'exenv';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { handleHistory } from 'fluxible-router';
import ErrorPage from '../components/page/error';

function mapStateToProps(context) {
    return {
        nodeType: context.getStore('PageStore').getNodeType(),
        error: context.getStore('PageStore').getErrorStatus(),
        theme: context.getStore('PageStore').getModule('theme'),
        siteAlert: context.getStore('PageStore').getSiteAlert(),
        isNavigateComplete: context.getStore('RouteStore').isNavigateComplete()
    };
}

@connectToStores(['PageStore', 'RouteStore'], mapStateToProps)
class Application extends Component {
    static propTypes = {
        currentRoute: PropTypes.shape({
            url: PropTypes.string.isRequired,
            handler: PropTypes.func.isRequired
        }),
        currentNavigate: PropTypes.shape({
            url: PropTypes.string.isRequired
        }).isRequired,
        currentNavigateError: PropTypes.shape({
            statusCode: PropTypes.number.isRequired
        }),
        title: PropTypes.string,
        nodeType: PropTypes.string.isRequired,
        error: PropTypes.object,
        theme: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        siteAlert: PropTypes.object,
        isNavigateComplete: PropTypes.bool
    };

    static defaultProps = {
        error: null,
        theme: null,
        siteAlert: {},
        title: '',
        currentRoute: null,
        currentNavigateError: null,
        isNavigateComplete: false
    };

    static contextTypes = {
        getStore: PropTypes.func,
        executeAction: PropTypes.func
    };

    shouldComponentUpdate(nextProps) {
        return !!nextProps.isNavigateComplete;
    }

    componentDidUpdate(prevProps) {
        const newProps = this.props;

        if (newProps.title === prevProps.title) {
            return;
        }

        document.title = newProps.title;
    }

    render() {
        const { currentRoute, currentNavigate, currentNavigateError, error, nodeType, theme, siteAlert } = this.props;

        if (!currentRoute) {
            return <ErrorPage currentUrl={currentNavigate && currentNavigate.url} status={currentNavigateError && currentNavigateError.statusCode} />;
        }

        if (this.props.error) {
            return <ErrorPage currentUrl={currentRoute && currentRoute.url} status={error && error.status} />;
        }

        const Handler = (currentRoute && currentRoute.handler) || ErrorPage;

        const muiTheme = getMuiTheme({
            fontFamily: '"Montserrat-Regular", sans-serif'
        });

        const className = canUseDOM ? '' : 'no-js';

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className={className}>
                    <Handler currentUrl={currentRoute && currentRoute.url} nodeType={nodeType} theme={theme} siteAlert={siteAlert} />
                </div>
            </MuiThemeProvider>
        );
    }
}

// Unit tests break when provideContext is used as a decorator. handleHistory works fine as a decorator, but to keep
// the pattern consistent with other containers, only the connectToStore is used as a decorator.
export default provideContext(handleHistory(AdManager(Application)), { config: PropTypes.object });
