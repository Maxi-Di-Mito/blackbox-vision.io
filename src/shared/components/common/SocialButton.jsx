import React, { Component ,PropTypes } from 'react';

class SocialButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-color-text--white mdl-color--indigo">
                <i className="fa fa-facebook" aria-hidden="true"/>
            </button>
        );
    }
}

export default SocialButton;