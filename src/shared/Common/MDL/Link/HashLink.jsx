import React, { Component ,PropTypes } from './../../../Lib/React';
import MobileHashLink from './MobileHashLink.jsx';
import WebHashLink from './WebHashLink.jsx';

const HashLink = (props) => (
    (props.isMobile)? <MobileHashLink {...props}/> : <WebHashLink {...props}/>
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