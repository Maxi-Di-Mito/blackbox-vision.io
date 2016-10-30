import React, {Component, PropTypes} from 'react'
import HeaderContainer from '../atoms/HeaderContainer';
import HeaderMenuItem from './HeaderMenuItem';

class HeaderMenu extends Component {
    render() {
        const { links } = this.props;

        return (
            <HeaderContainer>
                {
                    links.map((link, index) => (
                        <HeaderMenuItem
                            key={`header-menu-item-${index}`}
                            text={link.message}
                            iconName={link.iconName}
                        />
                    ))
                }
            </HeaderContainer>
        );
    }
}

HeaderMenu.props = {};

HeaderMenu.defaultProps = {};

export default HeaderMenu;