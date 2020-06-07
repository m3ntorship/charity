import { ACTION_TYPES } from '../actionTypes';

const initialState = {
  data: {},
  loading: false,
  error: false
};

export const featuredCauseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.FEATURED_CAUESE.SET_DATA:
      const newState = { ...state, data: payload };
      return newState;
    case ACTION_TYPES.FEATURED_CAUESE.SET_LOADING:
      return { ...state, loading: payload };
    case ACTION_TYPES.FEATURED_CAUESE.SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
