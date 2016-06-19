import React, { Component ,PropTypes } from 'react';
import ServiceCard from '../../Common/components/ServiceCard.jsx';

const WhatWeDoSection = (props) =>(
    <section id="WhatWeDo">
        <h3 className="blackbox-title__padding mdl-typography--text-center mdl-typography--font-light mdl-typography--display-2-color-contrast">
            {props.title}
        </h3>
        <p className="mdl-typography--text-center mdl-typography--font-light mdl-typography--subhead">
            {props.description}
        </p>
        <div className="mdl-grid"> {
            props.cardList.map((item, index) => (
                <ServiceCard key={index} {...item}/>
            ))
        }
        </div>
    </section>
);

WhatWeDoSection.propTypes = {
    title: PropTypes.string.isRequired,
    cardList: PropTypes.array.isRequired
};

export default WhatWeDoSection;