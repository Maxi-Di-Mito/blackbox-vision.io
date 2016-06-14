import React, { Component ,PropTypes } from 'react';


const ServiceCard = ({ iconName, name, description }) => (
    <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp">
        <div className="mdl-card__media img-container mdl-color--indigo center-container">
            <i className="material-icons center-inner mdl-color-text--white" style={{ fontSize: "110px" }}>{iconName}</i>
        </div>

        <div className="mdl-card__title">
            <h4 className="mdl-card__title-text">
                {name}
            </h4>
        </div>
        <div className="mdl-card__supporting-text">
            <span className="mdl-typography--font-light mdl-typography--subhead">
                {description}
            </span>
        </div>
    </div>
);

ServiceCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired
};

export default ServiceCard;