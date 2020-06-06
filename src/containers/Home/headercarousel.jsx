import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderCarousel } from '../../components/HeaderCarousel';

export const HeaderCarouselContainer = () => {
  const { data, error, loading } = useSelector(store => store.testimonials);
  return <HeaderCarousel data={data} loading={loading} error={error} />;
};
