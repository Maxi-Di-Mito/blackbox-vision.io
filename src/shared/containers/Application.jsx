import ContentProvider from '../components/ContentProvider.jsx'
import LocaleSwitcher from '../components/LocaleSwitcher.jsx'
import React, { Component ,PropTypes } from 'react'

class Application extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() { }

    render() {
        return (
            <ContentProvider>
                <LocaleSwitcher/>
            </ContentProvider>
        )
    }
}

export default Application;