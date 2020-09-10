import { ACTION_TYPES } from '../actionTypes';

const sanitizePages = data => {
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
        let [secBanDesc, btnText, btnUrl] = [null, null, null];
        if (secondary_banner) {
          secBanDesc = secondary_banner.description;
          btnText = secondary_banner.banner_button.text;
          btnUrl = secondary_banner.banner_button.url;
        }
        const sanitizeImgBg = image_bg.map(({ url: image_bg_url }) => {
          return { image_bg_url };
        });
        return {
          show_in_navigation,
          link,
          name,
          sanitizeImgBg,
          title,
          sub_title,
          pageName,
          secBanDesc,
          btnText,
          btnUrl
        };
      }
    );
    return sanitizeData;
  } else {
    return data;
  }
};

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
