import React from 'react';
import { useSelector } from 'react-redux';
import { FeaturedBanner } from '../../components/FeaturedBanner';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setFeaturedBannerData,
  setFeaturedBannerLoading,
  setFeaturedBannerError
} from '../../store/actions';

// export const FeaturedBannerContainer = ({ data, loading, dataError }) => {
//          const { data, loading, dataError } = useSelector(store => store.featuredBanner);
//          return (
//            <FeaturedBanner data={data} loading={loading} error={dataError} />
//          );
//        };

// need to sanitize data that passed into mapStateToProps fn....
// then what you will do to pase it to be rendered???

// featuredBannerStateToProps;
const mapStateToProps = data => {
  if (data) {
    const {
      text_primary,
      text_complementary,
      button_text,
      button_url,
      image_top: { url: image_url },
      image_background: { url: image_background_url }
    } = data;
    return {
      text_primary,
      text_complementary,
      button_text,
      button_url,
      image_url,
      image_background_url
    };
  } else {
    return data;
  }
};




// featuredBannerDispatchToProps
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { setFeaturedBannerData, setFeaturedBannerLoading, setFeaturedBannerError },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedBanner);

