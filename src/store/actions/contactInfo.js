import { ACTION_TYPES } from '../actionTypes';

export const setContactInfoData = data => {
  return {
    type: ACTION_TYPES.CONTACTINFO.SET_DATA,
    payload: data
  };
};

export const setContactInfoLoading = loading => {
  return {
    type: ACTION_TYPES.CONTACTINFO.SET_LOADING,
    payload: loading
  };
};

export const setContactInfoError = errorState => {
  return {
    type: ACTION_TYPES.CONTACTINFO.SET_ERROR,
    payload: errorState
  };
};
