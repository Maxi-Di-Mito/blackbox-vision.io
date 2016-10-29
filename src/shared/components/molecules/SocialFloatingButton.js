import React, {Component, PropTypes} from 'react'
import { FontIcon, FloatingActionButton } from 'material-ui';
import { Link } from 'react-router';

class SocialFloatingButton extends Component {
    render() {
        const {
            fontIconClassName,
            fontIconColor,
            fontIconHoverColor,
            fontIconName,
            floatingBackgroundColor,
            linkTo,
            linkTarget
        } = this.props;

        return (
            <Link to={linkTo} target={linkTarget}>
                <FloatingActionButton
                    backgroundColor={floatingBackgroundColor}
                >
                    <FontIcon
                        className={fontIconClassName}
                        hoverColor={fontIconHoverColor}
                        color={fontIconColor}
                    >
                        {fontIconName}
                    </FontIcon>
                </FloatingActionButton>
            </Link>
        );
    }
}

SocialFloatingButton.props = {
    fontIconClassName: PropTypes.string.isRequired,
    fontIconColor: PropTypes.string.isRequired,
    fontIconHoverColor: PropTypes.string.isRequired,
    fontIconName: PropTypes.string,
    floatingBackgroundColor: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
    linkTarget: PropTypes.string.isRequired
};

SocialFloatingButton.defaultProps = {
    fontIconColor: "white",
    fontIconHoverColor: "white",
    floatingBackgroundColor: "black",
    linkTarget: "_blank"
};

export default SocialFloatingButton;