import { ACTION_TYPES } from '../actionTypes';

const initialState = {
  data: null,
  loading: false,
  error: false
};

export const newsAndArticlesReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ACTION_TYPES.NEWS_ARTICLES.SET_DATA:
      return { ...state, data: payload };
    case ACTION_TYPES.NEWS_ARTICLES.SET_LOADING:
      return { ...state, loading: payload };
    case ACTION_TYPES.NEWS_ARTICLES.SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
