import React, { Component ,PropTypes } from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton, Grid, Cell } from 'react-mdl';

const ContactSection = (props) => (
    <section id="Contact" style={{ height: "650px", backgroundColor: "#ffa000"}}>
        <Grid>
            <Cell col={4}/>
            <Cell col={4}>
                <Card shadow={0} style={{ width: "100%", height: "100%" }}>
                    <CardTitle>Contact</CardTitle>
                    <CardText>
                        sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored ripple>Send</Button>
                    </CardActions>
                </Card>
            </Cell>
            <Cell col={4}/>
        </Grid>
    </section>
);

export default ContactSection;