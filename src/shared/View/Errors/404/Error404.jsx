import React, { Component, PropTypes } from 'react';
import Layout from '../../../../../node_modules/react-mdl/lib/Layout/Layout';
import Content from '../../../../../node_modules/react-mdl/lib/Layout/Content';
import SideNav from '../../Common/components/SideNav.jsx';
import Footer from '../../Common/components/Footer.jsx';
import Header from '../../Common/components/Header.jsx';
import { logo } from '../../../Utils/constants';

const style = {
    height: "100vh",
    top: "0",
    bottom: "0"
};

const Error404 = (props) => (
    <section id="error404">
        <div className="slide-background--image" style={style}>
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"></div>
                <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__media img-container">
                        <img className="img-responsive" width="100%" src={logo} />
                    </div>
                    <div className="mdl-card__title">
                        <h4 className="mdl-card__title-text">
                            {props.title}
                        </h4>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <span className="mdl-typography--font-light mdl-typography--subhead">
                            {props.description}
                        </span>
                    </div>
                </div>
                <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"></div>
            </div>
        </div>
    </section>
);

Error404.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

Error404.defaultProps = {
    title: "404, Page not found",
    description: "Sorry, but the url you're trying to request don't exist."
};

export default Error404;