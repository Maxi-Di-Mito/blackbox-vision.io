import React, { Component ,PropTypes } from 'react';
import { Cell } from 'react-mdl/lib/Grid';
import Card from 'react-mdl/lib/Card/Card';
import CardTitle from 'react-mdl/lib/Card/CardTitle';

const ServiceCard = ({ iconName, name, description }) => (
    <Cell col={4} tablet={8} phone={4}>
        <Card shadow={0} style={{width: 'auto', margin: 'auto', height: '425px' }}>
            <div className="mdl-card__media img-container mdl-color--indigo center-container">
                <i className="material-icons center-inner mdl-color-text--white" style={{ fontSize: "110px" }}>
                    {iconName}
                </i>
            </div>
            <CardTitle style={{color: '#000'}}>
                {name}
            </CardTitle>
            <div className="mdl-card__supporting-text">
                <span className="mdl-typography--font-light mdl-typography--subhead">
                    {description}
                </span>
            </div>
        </Card>
    </Cell>
);

ServiceCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired
};

export default ServiceCard;