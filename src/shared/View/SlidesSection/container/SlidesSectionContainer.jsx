import React, { Component ,PropTypes } from 'react';
import SlidesSection from '../component/SlidesSection.jsx';
import { connect } from 'react-redux';

//TODO JS:
const SlidesSectionContainer = (props) => (
    <SlidesSection {...props}/>
);

export default connect((state) => ({}))(SlidesSectionContainer);