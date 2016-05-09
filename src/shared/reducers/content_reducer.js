import { CONTENT_RECEIVE } from '../actions/content_actions';

const contentReducer = (state = { "isFetching": true, "content": {} }, action) => {
    switch (action.type) {
        case CONTENT_RECEIVE:
            console.log("@TranslationReducer => calling action fetch content");

            //Using es6 spread operator in advantage of Object.assign({}, state, { your modifications }); ugly syntax
            return {
                ...state,
                "isFetching": false,
                "content": action.content
            };

        default:
            console.log("@TranslationReducer => calling default action");
            return state;
    }
};

export default contentReducer;