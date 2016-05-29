import React, { Component ,PropTypes } from 'react';
import Link from '../common/Link.jsx';

const SideNav = (props) => (
    <div className="mdl-layout__drawer mdl-layout--small-screen-only">
        <span className="mdl-layout-title">{props.title}</span>
        <nav className="mdl-navigation"> {
            props.linkList.map((item, index) => {
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