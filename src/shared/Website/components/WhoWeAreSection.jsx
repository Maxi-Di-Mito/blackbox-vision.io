import React, { Component, PropTypes } from 'react';
import Grid, { Cell } from 'react-mdl/lib/Grid';

const WhoWeAreSection = (props) => (
    <section id="WhoWeAre" className="mdl-color--indigo-700">
        <Grid>
            <Cell col={2} tablet={8} phone={4}/>
            <Cell col={8} tablet={8} phone={4}>
                <p className="mdl-typography--text-center mdl-typography--font-light mdl-typography--subhead">
                    {props.description}
                </p>
            </Cell>
            <Cell col={2} tablet={8} phone={4}/>
        </Grid>
    </section>
);

export default WhoWeAreSection;