import { ACTION_TYPES } from '../actionTypes';

const initialState = {
  data: {},
  loading: false,
  error: false
};

export const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.CONTACTINFO.SET_DATA:
      const newState = { ...state, data: payload };
      return newState;
    case ACTION_TYPES.CONTACTINFO.SET_LOADING:
      return { ...state, loading: payload };
    case ACTION_TYPES.CONTACTINFO.SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};