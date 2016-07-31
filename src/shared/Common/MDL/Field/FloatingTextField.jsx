import React, { Component, PropTypes } from 'react';

const TextField = ({ pattern, label, maxLength }) => (
    <div className="mdl-textfield mdl-textfield--full-width mdl-js-textfield mdl-textfield--floating-label">
        <input className="mdl-textfield__input" type={pattern} id={label} maxLength={maxLength}/>
        <label className="mdl-textfield__label" for={label}>{label}</label>
    </div>
);

const TextArea = ({ pattern, label, maxLength, rows }) => (
    <div className="mdl-textfield mdl-textfield--full-width mdl-js-textfield mdl-textfield--floating-label">
        <textarea className="mdl-textfield__input" type={pattern} rows={rows} id={label} maxLength={maxLength}/>
        <label className="mdl-textfield__label" for={label}>{label}</label>
    </div>
);

const FloatingTextField = ({ rows, ...rest }) => (
    (!rows)? <TextField {...rest}/> : <TextArea rows={rows} {...rest}/>
);

FloatingTextField.propTypes = {
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.string,
    pattern: PropTypes.string,
    rows: PropTypes.number
};

FloatingTextField.defaultProps = {
    pattern: "text",
    maxLength: "25"
};

export default FloatingTextField;