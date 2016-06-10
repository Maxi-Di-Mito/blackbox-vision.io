import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form'

export const fields = ['name', 'email', 'subject', 'message'];

const ContactForm = (props) => (
    <div className="mdl-card__supporting-text mdl-color-text--grey-800">
        <form onSubmit={props.onSubmit}>
            <div className="mdl-textfield mdl-textfield--full-width mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" type="text" id="fullName" {...props.name}/>
                <label className="mdl-textfield__label" for="fullName">Name</label>
            </div>
            <div className="mdl-textfield mdl-textfield--full-width mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" type="email" id="email" {...props.email}/>
                <label className="mdl-textfield__label" for="email">Email</label>
            </div>
            <div className="mdl-textfield mdl-textfield--full-width mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" type="text" id="subject" {...props.subject}/>
                <label className="mdl-textfield__label" for="subject">Subject</label>
            </div>
            <div className="mdl-textfield mdl-textfield--full-width mdl-js-textfield mdl-textfield--floating-label">
                <textarea className="mdl-textfield__input" type="text" rows="3" id="message" {...props.message}/>
                <label className="mdl-textfield__label" for="message">Message</label>
            </div>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect" type="submit">
                Send
                <i className="material-icons icon-right">send</i>
            </button>
        </form>
    </div>
);

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default reduxForm({ form: 'contact', fields })(ContactForm);