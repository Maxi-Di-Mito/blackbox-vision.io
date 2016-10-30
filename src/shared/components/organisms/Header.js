import React, {Component, PropTypes} from 'react'
import HeaderContainer from '../atoms/HeaderContainer';
import HeaderLogo from '../atoms/HeaderLogo';
import HeaderLinkList from '../molecules/HeaderLinkList';
import { AppBar } from 'material-ui';

class Header extends Component {
    render() {
        const { logo, links } = this.props;

        return (
            <HeaderContainer fixed>
                <AppBar
                    showMenuIconButton={false}
                    title={<HeaderLogo src={logo}/>}
                    iconElementRight={<HeaderLinkList links={links}/>}
                    iconStyleRight={{ padding: "0px", margin: "0px", height: "auto" }}
                    style={{ backgroundColor: "#3F51B5" }}
                    zDepth={2}
                />
            </HeaderContainer>
        );
    }
}

Header.props = {};

Header.defaultProps = {};

export default Header;