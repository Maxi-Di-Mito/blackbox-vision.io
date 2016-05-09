import React, { Component ,PropTypes } from 'react'
import LocaleLinks from '../../shared/components/LocaleLinks.jsx'
import { connect } from 'react-redux'

import fetchContent from '../actions/content_actions'
import fetchTranslations from '../actions/translate_actions'


class Application extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchContent());
        this.props.dispatch(fetchTranslations());
    }

    render() {
        return (
            <div>
                <LocaleLinks/>
            </div>
        )
    }
}


export default connect()(Application);