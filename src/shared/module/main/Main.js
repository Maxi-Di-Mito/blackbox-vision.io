import React, { Component ,PropTypes } from 'react';

class Main extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Main;