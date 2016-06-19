import React, { Component ,PropTypes } from 'react';
import HashLink from './HashLink.jsx';

const Header = ({ logoSize, logo, linkList}) => (
    <header className="mdl-layout__header mdl-color--indigo mdl-shadow--3dp">
        <div className="mdl-layout__header-row">
            <img height={logoSize} className="mdl-logo" src={logo} style={{ margin: "auto"}}/>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only"> {
                linkList.map((item, index) => (
                    <HashLink key={index} href={item.link} message={item.message} iconName={item.iconName} isMobile={false}/>
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