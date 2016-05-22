import React, { Component ,PropTypes } from 'react';
import Link from '../components/Link.jsx';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
        )
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;