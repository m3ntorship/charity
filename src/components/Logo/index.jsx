import React from 'react';
import { useCharityAPI } from '../../clients';
import './styles.scss';
import Loader from './ContentLoader/Index';

const Logo = () => {
  const { data, loading, dataError } = useCharityAPI('/logo');

  if (loading) {
    return <Loader style={{ width: '100%', height: 'auto' }} />;
  }

  if (dataError) {
    return (
      <div className="error">
        Couldn't fetch logo from backbackend, please contact the developer
      </div>
    );
  }

  return (
    <div className="logo">
      <img src={data.logo.url} alt="logo" />
    </div>
  );
};

export default Logo;
