import React, { Component ,PropTypes } from './../../../Lib/React';
import Link from 'react-router/lib/Link';

const FlatButton = (props) => (
    <Link to={props.link} target="_blank">
        <button className={"mdl-button mdl-js-button mdl-js-ripple-effect mdl-typography--text-uppercase mdl-color-text--" + props.color}>
            <i className={"fa fa-" + props.social + " fa-lg"} aria-hidden="true"/>
        </button>
    </Link>
);

const FloatingActionButton = (props) => (
    <Link className="mdl-color-text--white" to={props.link} target="_blank">
        <button className={"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-color--" + props.color}>
            <i className={"fa fa-" + props.social} aria-hidden="true"/>
        </button>
    </Link>
);

const SocialButton = (props) => (
    (props.isFlat)? <FlatButton {...props}/> : <FloatingActionButton {...props}/>
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
