import { ACTION_TYPES } from '../actionTypes';

export const setSponsersData = data => {
  return {
    type: ACTION_TYPES.SPONSERS.SET_DATA,
    payload: data
  };
};

export const setSponsersLoading = loading => {
  return {
    type: ACTION_TYPES.SPONSERS.SET_LOADING,
    payload: loading
  };
};

export const setSponsersError = errorState => {
  return {
    type: ACTION_TYPES.SPONSERS.SET_ERROR,
    payload: errorState
  };
};
