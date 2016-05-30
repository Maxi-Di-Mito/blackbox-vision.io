import React, { Component ,PropTypes } from 'react';
import Slider from '../common/Slider.jsx';
import Slide from '../common/MdlSlide.jsx';

const SlidesSection = (props) => (
    <section id="Slides" style={{ height: "500px" }}>
        <Slider slidesToShow={1} dragging={true} autoTime={10000} > {
            props.imageList.map((item, index) => {
                return <Slide key={index} {...item}/>
            })
        }
        </Slider>
    </section>
);

SlidesSection.propTypes = {
    imageList: PropTypes.array.isRequired
};

export default SlidesSection;