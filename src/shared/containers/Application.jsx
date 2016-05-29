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
        const links = [
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

        const social = [
            {
                color: "indigo",
                social: "facebook",
                link: ""
            }, {
                color: "blue",
                social: "twitter",
                link: ""
            }, {
                color: "red",
                social: "google-plus",
                link: ""
            }, {
                color: "black",
                social: "github",
                link: ""
            }
        ];

        return (
            <Layout fixedHeader>
                <Header logo="/assets/images/logo.png" logoSize="25px" linkList={links}/>
                <Sidenav title="BlackBox Vision" linkList={links}/>
                <Content>
                    <WhoWeAreSection/>
                    <WhatWeDoSection/>
                    <MeetTheTeamSection/>
                    <PortfolioSection/>
                    <ContactSection/>
                    <BlogSection/>
                    <Footer socialList={social} copyright="BlackBox Vision @ 2016"/>
                </Content>
            </Layout>
        )
    }
}

export default Application;