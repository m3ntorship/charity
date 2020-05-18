import React, { useState } from 'react';
import useMedia from '../../Helpers/useMedia';
import { useCharityAPI } from '../../clients';
import NavigationLink from '../NavigationLink';
import { LogoContainer } from '../Logo';
import Loader from './ContentLoader';
import './style.css';

const MainNavigation = () => {
  const { data, loading, dataError } = useCharityAPI('/main-navigation');
  const [isOpen, setIsopen] = useState('');

  const isMobile = useMedia(['(min-width: 768px)'], [false], true);
  const toggleOpenNavClass = () => {
    if (isOpen) {
      return 'open-nav';
    }
    return '';
  };

  if (loading) {
    if (isMobile) {
      return '';
    }
    return <Loader style={{ width: '100%', heigh: 'auto' }} />;
  }
  if (dataError) {
    return <div>We can not fetch data</div>;
  } else {
    let {
      Links,
      secondary_link: { url, text }
    } = data;
    return (
      <nav className={`${toggleOpenNavClass()} flex  justify-center`}>
        <div className=" navbar__inner flex flex-col md:block absolute top-0 z-10 container">
          <div className="md:hidden navbar__logo__wrapper flex justify-between items-center bg-c200 ">
            <LogoContainer />
            <button
              onClick={evt => {
                evt.preventDefault();
                setIsopen(!isOpen);
              }}
              className="md:hidden menu_toggler text-c000 p-4"
            >
              {isOpen ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </button>
          </div>
          <div className="menu-navbar-wrapper flex flex-col md:flex-row justify-between">
            <ul className="nav__ul mr-0 sm:w-full   flex flex-col  md:items-center md:flex-row md:justify-around bg-c200 md:mr-2  text-c000">
              {Links.map(link => (
                <NavigationLink
                  title={link.text}
                  url={link.url}
                  key={link.id}
                />
              ))}
            </ul>
            <button
              className="start__donantion__btn  btn btn- bg-c300"
              href={url}
            >
              {text}
            </button>
          </div>
        </div>
      </nav>
    );
  }
};

export default MainNavigation;
