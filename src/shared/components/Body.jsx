import React, { Component ,PropTypes } from 'react';

class Body extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <section id="#WhoWeAre" style={{ height: "600px"}}/>
            <section id="#WhatWeDo" style={{ height: "650px", backgroundColor: "#e0e0e0"}}/>
            <section id="#MeetTheTeam" style={{ height: "650px", backgroundColor: "#e0e0e0"}}/>
            <section id="#Portfolio" style={{ height: "650px", backgroundColor: "#e0e0e0"}}/>
            <section id="#Contact" style={{ height: "650px"}}/>
            <section id="#Blog" style={{ height: "650px", backgroundColor: "#e0e0e0"}}/>
        </div>
        )
    }
}

export default Body;