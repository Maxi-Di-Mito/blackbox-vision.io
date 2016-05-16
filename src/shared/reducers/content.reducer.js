import { CONTENT_RECEIVE, CHANGE_LOCALE } from '../actions/content.actions';

const initialState = {
    isFetching: true,
    selectedLocale: 'en',
    availableLocales: ['en', 'es'],
    cmsContent: { }
};

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTENT_RECEIVE:
            return {
                ...state,
                isFetching: false,
                cmsContent: action.content
            };

        case CHANGE_LOCALE:
            return {
                ...state,
                isFetching: false,
                selectedLocale: action.locale
            };
        
        default:
            return state;
    }
};

export default contentReducer;