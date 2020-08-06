import * as actions from '../actions/articlesActions';

export const initialState = {
    articles: [],
    loading: false,
    hasErrors: false
}

export default function articlesReducer(state = initialState, action) {
    switch (action.type) {
        case action.GET_ARTICLES:
            return { ...state, loading: true }
        case actions.GET_ARTICLES_SUCCESS:
            return { articles: action.payload, loading: false, hasErrors: false }
        case actions.GET_ARTICLES_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        default:
            return state;
    }

}