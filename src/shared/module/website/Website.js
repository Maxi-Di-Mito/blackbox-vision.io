import React, { Component, PropTypes } from 'react';
import { AppBar, Drawer } from 'material-ui';
import { logo } from '../../utils/constants';

class Website extends Component {
    state = {
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
        let { open } = this.state;

        return (
            <div>
                <AppBar title={<img height="45%" src={logo}/>} onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap}/>
                <Drawer open={open} onRequestChange={this.handleLeftButtonClick}/>
            </div>
        )
    }
}

export default Website;