import React, { Component ,PropTypes } from 'react';
import MeetTheTeamSection from '../components/MeetTheTeamSection.jsx';
import connect from 'react-redux/lib/components/connect';

//TODO JS: update container
const MeetTheTeamSectionContainer = (props) => (
    <MeetTheTeamSection {...props}/>
);

export default connect((state) => ({state}))(MeetTheTeamSectionContainer);