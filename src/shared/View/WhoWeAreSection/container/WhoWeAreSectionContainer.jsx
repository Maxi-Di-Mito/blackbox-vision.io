import React, { Component ,PropTypes } from 'react';
import WhoWeAreSection from '../component/WhoWeAreSection.jsx';
import { connect } from 'react-redux';

const WhoWeAreSectionContainer = (props) => (
    <WhoWeAreSection {...props}/>
);

export default connect((state) => ({}))(WhoWeAreSectionContainer);