import React, {Component, PropTypes} from 'react'
import { IconButton, IconMenu } from 'material-ui';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import HeaderContainer from '../atoms/HeaderContainer';
import HeaderMenuItem from '../molecules/HeaderMenuItemMobile';

class HeaderMenuMobile extends Component {
    render() {
        const { links } = this.props;
        let iconButton = (
            <IconButton>
                <MenuIcon color="white"/>
            </IconButton>
        );

        return (
            <HeaderContainer>
                <IconMenu
                    iconButtonElement={iconButton}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    animated
                >
                    {
                        links.map((link, index) => (
                            <HeaderMenuItem
                                key={`header-menu-item-${index}-mobile`}
                                text={link.message}
                                iconName={link.iconName}
                            />
                        ))
                    }
                </IconMenu>
            </HeaderContainer>
        );
    }
}

HeaderMenuMobile.props = {};

HeaderMenuMobile.defaultProps = {};

export default HeaderMenuMobile;