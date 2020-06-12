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

export const setMainContactData = data => {
  return {
    type: ACTION_TYPES.MAIN_CONTACT.SET_DATA,
    payload: dataSanitization(data)
  };
};

export const setMainContactLoading = loading => {
  return {
    type: ACTION_TYPES.MAIN_CONTACT.SET_LOADING,
    payload: loading
  };
};

export const setMainContactError = errorState => {
  return {
    type: ACTION_TYPES.MAIN_CONTACT.SET_ERROR,
    payload: errorState
  };
};
