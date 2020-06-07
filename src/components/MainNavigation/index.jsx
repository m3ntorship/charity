import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useMedia from '../../Helpers/useMedia';
import NavigationLink from '../NavigationLink';
import { LogoContainer } from '../../containers/layout/logo';
import Loader from './ContentLoader';
import './style.css';

const MainNavigationContainer = () => {
  const { data, loading, dataError } = useSelector(({pages}) => pages);

  return <MainNavigation data={data} loading={loading} error={dataError} />;
};
const MainNavigation = ({ data, loading, error }) => {
  const [isOpen, setIsopen] = useState('');

  const isMobile = useMedia(['(min-width: 768px)'], [false], true);
  const toggleOpenNavClass = () => {
    if (isOpen) {
      return 'open-nav';
    }
    return '';
  };
  if (error) {
    return <div>We can not fetch data</div>;
  }
  if (loading) {
    if (isMobile) {
      return '';
    }
    return <Loader style={{ width: '100%', heigh: 'auto' }} />;
  }
  if (data) {
    return (
      <nav className={`${toggleOpenNavClass()} flex  justify-center`}>
        <div className=" navbar__inner flex flex-col md:block top-0 z-10 container">
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
              {data.filter(item => item.show_in_navigation).map(item => {
                let {link: { text, url }} = item;
                return <NavigationLink title={text} url={url} key={text} />;
              })}
            </ul>
            <button
              className="start__donantion__btn  btn btn- bg-c300 flex-1"
              // href={url}
              href="/startdonating"
            >
              {/* {text} */}
              Start Donating
            </button>
          </div>
        </div>
      </nav>
    );
  }
};

export { MainNavigationContainer, MainNavigation };
