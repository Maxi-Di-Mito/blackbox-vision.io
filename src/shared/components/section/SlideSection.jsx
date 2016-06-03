import React, { Component ,PropTypes } from 'react';

const SlideSection = ({ imageUrl }) => (
    <section id="Slides" className="img-container">
        <img className="img-responsive" src={imageUrl}/>
    </section>
);

SlideSection.propTypes = {
    imageUrl: PropTypes.string.isRequired
};

export default SlideSection;