import React, { Component ,PropTypes } from 'react';
import PortfolioSection from '../component/PortfolioSection.jsx';
import connect from 'react-redux/lib/components/connect';

//TODO JS: add more calls to get this info
const PortfolioSectionContainer = (props) => (
    <PortfolioSection {...props}/>
);

export default connect()(PortfolioSectionContainer);