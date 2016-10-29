import React, { Component ,PropTypes } from 'react';
import ServiceCard from '../../main/components/ServiceCard.js';
import Grid from 'react-mdl/lib/Grid';

class WhatWeDoSection extends Component {
    render() {
        let { title, description, cardList } = this.props;

        return (
            <section id="WhatWeDo">
                <h3 className="blackbox-title__padding mdl-typography--text-center mdl-typography--font-light mdl-typography--display-2-color-contrast">
                    {title}
                </h3>
                <p className="mdl-typography--text-center mdl-typography--font-light mdl-typography--subhead">
                    {description}
                </p>
                <Grid> {
                    cardList.map((item, index) => (
                        <ServiceCard key={index} {...item}/>
                    ))
                }
                </Grid>
            </section>
        )
    }
}

WhatWeDoSection.props = {
    title: PropTypes.string.isRequired,
    cardList: PropTypes.array.isRequired
};

export default WhatWeDoSection;