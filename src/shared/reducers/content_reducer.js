import { CONTENT_RECEIVE } from '../actions/content_actions';

const contentReducer = (state = { "isFetching": true, "content": {} }, action) => {
    switch (action.type) {
        case CONTENT_RECEIVE:
            return {
                ...state,
                isFetching: false,
                content: action.content
            };
        
        default:
            return state;
    }
};

export default contentReducer;