import React, { Component ,PropTypes } from 'react';
import ContactSection from '../component/ContactSection.jsx';
import { connect } from 'react-redux';

//TODO JS: update everything related to contact section
const ContactSectionContainer = (props) => (
    <ContactSection {...props}/>
);

export default connect((state) => ({}))(ContactSectionContainer);