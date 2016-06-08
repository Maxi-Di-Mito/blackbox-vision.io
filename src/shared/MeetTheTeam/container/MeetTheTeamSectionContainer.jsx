import React, { Component ,PropTypes } from 'react';
import MeetTheTeamSection from '../components/MeetTheTeamSection.jsx';
import { connect } from 'react-redux';

//TODO JS: update container
const MeetTheTeamSectionContainer = (props) => (
    <MeetTheTeamSection {...props}/>
);

export default connect((state) => {})(MeetTheTeamSectionContainer);