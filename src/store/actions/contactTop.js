import { ACTION_TYPES } from '../actionTypes';

const dataSanitization = data => {
  if (data) {
    const sanitizedData = data.map(({ id, url, fontawesome_icons }) => {
      return {
        id,
        url,
        fontawesome_icons
      };
    });
    return sanitizedData;
  } else {
    return data;
  }
};
export const setContactTopDataActionCreator = data => {
  return {
    type: ACTION_TYPES.CONTACT_TOP.SET_DATA,
    payload: dataSanitization(data)
  };
};

export const setContactTopLoadingActionCreator = loading => {
  return {
    type: ACTION_TYPES.CONTACT_TOP.SET_LOADING,
    payload: loading
  };
};

export const setContactTopErrorActionCreator = errorState => {
  return {
    type: ACTION_TYPES.CONTACT_TOP.SET_ERROR,
    payload: errorState
  };
};
