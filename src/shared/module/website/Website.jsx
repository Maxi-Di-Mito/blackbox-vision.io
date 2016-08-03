import React, { Component, PropTypes } from 'react';
import Layout from 'react-mdl/lib/Layout/Layout';
import Content from 'react-mdl/lib/Layout/Content';
import SideNav from '../main/components/SideNav.jsx';
import Footer from '../main/components/Footer.jsx';
import Header from '../main/components/Header.jsx';
import SlidesSection from './components/SlidesSection.jsx';
import WhoWeAreSection from './components/WhoWeAreSection.jsx';
import WhatWeDoSection from './components/WhatWeDoSection.jsx';
import MeetTheTeamSection from './components/MeetTheTeamSection.jsx';
import PortfolioSection from './components/PortfolioSection.jsx';
import ContactSection from './components/ContactSection.jsx';

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