import { CONTENT_RECEIVE } from '../actions/content_actions';

const contentReducer = (state = { "isFetching": true, "content": {} }, action) => {
    console.log("Content " + JSON.stringify(state));
    
    switch (action.type) {
        case CONTENT_RECEIVE:
            console.log("@ContentReducer => calling action fetch content");

            //Using es6 spread operator in advantage of Object.assign({}, state, { your modifications }); ugly syntax
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