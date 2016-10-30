import React, {Component, PropTypes} from 'react'
import { AppBar } from 'material-ui';
import HeaderContainer from '../atoms/HeaderContainer';
import HeaderLogo from '../atoms/HeaderLogo';
import HeaderMenu from '../molecules/HeaderMenu';
import HeaderMenuMobile from '../molecules/HeaderMenuMobile';

class Header extends Component {
    state = {
        width: (typeof window !== 'undefined')? window.innerWidth : 0
    };

    componentDidMount() {
        this.setState({
            width: window.innerWidth
        });

        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        const { logo, links } = this.props;
        let { width } = this.state;
        let headerMenu;

        if (width < 1024) {
            headerMenu = <HeaderMenuMobile links={links}/>;
        } else {
            headerMenu = <HeaderMenu links={links}/>;
        }

        return (
            <HeaderContainer fixed>
                <AppBar
                    showMenuIconButton={false}
                    title={<HeaderLogo src={logo}/>}
                    iconElementRight={headerMenu}
                    iconStyleRight={{ padding: "0px", margin: "0px", height: "auto" }}
                    style={{ backgroundColor: "#3F51B5" }}
                    zDepth={2}
                />
            </HeaderContainer>
        );
    }

    handleResize = (event) => {
        this.setState({
            width: window.innerWidth
        });
    }
}

Header.props = {};

Header.defaultProps = {};

export default Header;