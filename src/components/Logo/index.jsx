import React from 'react';
import './styles.scss';
import Loader from './ContentLoader/Index';



const Logo = ({ data, loading, error }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center mr-auto">
        <Loader />
      </div>
    );
  }
  if (error) {
    return (
      <div className="error">
        Couldn't fetch logo from backbackend, please contact the developer
      </div>
    );
  }
  if (data) {
    const {
      logo: { url: logo_url }
    } = data;
    return (
      <div className="logo">
        <img src={logo_url} alt="logo" />
      </div>
    );
  }
};

export { Logo };
