import React, { Component ,PropTypes } from 'react';
import ContactForm from '../../main/components/ContactForm.jsx';
import Grid, { Cell } from 'react-mdl/lib/Grid';

const ContactSection = (props) => (
    <section id="Contact" className="contact-background--image">
        <h3 className="blackbox-title__padding mdl-typography--text-center mdl-typography--font-light mdl-typography--display-2-color-contrast">
            {props.title}
        </h3>
        <p className="mdl-typography--text-center mdl-typography--font-light mdl-typography--subhead">
            {props.description}
        </p>
        <Grid>
            <Cell col={4} tablet={8} phone={4}/>
            <Cell col={4} tablet={8} phone={4}>
                <ContactForm onSubmit={ () => {} }/>
            </Cell>
            <Cell col={4} tablet={8} phone={4}/>
        </Grid>
    </section>
);


ContactSection.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

ContactSection.defaultProps = {
    title: "Contact Us",
    description: "Do you have a Project in Mind? Just fill the Contact Form and We will be in touch with you to define what you need."
};

export default ContactSection;