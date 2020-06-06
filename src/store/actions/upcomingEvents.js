import { ACTION_TYPES } from '../actionTypes';

export const setUpcomingEventsData = data => {
  return {
    type: ACTION_TYPES.UPCOMING_EVENTS.SET_DATA,
    payload: data
  };
};

export const setUpcomingEventsLoading = loading => {
  return {
    type: ACTION_TYPES.UPCOMING_EVENTS.SET_LOADING,
    payload: loading
  };
};

export const setUpcomingEventsError = errorState => {
  return {
    type: ACTION_TYPES.UPCOMING_EVENTS.SET_ERROR,
    payload: errorState
  };
};
