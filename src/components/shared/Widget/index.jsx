import React, { useState, useEffect } from 'react';
import './style.scss';
import { useSpring, animated } from 'react-spring';
import useMedia from '../../../Helpers/useMedia';
import { useMeasure } from 'react-use';

const Widget = ({ children, title }) => {
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
    <div className="widget w-full">
      <div className="px-10">
        <div
          onClick={() => setOpen(!isOpen)}
          className="widget__bar flex justify-between items-center"
        >
          <h4 className="widget__bar__title font-bold leading-none py-5">
            {title}
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
          className="widget__line bg-c400"
          style={expandBorder}
        ></animated.div>
      </div>
      <animated.div
        className=" widget__container overflow-hidden px-10"
        style={expand}
      >
        <div ref={ref}>{children}</div>
      </animated.div>
    </div>
  );
};

export { Widget };
