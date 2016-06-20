import React, { Component, PropTypes } from 'react';
import FloatingTextField from '../Field/FloatingTextField.jsx';
import FloatingTextArea from '../Field/FloatingTextArea.jsx';
import { reduxForm } from 'redux-form'

export const fields = ['name', 'email', 'subject', 'message'];

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