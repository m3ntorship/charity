import { ACTION_TYPES } from '../actionTypes';

export const setPagesDataActionCreator = data => {
  return {
    type: ACTION_TYPES.PAGES.SET_DATA,
    payload: data
  };
};

export const setPagesLoadingActionCreator = loading => {
  return {
    type: ACTION_TYPES.PAGES.SET_LOADING,
    payload: loading
  };
};

export const setPagesErrorActionCreator = errorState => {
  return {
    type: ACTION_TYPES.PAGES.SET_ERROR,
    payload: errorState
  };
};
