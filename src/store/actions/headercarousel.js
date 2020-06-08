import { ACTION_TYPES } from '../actionTypes';

export const setHeaderCarouselData = data => {
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
