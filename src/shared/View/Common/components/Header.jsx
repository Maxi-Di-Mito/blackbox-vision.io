import React, { Component ,PropTypes } from 'react';
import Link from './Link.jsx';

const Header = ({ logoSize, logo, linkList}) => (
    <header className="mdl-layout__header mdl-color--indigo mdl-shadow--3dp">
        <div className="mdl-layout__header-row">
            <img height={logoSize} className="mdl-logo" src={logo} style={{ margin: "auto"}}/>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only"> {
                linkList.map((item, index) => {
                    return <Link key={index} href={item.link} message={item.message} type="web" />
                })
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