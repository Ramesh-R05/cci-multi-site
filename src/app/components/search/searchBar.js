import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class SearchBar extends Component {
    static displayName = 'SearchBar';

    static propTypes = {
        placeholderText: PropTypes.string,
        inPageSearchBox: PropTypes.bool
    };

    static defaultProps = {
        placeholderText: 'Search',
        inPageSearchBox: false
    };

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { searchTerm } = this.state;

        if (searchTerm !== '') {
            window.location.href = `/search/${searchTerm}`;
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { searchTerm } = this.state;

        return searchTerm !== nextState.searchTerm;
    }

    render() {
        const { placeholderText, inPageSearchBox } = this.props;
        const { searchTerm } = this.state;

        const rootClass = classNames('search-bar', {
            'search-bar--in-page-search-box': inPageSearchBox
        });

        return (
            <div className={rootClass}>
                <div className="search-bar__input">
                    <form onSubmit={this.handleSubmit} className="search-bar__form">
                        <input
                            className="search-bar__search-term"
                            type="text"
                            name="searchTerm"
                            placeholder={placeholderText}
                            value={searchTerm}
                            onChange={this.handleInputChange}
                        />
                        <input
                            type="image"
                            name="submit"
                            className="search-bar__submit"
                            src="/assets/images/search-btn.png"
                            alt="Search"
                            onClick={this.handleSubmit}
                        />
                    </form>
                </div>
            </div>
        );
    }
}
