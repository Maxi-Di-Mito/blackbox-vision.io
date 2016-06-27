import React, { Component ,PropTypes } from './../../../Lib/React';
import NavLink from './../Link/HashLink.jsx';

const Header = (props) => (
    <header className="mdl-layout__header mdl-color--indigo mdl-shadow--3dp">
        <div className="mdl-layout__header-row">
            <img height={props.logoSize} className="mdl-logo" src={props.logo} style={{ margin: "auto"}} alt="main-logo"/>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only"> {
                props.linkList.map((item, index) => (
                    <NavLink key={index} {...item} isMobile={false}/>
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