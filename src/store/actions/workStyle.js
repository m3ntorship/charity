import { ACTION_TYPES } from '../actionTypes';

const dataSanitization = data => {
  if (data) {
    const { title_primary, title_complementary, Cards } = data;
    const sanitizedCards = Cards.map(card => {
      return {
        description: card.description,
        Title: card.Title,
        image_main: { url: card.image_main.url },
        image_main_hover: { url: card.image_main_hover.url },
        color: card.color
      };
    });
    return {
      title_primary,
      title_complementary,
      Cards: sanitizedCards
    };
  }
};

export const setWorkStyleData = data => {
  return {
    type: ACTION_TYPES.WORKSTYLE.SET_DATA,
    payload: dataSanitization(data)
  };
};

export const setWorkStyleLoading = loading => {
  return {
    type: ACTION_TYPES.WORKSTYLE.SET_LOADING,
    payload: loading
  };
};

export const setWorkStyleError = errorState => {
  return {
    type: ACTION_TYPES.WORKSTYLE.SET_ERROR,
    payload: errorState
  };
};
