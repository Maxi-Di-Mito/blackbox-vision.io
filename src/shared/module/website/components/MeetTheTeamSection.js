import React, { Component ,PropTypes } from 'react';
import TeamCard from '../../main/components/TeamCard.js';
import Grid from 'react-mdl/lib/Grid';

class MeetTheTeamSection extends Component {
    render() {
        let { title, description, cardList } = this.props;

        return (
            <section id="MeetTheTeam" className="mdl-color--grey-300">
                <h3 className="blackbox-title__padding mdl-typography--text-center mdl-typography--font-light mdl-typography--display-2-color-contrast">
                    {title}
                </h3>
                <p className="mdl-typography--text-center mdl-typography--font-light mdl-typography--subhead">
                    {description}
                </p>
                <Grid> {
                    cardList.map((item, index) => (
                        <TeamCard key={index} {...item}/>
                    ))
                }
                </Grid>
            </section>
        )
    }
}

MeetTheTeamSection.ropTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cardList: PropTypes.array.isRequired
};

export default MeetTheTeamSection;