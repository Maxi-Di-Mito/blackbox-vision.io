import React, { Component ,PropTypes } from 'react';
import WhoWeAreSection from '../component/WhoWeAreSection.jsx';
import connect from 'react-redux/lib/components/connect';

const WhoWeAreSectionContainer = (props) => (
    <WhoWeAreSection {...props}/>
);

export default connect()(WhoWeAreSectionContainer);