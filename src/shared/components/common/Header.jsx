import React, { Component ,PropTypes } from 'react';
import Link from '../common/Link.jsx';

const Header = (props) => (
    <header className="mdl-layout__header mdl-color--white mdl-shadow--3dp">
        <div className="mdl-layout__header-row">
            <img height={props.logoSize} className="mdl-logo" src={props.logo} style={{ margin: "auto"}}/>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only"> {
                props.linkList.map((item, index) => {
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