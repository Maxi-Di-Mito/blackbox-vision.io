import React, { Component ,PropTypes } from 'react';

const WhoWeAreSection = (props) => (
    <section id="WhoWeAre">
        <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"></div>
            <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
                <h3 className="blackbox-title__padding mdl-typography--text-center mdl-typography--font-light mdl-typography--display-2-color-contrast">
                    {props.title}
                </h3>
                <p className="mdl-typography--text-center mdl-typography--font-light mdl-typography--subhead">
                    {props.description}
                </p>
            </div>
            <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"></div>
        </div>
    </section>
);

export default WhoWeAreSection;