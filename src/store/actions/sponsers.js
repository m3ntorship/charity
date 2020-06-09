import { ACTION_TYPES } from '../actionTypes';

const dataSanitization = data => {
  if (data) {
    data = data.map(sponser => {
      return {
        _id: sponser._id,
        image: { url: sponser.image.url }
      };
    });
    return data;
  }
};

export const setSponsersData = data => {
  return {
    type: ACTION_TYPES.SPONSERS.SET_DATA,
    payload: dataSanitization(data)
  };
};

export const setSponsersLoading = loading => {
  return {
    type: ACTION_TYPES.SPONSERS.SET_LOADING,
    payload: loading
  };
};

export const setSponsersError = errorState => {
  return {
    type: ACTION_TYPES.SPONSERS.SET_ERROR,
    payload: errorState
  };
};
