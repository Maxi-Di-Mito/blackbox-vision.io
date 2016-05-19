import React, { Component ,PropTypes } from 'react';
import Content from '../components/Content.jsx';
import LocaleSwitcher from '../components/LocaleSwitcher.jsx';

class Application extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() { }

    render() {
        return (
            <div>
                <LocaleSwitcher />
            </div>
        )
    }
}

export default Application;