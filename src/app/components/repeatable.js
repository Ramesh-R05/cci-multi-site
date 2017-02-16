import React, {PropTypes, Component} from "react";
import classNames from 'classnames';

export default class Repeatable extends Component {

    static propTypes = {
        component: PropTypes.instanceOf(Component).isRequired,
        action: PropTypes.func.isRequired,
        dataSource: PropTypes.array.isRequired,
        nextParams: PropTypes.object.isRequired
    };

    static contextTypes = {
        executeAction: PropTypes.func.isRequired,
        config: PropTypes.object
    };

    constructor(...args) {
        super(...args);

        this.state = {isLoading: false};
    }

    onLoadMore = () => {
        if (this.state.isLoading) return;

        this.context.executeAction(this.props.action, this.props.nextParams);
        this.setState({isLoading: true});
    };

    componentWillReceiveProps() {
        this.setState({isLoading: false});
    }

    render() {
        const {
            action,
            component: ChildComponent,
            dataSource,
            prevParams,
            nextParams,
            ...otherProps
        } = this.props;

        let { shouldLoadMore } = this.state;
 
        const items = dataSource.items;

        if (!items || items.length == 0) return null;

        const repeatableComponents = items.map((item, i) => {
            return (
                <ChildComponent 
                    key={item.id || i} 
                    index={i} items={item} 
                    {...otherProps} 
                    loadAgain={i === items.length-1} />
            )
        });

        const prevUrl = dataSource.previous && dataSource.previous.path;
        const prevProps = {
            href: prevUrl,
            className: classNames('button button--link', {
                'disabled': prevUrl == null
            })
        };
        const nextUrl = dataSource.next && dataSource.next.path;
        const nextProps = {
            href: nextUrl,
            className: classNames('button button--link', {
                'disabled': nextUrl == null
            })
        };

        let loadMore = null;
        if (nextUrl) {
            loadMore = (
                <div className="load-more">
                    <button className="button gtm-loadmore-button button--load-more" onClick={this.onLoadMore}>
                        {this.state.isLoading?'Loading...':'Load More'}
                    </button>
                </div>
            );
        }

        return (
            <div className="repeatable-component">
                {repeatableComponents}
                <div className="container">
                    <div className="row">
                        {loadMore}
                        <div className="pagination">
                            <a {...prevProps}>Previous</a>
                            <a {...nextProps}>Next</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
