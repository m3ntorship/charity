import { ACTION_TYPES } from '../actionTypes';

const dataSanitization = data => {
  if (data) {
    data = data.map(({ id, url, fontawesome_icons }) => {
      return {
        id,
        url,
        fontawesome_icons
      };
    });
    return data;
  }
};

export const setSocialData = data => {
  return {
    type: ACTION_TYPES.SOCIAL.SET_DATA,
    payload: dataSanitization(data)
  };
};

export const setSocialLoading = loading => {
  return {
    type: ACTION_TYPES.SOCIAL.SET_LOADING,
    payload: loading
  };
};

export const setSocialError = errorState => {
  return {
    type: ACTION_TYPES.SOCIAL.SET_ERROR,
    payload: errorState
  };
};
