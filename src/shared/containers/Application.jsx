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
                <Content componentId="header-component" contentId="header1-text" contentType="text"/>
                <Content componentId="header-component" contentId="header2-text" contentType="text"/>
                <Content componentId="header-component" contentId="header3-text" contentType="text"/>
                <Content componentId="header-component" contentId="header-image" contentType="image"/>
            </div>
        )
    }
}

export default Application;