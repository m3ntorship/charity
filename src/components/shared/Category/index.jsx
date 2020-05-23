import { useSpring, animated } from 'react-spring';
import React, { useState } from 'react';

export const Category = ({ title, number }) => {
  const [isHover, setHover] = useState();
  const hovered = useSpring({
    transform: isHover ? 'translateX(15px)' : ' translateX(0px)'
  });
  return (
    <animated.a
      href="/#"
      className="category text-c600 py-4 flex justify-between items-center hover:text-c400"
      style={hovered}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <p className="leading-none">{title}</p>
      <span>{number}</span>
    </animated.a>
  );
};
