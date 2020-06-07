import { ACTION_TYPES } from '../actionTypes';

export const setArticlesData = data => {
  return {
    type: ACTION_TYPES.ARTICLES.SET_DATA,
    payload: data
  };
};

export const setArticlesLoading = loading => {
  return {
    type: ACTION_TYPES.ARTICLES.SET_LOADING,
    payload: loading
  };
};

export const setArticlesError = errorState => {
  return {
    type: ACTION_TYPES.ARTICLES.SET_ERROR,
    payload: errorState
  };
};
