import { ACTION_TYPES } from '../actionTypes';

let dataFilter = ({
  heading: { heading_primary, heading_secondary },
  link: { text, url },
  home_articles,
  description
}) => ({
  heading: { heading_primary, heading_secondary },
  link: { text, url },
  home_articles,
  description
});

export const setNewsAndArticlesData = data => {
  if (data) {
    return {
      type: ACTION_TYPES.NEWS_ARTICLES.SET_DATA,
      payload: dataFilter(data)
    };
  }
  return {
    type: ACTION_TYPES.NEWS_ARTICLES.SET_DATA,
    payload: data
  };
};

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
