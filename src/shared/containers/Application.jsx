import React, { Component ,PropTypes } from 'react'
import LocaleLinks from '../../shared/components/LocaleLinks.jsx'

class Application extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <LocaleLinks/>
            </div>
        )
    }
}

export default Application;