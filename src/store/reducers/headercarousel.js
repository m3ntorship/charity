import { ACTION_TYPES } from '../actionTypes';

const initialState = {
  data: {},
  loading: false,
  error: false
};

export const headerCarouselReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ACTION_TYPES.HEADER_CAROUSEL.SET_DATA:
      return { ...state, data: payload };
    case ACTION_TYPES.HEADER_CAROUSEL.SET_LOADING:
      return { ...state, loading: payload };
    case ACTION_TYPES.HEADER_CAROUSEL.SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
