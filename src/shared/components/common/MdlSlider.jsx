import React, { Component ,PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MdlSlide from '../common/MdlSlide.jsx';

const MdlSlider = (props) => (
    <div>
        <ReactCSSTransitionGroup transitionName="carousel" transitionEnterTimeout={props.enterTimeout} transitionLeaveTimeout={props.leaveTimeout}>{
            props.list.map((item, index) => {
                return <MdlSlide key={index} {...item}/>
            })
        }
        </ReactCSSTransitionGroup>
    </div>
);


MdlSlider.propTypes = {
  enterTimeout: PropTypes.number.isRequired,
  leaveTimeout: PropTypes.number.isRequired,
  list: PropTypes.array.isRequired
};

export default MdlSlider;