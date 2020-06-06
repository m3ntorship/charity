import { ACTION_TYPES } from '../actionTypes';

export const setNumbersData = data => {
  return {
    type: ACTION_TYPES.NUMBERS.SET_DATA,
    payload: data
  };
};

export const setNumbersLoading = loading => {
  return {
    type: ACTION_TYPES.NUMBERS.SET_LOADING,
    payload: loading
  };
};

export const setNumbersError = errorState => {
  return {
    type: ACTION_TYPES.NUMBERS.SET_ERROR,
    payload: errorState
  };
};
