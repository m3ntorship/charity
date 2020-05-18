import React from 'react';
import { MainContactContainer } from '../MainContact';
import { ContactTopContainer } from '../ContactTop';
import { LogoContainer } from '../Logo';
import HeaderCarousel from '../HeaderCarousel';

const Header = () => (
  <header>
    <ContactTopContainer haveBtn={false} />
    <section className="logo-section py-8 hidden md:block">
      <div className="container py-2 flex items-center justify-between">
        <LogoContainer />
        <MainContactContainer />
      </div>
    </section>
    <HeaderCarousel />
  </header>
);
export default Header;
