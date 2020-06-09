import React from 'react';
import { FeaturedBanner } from '../../components/FeaturedBanner';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setFeaturedBannerData,
  setFeaturedBannerLoading,
  setFeaturedBannerError
} from '../../store/actions';


// featuredBannerStateToProps;
const mapStateToProps = data => {
  return { featuredBanner: data.featuredBanner };
  
}

// featuredBannerDispatchToProps
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { setFeaturedBannerData, setFeaturedBannerLoading, setFeaturedBannerError },
    dispatch
  );
};


const FeaturedBannerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedBanner);

export default FeaturedBannerContainer;



