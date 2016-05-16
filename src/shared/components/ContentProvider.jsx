import fetchContent from '../actions/content.actions'
import React, { Component, PropTypes,  } from 'react'
import { connect } from 'react-redux'

class ContentProvider extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {
        this.props.fetchContentData();
    }

    render() {
        return this.props.children;
    }
}

ContentProvider.contextTypes = {
    content: PropTypes.object
};

const mapStateToProps = (state) => {
    const { isFetching, selectedLocale, availableLocales, cmsContent } = state.content;

    return {
        isFetching,
        selectedLocale,
        availableLocales,
        cmsContent
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchContentData: () => {
            dispatch(fetchContent());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentProvider);

