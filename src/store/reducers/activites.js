import { activitiesActionTypes as ActionTypes } from '../actionTypes';
export const activitesReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.setData:
      return {
        ...payload,
        loading: false,
        error: false
      };
    case ActionTypes.setLoading:
      return {
        ...state,
        loading: payload
      };
    case ActionTypes.setError:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};
