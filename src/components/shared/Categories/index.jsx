import React, { useState } from 'react';
import { useCharityAPI } from '../../../clients';
import './style.scss';
import { useSpring, animated } from 'react-spring';
import useMedia from '../../../Helpers/useMedia';
import { Loader, ButtonLoader, CategoryLoader, NumberLoader } from './myLoader';
import { Widget } from '../Widget';

const Category = ({ title, number }) => {
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

const CategoriesWidget = ({ data, loading, error }) => {
  const isMobile = useMedia(['(min-width: 768px)'], [false], true);

  if (error) {
    return "Couldn't fetch data";
  }

  let mobileLoaders = [];
  for (let i = 0; i < 3; i++) {
    mobileLoaders.push(
      <div className=" flex justify-between items-center w-full px-10">
        <div className=" flex py-5">
          <CategoryLoader />
        </div>
        <div className="flex">
          <NumberLoader />
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
    const { title, categories } = data;
    return (
      <Widget title={title}>
        <div className="pt-5 pb-10 ">
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

export { CategoriesWidget, CategoriesWidgetContainer };
