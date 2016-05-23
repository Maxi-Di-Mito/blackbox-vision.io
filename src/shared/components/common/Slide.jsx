import React, { Component ,PropTypes } from 'react';

class Slide extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img className="slide-img" src={this.props.src}/>
        )
    }
}

Slide.propTypes = {
    src: PropTypes.string.isRequired
};

export default Slide;