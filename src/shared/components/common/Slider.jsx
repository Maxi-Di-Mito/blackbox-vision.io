import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import shallowCompare from 'react-addons-shallow-compare';

const PreviousButton = (props) => (
    <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-color--white" onClick={props.previousSlide}>
        <i className="material-icons mdl-color-text--black">keyboard_arrow_left</i>
    </button>
);

const NextButton = (props) => (
    <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-color--white" onClick={props.nextSlide}>
        <i className="material-icons mdl-color-text--black">keyboard_arrow_right</i>
    </button>
);

let decorators = [
    {
        component: PreviousButton,
        position: 'CenterLeft',
        style: {
            padding: 20
        }
    },
    {
        component: NextButton,
        position: 'CenterRight',
        style: {
            padding: 20
        }
    }
];

class MaterialCarousel extends Component {

    constructor(props) {
        super(props);
        this.autoPlayTimeout = false;
    }

    componentWillUnmount() {
        this.stopAutoSlide();
    }

    componentDidMount() {
        this.autoSlide();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    stopAutoSlide() {
        clearTimeout(this.autoPlayTimeout);
    }

    autoSlide() {
        const { autoTime } = this.props;

        if(autoTime) {
            let carousel = this.carousel;
            let carouselState = carousel.state;
            let nextSlide = carouselState.currentSlide + 1;

            if(nextSlide >= carouselState.slideCount) {
                nextSlide = 0;
            }

            this.stopAutoSlide();
            this.autoPlayTimeout = setTimeout(carousel.goToSlide.bind(null,nextSlide),this.props.autoTime);
        }
    }

    afterSlide() {
        this.autoSlide();
    }

    render() {
        return (
            <Carousel ref={(c) => this.carousel = c} {...this.props} decorators={decorators} afterSlide={this.afterSlide.bind(this)} >
                {this.props.children}
            </Carousel>
        );
    }
}

export default MaterialCarousel;