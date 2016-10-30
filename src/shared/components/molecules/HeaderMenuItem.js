import React, {Component, PropTypes} from 'react'
import { FlatButton, FontIcon } from 'material-ui';

class HeaderFlatButton extends Component {
    render() {
        const { iconName, text } = this.props;

        const icon = (
            <FontIcon className="material-icons" style={{ marginRight: "10px" }}>
                {iconName}
            </FontIcon>
        );

        return (
            <FlatButton
                labelPosition="before"
                icon={icon}
                style={{ color: "white", height: "64px", paddingLeft: "10px", paddingRight: "10px" }}
                primary
            >
                {text.toUpperCase()}
            </FlatButton>
        );
    }
}

HeaderFlatButton.props = {
    iconName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default HeaderFlatButton;