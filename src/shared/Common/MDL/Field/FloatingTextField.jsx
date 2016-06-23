import React, { Component, PropTypes } from './../../../Lib/React';

const TextField = (props) => (
    <div className="mdl-textfield mdl-textfield--full-width mdl-js-textfield mdl-textfield--floating-label">
        <input className="mdl-textfield__input" type={props.pattern} id={props.label} maxLength={props.length}/>
        <label className="mdl-textfield__label" for={props.label}>{props.label}</label>
    </div>
);

const TextArea = (props) => (
    <div className="mdl-textfield mdl-textfield--full-width mdl-js-textfield mdl-textfield--floating-label">
        <textarea className="mdl-textfield__input" type={props.pattern} rows={props.rows} id={props.label} maxLength={props.maxLength}/>
        <label className="mdl-textfield__label" for={props.label}>{props.label}</label>
    </div>
);

const FloatingTextField = (props) => (
    (!props.rows)? <TextField {...props}/> : <TextArea {...props}/>
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