import React, { Component ,PropTypes } from 'react';
import ServiceCard from '../../Common/MDL/Card/ServiceCard.jsx';
import Grid, { Cell } from 'react-mdl/lib/Grid';

const WhatWeDoSection = (props) =>(
    <section id="WhatWeDo">
        <h3 className="blackbox-title__padding mdl-typography--text-center mdl-typography--font-light mdl-typography--display-2-color-contrast">
            {props.title}
        </h3>
        <p className="mdl-typography--text-center mdl-typography--font-light mdl-typography--subhead">
            {props.description}
        </p>
        <Grid> {
            props.cardList.map((item, index) => (
                <ServiceCard key={index} {...item}/>
            ))
        }
        </Grid>
    </section>
);

WhatWeDoSection.propTypes = {
    title: PropTypes.string.isRequired,
    cardList: PropTypes.array.isRequired
};

export default WhatWeDoSection;