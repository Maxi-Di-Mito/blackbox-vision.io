import React, { Component ,PropTypes } from 'react';
import NavLink from './../Link/HashLink.jsx';

const SideNav = (props) => (
    <div className="mdl-layout__drawer mdl-layout--small-screen-only">
        <span className="mdl-layout-title">{props.title}</span>
        <nav className="mdl-navigation"> {
            props.linkList.map((item, index) => (
                <NavLink key={index} {...item} isMobile={true}/>
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