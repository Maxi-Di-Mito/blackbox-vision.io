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

export const fetchMockContent = () => {
    return dispatch => {
        const mockData = [
            {
                "header-component": {
                    "en": {
                        "header1-text": "Header1",
                        "header2-text": "Header2 text",
                        "header3-text": "hey Header3 text "
                    },
                    "es": {
                        "header1-text": "encabezado1",
                        "header2-text": "encabezado2 text",
                        "header3-text": "hey encabezado3 text "
                    },
                    "header-image":"//images.contentful.com/yv98ozite9o1/1QSDQJpXBKIc0EqsAIkceI/68d5048c722f4b19c3ad12447446ac96/IMG_0706.JPG"
                }
            },
            {
                "footer-component": {
                    "en": {
                        "disclaimer-text":"This is the disclaimer of the site."
                    },
                    "es": {
                        "disclaimer-text":"This is the disclaimer of the site."
                    },
                    "footer-image":"//images.contentful.com/yv98ozite9o1/64kYdYVC0wgUKsMMWUUcWQ/ae25dfbd7fc3f92c25f33320f44baf88/IMG_0701.JPG"
                }
            }
        ];
        sendContentFetched(dispatch, mockData);
    }
};

export default fetchContent;