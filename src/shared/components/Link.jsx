import React, { Component ,PropTypes } from 'react';

class Link extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { linkHref, linkMessage, linkType } = this.props;

        switch (linkType) {
            case "mobile":
                return (
                    <a className="mdl-navigation__link mdl-typography--text-uppercase" href={linkHref}>{linkMessage}</a>
                );
            case "web":
            default:
                return (
                    <a className="mdl-navigation__link black-box__link mdl-js-button mdl-js-ripple-effect mdl-typography--text-uppercase mdl-layout--large-screen-only" href={linkHref}>{linkMessage}</a>
                );
        }
    }
}

Link.propTypes = {
    linkHref: PropTypes.string.isRequired,
    linkMessage: PropTypes.string.isRequired,
    linkType: PropTypes.string.isRequired
};

export default Link;