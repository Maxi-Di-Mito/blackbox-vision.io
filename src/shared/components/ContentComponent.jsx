import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

const ContentComponent = () => (false);


ContentComponent.propTypes = {

    content: PropTypes.object,
    translation: PropTypes.object,
    componentId: PropTypes.string

}

const mapStateToProps = (state) => {
    const { content } = state.content.contents[this.props.componentId];
    const { translation } = state.translation.translations[this.props.componentId];
    return {
        content,
        translation
    }
}




export default connect(mapStateToProps)(ContentComponent);

