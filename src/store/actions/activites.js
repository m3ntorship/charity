import { activitiesActionTypes as ActionTypes } from '../actionTypes';

export const setActivitesData = payload => {
  return {
    type: ActionTypes.setData,
    payload
  };
};
export const setActivitesLoading = payload => {
  return {
    type: ActionTypes.setLoading,
    payload
  };
};
export const setActivitesError = payload => {
  return {
    type: ActionTypes.setError,
    payload
  };
};
