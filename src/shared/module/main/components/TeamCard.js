import React, { Component, PropTypes } from 'react';
import SocialButton from './SocialButton.js';
import { Cell } from 'react-mdl/lib/Grid';
import Card from 'react-mdl/lib/Card/Card';
import CardTitle from 'react-mdl/lib/Card/CardTitle';
import CardActions from 'react-mdl/lib/Card/CardActions';

const TeamCard = (props) => (
    <Cell col={4} tablet={8} phone={4}>
        <Card shadow={0} style={{width: 'auto', margin: 'auto'}}>
            <div className="mdl-card__media img-container">
                <img className="img-responsive" width="100%" src={props.imageUrl} alt="team-images"/>
            </div>
            <CardTitle style={{color: '#000'}}>
                { props.name }
            </CardTitle>
            <div className="mdl-card__supporting-text">
                <span className="mdl-typography--font-light mdl-typography--subhead">
                    { props.description }
                </span>
            </div>
            <CardActions border> {
                props.socialList.map((item, index) => (
                    <SocialButton key={index} {...item} isFlat={true}/>
                ))
            }
            </CardActions>
        </Card>
    </Cell>
);

TeamCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    socialList: PropTypes.array.isRequired
};

export default TeamCard;