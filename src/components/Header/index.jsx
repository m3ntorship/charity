import React from 'react';
import { MainContactContainer } from '../../containers/layout/mainContact';
import { ContactTopContainer } from '../ContactTop';
import { LogoContainer } from '../../containers/layout/logo';
import { MainNavigationContainer } from '../MainNavigation';
const Header = () => (
  <header>
    <ContactTopContainer haveBtn={true} />
    <section className="logo-section py-8 hidden md:block">
      <div className="container py-2 flex items-center justify-between">
        <LogoContainer />
        <MainContactContainer />
      </div>
    </section>
    <div className="container mainnav__container ">
      <MainNavigationContainer />
    </div>
  </header>
);
export default Header;
