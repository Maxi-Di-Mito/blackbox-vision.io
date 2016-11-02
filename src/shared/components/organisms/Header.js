import React, {Component, PropTypes} from 'react'
import AppBar from 'material-ui/AppBar/AppBar';
import HeaderContainer from '../atoms/HeaderContainer';
import HeaderLogo from '../atoms/HeaderLogo';
import HeaderMenu from '../molecules/HeaderMenu';
import HeaderMenuMobile from '../molecules/HeaderMenuMobile';
import { links } from '../../utils/constants';
import withWidth, { Responsive } from '../../utils/withWidth';

var styles = {
    appBar: {
        iconStyle: {
            padding: '0',
            margin: '0',
            height: 'auto'
        },
        style: {
            backgroundColor: '#3F51B5',
            position: 'fixed'
        }
    }
};

class Header extends Component {
    render() {
        const { logo, links, width } = this.props;
        let headerMenu;

        if (width <= Responsive.TABLET) {
            headerMenu = <HeaderMenuMobile links={links}/>;
        } else {
            headerMenu = <HeaderMenu links={links}/>;
        }

        return (
            <HeaderContainer>
                <AppBar
                    showMenuIconButton={false}
                    title={<HeaderLogo src={logo}/>}
                    iconElementRight={headerMenu}
                    iconStyleRight={styles.appBar.iconStyle}
                    style={styles.appBar.style}
                    zDepth={2}
                />
            </HeaderContainer>
        );
    }
}

Header.props = {
    logo: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired
};

Header.defaultProps = {
    logo: "https://images.contentful.com/lwht5a8170mc/5uEer0MvQcWKCag4acE6QA/89079779f364bd7936518d85ef5f0801/logo_white.png",
    links: links
};

export default withWidth(Header);