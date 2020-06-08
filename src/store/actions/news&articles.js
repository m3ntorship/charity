import { ACTION_TYPES } from '../actionTypes';
const dataFilter = data => {
  let filtered = ({
    heading: { heading_primary, heading_secondary },
    link: { text, url },
    home_articles
  }) =>
    ({
      heading: { heading_primary, heading_secondary },
      link: { text, url },
      home_articles
    }(data));
  return filtered;
};

export const setNewsAndArticlesData = data => {
  return {
    type: ACTION_TYPES.NEWS_ARTICLES.SET_DATA,
    payload: dataFilter(data)
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
