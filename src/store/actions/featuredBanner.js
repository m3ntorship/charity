import { ACTION_TYPES } from '../actionTypes';

// remember to rename actions as follows:
// setFeaturedBannerDataActionCreator
//  setFeaturedBannerLoadingActionCreator,
// setFeaturedBannerErrorActionCreator

const sanitizeBanner = (data) => {
  if(data){
    const {
      text_primary,
      text_complementary,
      button_text,
      button_url,
      image_background: { url: image_background_url},
      image_top: { url: image_url}
    } = data;
    return {
      text_primary,
      text_complementary,
      button_text,
      button_url,
      image_url,
      image_background_url
    };
  }
  else{
    return data
  }
}



export const setFeaturedBannerData = data => {
  return {
    type: ACTION_TYPES.FEATURED_BANNER.SET_DATA,
    payload: sanitizeBanner(data)
  };
};

export const setFeaturedBannerLoading = loading => {
  return {
    type: ACTION_TYPES.FEATURED_BANNER.SET_LOADING,
    payload: loading
  };
};

export const setFeaturedBannerError = errorState => {
  return {
    type: ACTION_TYPES.FEATURED_BANNER.SET_ERROR,
    payload: errorState
  };
};
