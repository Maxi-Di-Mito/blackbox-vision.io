import React, { Component, PropTypes } from 'react';

const FloatingTextField = (props) => (
    <div className="mdl-textfield mdl-textfield--full-width mdl-js-textfield mdl-textfield--floating-label">
        <input className="mdl-textfield__input" type={props.pattern || "text" } id={props.label} maxLength={props.length || "25" }/>
        <label className="mdl-textfield__label" for={props.label}>{props.label}</label>
    </div>
);

FloatingTextField.propTypes = {
    pattern: PropTypes.string.isRequired,
    maxLength: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

export default FloatingTextField;