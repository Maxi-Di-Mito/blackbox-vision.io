import React, { Component, PropTypes } from 'react';
import Grid from 'react-mdl/lib/Grid';

export default class WhoWeAreSection extends Component {
    render() {
        let { description } = this.props;

        return (
            <section id="WhoWeAre" className="mdl-color--indigo-700">
                <Grid>
                    <div style={{ padding: "100px", color: "white" }}>
                        <p className="mdl-typography--text-center mdl-typography--font-light mdl-typography--subhead who-we-are-paragraph">
                            {description}
                        </p>
                    </div>
                </Grid>
            </section>
        )
    }
}