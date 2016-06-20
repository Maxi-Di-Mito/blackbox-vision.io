import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form'

export const fields = ['name', 'email', 'subject', 'message'];

const FloatingTextField = (props) => (
    <div className="mdl-textfield mdl-textfield--full-width mdl-js-textfield mdl-textfield--floating-label">
        <input className="mdl-textfield__input" type={props.type} id={props.id} maxLength={props.length}/>
        <label className="mdl-textfield__label" for={props.id}>{props.label}</label>
    </div>
);

const FloatingTextArea = (props) => (
    <div className="mdl-textfield mdl-textfield--full-width mdl-js-textfield mdl-textfield--floating-label">
        <textarea className="mdl-textfield__input" type={props.type} rows={props.rows} id={props.id} maxLength={props.length}/>
        <label className="mdl-textfield__label" for={props.id}>{props.label}</label>
    </div>
);

const SubmitButton = (props) => (
    <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect" type={props.type}>
        {props.message}
        <i className="material-icons icon-right">
            {props.iconName}
        </i>
    </button>
);

const ContactForm = (props) => (
    <div className="mdl-card__supporting-text mdl-color-text--grey-800">
        <form onSubmit={props.onSubmit}>
            <FloatingTextField id="name" type="text" length="25" label="Name" {...props.name}/>
            <FloatingTextField id="email" type="email" length="45" label="Email" {...props.email}/>
            <FloatingTextField id="subject" type="text" length="25" label="Subject" {...props.subject}/>
            <FloatingTextArea id="message" type="text" length="250" label="Message" rows="3" {...props.message}/>
            <SubmitButton type="submit" message="Send" iconName="send"/>
        </form>
    </div>
);

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default reduxForm({ form: 'contact', fields })(ContactForm);