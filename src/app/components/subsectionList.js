import React, { Component, PropTypes } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    style: {
        width: '100%',
        letterSpacing: '0',
        textTransform: 'uppercase'
    },
    labelStyle: { paddingLeft: '5px' },
    iconStyle: { width: '40px', fill: '#404040', right: '0' },
    underlineStyle: { borderColor: '#404040', margin: '0' },
    selectedMenuItemStyle: { color: '#323232', textDecoration: 'underline' },
    menuItemStyle: {
        color: '#323232',
        letterSpacing: '0',
        textTransform: 'uppercase'
    }
};

export default class SubsectionList extends Component {
    static displayName = 'SubsectionList'

    static propTypes = {
        subsections: PropTypes.arrayOf(PropTypes.shape({
            url: PropTypes.string,
            contentTitle: PropTypes.string
        })).isRequired,
        currentUrl: PropTypes.string.isRequired
    };

    handleChange = (event, index, value) => {
        if (value && window) window.location = value;
    }

    render() {
        const { currentUrl, subsections } = this.props;
        let selectedItem;
        const items = subsections.map((item) => {
            if (currentUrl === item.url) selectedItem = currentUrl;
            const gtmClass = `gtm-subsection-${item.url.replace(/\/.+\//, '')}`;

            return (
                <MenuItem value={item.url} primaryText={item.contentTitle} className={`subsections-list-item ${gtmClass}`} />
            );
        });

        return (
            <DropDownMenu
              value={selectedItem}
              onChange={this.handleChange}
              className="subsections-list"
              autoWidth={false}
              {...styles}
            >
                <MenuItem primaryText="Select a sub-section..." className="subsections-list" />
                {items}
            </DropDownMenu>
        );
    }
}
