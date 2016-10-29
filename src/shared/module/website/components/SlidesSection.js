import React, { Component ,PropTypes } from 'react';

class SlidesSection extends Component {
    render() {
        let { title, subtitle } = this.props;

        return (
            <section id="Home" className="slide-container slide-background--image blur-up">
                <div className="slide-div">
                    <h1 className="mdl-color-text--white mdl-typography--text-uppercase mdl-typography--text-center mdl-typography--font-bold mdl-typography--display-3">
                        {title}
                    </h1>
                    <h3 className="mdl-color-text--white mdl-typography--text-uppercase mdl-typography--text-center mdl-typography--font-medium mdl-typography--display-1-color-contrast">
                        {subtitle}
                    </h3>
                </div>
            </section>
        )
    }
}

SlidesSection.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
};

SlidesSection.defaultProps = {
    title: "Let's Make your projects come true",
    subtitle: "Let us make the hardest part for you and get the product you were looking for"
};

export default SlidesSection;