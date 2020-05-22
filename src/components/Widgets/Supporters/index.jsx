import React, { useState } from 'react';
import { useCharityAPI } from '../../../clients';
import './style.scss';
import { useSpring, animated } from 'react-spring';
import useMedia from '../../../Helpers/useMedia';
import { Loader, ButtonLoader, SupporterLoader } from './myLoader';
import { Widget } from '../Widget';

const Supporter = ({ data, timeElapsed }) => {
  const [isHover, setHover] = useState();
  const hovered = useSpring({
    transform: isHover ? 'translateX(15px)' : ' translateX(0px)'
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
      className="supporter flex flex-col"
      style={hovered}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <article className="flex">
        <div className="supporter__image-container">
          <img
            className="supporter__image w-full h-full"
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

const SupportersWidget = ({ data, loading, error }) => {
  const isMobile = useMedia(['(min-width: 768px)'], [false], true);
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

  if (error) {
    return "Couldn't fetch data";
  }

  let mobileLoaders = [];
  for (let i = 0; i < 3; i++) {
    mobileLoaders.push(
      <div className=" flex justify-between items-center w-full px-10">
        <div className=" flex py-5 w-full">
          <SupporterLoader />
        </div>
      </div>
    );
  }
  if (loading) {
    return (
      <div className=" w-full h-full flex flex-col">
        <div className="px-10 flex w-full">
          <div className=" flex justify-between items-center w-full">
            <div className=" flex py-5">
              <Loader />
            </div>
            <div className="flex">
              <ButtonLoader />
            </div>
          </div>
        </div>
        {!isMobile && mobileLoaders}
      </div>
    );
  }
  if (data) {
    const { title, supporters } = data;
    return (
      <Widget title={title}>
        <div className="searchbar__container pt-5 pb-10 ">
          {supporters.map(supporterData => {
            return <Supporter data={supporterData} timeElapsed={timeElapsed} />;
          })}
        </div>
      </Widget>
    );
  }
};

const SupportersWidgetContainer = () => {
  const { data, loading, dataError: error } = useCharityAPI('/supporters');
  return <SupportersWidget data={data} loading={loading} error={error} />;
};

export { SupportersWidget, SupportersWidgetContainer };
