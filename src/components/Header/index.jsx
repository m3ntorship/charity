import React from 'react';
import ContactTop from '../ContactTop';
import MainContact from '../MainContact';
import Logo from '../Logo';
import MainNavigation from '../MainNavigation';

const Header = () => (
  <header>
    <ContactTop />
    <section className="logo-section py-8">
      <div className="container py-2 flex items-center justify-between">
        <Logo />
        <MainContact />
      </div>
    </section>
    <section className="slider pt-0 bg-cover bg-center relative bg-c800 relative">
      <div className="overlay absolute h-full w-full">
        <div className="container h-full flex flex-col">
          <MainNavigation />

          <div className="header-slider h-full flex items-center justify-center">
            <div className="text text-center text-c000">
              <p className="text-lg italic">Make an Impact</p>
              <div className="main flex items-center justify-center">
                <img
                  src="assets/img/header-slider/plant-left.png"
                  alt="left-spike"
                />
                <p className="font-bold leading-none">
                  You Can Make <br />A
                  <span className="underline text-c300 font-hairline">
                    Difference
                  </span>
                </p>
                <img
                  src="assets/img/header-slider/plant-right.png"
                  alt="right-spike"
                />
              </div>
              <a className="btn-md bg-c200 inline-block mt-6" href="#a">
                View Causes
              </a>
            </div>
          </div>
        </div>

        <div className="arrows absolute w-full flex justify-between px-16">
          <button className="left-arrow rounded-full border-solid border-c000 border p-4 opacity-50">
            <img
              src="assets/img/header-slider/left-arrow-icon.png"
              alt="left-arrow-icon"
            />
          </button>
          <button className="right-arrow rounded-full border-solid border-c000 border p-4">
            <img
              src="assets/img/header-slider/right-arrow-icon.png"
              alt="right-arrow-icon"
            />
          </button>
        </div>
      </div>
    </section>
  </header>
);
export default Header;
