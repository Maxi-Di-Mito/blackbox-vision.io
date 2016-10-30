import React, {Component, PropTypes} from 'react'
import HeaderContainer from '../atoms/HeaderContainer';
import HeaderFlatButton from '../molecules/HeaderFlatButton';

class HeaderLinkList extends Component {
    render() {
        const { links } = this.props;

        return (
            <HeaderContainer>
                {
                    links.map((link, index) => (
                        <HeaderFlatButton
                            key={`header-flat-button-${index}`}
                            text={link.message}
                            iconName={link.iconName}
                        />
                    ))
                }
            </HeaderContainer>
        );
    }
}

HeaderLinkList.props = {};

HeaderLinkList.defaultProps = {};

export default HeaderLinkList;