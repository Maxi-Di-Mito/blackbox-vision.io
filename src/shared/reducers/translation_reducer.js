import { TRANSLATIONS_RECEIVE, CHANGE_LOCALE} from '../actions/translate_actions';

const translationReducer = (state = { "isFetching": true, "translation": {} }, action) => {
    console.log("Translation " + JSON.stringify(action));
    
    switch (action.type) {
        case TRANSLATIONS_RECEIVE:
            console.log("@TranslationReducer => calling action fetch translations");

            //Using es6 spread operator in advantage of Object.assign({}, state, { your modifications }); ugly syntax
            return {
                ...state,
                isFetching: false,
                translation: action.translation
            };

        case CHANGE_LOCALE:
            console.log("@TranslationReducer => calling action translate for locale: " + action.locale);

            //Using es6 spread operator in advantage of Object.assign({}, state, { your modifications }); ugly syntax
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