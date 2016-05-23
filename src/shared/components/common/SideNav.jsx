import React, { Component ,PropTypes } from 'react';
import Link from '../common/Link.jsx';

const SideNav = () => (
    <div className="mdl-layout__drawer mdl-layout--small-screen-only">
        <span className="mdl-layout-title">BlackBox Vision</span>
        <nav className="mdl-navigation">
            <Link href="#WhoWeAre" message="who we are" type="mobile"/>
            <Link href="#WhatWeDo" message="what we do" type="mobile"/>
            <Link href="#MeetTheTeam" message="meet the team" type="mobile"/>
            <Link href="#Portfolio" message="portfolio" type="mobile"/>
            <Link href="#Contact" message="contact" type="mobile"/>
            <Link href="#Blog" message="blog" type="mobile"/>
        </nav>
    </div>
);

export default SideNav;