import React, { Component ,PropTypes } from 'react';
import TeamCard from '../../../Common/MDL/Card/TeamCard.jsx';

const MeetTheTeamSection = (props) => (
    <section id="MeetTheTeam" className="mdl-color--grey-300">
        <h3 className="blackbox-title__padding mdl-typography--text-center mdl-typography--font-light mdl-typography--display-2-color-contrast">
            {props.title}
        </h3>
        <p className="mdl-typography--text-center mdl-typography--font-light mdl-typography--subhead">
            {props.description}
        </p>
        <div className="mdl-grid"> {
            props.cardList.map((item, index) => (
                <TeamCard key={index} {...item}/>
            ))
        }
        </div>
    </section>
);

MeetTheTeamSection.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cardList: PropTypes.array.isRequired
};

export default MeetTheTeamSection;