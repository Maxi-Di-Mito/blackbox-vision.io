import React, {Component, PropTypes} from 'react'
import { FontIcon, MenuItem } from 'material-ui';

class HeaderMenuItemMobile extends Component {
    render() {
        const { iconName, text } = this.props;

        const icon = (
            <FontIcon className="material-icons" style={{ marginRight: "10px" }}>
                {iconName}
            </FontIcon>
        );

        return (
            <MenuItem
                leftIcon={icon}
                primaryText={text.toUpperCase()}
            />
        );
    }
}

HeaderMenuItemMobile.props = {
    iconName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default HeaderMenuItemMobile;