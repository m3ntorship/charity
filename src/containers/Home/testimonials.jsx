import React from 'react';
import { useSelector } from 'react-redux';
import { Testimonials } from '../../components/Testimonials';

export const TestimonialsContainer = () => {
  const { data, error, loading } = useSelector(store => store.testimonials);
  return <Testimonials data={data} loading={loading} error={error} />;
};
