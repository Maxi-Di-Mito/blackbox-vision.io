import fetch from 'isomorphic-fetch'

export const CHANGE_LOCALE = "CHANGE_LOCALE";
export const CONTENT_RECEIVE = 'CONTENT_RECEIVE';

const sendContentFetched = (dispatch, content) => {
    dispatch({
        type: CONTENT_RECEIVE,
        content: content
    });
};

export const sendLocaleChanged = (dispatch, locale) => {
    dispatch({
        type: CHANGE_LOCALE,
        locale: locale
    });
};

//Async action. With Thunk middleware applied to our store we can dispatch async actions.
const fetchContent = () => {
    return dispatch => {
        return fetch('http://localhost:9001/content')
            .then(response => response.json())
            .then(content => sendContentFetched(dispatch, content))
    }
};

export default fetchContent;