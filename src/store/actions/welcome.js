import { ACTION_TYPES } from '../actionTypes';

export const setWelcomeData = data => {
  return {
    type: ACTION_TYPES.WELCOME.SET_DATA,
    payload: data
  };
};

export const setWelcomeLoading = loading => {
  return {
    type: ACTION_TYPES.WELCOME.SET_LOADING,
    payload: loading
  };
};

export const setWelcomeError = errorState => {
  return {
    type: ACTION_TYPES.WELCOME.SET_ERROR,
    payload: errorState
  };
};
