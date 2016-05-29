import React, { Component ,PropTypes } from 'react';

const SocialFlatButton = (props) => (
    <a className={"mdl-button mdl-js-button mdl-js-ripple-effect mdl-typography--text-uppercase mdl-color-text--" + props.color} href={props.url} target="_blank">
        <i className={"fa fa-" + props.social + " fa-lg"} aria-hidden="true"/>
    </a>
);

SocialFlatButton.propTypes = {
    social: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default SocialFlatButton;