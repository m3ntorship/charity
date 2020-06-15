import React from 'react';
import { useSelector } from 'react-redux';
import HeaderNavigation from '../../components/HeaderNavigation';

const HeaderNavigationContainer = () => {
  const {
    data: pagesData,
    loading: pagesLoading,
    dataError: pagesError
  } = useSelector(({ pages }) => pages);
  const {
    data: contactData,
    loading: contactLoading,
    error: contactError
  } = useSelector(store => store.mainContact);

  return (
    <HeaderNavigation
      pagesData={pagesData}
      pagesLoading={pagesLoading}
      pagesError={pagesError}
      contactData={contactData}
      contactLoading={contactLoading}
      contactError={contactError}
    />
  );
};

export default HeaderNavigationContainer;
