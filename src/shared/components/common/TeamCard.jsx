import React, { Component ,PropTypes } from 'react';
import SocialButton from '../common/SocialButton.jsx';

const TeamCard = (props) => (
    <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp">
        <div className="mdl-card__media img-container">
            <img className="img-responsive" width="100%" src={props.imageUrl} />
        </div>
        <div className="mdl-card__title">
            <h4 className="mdl-card__title-text">
                {props.name}
            </h4>
        </div>
        <div className="mdl-card__supporting-text">
            <span className="mdl-typography--font-light mdl-typography--subhead">
                {props.description}
            </span>
        </div>
        <div className="mdl-card__actions"> {
            props.socialList.map((item, index) => {
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