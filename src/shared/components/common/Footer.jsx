import React, { Component ,PropTypes } from 'react';
import SocialButton from '../common/SocialButton.jsx';

const Footer = ({ socialList, copyright }) => (
    <footer className="mdl-mini-footer">
        <div className="footer__container">
            <ul className="footer-list"> {
                socialList.map((item, index) => {
                    return (
                        <li  key={index} className="footer-item">
                            <SocialButton {...item}/>
                        </li>
                    )
                })
            }
            </ul>
            <h6 class="mdl-typography--text-center mdl-typography--font-regular">{copyright}</h6>
        </div>
    </footer>
);

Footer.propTypes = {
    socialList: PropTypes.array.isRequired,
    copyright: PropTypes.string.isRequired
};

export default Footer;