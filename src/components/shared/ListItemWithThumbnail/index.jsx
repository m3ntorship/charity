import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './style.scss';

export const ListItemWithThumbnail = ({ data }) => {
  const [isHover, setHover] = useState();
  const timeElapsed = dateCreated => {
    const dateCreatedStamp = Date.parse(dateCreated);
    const timeNow = Date.now();
    const millis = timeNow - dateCreatedStamp;
    const yearsElapsed = Math.floor(millis / (1000 * 60 * 60 * 24 * 364.25));
    const monthsElapsed =
      yearsElapsed === 0 ? Math.floor(millis / (1000 * 60 * 60 * 24 * 30)) : 0;
    const daysElapsed =
      monthsElapsed === 0 ? Math.floor(millis / (1000 * 60 * 60 * 24)) : 0;
    const hoursElapsed =
      daysElapsed === 0 ? Math.floor(millis / (1000 * 60 * 60)) : 0;

    if (yearsElapsed !== 0) {
      return `${yearsElapsed} Year${yearsElapsed === 1 ? ' ' : 's '}Ago`;
    } else if (monthsElapsed !== 0) {
      return `${monthsElapsed} Month${monthsElapsed === 1 ? ' ' : 's '}Ago`;
    } else if (daysElapsed !== 0) {
      return `${daysElapsed} Day${daysElapsed === 1 ? ' ' : 's '}Ago`;
    } else if (hoursElapsed >= 0 && hoursElapsed < 1) {
      return `Less Than An Hour Ago`;
    } else if (hoursElapsed !== 0) {
      return `${hoursElapsed} Hour${hoursElapsed === 1 ? ' ' : 's '}Ago`;
    }
  };
  const hovered = useSpring({
    transform: isHover ? 'translateX(15px)' : 'translateX(0px)'
  });
  const {
    link: { url: linkUrl },
    id,
    createdAt,
    image: { url: imgUrl, alternativeText },
    description
  } = data;
  return (
    <animated.a
      href={linkUrl}
      key={id}
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
        <div className="listItem__image-container">
          <img
            className="listItem__image w-full h-full"
            src={imgUrl}
            alt={alternativeText}
          />
        </div>
        <div className="pl-4 flex flex-col">
          <p className="text-c200 text-sm leading-loose mb-1">
            {timeElapsed(createdAt)}
          </p>
          <p className="font-bold text-c100 leading-relaxed">{description}</p>
        </div>
      </article>
    </animated.a>
  );
};
