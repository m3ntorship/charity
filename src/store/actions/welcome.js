import { ACTION_TYPES } from '../actionTypes';

const dataSanitization = data => {
  if (data) {
    const {
      id,
      Heading: { heading_primary, heading_secondary },
      link : {text:linkText, url :linkUrl},
      description,
      image :{url:imageUrl},
      WelcomeActions,
    } = data;
    const sanitizedelcomActions = WelcomeActions.map(({title,description,id})=>{
        return {
          title,
          description,
          id
        }
    })
    return {
        id,
        heading_primary,
        heading_secondary,
        linkText,
        linkUrl,
        description,
        imageUrl,
        welcome_cards:sanitizedelcomActions
    };
  }
  else {
    return data
  }
};


export const setWelcomeData = data => {
  return {
    type: ACTION_TYPES.WELCOME.SET_DATA,
    payload: dataSanitization(data)
  };
};

export const setWelcomeLoading = loading => {
  return {
    type: ACTION_TYPES.WELCOME.SET_LOADING,
    payload: loading
  };
};

export const setWelcomeError = errorState => {
  return {
    type: ACTION_TYPES.WELCOME.SET_ERROR,
    payload: errorState
  };
};
