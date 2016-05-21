import React, { Component ,PropTypes } from 'react';
import Content from 'react-mdl/lib/Layout/Content';
import Layout from 'react-mdl/lib/Layout/Layout';
import Link from '../components/Link.jsx';
import Footer from '../components/Footer.jsx';

class Website extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout fixedHeader>
                <header className="mdl-layout__header mdl-color--white mdl-shadow--3dp">
                    <div className="mdl-layout__header-row">
                        <img height="35px" width="35px" className="mdl-logo mdl-layout--large-screen-only" src="/assets/images/blackbox-vision.svg"/>
                        <span className="mdl-layout-title mdl-color-text--black">{this.props.title}</span>
                        <div className="mdl-layout-spacer"></div>
                        <nav className="mdl-navigation mdl-layout--large-screen-only">
                            <Link linkHref="#WhoWeAre" linkMessage="who we are" linkType="web"/>
                            <Link linkHref="#WhatWeDo" linkMessage="what we do" linkType="web"/>
                            <Link linkHref="#MeetTheTeam" linkMessage="meet the team" linkType="web"/>
                            <Link linkHref="#Portfolio" linkMessage="portfolio" linkType="web"/>
                            <Link linkHref="#Contact" linkMessage="contact" linkType="web"/>
                            <Link linkHref="#Blog" linkMessage="blog" linkType="web"/>
                        </nav>
                    </div>
                </header>
                <div className="mdl-layout__drawer mdl-layout--small-screen-only">
                    <span className="mdl-layout-title">{this.props.title}</span>
                    <nav className="mdl-navigation">
                        <Link linkHref="#WhoWeAre" linkMessage="who we are" linkType="mobile"/>
                        <Link linkHref="#WhatWeDo" linkMessage="what we do" linkType="mobile"/>
                        <Link linkHref="#MeetTheTeam" linkMessage="meet the team" linkType="mobile"/>
                        <Link linkHref="#Portfolio" linkMessage="portfolio" linkType="mobile"/>
                        <Link linkHref="#Contact" linkMessage="contact" linkType="mobile"/>
                        <Link linkHref="#Blog" linkMessage="blog" linkType="mobile"/>
                    </nav>
                </div>
                <Content className="mdl-layout__content black-box__background">
                    <section id="#WhoWeAre" style={{ height: "600px"}}/>
                    <section id="#WhatWeDo" style={{ height: "600px", backgroundColor: "#e0e0e0"}}/>
                    <section id="#MeetTheTeam" style={{ height: "600px", backgroundColor: "#e0e0e0"}}/>
                    <section id="#Portfolio" style={{ height: "600px", backgroundColor: "#e0e0e0"}}/>
                    <section id="#Contact" style={{ height: "600px"}}/>
                    <section id="#Blog" style={{ height: "600px", backgroundColor: "#e0e0e0"}}/>
                    <Footer copyright="BlackBox Vision @ 2016"/>
                </Content>
            </Layout>
        )
    }
}

Website.propTypes = {
    title: PropTypes.string.isRequired
};

export default Website;