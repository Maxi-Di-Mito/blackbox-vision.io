import React, { Component, PropTypes } from './../../../Lib/React';
import Link from 'react-router/lib/Link';

const MobileHashLink = (props) => (
    <Link activeClassName="mdl-navigation__link mdl-typography--text-uppercase" to={{pathname: '/', hash: props.link}}>
        {props.message}
    </Link>
);

MobileHashLink.propTypes = {
    link: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};

export default MobileHashLink;