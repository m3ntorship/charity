import React from 'react';
import { useSelector } from 'react-redux';
import { FeaturedBanner } from '../../components/FeaturedBanner';


export const FeaturedBannerContainer = () => {
  const { data, loading, dataError } = useSelector(store => store.featuredBanner);
  return <FeaturedBanner data={data} loading={loading} error={dataError} />;
};
