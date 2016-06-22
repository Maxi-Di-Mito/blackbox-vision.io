import React, { Component ,PropTypes } from 'react';
import Layout from 'react-mdl/lib/Layout/Layout';
import Content from 'react-mdl/lib/Layout/Content';
import SideNav from './Common/MDL/Navigation/SideNav.jsx';
import Footer from './Common/MDL/Navigation/Footer.jsx';
import Header from './Common/MDL/Navigation/Header.jsx';
import SlidesSection from './View/SlidesSection/container/SlidesSectionContainer.jsx';
import WhoWeAreSection from './View/WhoWeAreSection/container/WhoWeAreSectionContainer.jsx';
import WhatWeDoSection from './View/WhatWeDoSection/container/WhatWeDoSectionContainer.jsx';
import MeetTheTeamSection from './View/MeetTheTeam/container/MeetTheTeamSectionContainer.jsx';
import PortfolioSection from './View/PortfolioSection/container/PortfolioSectionContainer.jsx';
import ContactSection from './View/ContactSection/container/ContactSectionContainer.jsx';
import { links, team, social, whatWeDo, logo, whoWeAre } from './Common/Utils/constants'

import injectTapEventPlugin from 'react-tap-event-plugin';

class Application extends Component {
    componentDidMount() {
        injectTapEventPlugin();
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

export default Application;