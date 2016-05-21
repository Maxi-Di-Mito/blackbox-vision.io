import React, { Component ,PropTypes } from 'react';

const linkClasses = "mdl-navigation__link black-box__link mdl-js-button mdl-js-ripple-effect mdl-typography--text-uppercase mdl-color-text--black";
const linkMobileClasses = "mdl-navigation__link mdl-typography--text-uppercase mdl-color-text--black";

class Link extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { linkType, linkMessage, linkHref } = this.props;

        switch (linkType) {
            case "mobile":
                return ( <a className={ linkMobileClasses } href={ linkHref }>{ linkMessage }</a> );
            case "web":
            default:
                return ( <a className={ linkClasses } href={ linkHref }>{ linkMessage }</a> );
        }
    }
}

Link.propTypes = {
    linkMessage: PropTypes.string.isRequired,
    linkHref: PropTypes.string.isRequired,
    linkType: PropTypes.string.isRequired
};