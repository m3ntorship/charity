import React from 'react';
import { useCharityAPI } from '../../clients';
import './styles.scss';

const Logo = () => {
  const { data, loading, dataError } = useCharityAPI('/logo');

  if (loading) {
    return 'loading .. ';
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
