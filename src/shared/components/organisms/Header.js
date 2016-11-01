import React, {Component, PropTypes} from 'react'
import AppBar from 'material-ui/AppBar/AppBar';
import radium from 'radium';
import HeaderContainer from '../atoms/HeaderContainer';
import HeaderLogo from '../atoms/HeaderLogo';
import HeaderMenu from '../molecules/HeaderMenu';
import HeaderMenuMobile from '../molecules/HeaderMenuMobile';

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
        let headerMenu = (width < 1024) ? <HeaderMenuMobile links={links}/> : <HeaderMenu links={links}/>;

        return (
            <HeaderContainer fixed>
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

    handleResize = (event) => {
        this.setState({
            width: window.innerWidth
        });
    }
}

Header.props = {
    logo: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired
};

export default radium(Header);