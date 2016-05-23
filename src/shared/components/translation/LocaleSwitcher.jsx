import { sendLocaleChanged } from '../../actions/content.actions.js'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class LocaleSwitcher extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { changeLocale } = this.props;

        return (
            <div>
                <button onClick={ () => changeLocale("en-US") }>English</button>
                <button onClick={ () => changeLocale("es-419") }>Spanish</button>
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