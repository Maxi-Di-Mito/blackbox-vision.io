import { sendLocaleChanged } from '../actions/content.actions'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class LocaleSwitcher extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={ () => this.props.changeLocale("en") }>English</button>
                <button onClick={ () => this.props.changeLocale("es") }>Spanish</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLocale: (locale) => {
            sendLocaleChanged(dispatch, locale);
        }
    }
};

export default connect(null, mapDispatchToProps)(LocaleSwitcher);