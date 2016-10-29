import React, { Component, PropTypes } from 'react';
import { Drawer } from 'material-ui';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import { social, links, logo } from '../../utils/constants';

class Website extends Component {
    state = {
        showIconButton: false,
        isDrawerOpen: false,
        open: false
    };

    onLeftIconButtonTouchTap = (event) => this.changeDrawerState();

    handleLeftButtonClick = (open) => this.showDrawer(open);

    changeDrawerState = () => {
        let { isDrawerOpen } = this.state;

        if (isDrawerOpen) {
            this.showDrawer(false)
        } else {
            this.showDrawer(true);
        }
    };

    showDrawer = (open) => this.setState({ open });

    render() {
        let { open, showIconButton } = this.state;

        return (
            <div>
                <Header logo={logo} links={links}/>
                <Drawer open={open} onRequestChange={this.handleLeftButtonClick}/>
                <Footer links={social} copyright="BlackBox Vision @ 2016"/>
            </div>
        )
    }
}

export default Website;