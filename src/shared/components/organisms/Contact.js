import React, {Component, PropTypes} from 'react'
import { Flex, Box } from 'reflexbox';
import Section from '../atoms/Section';
import ContactForm from '../molecules/ContactForm';

class Contact extends Component {
    render() {
        return (
            <Section backgroundColor="#2196F3">
                <Flex id="Contact" align="center" justify="center" row>
                    <Box col={4}/>
                    <Box col={4} p={2} pt={4}>
                        <ContactForm/>
                    </Box>
                    <Box col={4}/>
                </Flex>
            </Section>
        );
    }
}

export default Contact;