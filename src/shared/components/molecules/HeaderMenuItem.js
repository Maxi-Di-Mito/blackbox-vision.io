import React, {Component, PropTypes} from 'react'
import { FlatButton, FontIcon } from 'material-ui';
import { Link } from 'react-router';
import radium from 'radium';

var styles = {
    flatButton: {
        color: 'white',
        height: '64px',
        paddingLeft: '10px',
        paddingRight: '10px',
    },
    fontIcon: {
        marginRight: '10px'
    }
};

class HeaderFlatButton extends Component {
    render() {
        const { iconName, text, linkTo } = this.props;

        const icon = (
            <FontIcon className="material-icons" style={styles.fontIcon}>
                {iconName}
            </FontIcon>
        );

        return (
            <Link to={linkTo}>
                <FlatButton
                    labelPosition="before"
                    icon={icon}
                    style={styles.flatButton}
                    primary
                >
                    {text.toUpperCase()}
                </FlatButton>
            </Link>
        );
    }
}

HeaderFlatButton.props = {
    iconName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired
};

export default radium(HeaderFlatButton);