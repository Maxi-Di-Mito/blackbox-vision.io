import React, { Component ,PropTypes } from 'react';
import MobileHashLink from './MobileHashLink.js';
import WebHashLink from './WebHashLink.js';

const HashLink = ({ isMobile, ...rest }) => (
    (isMobile)? <MobileHashLink {...rest}/> : <WebHashLink {...rest}/>
);

HashLink.propTypes = {
    link: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    isMobile: PropTypes.bool.isRequired,
    iconName: PropTypes.string
};

HashLink.defaultProps = {
    isMobile: false
};

export default HashLink;