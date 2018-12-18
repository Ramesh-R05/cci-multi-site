import React, { Component, PropTypes } from 'react';
import SearchBar from './searchBar';

export default class PageSearchBox extends Component {
    static propTypes = {
        enableHomeSearchBox: PropTypes.bool.isRequired,
        linkToBackgroundImage: PropTypes.string.isRequired,
        searchDescribeText: PropTypes.string.isRequired,
        searchTagsDetails: PropTypes.array.isRequired,
        usePlaceholder: PropTypes.bool
    };

    static defaultProps = {
        usePlaceholder: false
    };

    static contextTypes = {
        config: PropTypes.object
    };

    renderTagList = () => {
        const { searchTagsDetails } = this.props;

        if (searchTagsDetails.length === 0) {
            return null;
        }

        return (
            <ul className="page-search-box__tag-list">
                {searchTagsDetails.map(tag => (
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
        const { enableHomeSearchBox, linkToBackgroundImage, searchDescribeText, usePlaceholder } = this.props;
        const searchBoxStyle = !!linkToBackgroundImage && {
            backgroundImage: `url("${linkToBackgroundImage}?width=600&height=225&mode=crop&quality=75")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        };

        return (
            enableHomeSearchBox && (
                <div className="page-search-box">
                    <div className="page-search-box__background" style={{ ...searchBoxStyle }}>
                        <div className="page-search-box__inner">
                            <SearchBar placeholderText={(usePlaceholder && searchDescribeText) || undefined} inPageSearchBox />
                            {searchDescribeText && <p className="page-search-box__title-text">{searchDescribeText}</p>}
                            {this.renderTagList()}
                        </div>
                    </div>
                </div>
            )
        );
    }
}
