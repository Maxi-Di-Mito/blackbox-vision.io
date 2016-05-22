import React, { Component ,PropTypes } from 'react';
import Content from 'react-mdl/lib/Layout/Content';
import Layout from 'react-mdl/lib/Layout/Layout';
import Sidenav from '../components/SideNav.jsx';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Body from '../components/Body.jsx';

class Application extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        componentHandler.upgradeAllRegistered();
    }

    componentDidUpdate() {
        componentHandler.upgradeDom();
    }

    render() {
        return (
            <Layout fixedHeader>
                <Header title="BlackBox Vision"/>
                <Sidenav title="BlackBox Vision"/>
                <Content className="mdl-layout__content black-box__background">
                    <Body />
                    <Footer copyright="BlackBox Vision @ 2016"/>
                </Content>
            </Layout>
        )
    }
}

export default Application;