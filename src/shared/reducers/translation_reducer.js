import { TRANSLATIONS_RECEIVE, CHANGE_LOCALE} from '../actions/translate_actions';
import Winston from 'winston';

//TODO JS: Delete log calls
const translationReducer = (state = { "isFetching": true, "translation": {} }, action) => {
    switch (action.type) {
        case TRANSLATIONS_RECEIVE:
            Winston.log("info", "@TranslationReducer => calling action fetch translations");

            //Using es7 spread operator in advantage of Object.assign({}, state, { your modifications }); ugly syntax
            return {
                ...state,
                "translation": action.translation
            };

        case CHANGE_LOCALE:
            Winston.log("info", "@TranslationReducer => calling action translate for locale: " + action.locale);

            //Using es7 spread operator in advantage of Object.assign({}, state, { your modifications }); ugly syntax
            return {
                ...state,
                "selectedLocale": action.locale
            };

        default:
            Winston.log("info", "@TranslationReducer => calling default action");
            return state; 
    }
};

export default translationReducer;