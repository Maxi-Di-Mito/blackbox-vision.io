import React, { Component ,PropTypes } from 'react';
import Link from 'react-router/lib/Link';

const FlatButton = ({ link, social, color }) => (
    <Link to={link} target="_blank">
        <button className={`mdl-button mdl-js-button mdl-js-ripple-effect mdl-typography--text-uppercase mdl-color-text--${color}`}>
            <i className={`fa fa-${social} fa-lg`} aria-hidden="true"/>
        </button>
    </Link>
);

const FloatingActionButton = ({ link, social, color }) => (
    <Link className="mdl-color-text--white" to={link} target="_blank">
        <button className={`mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-color--${color}`}>
            <i className={`fa fa-${social}`} aria-hidden="true"/>
        </button>
    </Link>
);

const SocialButton = ({ isFlat, ...rest }) => (
    (isFlat)? <FlatButton {...rest}/> : <FloatingActionButton {...rest}/>
);

SocialButton.propTypes = {
    color: PropTypes.string.isRequired,
    social: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    isFlat: PropTypes.bool
};

SocialButton.defaultProps = {
    isFlat: false
};

export default SocialButton;
