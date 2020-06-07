import React from 'react';
import { useSelector } from 'react-redux';
import { Causes } from '../../components/Causes';

export const CausesContainer = () => {
  const { data, error, loading } = useSelector(store => store.causes);
  return <Causes data={data} error={error} loading={loading} />;
};
