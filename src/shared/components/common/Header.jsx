import React, { Component ,PropTypes } from 'react';
import Link from '../common/Link.jsx';

const Header = () => (
    <header className="mdl-layout__header mdl-color--white mdl-shadow--3dp">
        <div className="mdl-layout__header-row">
            <img height="25px" className="mdl-logo" src="/assets/images/logo.png" style={{ margin: "auto"}}/>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
                <Link href="#WhoWeAre" message="who we are" type="web"/>
                <Link href="#WhatWeDo" message="what we do" type="web"/>
                <Link href="#MeetTheTeam" message="meet the team" type="web"/>
                <Link href="#Portfolio" message="portfolio" type="web"/>
                <Link href="#Contact" message="contact" type="web"/>
                <Link href="#Blog" message="blog" type="web"/>
            </nav>
        </div>
    </header>
);

export default Header;