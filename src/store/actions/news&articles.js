import { ACTION_TYPES } from '../actionTypes';

export const setNewsAndArticlesData = data => {
  return {
    type: ACTION_TYPES.NEWS_ARTICLES.SET_DATA,
    payload: data
  };
}

export const setNewsAndArticlesLoading = loading => {
         return {
           type: ACTION_TYPES.NEWS_ARTICLES.SET_LOADING,
           payload: loading
         };
       };

export const setNewsAndArticlesError = errorState => {
         return {
           type: ACTION_TYPES.NEWS_ARTICLES.SET_ERROR,
           payload: errorState
         };
       };
