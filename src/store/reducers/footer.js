import { ACTION_TYPES } from '../actionTypes';

const initialState = {
  data: {},
  loading: false,
  error: false
};

export const footerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.FOOTER.SET_DATA:
      return { ...state, data: payload };
    case ACTION_TYPES.FOOTER.SET_LOADING:
      return { ...state, loading: payload };
    case ACTION_TYPES.FOOTER.SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
