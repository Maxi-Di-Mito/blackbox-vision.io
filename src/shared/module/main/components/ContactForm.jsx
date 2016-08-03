import React, { Component, PropTypes } from 'react';
import TextField from './FloatingTextField.jsx';
import { Card } from 'react-mdl';
import { reduxForm } from 'redux-form'

export const fields = ['name', 'email', 'subject', 'message'];

const SubmitButton = ({ label, iconName }) => (
    <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect" type="submit">
        {label}
        <i className="material-icons icon-right">
            {iconName}
        </i>
    </button>
);

function ContactForm({ onSubmit, name, email, message, subject }) {
    return (
        <Card shadow={0} style={{width: 'auto', margin: 'auto', padding: 'auto'}}>
            <div className="mdl-card__supporting-text mdl-color-text--grey-800">
                <form onSubmit={onSubmit} style={{margin: "10px"}}>
                    <TextField label="Name" {...name}/>
                    <TextField label="Email" pattern="email" maxLength="45" {...email}/>
                    <TextField label="Subject" {...subject}/>
                    <TextField label="Message" rows="3" maxLength="250" {...message}/>
                    <SubmitButton label="Send" iconName="send"/>
                </form>
            </div>
        </Card>
    )
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default reduxForm({ form: 'contact', fields })(ContactForm);