import React, { Component, PropTypes } from 'react';
import TextField from '../Field/FloatingTextField.jsx';
import TextArea from '../Field/FloatingTextArea.jsx';
import Card from 'react-mdl/lib/Card/Card';
import CardTitle from 'react-mdl/lib/Card/CardTitle';
import CardActions from 'react-mdl/lib/Card/CardActions';
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
    <Card shadow={0} style={{width: 'auto', margin: 'auto', padding: 'auto' }}>
        <div className="mdl-card__supporting-text mdl-color-text--grey-800">
            <form onSubmit={props.onSubmit} style={{ margin: "10px" }}>
                <TextField label="Name" {...props.name}/>
                <TextField label="Email" pattern="email" maxLength="45" {...props.email}/>
                <TextField label="Subject" {...props.subject}/>
                <TextArea  label="Message" maxLength="250" rows="3" {...props.message}/>
                <SubmitButton type="submit" message="Send" iconName="send"/>
            </form>
        </div>
    </Card>
);

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default reduxForm({ form: 'contact', fields })(ContactForm);