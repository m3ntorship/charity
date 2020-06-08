import { ACTION_TYPES } from '../actionTypes';

export const setLogoData = data => {
  return {
    type: ACTION_TYPES.LOGO.SET_DATA,
    payload: data
  };
};

export const setLogoLoading = loading => {
  return {
    type: ACTION_TYPES.LOGO.SET_LOADING,
    payload: loading
  };
};

export const setLogoError = errorState => {
  return {
    type: ACTION_TYPES.LOGO.SET_ERROR,
    payload: errorState
  };
};
