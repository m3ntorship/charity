import { ACTION_TYPES } from '../actionTypes';

const initialState = {
  data: {},
  loading: false,
  error: false
};

export const featuredCauseReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ACTION_TYPES.FEATURED_CAUSE.SET_DATA:
      return {
        ...state,
        data: payload
      };
    case ACTION_TYPES.FEATURED_CAUSE.SET_LOADING:
      return { ...state, loading: payload };
    case ACTION_TYPES.FEATURED_CAUSE.SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
