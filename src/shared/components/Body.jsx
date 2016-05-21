import React, { Component ,PropTypes } from 'react';
import Navigation from 'react-mdl/lib/Layout/Navigation';
import Content from 'react-mdl/lib/Layout/Content';
import Layout from 'react-mdl/lib/Layout/Layout';
import Header from 'react-mdl/lib/Layout/Header';
import Drawer from 'react-mdl/lib/Layout/Drawer';
import Link from '../components/Link.jsx';

const linkClasses = "mdl-navigation__link black-box__link mdl-js-button mdl-js-ripple-effect mdl-typography--text-uppercase mdl-color-text--black";
const linkMobileClasses = "mdl-navigation__link mdl-typography--text-uppercase mdl-color-text--black";

class Body extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Layout>
                    <Header title={ this.props.title } style={ this.props.style }>
                        <Navigation>
                            <a className={ linkClasses } href="">who we are</a>
                            <a className={ linkClasses } href="">what we do</a>
                            <a className={ linkClasses } href="">meet the team</a>
                            <a className={ linkClasses } href="">portfolio</a>
                            <a className={ linkClasses } href="">contact</a>
                            <a className={ linkClasses } href="">blog</a>
                        </Navigation>
                    </Header>
                    <Drawer title={ this.props.title }>
                        <Navigation>
                            <a className={ linkMobileClasses } href="">who we are</a>
                            <a className={ linkMobileClasses } href="">what we do</a>
                            <a className={ linkMobileClasses } href="">meet the team</a>
                            <a className={ linkMobileClasses } href="">portfolio</a>
                            <a className={ linkMobileClasses } href="">contact</a>
                            <a className={ linkMobileClasses } href="">blog</a>
                        </Navigation>
                    </Drawer>
                    <Content className="mdl-layout__content black-box__background"/>
                </Layout>
            </div>
        )
    }
}

Body.propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.object
};

export default Body;