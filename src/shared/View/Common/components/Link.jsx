import React, { Component ,PropTypes } from 'react';

const Link = ({ href, message, type }) => {
    switch (type) {
        case "mobile":
            return <a className="mdl-navigation__link mdl-typography--text-uppercase" href={href}>{message}</a>;
        case "web":
        default:
            return <a className="mdl-navigation__link black-box__link mdl-js-button mdl-js-ripple-effect mdl-typography--text-uppercase mdl-layout--large-screen-only" href={href}>{message}</a>;
    }
};

Link.propTypes = {
    href: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default Link;