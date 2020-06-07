import { ACTION_TYPES } from '../actionTypes';

export const setCausesData = data => {
  return {
    type: ACTION_TYPES.CAUSES.SET_DATA,
    payload: data
  };
};

export const setCausesLoading = loading => {
  return {
    type: ACTION_TYPES.CAUSES.SET_LOADING,
    payload: loading
  };
};

export const setCausesError = errorState => {
  return {
    type: ACTION_TYPES.CAUSES.SET_ERROR,
    payload: errorState
  };
};
