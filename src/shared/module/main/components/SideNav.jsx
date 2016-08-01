import React, { Component ,PropTypes } from 'react';
import NavLink from './HashLink.jsx';

const SideNav = ({ title, linkList }) => (
    <div className="mdl-layout__drawer mdl-layout--small-screen-only">
        <span className="mdl-layout-title">{title}</span>
        <nav className="mdl-navigation"> {
            linkList.map((item, index) => (
                <NavLink key={index} {...item} isMobile/>
            ))
        }
        </nav>
    </div>
);

SideNav.propTypes = {
    title: PropTypes.string.isRequired,
    linkList: PropTypes.array.isRequired
};

export default SideNav;