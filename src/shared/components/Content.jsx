 import fetchContent from '../actions/content.actions'
import React, { Component ,PropTypes } from 'react'
import { connect } from 'react-redux'

class Content extends Component {
    constructor(props) {
        super(props);
        this.getContentData = this.getContentData.bind(this);
        this.contentTypeMap = {
            text:  ((text) => (<p>{ text }</p>)),
            image: ((image) => (<img src = { image } />))
        }
    }

    componentDidMount() {
        const { isFetching, fetchContentData } = this.props;

        if (isFetching) {
            fetchContentData();
        }
    }

    getContentData() {
        const { selectedLocale, cmsContent } = this.props;
        const { componentId, contentId, contentType } = this.props;
        var data = {};

        var component = cmsContent.find((component) => {
            return component[componentId];
        });
        
        switch (contentType) {
            case 'text':
                data = component[componentId][contentId][selectedLocale];
                break;
            case 'image':
                data = component[componentId][contentId];
                break;
            default:
                data = contentId;
                break;
        }

        return data;
    }

    render() {
        const { isFetching, contentType } = this.props;
        const isContentInMap = contentType in this.contentTypeMap;

        if (!isFetching && isContentInMap) {
            const data = this.getContentData();

            return (this.contentTypeMap[contentType](data));
        } else {
            return false;
        }
    }
}

Content.propTypes = {
  componentId: PropTypes.string.isRequired,
  contentId: PropTypes.string.isRequired,
  contentType: PropTypes.string.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(Content);

