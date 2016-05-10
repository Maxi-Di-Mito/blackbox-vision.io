import { TRANSLATIONS_RECEIVE, CHANGE_LOCALE} from '../actions/translate_actions';

const translationReducer = (state = { isFetching: true, translation: {} }, action) => {
    switch (action.type) {
        case TRANSLATIONS_RECEIVE:
            return {
                ...state,
                isFetching: false,
                translation: action.translation
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

export default translationReducer;