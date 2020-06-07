import React from 'react';
import { useSelector } from 'react-redux';
import {Footer} from '../../components/Footer'



export const FooterContainer = () => {
  const { data, loading, dataError } = useSelector(store => store.footer);
  return <Footer data={data} loading={loading} error={dataError} />;
};
