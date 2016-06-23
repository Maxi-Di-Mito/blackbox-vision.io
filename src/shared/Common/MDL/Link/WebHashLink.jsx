import React, { Component, PropTypes } from './../../../Lib/React';
import Link from 'react-router/lib/Link';

const WebHashLink = (props) => (
    <Link activeClassName="mdl-layout--large-screen-only mdl-navigation__link black-box__link mdl-js-button mdl-color-text--white mdl-js-ripple-effect mdl-typography--text-uppercase" to={{pathname: '/', hash: props.link}}>
        <i className="material-icons icon-left">{props.iconName}</i>{props.message}
    </Link>
);

WebHashLink.propTypes = {
    link: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};

export default WebHashLink;