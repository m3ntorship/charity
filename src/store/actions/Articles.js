import { ACTION_TYPES } from '../actionTypes';
const dataSanitization = data => {
  if (data) {
    const sanitizedArticles = data.map(
      ({
        title,
        link: { text, url: linkURL },
        thumbnail: { url: imageURL, alternativeText },
        id,
        image_main,
        body,
        author: { username },
        description,
        createdAt
      }) => {
        const image_mainSanitized = image_main.map(({ url }) => {
          return { url };
        });
        return {
          title,
          text,
          linkURL,
          imageURL,
          id,
          image_main: image_mainSanitized,
          body,
          username,
          alternativeText,
          description,
          createdAt
        };
      }
    );
    return sanitizedArticles;
  } else {
    return data;
  }
};
export const setArticlesData = data => {
  return {
    type: ACTION_TYPES.ARTICLES.SET_DATA,
    payload: dataSanitization(data)
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
