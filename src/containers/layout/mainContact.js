import React from 'react';
import { useSelector } from 'react-redux';
import { MainContact } from '../../components/MainContact';



export const MainContactContainer = () => {
  const { data, loading, dataError } = useSelector(store => store.mainContact);
  return <MainContact data={data} loading={loading} error={dataError} />;
};

