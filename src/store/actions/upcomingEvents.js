import { ACTION_TYPES } from '../actionTypes';

export const setUpcomingEventsDataActionCreator= data => {
  return {
    type: ACTION_TYPES.UPCOMING_EVENTS.SET_DATA,
    payload: data
  };
};

export const setUpcomingEventsLoadingActionCreator = loading => {
  return {
    type: ACTION_TYPES.UPCOMING_EVENTS.SET_LOADING,
    payload: loading
  };
};

export const setUpcomingEventsErrorActionCreator = errorState => {
  return {
    type: ACTION_TYPES.UPCOMING_EVENTS.SET_ERROR,
    payload: errorState
  };
};
