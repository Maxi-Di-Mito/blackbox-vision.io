import React, { Component ,PropTypes } from 'react';

const SocialButton = (props) => (
    <button className={"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-color--" + props.color}>
        <a className="mdl-color-text--white" href={props.link}>
            <i className={"fa fa-" + props.social} aria-hidden="true"/>
        </a>
    </button>
);

SocialButton.propTypes = {
    color: PropTypes.string.isRequired,
    social: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default SocialButton;