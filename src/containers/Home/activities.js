import React from 'react';
import { useSelector } from 'react-redux';
import { Activities } from '../../components/Activities';



export const ActivitiesContainer = () => {
  const { data, loading, dataError } = useSelector(store => store.activities); 
  return <Activities data={data} loading={loading} error={dataError} />;
};