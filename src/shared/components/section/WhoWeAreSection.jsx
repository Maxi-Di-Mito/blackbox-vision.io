import React, { Component ,PropTypes } from 'react';
import MaterialCarousel from '../common/MaterialCarousel.jsx';

const WhoWeAreSection = (props) => (
    <section id="WhoWeAre">
        <MaterialCarousel slidesToShow={1} dragging={true} autoTime={10000} >
            <img src="/assets/images/background.svg"/>
            <img src="/assets/images/background.svg"/>
            <img src="/assets/images/background.svg"/>
        </MaterialCarousel>
    </section>
);

export default WhoWeAreSection;