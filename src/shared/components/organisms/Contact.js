import React, {Component, PropTypes} from 'react'
import { Flex, Box } from 'reflexbox';
import Section from '../atoms/Section';
import ContactForm from '../molecules/ContactForm';

class Contact extends Component {

    state = {
        width: (typeof window !== 'undefined')? window.innerWidth : 0
    };

    componentDidMount() {
        this.setState({
            width: window.innerWidth
        });

        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        let { width } = this.state;
        let boxProps = {
            p: (width < 1024)? 2 : 6,
            mt: 4
        };

        return (
            <Section id="Contact" backgroundImage="https://images.contentful.com/lwht5a8170mc/1fcaauUZJ2S8eyu2cwqQwo/4cda9968521f1ac51abd64bbbaaca909/contact.jpeg" backgroundColor="#2196F3">
                <Flex align="center" justify="center" wrap>
                    <Box col={12} sm={1} md={3} lg={3}/>
                    <Box col={12} sm={12} md={6} lg={6} {...boxProps}>
                        <ContactForm/>
                    </Box>
                    <Box col={12} sm={1} md={3} lg={3}/>
                </Flex>
            </Section>
        );
    }

    handleResize = (event) => {
        this.setState({
            width: window.innerWidth
        });
    }
}

export default Contact;