import React, { Component ,PropTypes } from 'react';
import NavLink from './HashLink.jsx';

const Header = ({ logoSize, logo, linkList }) => (
    <header className="mdl-layout__header mdl-color--indigo mdl-shadow--3dp">
        <div className="mdl-layout__header-row">
            <img height={logoSize} className="mdl-logo" src={logo} style={{ margin: "auto"}} alt="main-logo"/>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only"> {
                linkList.map((item, index) => (
                    <NavLink key={index} isMobile={false} {...item}/>
                ))
            }
            </nav>
        </div>
    </header>
);

Header.propTypes = {
    logo: PropTypes.string.isRequired,
    logoSize: PropTypes.string.isRequired,
    linkList: PropTypes.array.isRequired
};

export default Header;