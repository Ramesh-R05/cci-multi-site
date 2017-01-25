import React, { Component, PropTypes } from 'react';
import { find } from 'lodash';

export default class BrandTitle extends Component {
    static propTypes: {
        brand: PropTypes.object.isRequired
    };

    render() {
        const { brand } = this.props
        const { imageUrl, id, title } = brand;
        const brandClass = `brand-title brand-title-${id}`
        const crumbClass = `brand-breadcrumb-${id}`;

        return (
            <div className={`brand brand-${id}`}>
                <div className={brandClass}>
                    <hr className="brand-title--left-line"/>
                    <img className="brand-title--logo" src={imageUrl} />
                    <hr className="brand-title--right-line"/>
                </div>
                <div className="brand-breadcrumb">
                    <span className="brand-breadcrumb-ntl"> NOW TO LOVE > </span> <span className={crumbClass}> {title} </span>
                </div>
            </div>
        );
    }
}
