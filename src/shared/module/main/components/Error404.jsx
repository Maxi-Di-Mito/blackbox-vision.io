import React, { Component, PropTypes } from 'react';
import Grid, { Cell } from 'react-mdl/lib/Grid';
import CardTitle from 'react-mdl/lib/Card/CardTitle';
import Card from 'react-mdl/lib/Card/Card';

const style = {
    height: "100vh",
    top: "0",
    bottom: "0"
};

const Error404 = (props) => (
    <section id="404">
        <div className="slide-background--image" style={style}>
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

Error404.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

Error404.defaultProps = {
    title: "404, Page not found",
    description: "Sorry, but the url you're trying to request don't exist."
};

export default Error404;