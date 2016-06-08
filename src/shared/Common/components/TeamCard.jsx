import React, { Component ,PropTypes } from 'react';
import SocialButton from './SocialButton.jsx';

const TeamCard = ({ imageUrl, name, description, socialList }) => (
    <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp">
        <div className="mdl-card__media img-container">
            <img className="img-responsive" width="100%" src={imageUrl} />
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
        <div className="mdl-card__actions"> {
            socialList.map((item, index) => {
                return <SocialButton key={index} isFlat={true} {...item}/>
            })
        }
        </div>
    </div>
);

TeamCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  socialList: PropTypes.array.isRequired
};

export default TeamCard;