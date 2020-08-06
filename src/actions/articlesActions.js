export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';
export const GET_ARTICLES_FAILURE = 'GET_ARTICLES_FAILURE';

export const getArticles = () => ({
    type: GET_ARTICLES,
})

export const getArticlesSuccess = (articles) => ({
    type: GET_ARTICLES_SUCCESS,
    payload: articles
})

export const getArticlesFailure = () => ({
    type: GET_ARTICLES_FAILURE,
})

export function fetchArticles() {
    return async (dispatch) => {
        dispatch(getArticles());

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            dispatch(getArticlesSuccess(data));
        } catch (error) {
            dispatch(getArticlesFailure());
        }
    }
}