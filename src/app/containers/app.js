import React, { Component, PropTypes } from 'react';
import { connectToStores, provideContext } from '@bxm/flux';
import AdManager from '@bxm/ad/lib/google/components/adManager';
import { handleHistory } from 'fluxible-router';
import { canUseDOM } from 'exenv';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ErrorPage from '../components/page/error';

function mapStateToProps(context) {
    return {
        nodeType: context.getStore('PageStore').getNodeType(),
        error: context.getStore('PageStore').getErrorStatus(),
        theme: context.getStore('PageStore').getModule('theme'),
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
        nodeType: PropTypes.string.isRequired,
        error: PropTypes.object,
        theme: PropTypes.object,
        isNavigateComplete: PropTypes.bool
    };

    static defaultProps = {
        error: null,
        theme: null,
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
        if (!this.props.currentRoute) {
            return <ErrorPage currentUrl={this.props.currentNavigate.url} status={this.props.currentNavigateError.statusCode} />;
        }

        if (this.props.error) {
            return <ErrorPage currentUrl={this.props.currentRoute.url} status={this.props.error.status} />;
        }

        const Handler = this.props.currentRoute.handler;

        const muiTheme = getMuiTheme({
            fontFamily: '"Montserrat-Regular", sans-serif'
        });

        const className = canUseDOM ? '' : 'no-js';
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className={className}>
                    <Handler currentUrl={this.props.currentRoute.url} nodeType={this.props.nodeType} theme={this.props.theme} />
                </div>
            </MuiThemeProvider>
        );
    }
}

// Unit tests break when provideContext is used as a decorator. handleHistory works fine as a decorator, but to keep
// the pattern consistent with other containers, only the connectToStore is used as a decorator.
export default provideContext(handleHistory(AdManager(Application)), { config: PropTypes.object });
