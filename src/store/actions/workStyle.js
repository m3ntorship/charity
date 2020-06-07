import { ACTION_TYPES } from '../actionTypes';

export const setWorkStyleData = data => {
  return {
    type: ACTION_TYPES.WORKSTYLE.SET_DATA,
    payload: data
  };
};

export const setWorkStyleLoading = loading => {
  return {
    type: ACTION_TYPES.WORKSTYLE.SET_LOADING,
    payload: loading
  };
};

export const setWorkStyleError = errorState => {
  return {
    type: ACTION_TYPES.WORKSTYLE.SET_ERROR,
    payload: errorState
  };
};
