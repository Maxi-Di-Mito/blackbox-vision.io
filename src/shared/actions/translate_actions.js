import fetch from 'isomorphic-fetch'

export const TRANSLATIONS_RECEIVE = "TRANSLATIONS_RECEIVE";
export const CHANGE_LOCALE = "CHANGE_LOCALE";

const sendLocaleChange = (dispatch, locale) => {
    dispatch({
        type: CHANGE_LOCALE,
        locale: locale
    });
};

const sendTranslations = (dispatch, translations) => {
    dispatch({
        type: TRANSLATIONS_RECEIVE,
        translation: translations
    });
};

//async action. with Thunk middleware applied to our store we can dispatch async actions.
const fetchTranslations = () => {
    return (dispatch) => {
        return fetch('http://localhost:9001/translation')
            .then(response => response.json())
            .then(translation => sendTranslations(dispatch, translation))
    }
};

export default sendLocaleChange;
export default fetchTranslations;