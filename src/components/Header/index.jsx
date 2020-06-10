import React from 'react';
// import { MainContactContainer } from '../MainContact';
import { ContactTopContainer } from '../ContactTop';
import HeaderNavigationContainer from '../../containers/layout/HeaderNavigation';
const Header = () => (
  <header>
    <ContactTopContainer haveBtn={true} />
    <HeaderNavigationContainer />
  </header>
);
export default Header;
