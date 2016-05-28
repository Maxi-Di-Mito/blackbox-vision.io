import React, { Component ,PropTypes } from 'react';
import Content from 'react-mdl/lib/Layout/Content';
import Layout from 'react-mdl/lib/Layout/Layout';
import Sidenav from '../components/common/SideNav.jsx';
import Footer from '../components/common/Footer.jsx';
import Header from '../components/common/Header.jsx';
import WhoWeAreSection from '../components/section/WhoWeAreSection.jsx';
import WhatWeDoSection from '../components/section/WhatWeDoSection.jsx';
import MeetTheTeamSection from '../components/section/MeetTheTeamSection.jsx';
import PortfolioSection from '../components/section/PortfolioSection.jsx';
import ContactSection from '../components/section/ContactSection.jsx';
import BlogSection from '../components/section/BlogSection.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

class Application extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        injectTapEventPlugin();
        componentHandler.upgradeAllRegistered();
    }

    componentDidUpdate() {
        componentHandler.upgradeDom();
    }

    render() {
        const list = [
            {
                link: "#WhoWeAre",
                message: "who we are"
            }, {
                link: "#WhatWeDo",
                message: "what we do"
            }, {
                link: "#MeetTheTeam",
                message: "meet the team"
            }, {
                link: "#Portfolio",
                message: "portfolio"
            }, {
                link: "#Contact",
                message: "contact"
            }, {
                link: "#Blog",
                message: "blog"
            }
        ];

        return (
            <Layout fixedHeader>
                <Header linkList={list}/>
                <Sidenav linkList={list}/>
                <Content>
                    <WhoWeAreSection/>
                    <WhatWeDoSection/>
                    <MeetTheTeamSection/>
                    <PortfolioSection/>
                    <ContactSection/>
                    <BlogSection/>
                    <Footer/>
                </Content>
            </Layout>
        )
    }
}

export default Application;