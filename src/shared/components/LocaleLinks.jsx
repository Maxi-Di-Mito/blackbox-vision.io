import React, { Component } from 'react'

export default class LocaleLinks extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const divStyle = {
            "color": "white",
            "backgroundColor": "#009688",
            "display": "inline-block",
            "padding": "5px"
        };

        return(
            <div>
                <div style={divStyle} onclick="">English</div>
                <div style={divStyle} onClick="">Spanish</div>
            </div>
        )

    }
}