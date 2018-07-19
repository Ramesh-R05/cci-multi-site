import React, { Component, PropTypes } from 'react';
import SearchBar from './searchBar';

export default class PageSearchBox extends Component {
    static propTypes = {
        enableHomeSearchBox: PropTypes.bool.isRequired,
        linkToBackgroundImage: PropTypes.string.isRequired,
        searchDescribeText: PropTypes.string.isRequired,
        searchTagsDetails: PropTypes.array.isRequired
    };

    static getTagList(searchTagsDetails) {
        if (searchTagsDetails.length === 0) {
            return null;
        }

        return (
            <ul className="page-search-box__tag-list">
                {searchTagsDetails.map(tag => (
                    <li key={`list-item-${tag.fullName}`} className="page-search-box__tag-list__item">
                        <a className="page-search-box__tag-list__item__link" href={`/tags/${tag.urlName}`}>
                            {tag.displayName}
                        </a>
                    </li>
                ))}
            </ul>
        );
    }

    static getSearchText(searchDescribeText) {
        return searchDescribeText && <p className="page-search-box__text">{searchDescribeText}</p>;
    }

    render() {
        const { enableHomeSearchBox, linkToBackgroundImage, searchTagsDetails, searchDescribeText } = this.props;
        const searchBoxStyle = !!linkToBackgroundImage && {
            backgroundImage: `url("${linkToBackgroundImage}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        };

        return (
            enableHomeSearchBox && (
                <div className="page-search-box">
                    <div className="page-search-box__bg" style={{ ...searchBoxStyle }}>
                        <div className="page-search-box__inner">
                            <SearchBar />
                            {PageSearchBox.getSearchText(searchDescribeText)}
                            {PageSearchBox.getTagList(searchTagsDetails)}
                        </div>
                    </div>
                </div>
            )
        );
    }
}
