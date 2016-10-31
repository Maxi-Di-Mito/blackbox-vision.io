import React, { Component, PropTypes } from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import Contact from '../organisms/Contact';
import Section from '../atoms/Section';
import { social, links, logo } from '../../utils/constants';

class Website extends Component {
    render() {
        return (
            <div>
                <Header links={links} logo={logo}/>
                <Section id="Home" backgroundImage="https://images.contentful.com/lwht5a8170mc/w3FDlOYi6yCwsGu6EkQu/792767747799e3091c757da781993b75/slide.jpeg" backgroundColor="#F44336" paddingTop="64px"/>
                <Section id="WhoWeAre" backgroundColor="#E91E63"/>
                <Section id="WhatWeDo" backgroundColor="#9C27B0"/>
                <Section id="MeetTheTeam" backgroundColor="#673AB7"/>
                <Section id="Portfolio" backgroundColor="#3F51B5"/>
                <Contact/>
                <Footer links={social} copyright="BlackBox Vision @ 2016"/>
            </div>
        )
    }
}

export default Website;