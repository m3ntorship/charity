import React, { memo, useState, useEffect } from 'react';
import './style.scss';
import { useSpring, animated } from 'react-spring';
import useMedia from '../../Helpers/useMedia';
import { useMeasure } from 'react-use';

const Widget = memo(({ children }) => {
  const isMobile = useMedia(['(min-width: 768px)'], [false], true);
  const [isOpen, setOpen] = useState();
  const [contentHeight, setContentHeight] = useState('0px');
  const [ref, { height }] = useMeasure();
  const expand = useSpring({
    height: isOpen ? `${contentHeight}px` : '0px'
  });
  const expandBorder = useSpring({
    width: isOpen ? '10%' : '100%'
  });
  const spin = useSpring({
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
  });
  useEffect(() => {
    //sets initial openState
    setOpen(!isMobile);
    //Sets initial height
    setContentHeight(height);

    //Adds resize event listener
    window.addEventListener('resize', setContentHeight(height));

    // Clean-up
    return window.removeEventListener('resize', setContentHeight(height));
  }, [height, isMobile]);

  return (
    <div className="widget w-full h-full px-10">
      <div
        onClick={() => setOpen(!isOpen)}
        className="widget__bar flex justify-between items-center"
      >
        <h4 className="widget__bar__title font-bold leading-none py-5">
          Find an Event
        </h4>
        <animated.button
          style={spin}
          className="text-c400 flex items-center"
          onClick={() => setOpen(!isOpen)}
        >
          <i className="fas fa-chevron-down"></i>
        </animated.button>
      </div>
      <animated.div
        className="widget__line bg-c400 w-10"
        style={expandBorder}
      ></animated.div>
      <animated.div
        className=" widget__container overflow-hidden"
        style={expand}
      >
        <div ref={ref}>{children}</div>
      </animated.div>
    </div>
  );
});

const SearchBar = () => {
  return (
    <div className="searchbar relative text-sm ">
      <input
        type="text"
        placeholder="Search ..."
        className="searchbar__input bg-c400 text-c000 py-4 px-5 pr-12 w-full"
      />
      <i className=" searchbar__icon fas fa-search absolute right-0"></i>
    </div>
  );
};

const FindEventWidget = () => {
  return (
    <Widget>
      <div className="searchbar__container pt-5 pb-10 ">
        <SearchBar />
      </div>
    </Widget>
  );
};

export { Widget, FindEventWidget };
