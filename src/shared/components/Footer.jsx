import React, { Component ,PropTypes } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="mdl-mini-footer">
                <div className="footer__container">
                    <ul className="footer-list">
                        <li className="footer-item">
                            <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-color-text--white mdl-color--indigo">
                                <i className="fa fa-facebook" aria-hidden="true"/>
                            </button>
                        </li>
                        <li className="footer-item">
                            <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-color-text--white mdl-color--blue">
                                <i className="fa fa-twitter" aria-hidden="true"/>
                            </button>
                        </li>
                        <li className="footer-item">
                            <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-color-text--white mdl-color--red">
                                <i className="fa fa-google-plus" aria-hidden="true"/>
                            </button>
                        </li>
                        <li className="footer-item">
                            <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-color-text--white mdl-color--black">
                                <i className="fa fa-github" aria-hidden="true"/>
                            </button>
                        </li>
                    </ul>
                    <h6 class="mdl-typography--text-center mdl-typography--font-regular">{ this.props.copyright }</h6>
                </div>
            </footer>
        )
    }
}

Footer.propTypes = {
  copyright: PropTypes.string.isRequired
};

export default Footer;