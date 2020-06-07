import React from 'react';
import { useSelector } from 'react-redux';
import { WorkStyle } from '../../components/WorkStyle';

export const WorkStyleContainer = () => {
  const { data, error, loading } = useSelector(store => store.workStyle);
  return <WorkStyle data={data} loading={loading} error={error} />;
};
