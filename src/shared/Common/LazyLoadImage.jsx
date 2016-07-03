import React, { Component, PropTypes } from 'react';
import 'lazysizes';

class LazyLoadImage extends Component {
    static propTypes = {
        dataSrc: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        dataSrcSet: PropTypes.string,
        dataSizes: PropTypes.string,
        dataExpand: PropTypes.string,
        className: PropTypes.string
    };

    static defaultProps = {
        dataSizes: "auto",
        dataExpand: ""
    };

    componentDidMount() {
        window.lazySizesConfig = window.lazySizesConfig || {};
        lazySizesConfig.loadMode = 1;
    }

    render() {
        const { className, alt, dataExpand, dataSrc, dataSrcSet, dataSizes, src } = this.props;

        return (
            <img src={src} className={"lazyload" + className} alt={alt} data-expand={dataExpand} data-src={dataSrc} data-srcset={dataSrcSet} data-sizes={dataSizes}/>
        )
    }
}

export default LazyLoadImage;