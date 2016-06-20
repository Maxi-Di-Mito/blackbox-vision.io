import React, { Component, PropTypes } from 'react';

const FloatingTextField = (props) => (
    <div className="mdl-textfield mdl-textfield--full-width mdl-js-textfield mdl-textfield--floating-label">
        <input className="mdl-textfield__input" type={props.type} id={props.id} maxLength={props.length}/>
        <label className="mdl-textfield__label" for={props.id}>{props.label}</label>
    </div>
);

FloatingTextField.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

export default FloatingTextField;