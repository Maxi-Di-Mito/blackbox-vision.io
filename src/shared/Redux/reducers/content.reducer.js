import { CONTENT_RECEIVE, CHANGE_LOCALE } from '../actions/content.actions.js';

const initialState = {
    isFetching: true,
    selectedLocale: 'en-US',
    availableLocales: ['en-US', 'es-419'],
    cmsContent: [ ]
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