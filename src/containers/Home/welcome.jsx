import React from 'react';
import { useCharityAPI } from '../../clients';
import { Welcome } from '../../components/Welcome';

export const WelcomeContainer = () => {
  const { data, loading, dataError } = useCharityAPI('/welcome-section');
  return <Welcome data={data} loading={loading} error={dataError} />;
};
