import React, {Component, PropTypes} from 'react'
import FooterContainer from '../atoms/FooterContainer';
import FooterCopyright from '../atoms/FooterCopyright';
import FooterSocialList from '../molecules/FooterSocialList';
import Flex from 'reflexbox/dist/Flex';
import Box from 'reflexbox/dist/Box';
import { social } from '../../utils/constants';

class Footer extends Component {
    render() {
        const { links, copyright } = this.props;

        return (
            <FooterContainer>
                <Flex align="center" justify="center" wrap>
                    <Box col={12}>
                        <FooterSocialList links={links}/>
                        <FooterCopyright>
                            {copyright}
                        </FooterCopyright>
                    </Box>
                </Flex>
            </FooterContainer>
        );
    }
}

Footer.props = {
    links: PropTypes.array.isRequired,
    copyright: PropTypes.string.isRequired
};

Footer.defaultProps = {
    links: social,
    copyright: "BlackBox Vision @ 2016"
};

export default Footer;