import { ACTION_TYPES } from '../actionTypes';

export const setPagesData = data => {
  return {
    type: ACTION_TYPES.PAGES.SET_DATA,
    payload: data
  };
};

export const setPagesLoading = loading => {
  return {
    type: ACTION_TYPES.PAGES.SET_LOADING,
    payload: loading
  };
};

export const setPagesError = errorState => {
  return {
    type: ACTION_TYPES.PAGES.SET_ERROR,
    payload: errorState
  };
};
