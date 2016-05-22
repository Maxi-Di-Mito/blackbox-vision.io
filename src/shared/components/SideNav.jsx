import React, { Component ,PropTypes } from 'react';
import Link from '../components/Link.jsx';

class SideNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
        )
    }
}

SideNav.propTypes = {
    title: PropTypes.string.isRequired
};

export default SideNav;