import React from 'react';
import { Welcome } from '../../components/Welcome';
import { useSelector } from 'react-redux';

export const WelcomeContainer = () => {
  const { data, loading, error } = useSelector(store => store.welcome);
  return <Welcome data={data} loading={loading} error={error} />;
};
