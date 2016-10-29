import React, { Component, PropTypes } from 'react';
import Layout from 'react-mdl/lib/Layout/Layout';
import Content from 'react-mdl/lib/Layout/Content';
import SideNav from '../main/components/SideNav.js';
import Footer from '../main/components/Footer.js';
import Header from '../main/components/Header.js';
import SlidesSection from './components/SlidesSection.js';
import WhoWeAreSection from './components/WhoWeAreSection.js';
import WhatWeDoSection from './components/WhatWeDoSection.js';
import MeetTheTeamSection from './components/MeetTheTeamSection.js';
import PortfolioSection from './components/PortfolioSection.js';
import ContactSection from './components/ContactSection.js';

import { links, team, social, whatWeDo, logo, whoWeAre } from '../../utils/constants'

export default class Website extends Component {
    componentDidMount() {
        componentHandler.upgradeAllRegistered();
    }

    componentDidUpdate() {
        componentHandler.upgradeDom();
    }

    render() {
        return (
            <Layout fixedHeader>
                <Header logo={logo} logoSize="25px" linkList={links}/>
                <SideNav title="BlackBox Vision" linkList={links}/>
                <Content>
                    <SlidesSection/>
                    <WhoWeAreSection {...whoWeAre}/>
                    <WhatWeDoSection {...whatWeDo}/>
                    <MeetTheTeamSection {...team}/>
                    <PortfolioSection/>
                    <ContactSection/>
                    <Footer socialList={social} copyright="BlackBox Vision @ 2016"/>
                </Content>
            </Layout>
        )
    }
}