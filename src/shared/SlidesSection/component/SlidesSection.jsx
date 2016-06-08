import React, { Component ,PropTypes } from 'react';

const SlidesSection = ({ imageUrl }) => (
    <section id="Slides" className="img-container">
        <img className="img-responsive" src={imageUrl}/>
    </section>
);

SlidesSection.propTypes = {
    imageUrl: PropTypes.string.isRequired
};

export default SlidesSection;