import React from 'react';
import { FeaturedBanner } from '../../components/FeaturedBanner';
import { connect } from 'react-redux';



const mapStateToProps = ({ featuredBanner: { data, dataError, loading } }) => {
  return {
    data,
    loading,
    dataError
  };
};
const FeaturedBannerContainer = ({ data, loading, dataError }) => {
  
  return <FeaturedBanner data={data} loading={loading} error={dataError} />;
};




export default connect(mapStateToProps)(FeaturedBannerContainer);


