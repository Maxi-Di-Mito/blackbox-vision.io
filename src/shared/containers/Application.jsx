import React, { Component } from 'react'
import LocaleLinks from '../../shared/components/LocaleLinks.jsx'

export default class Application extends Component {
    render() {
        return(
            <div>
                <LocaleLinks onLocaleChanged=""/>
            </div>
        )
    }
}