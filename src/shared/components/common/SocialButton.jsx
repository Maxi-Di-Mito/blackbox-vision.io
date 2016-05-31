import React, { Component ,PropTypes } from 'react';

const SocialButton = (props) => {
    if (props.isFlat) {
        return (
            <a className={"mdl-button mdl-js-button mdl-js-ripple-effect mdl-typography--text-uppercase mdl-color-text--" + props.color} href={props.url} target="_blank">
                <i className={"fa fa-" + props.social + " fa-lg"} aria-hidden="true"/>
            </a>
        )
    } else {
        return (
            <a className="mdl-color-text--white" href={props.link} target="_blank">
                <button className={"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-color--" + props.color}>
                    <i className={"fa fa-" + props.social} aria-hidden="true"/>
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