import { ACTION_TYPES } from '../actionTypes';

export const setFooterData = data => {
  return {
    type: ACTION_TYPES.LOGO.SET_DATA,
    payload: data
  };
};

export const setFooterLoading = loading => {
  return {
    type: ACTION_TYPES.LOGO.SET_LOADING,
    payload: loading
  };
};

export const setFooterError = errorState => {
  return {
    type: ACTION_TYPES.LOGO.SET_ERROR,
    payload: errorState
  };
};
