import React, { Component ,PropTypes } from 'react';

const SlidesSection = ({ imageUrl }) => (
    <section id="Slides" style={{ height: "650px", background: 'url("assets/images/programming.png") center/cover' }}>
    </section>
);

SlidesSection.propTypes = {
    imageUrl: PropTypes.string.isRequired
};

export default SlidesSection;