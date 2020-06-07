import { ACTION_TYPES } from '../actionTypes';

const initialState = {
  data: null,
  loading: false,
  error: false
};

export const socialReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SOCIAL.SET_DATA:
      const newState = { ...state, data: payload };
      return newState;
    case ACTION_TYPES.SOCIAL.SET_LOADING:
      return { ...state, loading: payload };
    case ACTION_TYPES.SOCIAL.SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
