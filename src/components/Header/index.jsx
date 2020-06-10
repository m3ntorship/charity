import React from 'react';
// import { MainContactContainer } from '../MainContact';
import { ContactTopContainer } from '../ContactTop';
// import { LogoContainer } from '../../containers/layout/logo';
// import { MainNavigationContainer } from '../MainNavigation';
import HeaderNavigationContainer from '../../containers/layout/HeaderNavigation'
const Header = () => (
  <header>
    <ContactTopContainer haveBtn={true} />
    {/* <section className="logo-section py-8 hidden md:block">
      <div className="container py-2 flex items-center justify-between">
        <LogoContainer />
        <MainContactContainer />
      </div>
    </section>
    <div className="container mainnav__container ">
      <MainNavigationContainer />
    </div> */}
    <HeaderNavigationContainer />
  </header>
);
export default Header;
