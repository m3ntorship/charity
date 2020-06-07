import { ACTION_TYPES } from '../actionTypes';

export const setActivitiesData = data => {
  return {
    type: ACTION_TYPES.ACTIVITIES.SET_DATA,
    payload: data
  };
}

export const setActivitiesLoading = loading => {
         return {
           type: ACTION_TYPES.ACTIVITIES.SET_LOADING,
           payload: loading
         };
       };

export const setActivitiesError = errorState => {
         return {
           type: ACTION_TYPES.ACTIVITIES.SET_ERROR,
           payload: errorState
         };
       };
