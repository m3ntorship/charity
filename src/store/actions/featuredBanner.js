import { ACTION_TYPES } from '../actionTypes';

// remember to rename actions as follows:
// setFeaturedBannerDataActionCreator
//  setFeaturedBannerLoadingActionCreator,
// setFeaturedBannerErrorActionCreator

export const setFeaturedBannerData = data => {
  return {
    type: ACTION_TYPES.FEATURED_BANNER.SET_DATA,
    payload: data
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
