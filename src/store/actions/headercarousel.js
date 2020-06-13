import { ACTION_TYPES } from '../actionTypes';

let dataFilter = data => {
  let newData = data.map(
    ({
      heading: { heading_primary, heading_secondary },
      intro,
      link: { url, text },
      image: { url: image_url },
      id
    }) => {
      return {
        heading: { heading_primary, heading_secondary },
        intro,
        link: { url, text },
        image: { url: image_url },
        id
      };
    }
  );
  return newData;
};

export const setHeaderCarouselData = data => {
  if (data) {
    return {
      type: ACTION_TYPES.HEADER_CAROUSEL.SET_DATA,
      payload: dataFilter(data)
    };
  }
  return {
    type: ACTION_TYPES.HEADER_CAROUSEL.SET_DATA,
    payload: data
  };
};

export const setHeaderCarouselLoading = loading => {
  return {
    type: ACTION_TYPES.HEADER_CAROUSEL.SET_LOADING,
    payload: loading
  };
};

export const setHeaderCarouselError = errorState => {
  return {
    type: ACTION_TYPES.HEADER_CAROUSEL.SET_ERROR,
    payload: errorState
  };
};
