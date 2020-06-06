import { ACTION_TYPES } from '../actionTypes';

export const setTestimonialsData = data => {
  return {
    type: ACTION_TYPES.TESTIMONIALS.SET_DATA,
    payload: data
  };
};

export const setTestimonialsLoading = loading => {
  return {
    type: ACTION_TYPES.TESTIMONIALS.SET_LOADING,
    payload: loading
  };
};

export const setTestimonialsError = errorState => {
  return {
    type: ACTION_TYPES.TESTIMONIALS.SET_ERROR,
    payload: errorState
  };
};
