import React, { Component ,PropTypes } from 'react';
import ContactForm from '../../Common/components/ContactForm.jsx';

const ContactSection = (props) => (
    <section id="Contact" style={{ background: 'url("/assets/images/background.png") center/cover' }}>
        <h3 className="blackbox-title__padding mdl-typography--text-center mdl-typography--font-light mdl-typography--display-2-color-contrast">
            {props.title}
        </h3>
        <p className="mdl-typography--text-center mdl-typography--font-light mdl-typography--subhead">
            {props.description}
        </p>
        <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet mdl-cell--12-col-phone"></div>
            <div className="mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-card mdl-shadow--2dp blackbox-form__padding">
                <ContactForm onSubmit={ () => {} }/>
            </div>
            <div className="mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet mdl-cell--12-col-phone"></div>
        </div>
    </section>
);


ContactSection.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default ContactSection;