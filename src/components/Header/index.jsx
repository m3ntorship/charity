import React from 'react';
import { ContactTopContainer } from '../../containers/layout/contactTop';
import HeaderNavigationContainer from '../../containers/layout/HeaderNavigation';
const Header = () => (
  <header>
    <ContactTopContainer haveBtn={true} />
    <HeaderNavigationContainer />
  </header>
);
export default Header;
