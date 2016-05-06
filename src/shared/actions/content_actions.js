import fetch from 'isomorphic-fetch'

export const CONTENT_RECEIVE = 'CONTENT_RECEIVE';

const receiveContent = (content) => {
    return {
        type: CONTENT_RECEIVE,
        'content': content
    }
};

//async action. with Thunk middleware applied to our store we can dispatch async actions.
export const fetchContent = () => {
    return (dispatch) => {
        return fetch('http://localhost:9001/content')
            .then(response => response.json())
            .then(content => dispatch(receiveContent(content)))
    }
};