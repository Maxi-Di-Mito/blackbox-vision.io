import fetch from 'isomorphic-fetch'

export const CONTENT_RECEIVE = 'CONTENT_RECEIVE';

const sendContent = (dispatch, content) => {
    dispatch({
        type: CONTENT_RECEIVE,
        content: content
    });
};

//async action. with Thunk middleware applied to our store we can dispatch async actions.
const fetchContent = () => {
    return (dispatch) => {
        return fetch('http://localhost:9001/content')
            .then(response => response.json())
            .then(content => sendContent(dispatch, content))
    }
};

export default fetchContent;