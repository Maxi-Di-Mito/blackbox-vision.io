import React, { Component ,PropTypes } from 'react';

const MdlSlide = (props) => (
  <div style={{ background: "url('" + props.imageUrl + "') center/cover"}}>
      <h1 className="mdl-typography--text-center mdl-typography--font-light mdl-typography--display-2-color-contrast">{props.title}</h1>
      <p className="mdl-typography--text-center mdl-typography--font-light mdl-typography--subhead">{props.description}</p>
  </div>
);

MdlSlide.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default MdlSlide;