import React, { useState } from 'react';
import './style.scss';
import { useSpring, animated } from 'react-spring';
import useMedia from '../../Helpers/useMedia';

const Widget = ({ children }) => {
  const isMobile = useMedia(['(min-width: 768px)'], [false], true);
  const [toggle, setToggle] = useState(isMobile ? false : true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const collapse = useSpring({
    transform: toggle ? 'translateY(-100%)' : 'translateY(0%)',
    opacity: toggle ? 0 : 1
  });

  return (
    <div className="widget px-8 pt-10 w-full ">
      <div className="widget-bar flex justify-between relative">
        <h4 className="widget__title font-bold leading-none mb-5">
          Find an Event
        </h4>
        <button
          onClick={handleToggle}
          className="text-lg bg-c400 px-4 py-2 text-c000"
        >
          Toggle
        </button>
      </div>
      <div className="widget__line bg-c400 w-10"></div>
      <animated.div style={collapse} className=" widget__container absolute">
        {children}
      </animated.div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="searchbar relative text-sm ">
      <input
        type="text"
        placeholder="Search ..."
        className="searchbar__input bg-c400 text-c000 py-4 px-5 pr-12 w-full"
      />
      <i class=" searchbar__icon fas fa-search absolute right-0"></i>
    </div>
  );
};

const FindEventWidget = () => {
  return (
    <Widget>
      <div className="searchbar__container mt-5 pb-10 ">
        <SearchBar />
      </div>
    </Widget>
  );
};

export { Widget, FindEventWidget };
