import React, { useState, useEffect } from 'react';
import { useCharityAPI } from '../../clients';
import './style.scss';
import { useSpring, animated } from 'react-spring';
import useMedia from '../../Helpers/useMedia';
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
    <div className="widget w-full h-full px-10">
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
};

//=============================================================================//

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
    <Widget title="Find an event">
      <div className="searchbar__container pt-5 pb-10 ">
        <SearchBar />
      </div>
    </Widget>
  );
};

//=============================================================================//

const Category = ({ title, number }) => {
  return (
    <div className="category text-c600 py-4 flex justify-between items-center">
      <p className="leading-none">{title}</p>
      <span>{number}</span>
    </div>
  );
};

const CategoriesWidget = ({ data, loading, error }) => {
  if (error) {
    return "Couldn't fetch data";
  }
  if (loading) {
    return 'Loaaaaading';
  }
  if (data) {
    const { title, categories } = data;
    return (
      <Widget title={title}>
        <div className="searchbar__container pt-5 pb-10 ">
          {categories.map(category => {
            const { id, title, number } = category;
            return <Category key={id} title={title} number={number} />;
          })}
        </div>
      </Widget>
    );
  }
};

const CategoriesWidgetContainer = () => {
  const { data, loading, dataError: error } = useCharityAPI('/categories');
  return <CategoriesWidget data={data} loading={loading} error={error} />;
};

// ==========================================================================//

const Supporter = ({ data, timeElapsed }) => {
  const {
    link: { url: linkUrl },
    id,
    createdAt,
    image: { url: imgUrl, alternativeText },
    description
  } = data;
  return (
    <a href={linkUrl} key={id} className="supporter flex flex-col">
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
    </a>
  );
};

const SupportersWidget = ({ data, loading, error }) => {
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
  if (loading) {
    return 'Loaaaaading';
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

export {
  Widget,
  FindEventWidget,
  CategoriesWidget,
  CategoriesWidgetContainer,
  SupportersWidget,
  SupportersWidgetContainer
};
