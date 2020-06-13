import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { timeElapsed } from '../../../Helpers/Helpers';
import './style.scss';

export const ListItemWithThumbnail = ({ data }) => {
  const [isHover, setHover] = useState();

  const hovered = useSpring({
    transform: isHover ? 'translateX(15px)' : 'translateX(0px)'
  });
  const { linkUrl, createdAt, imageURL, alternativeText, description } = data;
  return (
    <animated.a
      href={linkUrl}
      className="listItem flex flex-col"
      style={hovered}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <article className="flex">
        <div className="listItem__image-container w-1/3">
          <img
            className="listItem__image w-full h-full"
            src={imageURL}
            alt={alternativeText}
          />
        </div>
        <div className="pl-4 flex flex-col w-2/3">
          <p className="text-c200 text-sm leading-loose mb-1">
            {timeElapsed(createdAt)}
          </p>
          <p className="font-bold text-c100 leading-relaxed">{description}</p>
        </div>
      </article>
    </animated.a>
  );
};
