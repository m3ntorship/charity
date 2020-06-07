import { ACTION_TYPES } from '../actionTypes';

export const setSocialData = data => {
  return {
    type: ACTION_TYPES.SOCIAL.SET_DATA,
    payload: data
  };
};

export const setSocialLoading = loading => {
  return {
    type: ACTION_TYPES.SOCIAL.SET_LOADING,
    payload: loading
  };
};

export const setSocialError = errorState => {
  return {
    type: ACTION_TYPES.SOCIAL.SET_ERROR,
    payload: errorState
  };
};
