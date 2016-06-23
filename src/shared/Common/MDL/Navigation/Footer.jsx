import React, { Component ,PropTypes } from './../../../Lib/React';
import SocialButton from './../Button/SocialButton.jsx';

const SocialListItem = (props) => (
    <li className="footer-item">
        <SocialButton {...props}/>
    </li>
);

const Footer = (props) => (
    <footer className="mdl-mini-footer">
        <div className="footer__container">
            <ul className="footer-list"> {
                props.socialList.map((item, index) => (
                    <SocialListItem key={index} {...item}/>
                ))
            }
            </ul>
            <h6 className="mdl-typography--text-center mdl-typography--font-regular">
                {props.copyright}
            </h6>
        </div>
    </footer>
);

Footer.propTypes = {
    socialList: PropTypes.array.isRequired,
    copyright: PropTypes.string.isRequired
};

export default Footer;