import { ACTION_TYPES } from '../actionTypes';

export const setFeaturedCauseDataActionCreator = data => {
  return {
    type: ACTION_TYPES.FEATURED_CAUSE.SET_DATA,
    payload: data
  };
};
export const setFeaturedCauseLoadingActionCreator = laoding=> {
  return {
    type: ACTION_TYPES.FEATURED_CAUSE.SET_LOADING,
    payload: laoding
  };
};
export const setFeaturedCauseErrorActionCreator = errorState=> {
  return {
    type: ACTION_TYPES.FEATURED_CAUSE.SET_ERROR,
    payload: errorState
  };
};
