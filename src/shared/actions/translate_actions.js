import fetch from 'isomorphic-fetch'

export const TRANSLATIONS_RECEIVE = "TRANSLATIONS_RECEIVE";
export const CHANGE_LOCALE = "CHANGE_LOCALE";

export const changeLocale = (locale) => {
    return {
        type: CHANGE_LOCALE,
        locale: locale
    }
};

const receiveTranslations = (translations) => {
    return {
        type: TRANSLATIONS_RECEIVE,
        'translation': translations
    }
};

//async action. with Thunk middleware applied to our store we can dispatch async actions.
export const fetchTranslations = () => {
    return dispatch => {
        return fetch('http://localhost:9001/content')
            .then(response => response.json())
            .then(translations => dispatch(receiveTranslations(translations)))
    }
};