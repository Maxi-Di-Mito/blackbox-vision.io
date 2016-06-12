import React, { Component ,PropTypes } from 'react';
import Layout from 'react-mdl/lib/Layout/Layout';
import Content from 'react-mdl/lib/Layout/Content';
import SideNav from './View/Common/components/SideNav.jsx';
import Footer from './View/Common/components/Footer.jsx';
import Header from './View/Common/components/Header.jsx';
import SlidesSection from './View/SlidesSection/container/SlidesSectionContainer.jsx';
import WhoWeAreSection from './View/WhoWeAreSection/container/WhoWeAreSectionContainer.jsx';
import WhatWeDoSection from './View/WhatWeDoSection/container/WhatWeDoSectionContainer.jsx';
import MeetTheTeamSection from './View/MeetTheTeam/container/MeetTheTeamSectionContainer.jsx';
import PortfolioSection from './View/PortfolioSection/container/PortfolioSectionContainer.jsx';
import ContactSection from './View/ContactSection/container/ContactSectionContainer.jsx';
import { links, team, social, whatWeDo } from './Utils/constants'

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
                <Header logo="/assets/images/logo_white.png" logoSize="25px" linkList={links}/>
                <SideNav title="BlackBox Vision" linkList={links}/>
                <Content>
                    <SlidesSection imageUrl="/assets/images/programming.png"/>
                    <WhoWeAreSection/>
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