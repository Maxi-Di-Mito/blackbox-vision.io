import React, { Component ,PropTypes } from './../../../Lib/React';
import ContactForm from '../../../Common/MDL/Form/ContactForm.jsx';
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
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default ContactSection;