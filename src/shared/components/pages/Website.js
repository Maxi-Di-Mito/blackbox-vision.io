import React, { Component, PropTypes } from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import { social, links, logo } from '../../utils/constants';

class Website extends Component {
    render() {
        return (
            <div>
                <Header links={links} logo={logo}/>
                <Footer links={social} copyright="BlackBox Vision @ 2016"/>
            </div>
        )
    }
}

export default Website;