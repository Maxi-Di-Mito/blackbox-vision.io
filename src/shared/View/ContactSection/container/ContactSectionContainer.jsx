import React, { Component ,PropTypes } from 'react';
import ContactSection from '../component/ContactSection.jsx';
import { connect } from 'react-redux';

//TODO JS: update everything related to contact section
const ContactSectionContainer = (props) => (
    <ContactSection {...props}/>
);

ContactSectionContainer.defaultProps = {
    title: "Contact Us",
    description: "Do you have a Project in Mind? Just fill the Contact Form and We will be in touch with you to define what you need."
};

export default connect((state) => ({}))(ContactSectionContainer);