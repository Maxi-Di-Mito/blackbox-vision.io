import React, { Component ,PropTypes } from 'react';

const SocialButton = ({ isFlat, social, color, link }) => {
    if (isFlat) {
        return (
            <a className={"mdl-button mdl-js-button mdl-js-ripple-effect mdl-typography--text-uppercase mdl-color-text--" + color} href={link} target="_blank">
                <i className={"fa fa-" + social + " fa-lg"} aria-hidden="true"/>
            </a>
        )
    } else {
        return (
            <a className="mdl-color-text--white" href={link} target="_blank">
                <button className={"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-color--" + color}>
                    <i className={"fa fa-" + social} aria-hidden="true"/>
                </button>
            </a>
        );
    }
};

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