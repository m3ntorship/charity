import { ACTION_TYPES } from '../actionTypes';

const initialState = {
  data: null,
  loading: false,
  error: false
};
const dataSanitization = data => {
  if (null) {
    const {
      id,
      causes,
      causes_heading: { heading_primary, heading_secondary }
    } = data;
    const sanitizedCauses = causes.map(
      ({ title, description, raised, goal, image: { url: imgURL }, id }) => {
        return {
          title,
          description,
          raised,
          goal,
          imgURL,
          id
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
    return null
  }
};

export const causesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.CAUSES.SET_DATA:
      let sanitizeData = dataSanitization(payload);
      console.log(`value of sanitized data is ${sanitizeData}`)
      const newState = { ...state, data: sanitizeData };
      return newState;
    case ACTION_TYPES.CAUSES.SET_LOADING:
      return { ...state, loading: payload };
    case ACTION_TYPES.CAUSES.SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
