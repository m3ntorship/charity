import { ACTION_TYPES } from '../actionTypes';

const initialState = {
  data: null,
  loading: false,
  error: false
};

export const upcomingEventsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.UPCOMING_EVENTS.SET_DATA:
      const newState = { ...state, data: payload };
      return newState;
    case ACTION_TYPES.UPCOMING_EVENTS.SET_LOADING:
      return { ...state, loading: payload };
    case ACTION_TYPES.UPCOMING_EVENTS.SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
