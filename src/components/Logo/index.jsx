import React from 'react';
import { useCharityAPI } from '../../clients';
import './styles.scss';
import Loader from './ContentLoader/Index';

const LogoContainer = () => {
  const { data, loading, dataError } = useCharityAPI('/logo');
  return (
     <Logo 
        data={data} 
        loading={loading} 
        error={dataError}
      />
  ); 
};

const Logo = (data, loading, dataError) => {

  if (loading) {
    return (
      <div className="flex justify-center items-center mr-auto">
        <Loader />
      </div>
    );
  }
  else if (dataError) {
    return (
      <div className="error">
        Couldn't fetch logo from backbackend, please contact the developer
      </div>
    );
  }
  
  else {
     return (
       <div className="logo">
         <img src={data.logo.url} alt="logo" />
       </div>
     );
  }
 
};

export { LogoContainer, Logo };
