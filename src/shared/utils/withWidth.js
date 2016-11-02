import React, {Component} from 'react';

export const Responsive = {
    MOBILE: '690',
    TABLET: '995',
    DESKTOP: '1440'
};

function isUndefined(value) {
    return typeof(value) !== 'undefined';
}

function withWidth(WrappedComponent) {
    return class ResizeListener extends Component {
        state = {
            width: (!isUndefined(window))? window.innerWidth : 0
        };

        componentDidMount() {
            this.handleResize();
            window.addEventListener('resize', this.handleResize);
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.handleResize);
        }

        handleResize = (event = {}) => this.setState({ width: window.innerWidth });

        render() {
            let { width } = this.state;

            return <WrappedComponent width={width}/>;
        }
    };
}

export default withWidth;