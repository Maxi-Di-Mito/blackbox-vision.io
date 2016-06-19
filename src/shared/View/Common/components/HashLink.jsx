import React, { Component ,PropTypes } from 'react';
import Link from 'react-router/lib/Link';

const MobileHashLink = (props) => (
    <Link activeClassName="mdl-navigation__link mdl-typography--text-uppercase" to={{pathname: '/', hash: props.href}}>
        {props.message}
    </Link>
);

const WebHashLink = (props) => (
    <Link activeClassName="mdl-layout--large-screen-only mdl-navigation__link black-box__link mdl-js-button mdl-color-text--white mdl-js-ripple-effect mdl-typography--text-uppercase" to={{pathname: '/', hash: props.href}}>
        <i className="material-icons icon-left">{props.iconName}</i>{props.message}
    </Link>
);

const HashLink = (props) => (
    (props.isMobile)? <MobileHashLink {...props}/> : <WebHashLink {...props}/>
);

HashLink.propTypes = {
    href: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    isMobile: PropTypes.bool.isRequired,
    iconName: PropTypes.string
};

HashLink.defaultProps = {
    isMobile: false
};

export default HashLink;