import React, { Component, PropTypes } from 'react';

const FloatingTextArea = (props) => (
    <div className="mdl-textfield mdl-textfield--full-width mdl-js-textfield mdl-textfield--floating-label">
        <textarea className="mdl-textfield__input" type={props.type} rows={props.rows} id={props.id} maxLength={props.length}/>
        <label className="mdl-textfield__label" for={props.id}>{props.label}</label>
    </div>
);

FloatingTextArea.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    rows: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

export default FloatingTextArea;