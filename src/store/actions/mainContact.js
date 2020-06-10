import { ACTION_TYPES } from '../actionTypes';

export const setMainContactData = data => {
  return {
    type: ACTION_TYPES.MAIN_CONTACT.SET_DATA,
    payload: data
  };
};
  
export const setMainContactLoading = loading => {
  return {
    type: ACTION_TYPES.MAIN_CONTACT.SET_LOADING,
    payload: loading
  };
};

export const setMainContactError = errorState => {
  return {
    type: ACTION_TYPES.MAIN_CONTACT.SET_ERROR,
    payload: errorState
  };
};
