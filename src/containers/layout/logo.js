import React from 'react';
import { useSelector } from 'react-redux';
import { Logo } from '../../components/Logo';



export const LogoContainer = () => {
  const { data, loading, dataError } = useSelector(store => store.logo);
  return <Logo data={data} loading={loading} error={dataError} />;
};


