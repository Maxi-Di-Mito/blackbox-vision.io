import React, { Component ,PropTypes } from 'react';
import Slider from 'react-slick';

class WhoWeAreSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const settings = {
            autoplay: true,
            infinite: true,
            autoplaySpeed: 10000,
            centerMode: true,
            dots: false,
            arrows: false
        };

        return (
            <section id="WhoWeAre">
                <Slider {...settings}>
                    <img src='../assets/images/background.svg'/>
                    <img src='../assets/images/background.svg'/>
                    <img src='../assets/images/background.svg'/>
                    <img src='../assets/images/background.svg'/>
                </Slider>
            </section>
        )
    }
}

export default WhoWeAreSection;