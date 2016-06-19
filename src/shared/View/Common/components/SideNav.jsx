import React, { Component ,PropTypes } from 'react';
import HashLink from './HashLink.jsx';

const SideNav = ({ title, linkList}) => (
    <div className="mdl-layout__drawer mdl-layout--small-screen-only">
        <span className="mdl-layout-title">{title}</span>
        <nav className="mdl-navigation"> {
            linkList.map((item, index) => (
                <HashLink key={index} href={item.link} message={item.message} isMobile={true}/>
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