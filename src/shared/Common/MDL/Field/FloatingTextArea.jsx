import React, { Component, PropTypes } from 'react';

const FloatingTextArea = (props) => (
    <div className="mdl-textfield mdl-textfield--full-width mdl-js-textfield mdl-textfield--floating-label">
        <textarea className="mdl-textfield__input" type={props.pattern || "text"} rows={props.rows} id={props.label} maxLength={props.maxLength || 150}/>
        <label className="mdl-textfield__label" for={props.label}>{props.label}</label>
    </div>
);

FloatingTextArea.propTypes = {
    pattern: PropTypes.string.isRequired,
    rows: PropTypes.string.isRequired,
    maxLength: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

export default FloatingTextArea;