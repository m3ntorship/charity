import React from 'react';
// import ContactTop from '../ContactTop';
import { ContactTopContainer } from '../ContactTop';
import MainContact from '../MainContact';
import Logo from '../Logo';
import HeaderCarousel from '../HeaderCarousel';

const Header = () => (
  <header>
    <ContactTopContainer haveBtn={false} />
    <section className="logo-section py-8 hidden md:block">
      <div className="container py-2 flex items-center justify-between">
        <Logo />
        <MainContact />
      </div>
    </section>
    <HeaderCarousel />
  </header>
);
export default Header;
