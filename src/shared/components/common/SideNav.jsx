import React, { Component ,PropTypes } from 'react';
import Link from '../common/Link.jsx';

const SideNav = ({ title, linkList}) => (
    <div className="mdl-layout__drawer mdl-layout--small-screen-only">
        <span className="mdl-layout-title">{title}</span>
        <nav className="mdl-navigation"> {
            linkList.map((item, index) => {
                return <Link key={index} href={item.link} message={item.message} type="mobile" />
            })
        }
        </nav>
    </div>
);

SideNav.propTypes = {
    title: PropTypes.string.isRequired,
    linkList: PropTypes.array.isRequired
};

export default SideNav;