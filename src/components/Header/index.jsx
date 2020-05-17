import React from 'react';
import ContactTop from '../ContactTop';
import {MainContactContainer} from '../MainContact';
import Logo from '../Logo';
import HeaderCarousel from '../HeaderCarousel';

const Header = () => (
  <header>
    <ContactTop />
    <section className="logo-section py-8 hidden md:block">
      <div className="container py-2 flex items-center justify-between">
        <Logo />
        <MainContactContainer />
      </div>
    </section>
    <HeaderCarousel />
  </header>
);
export default Header;
