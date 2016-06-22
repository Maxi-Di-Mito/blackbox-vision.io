import React, { Component, PropTypes } from 'react';
import Grid, { Cell } from 'react-mdl/lib/Grid';
import CardTitle from 'react-mdl/lib/Card/CardTitle';
import Card from 'react-mdl/lib/Card/Card';
import { logo } from '../Utils/constants';

const style = {
    height: "100vh",
    top: "0",
    bottom: "0"
};

const Error500 = (props) => (
    <section id="500">
        <div className="slide-background--image"  style={style}>
            <Grid>
                <Cell col={4} tablet={8} phone={4}/>
                <Cell col={4} tablet={8} phone={4}>
                    <Card style={{width: 'auto', margin: 'auto' }}>
                        <CardTitle>
                            {props.title}
                        </CardTitle>
                        <div className="mdl-card__supporting-text">
                            <span className="mdl-typography--font-light mdl-typography--subhead">
                                {props.description}
                            </span>
                        </div>
                    </Card>
                </Cell>
                <Cell col={4} tablet={8} phone={4}/>
            </Grid>
        </div>
    </section>
);

Error500.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

Error500.defaultProps = {
    title: "500 Internal Server Error",
    description: "Sorry, but the server was unable to handle your request"
};

export default Error500;