import React, {Component, PropTypes} from 'react'
import { FontIcon, MenuItem } from 'material-ui';
import { Link } from 'react-router';

var styles = {
    fontIcon: {
        marginRight: '10px'
    }
};

class HeaderMenuItemMobile extends Component {
    render() {
        const { iconName, text, linkTo } = this.props;

        const icon = (
            <FontIcon className="material-icons" style={styles.fontIcon}>
                {iconName}
            </FontIcon>
        );

        return (
            <MenuItem
                containerElement={<Link to={linkTo}/>}
                leftIcon={icon}
                primaryText={text.toUpperCase()}
            />
        );
    }
}

HeaderMenuItemMobile.props = {
    iconName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired
};

export default HeaderMenuItemMobile;