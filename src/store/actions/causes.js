import { ACTION_TYPES } from '../actionTypes';


const dataSanitization = data => {
  if (data) {
    const {
      id,
      causes,
      causes_heading: { heading_primary, heading_secondary }
    } = data;
    const sanitizedCauses = causes.map(
      ({ title, description, raised, goal, image: { url: imgURL }, id,is_featured }) => {
        return {
          title,
          description,
          raised,
          goal,
          imgURL,
          id,
          is_featured
        };
      }
    );
    return {
      id,
      causes: sanitizedCauses,
      causes_heading: {
        heading_primary,
        heading_secondary
      }
    };
  }
  else {
    return data
  }
};
export const setCausesData = data => {
  return {
    type: ACTION_TYPES.CAUSES.SET_DATA,
    payload: dataSanitization (data)
  };
};

export const setCausesLoading = loading => {
  return {
    type: ACTION_TYPES.CAUSES.SET_LOADING,
    payload: loading
  };
};

export const setCausesError = errorState => {
  return {
    type: ACTION_TYPES.CAUSES.SET_ERROR,
    payload: errorState
  };
};
