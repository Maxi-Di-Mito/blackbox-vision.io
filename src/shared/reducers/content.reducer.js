import { CONTENT_RECEIVE, CHANGE_LOCALE } from '../actions/content.actions';

const initialState = {
    isFetching: true,
    didInvalidate: false,
    selectedLocale: 'en',
    content: { }
};

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTENT_RECEIVE:
            return {
                ...state,
                isFetching: false,
                didInvalidate: true,
                selectedLocale: 'en',
                content: action.content
            };

        case CHANGE_LOCALE:
            return {
                ...state,
                isFetching: false,
                didInvalidate: true,
                selectedLocale: action.locale
            };
        
        default:
            return state;
    }
};

export default contentReducer;