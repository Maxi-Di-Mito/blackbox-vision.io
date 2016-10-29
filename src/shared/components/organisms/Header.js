import React, {Component, PropTypes} from 'react'
import HeaderContainer from '../atoms/HeaderContainer';
import HeaderLogo from '../atoms/HeaderLogo';
import { AppBar, FlatButton, FontIcon } from 'material-ui';

class Header extends Component {
    render() {
        const { logo, links } = this.props;

        return (
            <HeaderContainer fixed>
                <AppBar
                    showMenuIconButton={false}
                    title={<HeaderLogo src={logo}/>}
                    iconElementRight={
                        <HeaderContainer>
                            {
                                links.map((link, index) => (
                                    <FlatButton labelPosition="before" icon={<FontIcon className="material-icons" style={{ marginRight: "10px" }}>{link.iconName}</FontIcon>} style={{ color: "white", height: "64px", paddingLeft: "10px", paddingRight: "10px" }} primary>
                                        {link.message.toUpperCase()}
                                    </FlatButton>
                                ))
                            }
                        </HeaderContainer>
                    }
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