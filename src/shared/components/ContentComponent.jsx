import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

const ContentComponent = () => (false);

ContentComponent.propTypes = {
    content: PropTypes.object,
    componentId: PropTypes.string
};

const mapStateToProps = (state) => {
    const { content } = state.content.contents[this.props.componentId];
    return {
        content
    }
};

export default connect(mapStateToProps)(ContentComponent);

