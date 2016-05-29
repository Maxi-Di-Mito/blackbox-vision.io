import React, { Component ,PropTypes } from 'react';
import Slider from 'react-slick';

const WhoWeAreSection = (props) => (
    <section id="WhoWeAre">
        <Slider {...props.settings}>
            <img src='../assets/images/background.svg'/>
            <img src='../assets/images/background.svg'/>
            <img src='../assets/images/background.svg'/>
            <img src='../assets/images/background.svg'/>
        </Slider>
    </section>
);

WhoWeAreSection.propTypes = {
    settings: PropTypes.object.isRequired
};

export default WhoWeAreSection;