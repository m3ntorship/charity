import React from 'react';
import { useSelector } from 'react-redux';
import { Numbers } from '../../components/Numbers';

export const NumbersContainer = () => {
  const { data, error, loading } = useSelector(store => store.numbers);
  return <Numbers data={data} error={error} loading={loading} />;
};
