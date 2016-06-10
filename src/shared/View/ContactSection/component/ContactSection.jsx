import React, { Component ,PropTypes } from 'react';
import ContactForm from '../../Common/components/ContactForm.jsx';

const ContactSection = (props) => (
    <section id="Contact">
        <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet mdl-cell--12-col-phone"></div>
            <div className="mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-card mdl-shadow--2dp blackbox-form__padding">
                <ContactForm onSubmit={ () => {} }/>
            </div>
            <div className="mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet mdl-cell--12-col-phone"></div>
        </div>
    </section>
);

export default ContactSection;