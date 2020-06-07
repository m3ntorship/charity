import { ACTION_TYPES } from '../actionTypes';

const dataSanitization = data => {
  if (data) {
    return data.map(contact => {
      return {
        _id: contact._id,
        title: contact.title,
        url: contact.url,
        sub_title: contact.sub_title,
        icon: { url: contact.icon.url, name: contact.icon.name }
      };
    });
  }
};

export const setContactInfoData = data => {
  return {
    type: ACTION_TYPES.CONTACTINFO.SET_DATA,
    payload: dataSanitization(data)
  };
};

export const setContactInfoLoading = loading => {
  return {
    type: ACTION_TYPES.CONTACTINFO.SET_LOADING,
    payload: loading
  };
};

export const setContactInfoError = errorState => {
  return {
    type: ACTION_TYPES.CONTACTINFO.SET_ERROR,
    payload: errorState
  };
};
