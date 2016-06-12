import React, { Component ,PropTypes } from 'react';


const ServiceCard = ({ imageUrl, name, description }) => (
    <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp">
        <div className="mdl-card__media img-container mdl-color--indigo center-container">
            <img className="img-responsive center-inner" height="25%" width="25%" src={imageUrl} />
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
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired
};

export default ServiceCard;