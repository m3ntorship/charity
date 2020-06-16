import { ACTION_TYPES } from '../actionTypes';


const sanitizePages = data => {
  console.log(data);
  if (data) {
    const sanitizeData = data.map(
      ({
        show_in_navigation,
        name,
        Banner: { title, sub_title, image_bg },
        name: pageName,
        link,
        secondary_banner
      }) => {
        const sanitizeImgBg = image_bg.map(({ url: image_bg_url}) => {
          return { image_bg_url };
        })
        return {
          show_in_navigation,
          link,
          name,
          sanitizeImgBg,
          title,
          sub_title,
          pageName,
          secondary_banner
        };
      }
    );
    return sanitizeData;
  }
  else {
    return data;
  }
}





export const setPagesDataActionCreator = data => {
  return {
    type: ACTION_TYPES.PAGES.SET_DATA,
    payload: sanitizePages(data)
  };
};

export const setPagesLoadingActionCreator = loading => {
  return {
    type: ACTION_TYPES.PAGES.SET_LOADING,
    payload: loading
  };
};

export const setPagesErrorActionCreator = errorState => {
  return {
    type: ACTION_TYPES.PAGES.SET_ERROR,
    payload: errorState
  };
};
