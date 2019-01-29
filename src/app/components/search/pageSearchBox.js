import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SearchBar from './searchBar';

export default class PageSearchBox extends Component {
    static propTypes = {
        isEnabled: PropTypes.bool,
        imageUrl: PropTypes.string,
        titleText: PropTypes.string,
        tags: PropTypes.array,
        usePlaceholder: PropTypes.bool
    };

    static defaultProps = {
        isEnabled: false,
        imageUrl: '',
        titleText: '',
        tags: [],
        usePlaceholder: false
    };

    renderTagList = () => {
        const { tags } = this.props;

        if (tags.length === 0) {
            return null;
        }

        return (
            <ul className="page-search-box__tag-list">
                {tags.map(tag => (
                    <li key={`list-item-${tag.fullName}`} className="page-search-box__tag-item">
                        <a className="page-search-box__tag-link" href={`/tags/${tag.urlName}`}>
                            {tag.displayName}
                        </a>
                    </li>
                ))}
            </ul>
        );
    };

    render() {
        const { isEnabled, imageUrl, titleText, usePlaceholder } = this.props;
        const searchBoxStyle = imageUrl
            ? {
                  backgroundImage: `url("${imageUrl}?width=600&height=225&mode=crop&quality=75")`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
              }
            : {};

        return (
            isEnabled && (
                <div className="page-search-box">
                    <div className="page-search-box__background" style={{ ...searchBoxStyle }}>
                        <div className="page-search-box__inner">
                            <SearchBar placeholderText={(usePlaceholder && titleText) || undefined} inPageSearchBox />
                            {titleText && <p className="page-search-box__title-text">{titleText}</p>}
                            {this.renderTagList()}
                        </div>
                    </div>
                </div>
            )
        );
    }
}
